import { useState } from "react";

import { BottomNav } from "../../components/layout/BottomNav";
import { Marketplace } from "../marketplace/components/Marketplace";
import { ShopTabs } from "./components/ShopTabs";

/**
 * Owns the Shop section state at page level so tab controls, tab panels, and
 * the persistent navigation frame remain synchronized and accessible.
 */
export function ShopPage({ onProceed }) {
  const [activeTab, setActiveTab] = useState("top-brands");

  return (
    <div className="mx-auto min-h-screen max-w-[500px] bg-white">
      <main className="px-4 py-4 pb-[calc(5rem+env(safe-area-inset-bottom))]">
        <ShopTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-4">
          {activeTab === "top-brands" ? (
            <section
              aria-labelledby="top-brands-tab"
              id="top-brands-panel"
              role="tabpanel"
            >
              <h1 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
                Top Brands
              </h1>
            </section>
          ) : null}

          {activeTab === "nearby-stores" ? (
            <section
              aria-labelledby="nearby-stores-tab"
              id="nearby-stores-panel"
              role="tabpanel"
            >
              <h1 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
                Nearby Stores
              </h1>
            </section>
          ) : null}

          {activeTab === "marketplace" ? (
            <div
              aria-labelledby="marketplace-tab"
              id="marketplace-panel"
              role="tabpanel"
            >
              <Marketplace onProceed={onProceed} />
            </div>
          ) : null}
        </div>
      </main>

      <BottomNav activeItem="shop" />
    </div>
  );
}
