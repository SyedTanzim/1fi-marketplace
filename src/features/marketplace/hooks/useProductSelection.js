import { useCallback, useMemo, useState } from "react";

/**
 * Keeps product-configuration consumers independent from the hook's internal
 * state shape, making the selection behavior reusable across different views.
 */
export function getInitialVariant(product) {
  for (const variant of product.variants) {
    if (variant.isAvailable) {
      return variant;
    }
  }

  return null;
}

function createInitialSelection(product) {
  return {
    productId: product.id,
    variantId: getInitialVariant(product)?.id ?? null,
    emiPlanId: product.emiPlans[0]?.id ?? null,
  };
}

/**
 * Centralizes selection validation so every product view enables its CTA only
 * for choices that belong to the current product and remain available.
 */
export function useProductSelection(product) {
  const [selection, setSelection] = useState(() => createInitialSelection(product));

  const currentSelection =
    selection.productId === product.id ? selection : createInitialSelection(product);

  const selectedVariant = useMemo(
    () =>
      product.variants.find(
        (variant) =>
          variant.id === currentSelection.variantId && variant.isAvailable,
      ) ?? null,
    [currentSelection.variantId, product.variants],
  );

  const selectedEmiPlan = useMemo(
    () =>
      product.emiPlans.find(
        (emiPlan) => emiPlan.id === currentSelection.emiPlanId,
      ) ?? null,
    [currentSelection.emiPlanId, product.emiPlans],
  );

  const selectVariant = useCallback(
    (variantId) => {
      for (const variant of product.variants) {
        if (variant.id === variantId && variant.isAvailable) {
          setSelection((previousSelection) => ({
            ...(previousSelection.productId === product.id
              ? previousSelection
              : createInitialSelection(product)),
            productId: product.id,
            variantId,
          }));
          return;
        }
      }
    },
    [product],
  );

  const selectEmiPlan = useCallback(
    (emiPlanId) => {
      for (const emiPlan of product.emiPlans) {
        if (emiPlan.id === emiPlanId) {
          setSelection((previousSelection) => ({
            ...(previousSelection.productId === product.id
              ? previousSelection
              : createInitialSelection(product)),
            productId: product.id,
            emiPlanId,
          }));
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
