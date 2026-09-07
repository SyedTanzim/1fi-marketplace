import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  MapPin,
  Navigation,
  Phone,
  Share2,
  ShieldCheck,
  Store,
} from "lucide-react";

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

  const pickupLocation = product.pickupLocation;

  return (
    <section
      aria-labelledby="product-details-title"
      className="fixed inset-0 z-[60] overflow-y-auto bg-[#F6F6F6]"
    >
      <div className="mx-auto flex min-h-dvh max-w-[500px] flex-col bg-[#F6F6F6]">
        <div className="flex-1 px-5 pb-6 pt-7">
          <header className="flex items-center gap-4">
            <button
              aria-label="Back to Marketplace products"
              className="flex h-6 w-6 shrink-0 items-center justify-center text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              type="button"
              onClick={onBack}
            >
              <ArrowLeft
                aria-hidden="true"
                className="h-[21px] w-[21px]"
                strokeWidth={2}
              />
            </button>

            <h1
              className="text-[15px] font-bold leading-[1.25] text-gray-950"
              id="product-details-title"
            >
              Product details
            </h1>
          </header>

          <div className="mt-7 flex items-start gap-3">
            <div className="flex h-[52px] w-[52px] shrink-0 items-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white">
              <Store
                aria-hidden="true"
                className="h-[25px] w-[25px] text-brand"
                strokeWidth={2}
              />
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <h2 className="text-[18px] font-bold leading-[1.2] text-gray-950">
                {pickupLocation.name}
              </h2>

              <p className="mt-2 flex gap-1.5 text-[12px] leading-[1.45] text-slate-400">
                <MapPin
                  aria-hidden="true"
                  className="mt-[1px] h-[14px] w-[14px] shrink-0 text-brand"
                  strokeWidth={2}
                />
                <span>{pickupLocation.address}</span>
              </p>
            </div>
          </div>

          <div className="mt-5 border-y border-zinc-200 py-4">
            <div className="grid grid-cols-3 text-brand">
              <button
                className="flex items-center justify-center gap-2 text-[13px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                type="button"
              >
                <Navigation
                  aria-hidden="true"
                  className="h-[16px] w-[16px]"
                  strokeWidth={1.8}
                />
                Navigate
              </button>

              <button
                className="flex items-center justify-center gap-2 border-x border-zinc-200 text-[13px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                type="button"
              >
                <Phone
                  aria-hidden="true"
                  className="h-[16px] w-[16px]"
                  strokeWidth={1.8}
                />
                Call
              </button>

              <button
                className="flex items-center justify-center gap-2 text-[13px] font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                type="button"
              >
                <Share2
                  aria-hidden="true"
                  className="h-[16px] w-[16px]"
                  strokeWidth={1.8}
                />
                Share
              </button>
            </div>
          </div>

          <div className="mt-7">
            <div className="overflow-hidden rounded-[18px] border border-zinc-200 bg-white shadow-[0_2px_6px_rgba(20,14,50,0.04)]">
              <img
                alt={product.name}
                className="aspect-square w-full object-cover"
                src={selectedVariant?.imageUrl ?? product.imageUrl}
              />
            </div>

            <div className="mt-5 text-center">
              <h2 className="text-[20px] font-bold leading-[1.2] text-gray-950">
                {product.name}
              </h2>

              <p className="mt-3 text-[20px] font-bold leading-[1.25] text-gray-900">
                {formatMoney(selectedVariant?.price ?? product.startingPrice)}
              </p>

              <p className="mx-auto mt-3 max-w-[320px] text-[13px] leading-[1.45] text-slate-500">
                {product.description}
              </p>
            </div>
          </div>

          <div className="mt-7 rounded-[18px] border border-zinc-200 bg-white p-4 shadow-[0_2px_6px_rgba(20,14,50,0.04)]">
            <h2 className="text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
              Pickup details
            </h2>

            <div className="mt-4 flex flex-col gap-3">
              <div className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand"
                  strokeWidth={1.9}
                />
                <div>
                  <p className="text-[13px] font-semibold leading-[1.35] text-gray-900">
                    {pickupLocation.distance}
                  </p>
                  <p className="mt-1 text-[12px] leading-[1.45] text-slate-500">
                    {pickupLocation.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock3
                  aria-hidden="true"
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand"
                  strokeWidth={1.9}
                />
                <div>
                  <p className="text-[13px] font-semibold leading-[1.35] text-gray-900">
                    {pickupLocation.pickupWindow}
                  </p>
                  <p className="mt-1 text-[12px] leading-[1.45] text-slate-500">
                    {pickupLocation.hours}
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <ShieldCheck
                  aria-hidden="true"
                  className="mt-0.5 h-[18px] w-[18px] shrink-0 text-brand"
                  strokeWidth={1.9}
                />
                <div>
                  <p className="text-[13px] font-semibold leading-[1.35] text-gray-900">
                    Verified 1Fi partner
                  </p>
                  <p className="mt-1 text-[12px] leading-[1.45] text-slate-500">
                    {pickupLocation.note}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-6">
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
          </div>
        </div>

        <footer className="sticky bottom-0 flex items-center gap-3 bg-[#F6F6F6] px-5 pb-[calc(1rem+env(safe-area-inset-bottom))] pt-3">
          <button
            aria-label="Share product"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand bg-white text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            type="button"
          >
            <Share2
              aria-hidden="true"
              className="h-[21px] w-[21px]"
              strokeWidth={2}
            />
          </button>

          <button
            className="flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand px-4 text-[15px] font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50"
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
            Continue
            <ArrowRight
              aria-hidden="true"
              className="h-[18px] w-[18px]"
              strokeWidth={2}
            />
          </button>
        </footer>
      </div>
    </section>
  );
}