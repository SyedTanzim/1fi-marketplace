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