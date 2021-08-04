import dynamic from 'next/dynamic';

const AuctionView = dynamic(() => import('../../../views/auction'), {
  ssr: false,
});

export default function AuctionPage() {
  return <AuctionView />;
}
