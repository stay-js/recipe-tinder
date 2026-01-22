import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  path: '/dashboard',
  title: 'Recepteim - Recept Tinder',
  description: 'Recepteim - Recept Tinder',
});

export default async function DashboardPage() {
  return (
    <div>
      <h1>Recepteim</h1>
    </div>
  );
}
