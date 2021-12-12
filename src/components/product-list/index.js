import ProductCard from '../product-card';

export default function ProductList({ products = [] }) {
  if (products.length === 0) {
    return <h4 data-testid="no-products">No products.</h4>;
  }
  return products.map((product) => (
    <ProductCard key={product.id} product={product} key={product.id} />
  ));
}
