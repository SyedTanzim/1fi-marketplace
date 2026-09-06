/**
 * Mirrors the product-list geometry during retrieval to reduce layout movement
 * without pretending that unavailable product information has already loaded.
 */
export function MarketplaceSkeleton() {
  return (
    <div
      aria-busy="true"
      aria-label="Loading Marketplace products"
      className="flex animate-pulse flex-col gap-4"
      role="status"
    >
      <span className="sr-only">Loading Marketplace products...</span>

      <div className="h-[46px] rounded-full border border-zinc-200 bg-white" />
      <div className="h-6 w-40 rounded-full bg-zinc-100" />

      <div className="flex flex-col gap-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            aria-hidden="true"
            className="flex items-center gap-3 rounded-[18px] border border-zinc-200 bg-white p-3.5 shadow-[0_2px_6px_rgba(20,14,50,0.04)]"
          >
            <div className="mr-2 h-16 w-16 shrink-0 rounded-xl bg-zinc-100" />
            <div className="flex flex-1 flex-col gap-3">
              <div className="h-4 w-2/3 rounded-full bg-zinc-100" />
              <div className="h-3 w-full rounded-full bg-zinc-100" />
              <div className="h-4 w-1/3 rounded-full bg-zinc-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
