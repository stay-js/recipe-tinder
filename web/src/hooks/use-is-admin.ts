'use client';

import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const adminCheckSchema = z.object({ isAdmin: z.boolean() });

export function useIsAdmin() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['is-admin'],
    queryFn: async (): Promise<z.infer<typeof adminCheckSchema>> => {
      const res = await fetch('/api/admin/is-admin');

      if (!res.ok) throw new Error('Failed to check admin status');

      const json = await res.json();

      return adminCheckSchema.parse(json);
    },
    retry: false,
  });

  return {
    isAdmin: data?.isAdmin ?? false,
    isLoading,
    isError,
  };
}
