/**
 * Keeps availability rules visible at the point of choice while leaving the
 * product-selection hook responsible for validating the final state.
 */
export function VariantSelector({
  variants,
  selectedVariantId,
  onSelect,
}) {
  return (
    <fieldset>
      <legend className="text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
        Choose a variant
      </legend>

      <div className="mt-3 flex flex-wrap gap-2">
        {variants.map((variant) => {
          const isSelected = selectedVariantId === variant.id;

          return (
            <button
              key={variant.id}
              aria-label={`${variant.label}${
                variant.isAvailable ? "" : ", unavailable"
              }`}
              aria-pressed={isSelected}
              className={`rounded-full border px-4 py-2 text-[13px] leading-[1.45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:cursor-not-allowed disabled:opacity-50 ${
                isSelected
                  ? "border-brand bg-brand-light text-brand"
                  : "border-zinc-200 bg-white text-gray-500"
              }`}
              disabled={!variant.isAvailable}
              type="button"
              onClick={() => onSelect(variant.id)}
            >
              {variant.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
