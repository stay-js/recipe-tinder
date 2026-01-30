'use client';

import { useQuery } from '@tanstack/react-query';

import { GET } from '~/lib/api-utils';
import { isAdminSchema } from '~/lib/zod-schemas';

export function useIsAdmin() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['is-admin'],
    queryFn: () => GET('/api/admin/is-admin', isAdminSchema),
    retry: false,
  });

  return {
    isAdmin: data?.isAdmin ?? false,
    isLoading,
    isError,
  };
}
