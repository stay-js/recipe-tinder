'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useClerk } from '@clerk/nextjs';
import { LogOut, Notebook, Settings } from 'lucide-react';

import { useIsMobile } from '~/hooks/use-mobile';
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '~/components/ui/dropdown-menu';
import { User } from '~/components/user';

export function UserDropdown({ location }: { location: 'left' | 'right' }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { openUserProfile, signOut } = useClerk();

  return (
    <DropdownMenuContent
      className="my-4 w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
      side={!isMobile ? 'right' : undefined}
      align={location === 'right' ? 'end' : 'start'}
      sideOffset={4}
    >
      <DropdownMenuLabel className="p-0">
        <User />
      </DropdownMenuLabel>

      <DropdownMenuSeparator />

      <DropdownMenuGroup>
        <DropdownMenuItem asChild className="w-full">
          <button onClick={() => openUserProfile()} className="flex items-center gap-2">
            <Settings />
            <span>Fiók kezelése</span>
          </button>
        </DropdownMenuItem>

        {!pathname.startsWith('/dashboard') && (
          <DropdownMenuItem asChild className="w-full">
            <Link href="/dashboard" className="flex items-center gap-2">
              <Notebook />
              <span>Recepteim</span>
            </Link>
          </DropdownMenuItem>
        )}

        <DropdownMenuItem asChild className="w-full">
          <button onClick={() => signOut({ redirectUrl: '/' })} className="flex items-center gap-2">
            <LogOut />
            <span>Kijelentkezés</span>
          </button>
        </DropdownMenuItem>
      </DropdownMenuGroup>
    </DropdownMenuContent>
  );
}
