import dynamic from 'next/dynamic';

const AuctionCreateView = dynamic(() => import('../../../views/auctionCreate'), {
  ssr: false,
});

export default function AuctionCreatePage() {
  return <AuctionCreateView />;
}
