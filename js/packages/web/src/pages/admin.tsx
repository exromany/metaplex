import dynamic from 'next/dynamic';

const AdminView = dynamic(() => import('../views/admin'), {
  ssr: false,
});

export default function AdminPage() {
  return <AdminView />;
}
