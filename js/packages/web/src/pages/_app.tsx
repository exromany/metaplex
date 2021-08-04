import type { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import '../styles/index.less';

const WrapPage = dynamic(() => import('./_wrapPage'), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Metaplex NFT Marketplace</title>
      </Head>
      <div id="root">
        <WrapPage>
          <Component {...pageProps} />
        </WrapPage>
      </div>
    </>
  );
}
