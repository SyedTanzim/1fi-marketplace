import type { ProductVariant } from "../types/marketplace";
import type { EmiPlan } from "../types/marketplace";
import type { MarketplaceProduct } from "../types/marketplace";
import { useCallback, useEffect, useState } from "react";

/**
 * Keeps product-configuration consumers independent from the hook's internal
 * state shape, making the selection behavior reusable across different views.
 */
export interface UseProductSelectionResult {
  selectedVariant: ProductVariant | null;
  selectedEmiPlan: EmiPlan | null;
  selectVariant: (variantId: ProductVariant["id"]) => void;
  selectEmiPlan: (emiPlanId: EmiPlan["id"]) => void;
  canProceed: boolean;
}

/**
 * Prevents an unavailable option from becoming the default selection when
 * product availability changes in future API responses.
 */
export function getInitialVariant(
  product: MarketplaceProduct,
): ProductVariant | null {
  for (const variant of product.variants) {
    if (variant.isAvailable) {
      return variant;
    }
  }

  return null;
}

/**
 * Centralizes selection validation so every product view enables its CTA only
 * for choices that belong to the current product and remain available.
 */
export function useProductSelection(
  product: MarketplaceProduct,
): UseProductSelectionResult {
  const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant | null>(getInitialVariant(product));
  const [selectedEmiPlan, setSelectedEmiPlan] = useState<EmiPlan | null>(
    product.emiPlans[0] ?? null,
  );

  // Selections must not leak into a different product when the detail view changes.
  useEffect(() => {
    setSelectedVariant(getInitialVariant(product));
    setSelectedEmiPlan(product.emiPlans[0] ?? null);
  }, [product]);

  const selectVariant = useCallback(
    (variantId: ProductVariant["id"]): void => {
      for (const variant of product.variants) {
        if (variant.id === variantId && variant.isAvailable) {
          setSelectedVariant(variant);
          return;
        }
      }
    },
    [product],
  );

  const selectEmiPlan = useCallback(
    (emiPlanId: EmiPlan["id"]): void => {
      for (const emiPlan of product.emiPlans) {
        if (emiPlan.id === emiPlanId) {
          setSelectedEmiPlan(emiPlan);
          return;
        }
      }
    },
    [product],
  );

  return {
    selectedVariant,
    selectedEmiPlan,
    selectVariant,
    selectEmiPlan,
    canProceed: selectedVariant !== null && selectedEmiPlan !== null,
  };
}