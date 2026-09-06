import { useCallback, useEffect, useState } from "react";

import { getMarketplaceProducts } from "../services/marketplace.service";
import type { MarketplaceProduct } from "../types/marketplace";

/**
 * Gives Marketplace consumers one stable contract instead of exposing the
 * separate implementation details of request and React state management.
 */
export interface UseMarketplaceProductsResult {
  products: MarketplaceProduct[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Converts unpredictable rejected values into a safe message that the UI can
 * render without needing to understand transport-level errors.
 */
export function getMarketplaceErrorMessage(error: unknown): string {
  return error instanceof Error
    ? error.message
    : "Unable to load marketplace products. Please try again.";
}

/**
 * Keeps the complete product-request lifecycle outside presentational
 * components so loading, failure, and retry behavior stay consistent.
 */
export function useMarketplaceProducts(): UseMarketplaceProductsResult {
  const [products, setProducts] = useState<MarketplaceProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const marketplaceProducts = await getMarketplaceProducts();
      setProducts(marketplaceProducts);
    } catch (requestError: unknown) {
      setError(getMarketplaceErrorMessage(requestError));
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void refetch();
  }, [refetch]);

  return { products, isLoading, error, refetch };
}
