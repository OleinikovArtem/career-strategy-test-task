import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter, applyFilters } from '../redux/catalog';
import { filtersSelector, activefiltersSelector } from '../redux/selectors';

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

export default function useFilters() {
  const [, setSearchParams] = useSearchParams();

  const dispatch = useDispatch();
  const filters = useSelector(filtersSelector);
  const activeFilter = useSelector(activefiltersSelector);

  function updateFilter(key, value) {
    dispatch(setFilter({ key, value }));
  }

  function activateFilters() {
    const newSearchParams = new URLSearchParams();

    const location = filters.location[0]?.trim().toLowerCase() || '';
    const equipment = filters.equipment.join(',') || undefined;
    const type = filters.type.join(',') || undefined;

    if (location) newSearchParams.set('location', location);
    if (equipment) newSearchParams.set('equipment', equipment);
    if (type) newSearchParams.set('type', type);

    setSearchParams(newSearchParams);
    dispatch(applyFilters());
  }

  return {
    filters,
    activeFilter,
    setFilter: updateFilter,
    applyFilters: activateFilters,
  };
}
