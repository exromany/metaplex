import dynamic from 'next/dynamic';

const ArtworksView = dynamic(() => import('../../views/artworks'), {
  ssr: false,
});

export default function ArtworkPage() {
  return <ArtworksView />;
}
