import React from 'react';
import { cn } from '../../lib/utils';
import { NavLink } from 'react-router-dom';

export default function Button({
  variant = 'primary',
  asLink = false,
  to,
  children,
  className,
  ...props
}) {
  const variants = {
    primary:
      'bg-red-primary hover:bg-red-secondary text-white font-medium text-base py-4 px-14 rounded-full hover:cursor-pointer',
    ghost:
      'bg-transparent text-dxark font-medium text-base py-4 px-8 rounded-full border border-gray-light hover:border-red-secondary hover:cursor-pointer',
    icon: 'bg-transparent text-dxark font-medium text-base hover:fill-red-secondary hover:cursor-pointer',
  };

  if (asLink) {
    return (
      <NavLink
        to={to}
        className={cn(variants[variant], 'block', className)}
        {...props}
      >
        {children}
      </NavLink>
    );
  }

  return (
    <button className={cn(variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
