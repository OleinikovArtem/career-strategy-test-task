import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function toCamelCase(str) {
  return str.toLowerCase().replace(/[_-](\w)/g, (_, c) => c.toUpperCase());
}
