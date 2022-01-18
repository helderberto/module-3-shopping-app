export default function ProductQuantity({ products }) {
  return (
    <span className="mt-3 text-sm text-gray-500">
      {products.length > 1 ? `${products.length} Products` : '1 Product'}
    </span>
  );
}
