import { useEffect, useState, useMemo } from 'react';

import { getCampers } from '../lib/api';
import { toCamelCase } from '../lib/utils';

export function useCatalog({ filters }) {
  const [numberOfItems, setNumberOfItems] = useState(4);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const data = await getCampers();
      setData(data);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  const showMoreItems = () => {
    setNumberOfItems((prev) => prev + 4);
  };

  const filteredItems = useMemo(
    () =>
      data.items?.filter((item) => {
        const equipment = filters.equipment || [];
        const type = filters.type || [];

        const isEquipmentMatch =
          equipment.length === 0 || equipment.every((eq) => item[eq]);

        const loc = filters.location[0]?.trim() || '';

        const isLocationMatch =
          loc.length === 0 ||
          loc.includes(item.location) ||
          item.location.includes(loc);

        const isTypeMatch =
          type.length === 0 || item.form === toCamelCase(type[0]);

        return isEquipmentMatch && isTypeMatch && isLocationMatch;
      }) || [],
    [filters, data.items],
  );

  const items = filteredItems.slice(0, numberOfItems);

  return {
    totalItems: filteredItems?.length || 0,
    items,
    isLoading,
    showMoreItems,
  };
}
