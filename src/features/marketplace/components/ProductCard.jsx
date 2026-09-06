import { formatMoney } from "../utils/formatMoney";

/**
 * Keeps product cards presentation-only by letting their parent own navigation
 * and identify selections through stable product IDs.
 */
export function ProductCard({ product, onSelect }) {
  let lowestEmiPlan = product.emiPlans[0];

  for (const emiPlan of product.emiPlans) {
    if (
      lowestEmiPlan === undefined ||
      emiPlan.monthlyPayment.amount < lowestEmiPlan.monthlyPayment.amount
    ) {
      lowestEmiPlan = emiPlan;
    }
  }

  return (
    <button
      aria-label={`View ${product.name}`}
      className="flex w-full cursor-pointer items-center gap-3 rounded-[18px] border border-zinc-200 bg-white p-3.5 text-left shadow-[0_2px_6px_rgba(20,14,50,0.04)] transition-shadow hover:shadow-[0_6px_16px_rgba(20,14,50,0.06)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#712CDC]"
      type="button"
      onClick={() => onSelect(product.id)}
    >
      <div className="relative mr-2 h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-zinc-200">
        <img
          alt={product.name}
          className="h-full w-full object-cover"
          loading="lazy"
          src={product.imageUrl}
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-[13px] leading-[1.45] text-gray-500">
          {product.description}
        </p>
        <div className="mt-2 flex items-end justify-between gap-3">
          <p className="text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
            {formatMoney(product.startingPrice)}
          </p>
          {lowestEmiPlan ? (
            <p className="shrink-0 text-[13px] leading-[1.45] text-gray-500">
              {formatMoney(lowestEmiPlan.monthlyPayment)}/mo
            </p>
          ) : null}
        </div>
      </div>
    </button>
  );
}
