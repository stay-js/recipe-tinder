import { createMetadata } from '~/lib/create-metadata';
import { Recipes } from './recipes';

export const metadata = createMetadata({
  path: '/dashboard/recipes/manage',
  title: 'Recepteim kezelése - Find Your Dinner.',
  description: 'Recepteim kezelése - Find Your Dinner.',
  noIndex: true,
});

export default async function ManagePage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-foreground text-2xl font-semibold">Recepteim kezelése</h1>

      <Recipes />
    </div>
  );
}
