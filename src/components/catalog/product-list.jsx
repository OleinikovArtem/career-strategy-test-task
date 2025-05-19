import { useState } from 'react';
import { useSearchParams } from 'react-router';

import Card from './card';
import Button from '../ui/button';

import {
  mapCategoriesByProduct,
  addOrRemoveFavoritProductById,
  getFavorites,
} from '../../lib/product';

import { useCatalog } from '../../hooks/useCatalog';
import { FILTER_KEYS } from '../../consts';

const getFilterValue = (searchParams, key) => {
  const value = searchParams.get(key);
  if (!value) {
    return [];
  }
  return value.split(',');
};

export default function ProductList() {
  const [searchParams] = useSearchParams();
  const filters = {
    [FILTER_KEYS.equipment]: getFilterValue(
      searchParams,
      FILTER_KEYS.equipment,
    ),
    [FILTER_KEYS.type]: getFilterValue(searchParams, FILTER_KEYS.type),
    [FILTER_KEYS.location]: getFilterValue(searchParams, FILTER_KEYS.location),
  };

  const { items, isLoading, totalItems, showMoreItems } = useCatalog({
    filters: filters[FILTER_KEYS.equipment],
  });
  const [favorites, setFavorites] = useState(getFavorites());

  const toggleFavorite = (id) => {
    const favorites = addOrRemoveFavoritProductById(id);
    setFavorites(favorites);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-center h-full">
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-center h-full">
          <p>No products found</p>
        </div>
      </div>
    );
  }

  return (
    <ul className="flex flex-col flex-1 gap-8 items-center pb-13">
      {items.map((product) => (
        <Card
          key={product.id}
          img={product.gallery[0].thumb}
          price={product.price}
          title={product.name}
          id={product.id}
          description={product.description}
          categories={mapCategoriesByProduct(product)}
          rating={product.rating}
          location={product.location}
          reviewsTotal={product.reviews.length}
          toggleFavorite={toggleFavorite}
          isFavorite={favorites.includes(product.id)}
        />
      ))}
      {totalItems > items.length ? (
        <Button variant="ghost" onClick={showMoreItems}>
          Load more
        </Button>
      ) : null}
    </ul>
  );
}
