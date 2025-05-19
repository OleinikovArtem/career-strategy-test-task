import { EQUIPMENT_FILTERS, TYPE_FILTERS } from '../../hooks/useFilters';

import Input from '../ui/input';
import Filter from './filter';
import Button from '../ui/button';
import Map from '../ui/icons/map';

import { FILTER_KEYS } from '../../consts';

export default function Sidebar({ filters, setFilter, applyFiltersToSearchParams }) {
  return (
    <div>
      <Input
        placeholder="City, Country"
        icon={<Map active className="group" />}
        label="Location"
        value={filters[FILTER_KEYS.location]}
        onChange={(e) => setFilter(FILTER_KEYS.location, e.target.value)}
        name={FILTER_KEYS.location}
      />
      <p className="pt-10">Filters</p>
      <div className="flex flex-col md:flex-row lg:flex-col gap-8 pt-8 md:justify-between">
        <Filter
          label="Vehicle equipment"
          list={EQUIPMENT_FILTERS}
          selected={filters[FILTER_KEYS.equipment]}
          onChange={(value) => setFilter(FILTER_KEYS.equipment, value)}
          type="checkbox"
          name={FILTER_KEYS.equipment}
        />
        <Filter
          label="Vehicle type"
          list={TYPE_FILTERS}
          selected={filters[FILTER_KEYS.type]}
          onChange={(value) => setFilter(FILTER_KEYS.type, value)}
          type="radio"
          name={FILTER_KEYS.type}
        />
      </div>
      <Button className="mt-10" onClick={applyFiltersToSearchParams}>
        Search
      </Button>
    </div>
  );
}
