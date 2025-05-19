import useFilters from '../hooks/useFilters';

import Sidebar from '../components/catalog/sidebar';
import ProductList from '../components/catalog/product-list';

export default function Catalog() {
  const { filters, setFilter, applyFiltersToSearchParams, activeFilter } = useFilters();

  return (
    <div className="container flex pt-12 gap-16 flex-col lg:flex-row">
      <Sidebar filters={filters} setFilter={setFilter} applyFiltersToSearchParams={applyFiltersToSearchParams} />
      <ProductList filters={activeFilter} />
    </div>
  );
}
