import React from 'react';
import { NavLink } from 'react-router-dom';

import Navigation from './navigation';

export default function Header() {
  return (
    <header className="flex justify-center items-center container relative py-6 bg-almost-white">
      <div className="absolute left-16">
        <NavLink className="text-dark font-bold" to="/">
          <img src="./logo.svg" alt="TravelTruks" />
        </NavLink>
      </div>
      <Navigation />
    </header>
  );
}
