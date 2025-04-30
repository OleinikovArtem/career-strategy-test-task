import React from 'react';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx('text-dark', isActive && 'text-red-primary');
};

export default function Navigation() {
  return (
    <nav className="flex gap-8">
      <NavLink to="/" className={buildLinkClass}>
        Home
      </NavLink>
      <NavLink to="/catalog" className={buildLinkClass}>
        Catalog
      </NavLink>
    </nav>
  );
}
