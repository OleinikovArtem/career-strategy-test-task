import Card from './card';
import Button from '../ui/button';

import { useCatalog } from '../../hooks/useCatalog';

export default function ProductList() {
  const { items, isLoading, totalItems, showMoreItems } = useCatalog();

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
    <ul className="flex flex-col flex-1 gap-8">
      {items.map((product) => (
        <Card
          key={product.id}
          img={product.gallery[0].thumb}
          price={product.price}
          title={product.name}
          id={product.id}
          description={product.description}
        />
      ))}
      {totalItems > items.length ? (
        <Button variant="primary" onClick={showMoreItems}>
          Show More
        </Button>
      ) : null}
    </ul>
  );
}
