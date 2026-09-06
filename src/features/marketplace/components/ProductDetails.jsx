import { ArrowLeft } from "lucide-react";

import { useProductSelection } from "../hooks/useProductSelection";
import { formatMoney } from "../utils/formatMoney";
import { EmiPlanSelector } from "./EmiPlanSelector";
import { VariantSelector } from "./VariantSelector";

/**
 * Brings product configuration into one focused decision flow while delegating
 * validation and reusable controls to their existing lower-level modules.
 */
export function ProductDetails({ product, onBack, onProceed }) {
  const {
    selectedVariant,
    selectedEmiPlan,
    selectVariant,
    selectEmiPlan,
    canProceed,
  } = useProductSelection(product);

  return (
    <section aria-labelledby="product-details-title" className="flex flex-col gap-4">
      <header className="flex items-center gap-3">
        <button
          aria-label="Back to Marketplace products"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#712CDC]"
          type="button"
          onClick={onBack}
        >
          <ArrowLeft aria-hidden="true" className="h-[22px] w-[22px]" strokeWidth={1.75} />
        </button>
        <h2
          className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900"
          id="product-details-title"
        >
          Product details
        </h2>
      </header>

      <div className="overflow-hidden rounded-[18px] border border-zinc-200 bg-white shadow-[0_2px_6px_rgba(20,14,50,0.04)]">
        <img
          alt={product.name}
          className="aspect-square w-full object-cover"
          src={selectedVariant?.imageUrl ?? product.imageUrl}
        />
      </div>

      <div>
        <h1 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
          {product.name}
        </h1>
        <p className="mt-2 text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
          {formatMoney(selectedVariant?.price ?? product.startingPrice)}
        </p>
        <p className="mt-2 text-[13px] leading-[1.45] text-gray-500">
          {product.description}
        </p>
      </div>

      <VariantSelector
        variants={product.variants}
        selectedVariantId={selectedVariant?.id ?? null}
        onSelect={selectVariant}
      />

      <EmiPlanSelector
        plans={product.emiPlans}
        selectedPlanId={selectedEmiPlan?.id ?? null}
        onSelect={selectEmiPlan}
      />

      <div className="rounded-[18px] border border-zinc-200 bg-white p-3.5 shadow-[0_2px_6px_rgba(20,14,50,0.04)]">
        <h2 className="text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
          Product information
        </h2>
        <dl className="mt-3">
          {product.details.map((detail) => (
            <div
              key={detail.label}
              className="flex justify-between gap-3 border-b border-zinc-200 py-3 last:border-0"
            >
              <dt className="text-[13px] leading-[1.45] text-gray-500">
                {detail.label}
              </dt>
              <dd className="text-right text-[13px] leading-[1.45] text-gray-900">
                {detail.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <button
        className="w-full rounded-full bg-[#712CDC] px-4 py-3 text-sm font-semibold tracking-[-0.005em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#712CDC] disabled:cursor-not-allowed disabled:opacity-50"
        disabled={!canProceed}
        type="button"
        onClick={() =>
          onProceed({
            productId: product.id,
            variantId: selectedVariant.id,
            emiPlanId: selectedEmiPlan.id,
          })
        }
      >
        Proceed with selected plan
      </button>
    </section>
  );
}