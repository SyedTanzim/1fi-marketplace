export const MOCK_MARKETPLACE_PRODUCTS = [
  {
    id: "iphone-16",
    name: "iPhone 16",
    description: "Powerful everyday performance with an advanced camera system.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNFI3D2Pxk2fB16B3CR59xxd3IqHKsHvI5jcCIMOkzteu3nl8Iev-FP60&s=10",
    startingPrice: { amount: 79_900, currency: "INR" },
    pickupLocation: {
      name: "Imagine Apple Premium Reseller",
      address:
        "Shop G-14, DLF Mega Mall, Golf Course Road, Sector 28, Gurugram",
      distance: "2.4 km away",
      hours: "Open today, 10:30 AM - 9:30 PM",
      pickupWindow: "Pickup available in 45 minutes",
      phone: "+91 98710 42016",
      note: "Carry a valid ID and complete the 1Fi checkout before pickup.",
    },
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcwZDGpU_6yMCGxSNknYzvq0X2O3ezK07wiGRADCV9CYVJQEEcuXqN_A&s=10",
    startingPrice: { amount: 24_990, currency: "INR" },
    pickupLocation: {
      name: "Croma Audio & Gadgets",
      address:
        "Unit 21, Ambience Mall, NH-48, DLF Phase 3, Gurugram",
      distance: "4.1 km away",
      hours: "Open today, 11:00 AM - 10:00 PM",
      pickupWindow: "Pickup available today after 6:00 PM",
      phone: "+91 98102 77145",
      note: "Store team will keep the selected colour aside for 24 hours.",
    },
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
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLvp7IfJuCiXYr9QD8uKt_AUULZ9Ass3oaCElpv-U-Tx1e6rZGfkHRZSc9&s=10",
    startingPrice: { amount: 19_990, currency: "INR" },
    pickupLocation: {
      name: "Reliance Digital Watch Studio",
      address:
        "First Floor, MGF Metropolitan Mall, MG Road, Sector 25, Gurugram",
      distance: "3.2 km away",
      hours: "Open today, 10:00 AM - 9:00 PM",
      pickupWindow: "Pickup available in 2 hours",
      phone: "+91 99990 18422",
      note: "A specialist can help with setup, strap sizing, and pairing.",
    },
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