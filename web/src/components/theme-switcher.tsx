'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Monitor, Sun } from 'lucide-react';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const themes = [
  { name: 'Világos', value: 'light', icon: Sun },
  { name: 'Sötét', value: 'dark', icon: Moon },
  { name: 'Rendszer', value: 'system', icon: Monitor },
];

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <div />;

  return (
    <Select value={theme ?? 'system'} onValueChange={setTheme}>
      <SelectTrigger id="theme">
        <SelectValue placeholder="Válassz témát" />
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Témák</SelectLabel>

          {themes?.map((theme) => (
            <SelectItem key={theme.value} value={theme.value}>
              <theme.icon className="size-4" />
              <span>{theme.name}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
