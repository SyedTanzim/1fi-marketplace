import { useState } from "react";
import { SearchBar } from "../../components/SearchBar";
import shopBanner from "../../assets/shop-banner.webp";
import { BottomNav } from "../../components/BottomNav";
import { Marketplace } from "../marketplace/components/Marketplace";
import { ShopTabs } from "./components/ShopTabs";

/**
 * Owns the Shop section state at page level so tab controls, tab panels, and
 * the persistent navigation frame remain synchronized and accessible.
 */
export function ShopPage({ onProceed }) {
  const [activeTab, setActiveTab] = useState("marketplace");
  const [topBrandsSearchQuery, setTopBrandsSearchQuery] = useState("");
  const [nearbyStoresSearchQuery, setNearbyStoresSearchQuery] = useState("");

  return (
    <div className="mx-auto min-h-screen max-w-[500px] bg-[#F6F6F6]">
      <img
        alt="Shop today, pay later using mutual funds"
        className="aspect-[25/16] w-full object-cover min-[532px]:relative min-[532px]:-left-4 min-[532px]:w-[calc(100%+2rem)] min-[532px]:max-w-none"
        src={shopBanner}
      />

      <main className="relative -mt-7 px-5 pb-[calc(5rem+env(safe-area-inset-bottom))]">
        <ShopTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="mt-4">
          {activeTab === "top-brands" ? (
            <section
              aria-labelledby="top-brands-tab"
              className="flex flex-col gap-4"
              id="top-brands-panel"
              role="tabpanel"
            >
              <SearchBar
                label="Search top brands"
                placeholder="  Search Top Brands..."
                value={topBrandsSearchQuery}
                onChange={setTopBrandsSearchQuery}
              />
              <h1 className="text-[20px] font-semibold leading-[1.2] tracking-[-0.018em] text-gray-900">
                Top Brands
              </h1>
            </section>
          ) : null}

          {activeTab === "nearby-stores" ? (
            <section
              aria-labelledby="nearby-stores-tab"
              className="flex flex-col gap-4"
              id="nearby-stores-panel"
              role="tabpanel"
            >
              <SearchBar
                label="Search top brands"
                placeholder="  Search Top Brands..."
                value={topBrandsSearchQuery}
                onChange={setTopBrandsSearchQuery}
              />
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
