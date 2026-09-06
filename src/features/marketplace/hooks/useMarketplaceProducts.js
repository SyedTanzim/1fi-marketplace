import { useCallback, useEffect, useState } from "react";

import { getMarketplaceProducts } from "../services/marketplace.service";

/**
 * Gives Marketplace consumers one stable contract instead of exposing the
 * separate implementation details of request and React state management.
 */
export function getMarketplaceErrorMessage(error) {
  return error instanceof Error
    ? error.message
    : "Unable to load marketplace products. Please try again.";
}

/**
 * Keeps the complete product-request lifecycle outside presentational
 * components so loading, failure, and retry behavior stay consistent.
 */
export function useMarketplaceProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = useCallback(async () => {
    try {
      const marketplaceProducts = await getMarketplaceProducts();
      setProducts(marketplaceProducts);
    } catch (requestError) {
      setError(getMarketplaceErrorMessage(requestError));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    await loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    void loadProducts();
  }, [loadProducts]);

  return { products, isLoading, error, refetch };
}
