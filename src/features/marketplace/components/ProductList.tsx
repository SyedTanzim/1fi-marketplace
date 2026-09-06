import type { MarketplaceProduct } from "../types/marketplace";
import { ProductCard } from "./ProductCard";

/**
 * Keeps collection rendering independent from data retrieval and navigation
 * so the same list can display fetched, filtered, or searched products.
 */
export interface ProductListProps {
  products: MarketplaceProduct[];
  onProductSelect: (productId: MarketplaceProduct["id"]) => void;
}

/**
 * Preserves one consistent card layout for any product collection while its
 * parent remains responsible for deciding which products belong in the list.
 */
export function ProductList({
  products,
  onProductSelect,
}: ProductListProps) {
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
