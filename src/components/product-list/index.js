import ProductCard from '../product-card';
import { useCartStore } from '../../../store/cart';

export default function ProductList({ products = [] }) {
  const addToCart = useCartStore((store) => store.actions.add);

  if (products.length === 0) {
    return <h4 data-testid="no-products">No products.</h4>;
  }
  return products.map((product) => (
    <ProductCard key={product.id} product={product} addToCart={addToCart} />
  ));
}
