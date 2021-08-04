import dynamic from 'next/dynamic';

const ArtCreateView = dynamic(() => import('../../../views/artCreate'), {
  ssr: false,
});

export default function ArtCreateStepPage() {
  return <ArtCreateView />;
}
