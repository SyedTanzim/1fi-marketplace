import { useState } from "react";
import { Search } from "lucide-react";

import { useMarketplaceProducts } from "../hooks/useMarketplaceProducts";
import { ProductDetails } from "./ProductDetails";
import { ProductList } from "./ProductList";

/**
 * Owns Marketplace navigation and search state so its list and detail views
 * remain focused on presentation and can be reused independently.
 */
export function Marketplace({ onProceed }) {
  const { products, isLoading, error } = useMarketplaceProducts();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProductId, setSelectedProductId] = useState(null);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.description}`
      .toLowerCase()
      .includes(normalizedQuery),
  );
  const selectedProduct = products.find(
    (product) => product.id === selectedProductId,
  );

  if (isLoading || error) {
    return null;
  }

  if (selectedProduct) {
    return (
      <ProductDetails
        product={selectedProduct}
        onBack={() => setSelectedProductId(null)}
        onProceed={onProceed}
      />
    );
  }

  return (
    <section aria-labelledby="marketplace-title" className="flex flex-col gap-4">
      <div className="flex h-[46px] items-center gap-[10px] rounded-full border border-zinc-200 bg-white px-4">
        <Search
          aria-hidden="true"
          className="h-[17px] w-[17px] shrink-0 text-gray-400"
        />
        <input
          aria-label="Search Marketplace products"
          className="min-w-0 flex-1 bg-transparent text-[13px] leading-[1.45] text-gray-900 outline-none placeholder:text-gray-400"
          placeholder="Search products..."
          type="search"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
      </div>

      <h2
        className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900"
        id="marketplace-title"
      >
        1Fi Marketplace
      </h2>

      {filteredProducts.length > 0 ? (
        <ProductList
          products={filteredProducts}
          onProductSelect={setSelectedProductId}
        />
      ) : (
        <p className="py-4 text-center text-[13px] leading-[1.45] text-gray-500">
          {normalizedQuery
            ? "No products match your search."
            : "No products are currently available."}
        </p>
      )}
    </section>
  );
}
