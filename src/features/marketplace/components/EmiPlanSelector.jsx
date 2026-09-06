import { formatMoney } from "../utils/formatMoney";

/**
 * Presents every payment commitment before selection so users can compare
 * tenure, monthly cost, and total payable without hidden financial details.
 */
export function EmiPlanSelector({ plans, selectedPlanId, onSelect }) {
  return (
    <fieldset>
      <legend className="text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
        Choose an EMI plan
      </legend>

      <div className="mt-3 flex flex-col gap-3">
        {plans.map((plan) => {
          const isSelected = selectedPlanId === plan.id;

          return (
            <button
              key={plan.id}
              aria-pressed={isSelected}
              className={`flex w-full items-center justify-between gap-3 rounded-[18px] border p-3.5 text-left shadow-[0_2px_6px_rgba(20,14,50,0.04)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#712CDC] ${
                isSelected
                  ? "border-[#712CDC] bg-[#f5f0ff]"
                  : "border-zinc-200 bg-white"
              }`}
              type="button"
              onClick={() => onSelect(plan.id)}
            >
              <span>
                <span className="block text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
                  {plan.tenureMonths} months
                </span>
                <span className="mt-1 block text-[13px] leading-[1.45] text-gray-500">
                  Total {formatMoney(plan.totalPayable)}
                </span>
              </span>

              <span className="shrink-0 text-right">
                <span className="block text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
                  {formatMoney(plan.monthlyPayment)}
                </span>
                <span className="mt-1 block text-[13px] leading-[1.45] text-gray-500">
                  per month
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
