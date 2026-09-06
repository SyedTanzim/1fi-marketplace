import { MOCK_MARKETPLACE_PRODUCTS } from "../data/marketplace.mock";
import type { MarketplaceProduct } from "../types/marketplace";

function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Preserves an asynchronous data boundary so a real API can replace the mock
 * source later without forcing changes in hooks or UI components.
 */
export async function getMarketplaceProducts(): Promise<MarketplaceProduct[]> {
  await wait(600);

  return structuredClone(MOCK_MARKETPLACE_PRODUCTS);
}