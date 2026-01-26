import { createMetadata } from '~/lib/create-metadata';
import { RecipeForm } from '~/components/recipe-form';

export const metadata = createMetadata({
  path: '/dashboard/recipes/create',
  title: 'Recept létrehozása - Find Your Dinner.',
  description: 'Recept létrehozása - Find Your Dinner.',
  noIndex: true,
});

export default async function CreatePage() {
  return <RecipeForm />;
}
