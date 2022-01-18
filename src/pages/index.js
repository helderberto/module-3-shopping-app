import { useFetchProducts } from '../hooks/use-fetch-products';
import { ProductList, Search, ServerErrorMessage } from '../components';
import { useEffect, useState } from 'react';

export default function Home() {
  const { products, error } = useFetchProducts();
  const [term, setTerm] = useState('');
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    if (term === '') {
      setLocalProducts(products);
    } else {
      setLocalProducts(
        products.filter(({ title }) => title.toLowerCase().indexOf(term.toLowerCase()) > -1),
      );
    }
  }, [products, term]);

  const doSearch = () => {};

  return (
    <main data-testid="product-list" className="my-8">
      <Search doSearch={(term) => setTerm(term)} />
      <div className="container mx-auto px-6">
        <h3 className="text-gray-700 text-2xl font-medium">Wrist Watch</h3>
        <span className="mt-3 text-sm text-gray-500">200+ Products</span>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <ServerErrorMessage error={error} />

          {!error ? <ProductList products={localProducts} /> : null}
        </div>
      </div>
    </main>
  );
}
