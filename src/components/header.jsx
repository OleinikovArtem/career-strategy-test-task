import { NavLink } from 'react-router-dom';

import Navigation from './navigation';

export default function Header() {
  return (
    <header className="bg-almost-white">
      <div className="flex justify-center items-center container relative py-6 flex-col md:flex-row">
        <div className="md:absolute left-16">
          <NavLink className="text-dark font-bold" to="/">
            <img src="/logo.svg" alt="TravelTruks" />
          </NavLink>
        </div>
        <Navigation />
      </div>
    </header>
  );
}
