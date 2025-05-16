import { useEffect, useState } from 'react';

import { getCampers } from '../lib/api';

export function useCatalog({ filters }) {
  const _filters = filters.filter(Boolean) || [];
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

  const filteredItems =
    data.items?.filter((item) => {
      if (_filters.length === 0) return true;

      return _filters.every((filter) => {
        const filterValue = item[filter];
        return Boolean(filterValue);
      });
    }) || [];

  const items = filteredItems.slice(0, numberOfItems);

  return {
    totalItems: filteredItems?.length || 0,
    items,
    isLoading,
    showMoreItems,
  };
}
