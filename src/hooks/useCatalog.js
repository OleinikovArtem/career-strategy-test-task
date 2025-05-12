import { useEffect, useState } from 'react';

import { getCampers } from '../lib/api';

export function useCatalog() {
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

  const items = data.items?.slice(0, numberOfItems);

  return {
    totalItems: data.items?.length || 0,
    items,
    isLoading,
    showMoreItems,
  };
}
