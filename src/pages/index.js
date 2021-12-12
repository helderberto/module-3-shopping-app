import { useFetchProducts } from '../hooks/use-fetch-products';
import { ProductList, Search, ServerErrorMessage } from '../components';

export default function Home() {
  const { products, error } = useFetchProducts();

  return (
    <main data-testid="product-list" className="my-8">
      <Search />
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
        <span className="mt-3 text-sm text-gray-500">200+ Products</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <ServerErrorMessage error={error} />

          {!error ? <ProductList products={products} /> : null}
        </div>
      </div>
    </main>
  );
}