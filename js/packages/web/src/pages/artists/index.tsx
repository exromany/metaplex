import dynamic from 'next/dynamic';

const ArtistsView = dynamic(() => import('../../views/artists'), {
  ssr: false,
});

export default function ArtistsPage() {
  return <ArtistsView />;
}
