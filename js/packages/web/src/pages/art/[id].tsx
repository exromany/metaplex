import dynamic from 'next/dynamic';

const ArtView = dynamic(() => import('../../views/art'), {
  ssr: false,
});

export default function ArtPage() {
  return <ArtView />;
}
