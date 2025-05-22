import useFilters from '../hooks/useFilters';

import Sidebar from '../components/catalog/sidebar';
import ProductList from '../components/catalog/product-list';

export default function Catalog() {
  const { filters, setFilter, applyFilters, activeFilter } = useFilters();

  return (
    <div className="container flex pt-12 gap-16 flex-col lg:flex-row">
      <Sidebar filters={filters} setFilter={setFilter} applyFilters={applyFilters} />
      <ProductList filters={activeFilter} />
    </div>
  );
}
