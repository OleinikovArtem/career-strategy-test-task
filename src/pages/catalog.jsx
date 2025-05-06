import React from 'react';
import Input from '../components/ui/input';
import MapIcon from '../assets/icons/map.svg';

export default function Catalog() {
  return (
    <div className="container">
      <Input placeholder="City" icon={MapIcon} label="Location" />
    </div>
  );
}
