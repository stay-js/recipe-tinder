import Link from 'next/link';

import { Button } from '~/components/ui/button';
import { Footer } from '~/components/footer';
import { createMetadata } from '~/lib/create-metadata';

export const metadata = createMetadata({
  path: '/404',
  title: '404',
  description: 'A keresett tartalom nem található',
  noIndex: true,
});

export default function NotFoundPage() {
  return (
    <div className="grid grid-cols-1 grid-rows-[1fr_auto] gap-6">
      <main className="grid h-full min-h-screen place-items-center">
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-lg">A keresett tartalom nem található</p>
          </div>

          <Button asChild size="lg" className="w-fit">
            <Link href="/">Vissza a főoldalra</Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
