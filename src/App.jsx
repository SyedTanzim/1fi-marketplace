import { useState } from "react";

import "./App.css";
import { ShopPage } from "./features/shop/ShopPage";

/**
 * Keeps the application entry point thin so routing or other top-level
 * providers can be introduced later without coupling them to Shop internals.
 */
function App() {
  const [confirmedSelection, setConfirmedSelection] = useState(null);

  function handleProceed(selection) {
    // The assignment stops at the CTA, so this just confirms the selection
    // was captured — a real integration would send it to a checkout flow.
    setConfirmedSelection(selection);
  }

  return (
    <>
      <ShopPage onProceed={handleProceed} />

      {confirmedSelection ? (
        <div
          className="fixed inset-x-4 bottom-24 z-70 mx-auto max-w-[468px] rounded-[18px] border border-brand-border bg-white p-3.5 text-center shadow-[0_8px_32px_rgba(20,14,50,0.12)]"
          role="status"
        >
          <p className="text-[13px] leading-[1.45] text-gray-900">
            Selection confirmed. We'll take you to checkout next.
          </p>
          <button
            className="mt-2 cursor-pointer text-[13px] font-semibold text-brand"
            type="button"
            onClick={() => setConfirmedSelection(null)}
          >
            Dismiss
          </button>
        </div>
      ) : null}
    </>
  );
}

export default App;
