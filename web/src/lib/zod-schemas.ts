import { z } from 'zod';

export const isAdminSchema = z.object({ isAdmin: z.boolean() });

export const categoriesSchema = z.array(
  z.object({
    id: z.number().int().positive(),
    name: z.string().min(1).max(128),
  }),
);

export const ingredientsSchema = z.array(
  z.object({
    id: z.number().int().positive(),
    name: z.string().min(1).max(256),
  }),
);

export const unitsSchema = z.array(
  z.object({
    id: z.number().int().positive(),
    name: z.string().min(1).max(64),
    abbreviation: z.string().min(1).max(16),
  }),
);
