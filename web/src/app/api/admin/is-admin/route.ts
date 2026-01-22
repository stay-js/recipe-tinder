import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';

import { db } from '~/server/db';
import { admins } from '~/server/db/schema';

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ isAdmin: false, error: 'UNAUTHORIZED' }, { status: 401 });
  }

  const isAdmin = await db.query.admins.findFirst({ where: eq(admins.userId, userId) });

  return NextResponse.json({ isAdmin: !!isAdmin });
}
