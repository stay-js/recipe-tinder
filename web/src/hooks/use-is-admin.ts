'use client';

import { useQuery } from '@tanstack/react-query';

import { apiGet } from '~/lib/api-get';
import { isAdminSchema } from '~/lib/zod-schemas';

export function useIsAdmin() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['is-admin'],
    queryFn: async () => apiGet('/api/admin/is-admin', isAdminSchema),
    retry: false,
  });

  return {
    isAdmin: data?.isAdmin ?? false,
    isLoading,
    isError,
  };
}
