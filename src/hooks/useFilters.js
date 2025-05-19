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
  { label: 'Van', icon: VanIcon, value: 'panel_truck' },
  { label: 'Fully Integrated', icon: FullIcon, value: 'fully_integrated' },
  { label: 'Alcove', icon: AlcoveIcon, value: 'alcove' },
];

function getFilter(searchParams, key) {
  return searchParams.get(key)?.split(',') || [];
}

export default function useFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFilters = {
    [FILTER_KEYS.equipment]: getFilter(searchParams, FILTER_KEYS.equipment),
    [FILTER_KEYS.type]: getFilter(searchParams, FILTER_KEYS.type),
    [FILTER_KEYS.location]: getFilter(searchParams, FILTER_KEYS.location),
  };

  const [activeFilter, setActiveFilter] = useState(initialFilters);
  const [filters, setFilters] = useState(initialFilters);

  function setFilter(key, value) {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }

  function applyFiltersToSearchParams() {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    for (const key in filters) {
      newSearchParams.delete(key);
      if (filters[key]?.length != 0) {
        newSearchParams.append(key, Array.isArray(filters[key]) ? filters[key].join(',') : filters[key]);
      }

      setActiveFilter((prev) => ({
        ...prev,
        [key]: filters[key],
      }));
    }

    setSearchParams(newSearchParams);
  }

  return {
    filters,
    activeFilter,
    setFilter,
    applyFiltersToSearchParams,
  };
}
