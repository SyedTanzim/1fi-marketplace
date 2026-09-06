export const MOCK_MARKETPLACE_PRODUCTS = [
  {
    id: "iphone-16",
    name: "iPhone 16",
    description: "Powerful everyday performance with an advanced camera system.",
    imageUrl:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80",
    startingPrice: { amount: 79_900, currency: "INR" },
    variants: [
      {
        id: "iphone-16-black",
        label: "Black",
        price: { amount: 79_900, currency: "INR" },
        isAvailable: true,
      },
      {
        id: "iphone-16-blue",
        label: "Ultramarine",
        price: { amount: 79_900, currency: "INR" },
        isAvailable: true,
      },
    ],
    emiPlans: [
      {
        id: "iphone-16-6-months",
        tenureMonths: 6,
        monthlyPayment: { amount: 13_316.67, currency: "INR" },
        totalPayable: { amount: 79_900, currency: "INR" },
      },
      {
        id: "iphone-16-12-months",
        tenureMonths: 12,
        monthlyPayment: { amount: 6_658.33, currency: "INR" },
        totalPayable: { amount: 79_900, currency: "INR" },
      },
    ],
    details: [
      { label: "Display", value: "6.1-inch display" },
      { label: "Storage", value: "128 GB" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: "wireless-headphones",
    name: "Wireless Headphones",
    description: "Immersive over-ear audio with active noise cancellation.",
    imageUrl:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    startingPrice: { amount: 24_990, currency: "INR" },
    variants: [
      {
        id: "wireless-headphones-black",
        label: "Black",
        price: { amount: 24_990, currency: "INR" },
        isAvailable: true,
      },
      {
        id: "wireless-headphones-silver",
        label: "Silver",
        price: { amount: 24_990, currency: "INR" },
        isAvailable: false,
      },
    ],
    emiPlans: [
      {
        id: "wireless-headphones-3-months",
        tenureMonths: 3,
        monthlyPayment: { amount: 8_330, currency: "INR" },
        totalPayable: { amount: 24_990, currency: "INR" },
      },
      {
        id: "wireless-headphones-6-months",
        tenureMonths: 6,
        monthlyPayment: { amount: 4_165, currency: "INR" },
        totalPayable: { amount: 24_990, currency: "INR" },
      },
    ],
    details: [
      { label: "Playback", value: "Up to 30 hours" },
      { label: "Connectivity", value: "Bluetooth" },
      { label: "Warranty", value: "1 year" },
    ],
  },
  {
    id: "smartwatch",
    name: "Smartwatch",
    description: "Fitness, health, and daily notifications on your wrist.",
    imageUrl:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    startingPrice: { amount: 19_990, currency: "INR" },
    variants: [
      {
        id: "smartwatch-graphite",
        label: "Graphite",
        price: { amount: 19_990, currency: "INR" },
        isAvailable: true,
      },
      {
        id: "smartwatch-silver",
        label: "Silver",
        price: { amount: 19_990, currency: "INR" },
        isAvailable: true,
      },
    ],
    emiPlans: [
      {
        id: "smartwatch-3-months",
        tenureMonths: 3,
        monthlyPayment: { amount: 6_663.33, currency: "INR" },
        totalPayable: { amount: 19_990, currency: "INR" },
      },
      {
        id: "smartwatch-6-months",
        tenureMonths: 6,
        monthlyPayment: { amount: 3_331.67, currency: "INR" },
        totalPayable: { amount: 19_990, currency: "INR" },
      },
    ],
    details: [
      { label: "Case size", value: "44 mm" },
      { label: "Water resistance", value: "5 ATM" },
      { label: "Warranty", value: "1 year" },
    ],
  },
];
