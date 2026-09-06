export type Currency = "INR";

export interface Money {
  amount: number;
  currency: Currency;
}

export interface ProductVariant {
  id: string;
  label: string;
  price: Money;
  imageUrl?: string;
  isAvailable: boolean;
}

export interface EmiPlan {
  id: string;
  tenureMonths: number;
  monthlyPayment: Money;
  totalPayable: Money;
}

export interface ProductDetail {
  label: string;
  value: string;
}

export interface MarketplaceProduct {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  startingPrice: Money;
  variants: ProductVariant[];
  emiPlans: EmiPlan[];
  details: ProductDetail[];
}

export interface ProductSelection {
  productId: MarketplaceProduct["id"];
  variantId: ProductVariant["id"];
  emiPlanId: EmiPlan["id"];
}
