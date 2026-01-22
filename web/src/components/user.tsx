'use client';

import { useUser } from '@clerk/nextjs';

import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar';

export function UserAvatar() {
  const { user } = useUser();
  if (!user) return null;

  return (
    <Avatar className="size-6 rounded-full">
      <AvatarImage src={user.imageUrl} alt={user.fullName ?? ''} />

      <AvatarFallback className="rounded-full">
        {user.firstName?.[0]}
        {user.lastName?.[0]}
      </AvatarFallback>
    </Avatar>
  );
}

export function User() {
  const { user } = useUser();
  if (!user) return null;

  return (
    <div className="flex items-center gap-2 px-1 py-2 text-sm">
      <UserAvatar />

      <div className="grid flex-1 text-left text-sm leading-tight">
        <span className="truncate font-medium">{user.fullName}</span>
        <span className="truncate text-xs">{user.primaryEmailAddress?.emailAddress}</span>
      </div>
    </div>
  );
}
