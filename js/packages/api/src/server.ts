import { ApolloServer } from 'apollo-server';
import { ExpressContext } from 'apollo-server-express';
import { makeSchema } from 'nexus';
import { MetaplexApiDataSource } from './api';
import * as types from './schema';
import path from 'path';
import { performance } from 'perf_hooks';

const DIRNAME = __dirname.replace(/\/dist$/, '/src');

async function startApolloServer() {
  const api = new MetaplexApiDataSource();
  const schema = makeSchema({
    types,
    outputs: {
      schema: path.join(DIRNAME, '/generated/schema.graphql'),
      typegen: path.join(DIRNAME, '/generated/typings.ts'),
    },
    formatTypegen: (content, type) => {
      if (type === 'types') {
        content = `/* eslint-disable */ \n ${content}`;
      }
      return require('prettier').format(content, {
        arrowParens: 'avoid',
        semi: true,
        singleQuote: true,
        trailingComma: 'all',
        parser: type === 'types' ? 'typescript' : 'graphql',
      });
    },
    sourceTypes: {
      modules: [
        {
          module: path.join(DIRNAME, 'sourceTypes.ts'),
          alias: 'common',
        },
      ],
      mapping: {
        Artwork: 'common.Artwork',
        Creator: 'common.Creator',
        Auction: 'common.Auction',
        AuctionManager: 'common.AuctionManager',
      },
    },
    contextType: {
      module: path.join(DIRNAME, 'context.ts'),
      export: 'Context',
    },
    features: {
      abstractTypeStrategies: {
        resolveType: true,
      },
    },
  });

  const dataSources = () => ({
    api,
  });

  const context = ({ req }: ExpressContext) => {
    const network = req.headers.network;
    return { network };
  };

  const server = new ApolloServer({ schema, dataSources, context });
  const { url } = await server.listen();
  console.log(`🚀 Server ready at ${url}`);

  console.log('🌋 Start warm up data');
  const start = performance.now();
  api.preload().then(() => {
    const end = performance.now();
    console.log(`🌋 Finish warm up data ${((end - start) / 1000).toFixed(0)}s`);
  });
}

startApolloServer();
