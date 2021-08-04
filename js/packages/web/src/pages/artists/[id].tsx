import dynamic from 'next/dynamic';

const ArtistView = dynamic(() => import('../../views/artist'), {
  ssr: false,
});

export default function ArtistPage() {
  return <ArtistView />;
}
