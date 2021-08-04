import dynamic from 'next/dynamic';

const BillingView = dynamic(() => import('../../../views/auction/billing'), {
  ssr: false,
});

export default function AuctionBillingPage() {
  return <BillingView />;
}
