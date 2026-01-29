import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { desc, eq } from 'drizzle-orm';

import { db } from '~/server/db';
import { categories, categoryRecipe, recipeData, recipes } from '~/server/db/schema';

export async function GET() {
  const { isAuthenticated, userId } = await auth();

  if (!isAuthenticated) {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  const recipeRecords = await db
    .select()
    .from(recipes)
    .where(eq(recipes.userId, userId))
    .orderBy(desc(recipes.createdAt));

  const result = await Promise.all(
    recipeRecords.map(async (recipe) => {
      const [categoryRecords, data] = await Promise.all([
        db
          .select({
            id: categories.id,
            name: categories.name,
          })
          .from(categoryRecipe)
          .innerJoin(categories, eq(categories.id, categoryRecipe.categoryId))
          .where(eq(categoryRecipe.recipeId, recipe.id)),

        db
          .select()
          .from(recipeData)
          .where(eq(recipeData.recipeId, recipe.id))
          .orderBy(desc(recipeData.createdAt))
          .limit(1),
      ]);

      if (data.length === 0 || !data[0]) {
        throw new Error(`No recipe data found for recipe ID: ${recipe.id}`);
      }

      return {
        recipe,
        recipeData: data[0],
        categories: categoryRecords,
      };
    }),
  );

  return NextResponse.json(result);
}
