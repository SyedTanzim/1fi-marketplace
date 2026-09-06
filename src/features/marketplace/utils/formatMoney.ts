import type { Money } from "../types/marketplace";

/**
 * Keeps currency presentation consistent and locale-aware instead of letting
 * individual components assemble potentially ambiguous price strings.
 */
export function formatMoney(money: Money): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: money.currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(money.amount);
}