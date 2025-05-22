import { createSelector } from 'reselect';
import { toCamelCase } from '../lib/utils';

export const campersSelector = (state) => state.catalog.list;
export const filtersSelector = (state) => state.catalog.filters;
export const activefiltersSelector = (state) => state.catalog.activeFilter;
export const isLoadingSelector = (state) => state.catalog.isLoading;

export const filteredCampersSelector = createSelector([campersSelector, activefiltersSelector], (list, filters) => {
  const equipment = filters.equipment || [];
  const type = filters.type || [];

  return list?.filter((item) => {
    const isEquipmentMatch = equipment.length === 0 || equipment.every((eq) => item[eq]);
    const loc = filters.location[0]?.trim().toLowerCase() || '';
    const itemLocation = item.location.toLowerCase();
    const isLocationMatch = loc.length === 0 || loc.includes(itemLocation) || itemLocation.includes(loc);
    const isTypeMatch = type.length === 0 || item.form === toCamelCase(type[0]);

    return isEquipmentMatch && isTypeMatch && isLocationMatch;
  });
});
