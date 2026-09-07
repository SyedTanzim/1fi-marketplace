import { useState } from "react";
import { SearchBar } from "../../../components/SearchBar";

import { useMarketplaceProducts } from "../hooks/useMarketplaceProducts";
import { MarketplaceError } from "./MarketplaceError";
import { MarketplaceSkeleton } from "./MarketplaceSkeleton";
import { ProductDetails } from "./ProductDetails";
import { ProductList } from "./ProductList";

/**
 * Owns Marketplace navigation and search state so its list and detail views
 * remain focused on presentation and can be reused independently.
 */
export function Marketplace({ onProceed }) {
    const { products, isLoading, error, refetch } = useMarketplaceProducts();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedProductId, setSelectedProductId] = useState(null);

    if (isLoading) {
        return <MarketplaceSkeleton />;
    }

    if (error) {
        return <MarketplaceError message={error} onRetry={refetch} />;
    }

    const normalizedQuery = searchQuery.trim().toLowerCase();
    const filteredProducts = products.filter((product) =>
        `${product.name} ${product.description}`
            .toLowerCase()
            .includes(normalizedQuery),
    );
    const selectedProduct = products.find(
        (product) => product.id === selectedProductId,
    );

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
            <SearchBar
                label="Search Marketplace products"
                placeholder="  Search Marketplace..."
                value={searchQuery}
                onChange={setSearchQuery}
            />

            <h2
                className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900"
                id="marketplace-title"
            >
                Marketplace
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
