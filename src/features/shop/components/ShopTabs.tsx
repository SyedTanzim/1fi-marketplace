import type { ShopTab } from "../shop";

/**
 * Keeps ownership of the active Shop section in the page so tab navigation
 * and rendered content cannot drift into separate states.
 */
export interface ShopTabsProps {
  activeTab: ShopTab;
  onTabChange: (tab: ShopTab) => void;
}

/**
 * Keeps labels and state values paired in one typed source so adding the
 * Marketplace tab cannot introduce mismatched navigation values.
 */
export const SHOP_TABS = [
  { value: "top-brands", label: "Top Brands" },
  { value: "nearby-stores", label: "Nearby Stores" },
  { value: "marketplace", label: "1Fi Marketplace" },
] satisfies ReadonlyArray<{ value: ShopTab; label: string }>;

/**
 * Uses a controlled tab list so the selected visual state and the Shop page's
 * rendered section always change through the same source of truth.
 */
export function ShopTabs({
  activeTab,
  onTabChange,
}: ShopTabsProps) {
  return (
    <div
      aria-label="Shop sections"
      className="flex gap-2 rounded-full border border-[#ece5ff] bg-[#f5f0ff] p-1.5 shadow-[0_1px_3px_rgba(113,44,220,0.06)]"
      role="tablist"
    >
      {SHOP_TABS.map((tab) => {
        const isActive = activeTab === tab.value;

        return (
          <button
            key={tab.value}
            aria-controls={`${tab.value}-panel`}
            aria-selected={isActive}
            className={`relative flex-1 rounded-full px-2 py-3 text-sm font-semibold tracking-[-0.005em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#712CDC] ${
              isActive
                ? "bg-white text-[#712CDC] shadow-[0_1px_3px_rgba(20,14,50,0.10),0_0_0_1px_rgba(113,44,220,0.08)]"
                : "text-gray-500"
            }`}
            id={`${tab.value}-tab`}
            role="tab"
            type="button"
            onClick={() => onTabChange(tab.value)}
          >
            {tab.label}
            {isActive ? (
              <span
                aria-hidden="true"
                className="absolute bottom-1.5 left-1/2 h-[2.5px] w-[22px] -translate-x-1/2 rounded-full bg-[#712CDC]"
              />
            ) : null}
          </button>
        );
      })}
    </div>
  );
}