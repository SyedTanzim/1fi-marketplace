import { ProductCard } from "./ProductCard";

/**
 * Keeps collection rendering independent from data retrieval and navigation
 * so the same list can display fetched, filtered, or searched products.
 */
export function ProductList({
  products,
  onProductSelect,
}) {
  return (
    <div aria-label="Marketplace products" className="flex flex-col gap-3" role="list">
      {products.map((product) => (
        <div key={product.id} role="listitem">
          <ProductCard product={product} onSelect={onProductSelect} />
        </div>
      ))}
    </div>
  );
}
