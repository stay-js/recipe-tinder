import { ThemeSwitcher } from '~/components/theme-switcher';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  path: '/',
  title: 'Főoldal - Recept Tinder',
  description: 'Üdvözöljük a Recept Tinder alkalmazásban!',
});

export default async function LandingPage() {
  return (
    <main className="p-4">
      <h1>Főoldal</h1>

      <ThemeSwitcher />
    </main>
  );
}
