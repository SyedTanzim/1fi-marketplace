import { CircleAlert } from "lucide-react";

/**
 * Gives failed requests a recoverable path while keeping technical transport
 * details out of the Marketplace presentation.
 */
export function MarketplaceError({ message, onRetry }) {
  return (
    <div
      className="rounded-[18px] border border-zinc-200 bg-white p-3.5 text-center shadow-[0_2px_6px_rgba(20,14,50,0.04)]"
      role="alert"
    >
      <CircleAlert
        aria-hidden="true"
        className="mx-auto h-[22px] w-[22px] text-gray-400"
        strokeWidth={1.75}
      />
      <h2 className="mt-3 text-[15.5px] font-bold leading-[1.25] tracking-[-0.012em] text-gray-900">
        Marketplace could not be loaded
      </h2>
      <p className="mt-2 text-[13px] leading-[1.45] text-gray-500">
        {message}
      </p>
      <button
        className="mt-4 rounded-full bg-brand px-4 py-2 text-sm font-semibold tracking-[-0.005em] text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        type="button"
        onClick={onRetry}
      >
        Try again
      </button>
    </div>
  );
}
