import React from 'react';
import Button from '../components/ui/button';

export default function Home() {
  return (
    <div className="bg-[url(/img/home_bg.jpg)] max-w-screen min-h-[calc(100vh-72px)] object-fill bg-cover bg-center rotate-y-180 flex items-center">
      <div className="text-white flex flex-col items-start container rotate-y-180 ml-auto">
        <h1 className="text-5xl text-white text-semibold">
          Campers of your dreams
        </h1>
        <p className="text-2xl mt-4">
          You can find everything you want in our catalog
        </p>
        <Button className="mt-10" asLink to="/catalog">
          View Now
        </Button>
      </div>
    </div>
  );
}
