import Sidebar from '../components/catalog/sidebar';
import ProductList from '../components/catalog/product-list';

export default function Catalog() {
  return (
    <div className="container flex pt-12 gap-16 flex-col lg:flex-row">
      <Sidebar />
      <ProductList />
    </div>
  );
}
