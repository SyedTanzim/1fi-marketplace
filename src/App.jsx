import "./App.css";

import { ShopPage } from "./features/shop/ShopPage";

/**
 * Keeps the application entry point thin so routing or other top-level
 * providers can be introduced later without coupling them to Shop internals.
 */
function App() {
  // The assignment stops at the CTA, so the selected payload remains observable for integration.
  return <ShopPage onProceed={console.log} />;
}

export default App;