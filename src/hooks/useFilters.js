import { useState } from 'react';
import { useSearchParams } from 'react-router';

import { FILTER_KEYS } from '../consts';

import WindIcon from '../assets/icons/wind.svg';
import DiagramIcon from '../assets/icons/diagram.svg';
import CupIcon from '../assets/icons/cup-hot.svg';
import TvIcon from '../assets/icons/tv.svg';
import ShowerIcon from '../assets/icons/ph_shower.svg';
import VanIcon from '../assets/icons/bi_grid-1x2.svg';
import FullIcon from '../assets/icons/bi_grid.svg';
import AlcoveIcon from '../assets/icons/bi_grid-3x3-gap.svg';

export const EQUIPMENT_FILTERS = [
  { label: 'AC', icon: WindIcon, value: 'AC' },
  { label: 'Automatic', icon: DiagramIcon, value: 'automatic' },
  { label: 'Kitchen', icon: CupIcon, value: 'kitchen' },
  { label: 'TV', icon: TvIcon, value: 'TV' },
  { label: 'Bathroom', icon: ShowerIcon, value: 'bathroom' },
];

export const TYPE_FILTERS = [
  { label: 'Van', icon: VanIcon, value: 'van' },
  { label: 'Fully Integrated', icon: FullIcon, value: 'fully_integrated' },
  { label: 'Alcove', icon: AlcoveIcon, value: 'alcove' },
];

export default function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filters, setFilters] = useState({
    [FILTER_KEYS.equipment]:
      searchParams.get(FILTER_KEYS.equipment)?.split(',') || [],
    [FILTER_KEYS.type]: searchParams.get(FILTER_KEYS.type)?.split(',') || [],
    [FILTER_KEYS.location]:
      searchParams.get(FILTER_KEYS.location)?.split(',') || [],
  });

  function toggleFilter(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function applyFiltersToSearchParams() {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    for (const key in filters) {
      newSearchParams.delete(key);
      if (filters[key]?.length != 0) {
        newSearchParams.append(key, filters[key].join(','));
      }
    }

    setSearchParams(newSearchParams);
  }

  return {
    filters,
    toggleFilter,
    applyFiltersToSearchParams,
  };
}
