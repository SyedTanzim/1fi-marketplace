import { MOCK_MARKETPLACE_PRODUCTS } from "../data/marketplace.mock";

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/**
 * Preserves an asynchronous data boundary so a real API can replace the mock
 * source later without forcing changes in hooks or UI components.
 */
export async function getMarketplaceProducts() {
  await wait(600);

  return structuredClone(MOCK_MARKETPLACE_PRODUCTS);
}
