import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

import { db } from '~/server/db';
import { savedRecipes } from '~/server/db/schema';

export async function GET() {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated) {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  const result = await db.select().from(savedRecipes).where(eq(savedRecipes.userId, userId));

  return NextResponse.json(result);
}
