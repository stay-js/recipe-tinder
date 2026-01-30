import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { eq, and } from 'drizzle-orm';
import { z } from 'zod';

import { db } from '~/server/db';
import { savedRecipes } from '~/server/db/schema';

const deleteSavedRecipeParamsSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export async function DELETE(_: Request, { params }: { params: Promise<{ id: string }> }) {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated) {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  const result = deleteSavedRecipeParamsSchema.safeParse(await params);

  if (!result.success) {
    return NextResponse.json(
      { error: 'INVALID_RECIPE_ID', details: result.error },
      { status: 400 },
    );
  }

  const { id: recipeId } = result.data;

  await db
    .delete(savedRecipes)
    .where(and(eq(savedRecipes.userId, userId), eq(savedRecipes.recipeId, recipeId)));

  return new Response(null, { status: 204 });
}
