import { parseChunked } from '@discoveryjs/json-ext';
import {
  Commitment,
  Connection as OrigConnecton,
  ConnectionConfig,
} from '@solana/web3.js';
import fetch from 'cross-fetch';
import RpcClient from 'jayson/lib/client/browser';

type RpcRequest = (methodName: string, args: Array<any>) => Promise<any>;

export class Connection extends OrigConnecton {
  constructor(
    endpoint: string,
    commitmentOrConfig?: Commitment | ConnectionConfig,
  ) {
    super(endpoint, commitmentOrConfig);

    const client = createRpcClient(endpoint);
    (this as any)._rpcRequest = createRpcRequest(client);
  }
}

function createRpcClient(url: string) {
  const clientBrowser = new RpcClient(async (request, callback) => {
    const options = {
      method: 'POST',
      body: request,
      headers: Object.assign(
        {
          'Content-Type': 'application/json',
        },
        {},
      ),
    };

    try {
      let too_many_requests_retries = 5;
      let res: Response;
      let waitTime = 500;
      for (;;) {
        res = await fetch(url, options);

        if (res.status !== 429 /* Too many requests */) {
          break;
        }
        too_many_requests_retries -= 1;
        if (too_many_requests_retries === 0) {
          break;
        }
        console.log(
          `Server responded with ${res.status} ${res.statusText}.  Retrying after ${waitTime}ms delay...`,
        );
        await sleep(waitTime);
        waitTime *= 2;
      }

      const buffer = await res.arrayBuffer();
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      const json = await getJson(buffer);
      if (!json) {
        throw new Error(`${res.status} ${res.statusText}: wrong response`);
      }
      callback(null, json);
    } catch (err) {
      callback(err as any);
    }
  }, {});

  // patch clientBrowser because we move to client ready object
  (clientBrowser as any)._parseResponse = function (
    err: Error,
    responseObject: any,
    callback: (err?: Error, data?: any) => void,
  ) {
    if (err) {
      callback(err);
      return;
    }
    return callback(undefined, responseObject);
  };
  return clientBrowser;
}

function createRpcRequest(client: RpcClient): RpcRequest {
  return (method, args) => {
    return new Promise((resolve, reject) => {
      client.request(method, args, (err: any, response: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(response);
      });
    });
  };
}

function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getJson = async (arrayBuffer: ArrayBuffer) => {
  const chunkEmitter = function* load() {
    const buffer = new Uint8Array(arrayBuffer);
    const step = 1e8; // 100mb
    let start = 0;
    let end = step;
    while (start < buffer.byteLength) {
      const chunk = buffer.slice(start, end);
      yield chunk;
      start = end;
      end = start + step;
    }
  };
  return parseChunked(chunkEmitter);
};
