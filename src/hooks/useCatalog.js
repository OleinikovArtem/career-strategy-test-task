import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filteredCampersSelector, isLoadingSelector } from '../redux/selectors';
import { fetchCatalog } from '../redux/catalog';

const ITEMS_PER_PAGE = 4;

export function useCatalog() {
  const [numberOfItems, setNumberOfItems] = useState(ITEMS_PER_PAGE);
  const filteredItems = useSelector(filteredCampersSelector);
  const isLoading = useSelector(isLoadingSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCatalog());
  }, []);

  const showMoreItems = () => {
    setNumberOfItems((prev) => prev + ITEMS_PER_PAGE);
  };

  const items = filteredItems.slice(0, numberOfItems);

  return {
    totalItems: filteredItems?.length || 0,
    items,
    isLoading,
    showMoreItems,
  };
}
