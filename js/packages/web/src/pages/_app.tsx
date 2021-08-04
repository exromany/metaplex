import type { AppContext, AppProps } from 'next/app';
import NextApp from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import '../styles/index.less';
import { preloadMeta } from '../contexts/meta/preloadMeta';

const PageProviders = dynamic(() => import('../views/PageProviders'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  const { accounts } = pageProps;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Metaplex NFT Marketplace</title>
      </Head>
      <div id="root">
        <PageProviders accounts={accounts}>
          <Component {...pageProps} />
        </PageProviders>
      </div>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);

  if (!appContext.ctx.req?.httpVersion) {
    return appProps;
  }

  const accounts = await preloadMeta();

  return { ...appProps, pageProps: { ...appProps.pageProps, accounts } };
};
