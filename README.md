# 1Fi Marketplace

A mobile-first marketplace experience inspired by 1Fi's visual language. Users can browse products, search the catalogue, review pickup information, choose a product variant and EMI plan, and continue toward checkout.

## Features

- Mobile-first interface constrained to a centered `500px` app viewport
- Marketplace search with empty, loading, and error states
- Product cards with INR price formatting
- Full-screen product details experience
- Product variant and EMI plan selection
- Store pickup details with navigate, call, and share actions
- Top Brands, Nearby Stores, and Marketplace tabs
- Persistent 1Fi-style bottom navigation
- Accessible labels, tab semantics, focus states, and disabled controls
- Centralized brand colors through Tailwind theme tokens

## Tech Stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/guide/packages/lucide-react)
- [ESLint](https://eslint.org/)
- Plain JavaScript and JSX

## Getting Started

### Prerequisites

- Node.js `20.19+` or `22.12+`
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone git@github.com:SyedTanzim/1fi-marketplace.git
cd 1fi-marketplace
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server with hot reload. |
| `npm run build` | Create an optimized production build in `dist/`. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Check the codebase with ESLint. |

## Project Structure

```text
1fi-marketplace/
├── public/                         # Static assets
├── src/
│   ├── assets/                     # Images used by the app
│   ├── components/                 # Shared UI components
│   │   ├── BottomNav.jsx
│   │   └── SearchBar.jsx
│   ├── features/
│   │   ├── marketplace/
│   │   │   ├── components/         # Marketplace list and detail UI
│   │   │   ├── data/               # Mock product catalogue
│   │   │   ├── hooks/              # Data and selection state
│   │   │   ├── services/           # Async marketplace data boundary
│   │   │   └── utils/              # Currency formatting utilities
│   │   └── shop/                    # Shop page and tab navigation
│   ├── App.jsx                      # Application entry component
│   ├── index.css                    # Global styles and theme tokens
│   └── main.jsx                     # React bootstrap
├── eslint.config.js
├── vite.config.js
└── package.json
```

## Data and Application Flow

Marketplace data currently comes from `src/features/marketplace/data/marketplace.mock.js`. The service layer keeps data access asynchronous so a real API can replace the mock source without changing the presentation components.

```text
Mock data → marketplace service → products hook → marketplace UI
                                             └→ product selection hook
```

Each product includes its own variants, EMI plans, specifications, and pickup location. To add another product, follow the existing object shape in the mock data file and provide unique IDs for the product, variants, and EMI plans.

## Styling

The interface uses Tailwind CSS utility classes. Shared brand colors are defined in `src/index.css`:

```css
@theme {
  --color-brand: #712cdc;
  --color-brand-light: #f5f0ff;
  --color-brand-border: #ece5ff;
}
```

Use the corresponding `brand`, `brand-light`, and `brand-border` utilities instead of repeating hexadecimal values in components.

## Production Build

Before deploying, verify the project locally:

```bash
npm run lint
npm run build
npm run preview
```

## Deploying to Vercel

Import this repository into [Vercel](https://vercel.com/new). Vercel should detect Vite automatically. If manual configuration is required, use:

| Setting | Value |
| --- | --- |
| Framework Preset | Vite |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Install Command | `npm install` |

Every push to the production branch will trigger a new deployment after the Git repository is connected.

## Current Scope

This project currently uses local mock data. Checkout, navigation, phone, sharing, user accounts, payment processing, and backend persistence are not yet connected to production services. The Continue action confirms the selected product configuration in the interface and represents the handoff point for a future checkout flow.

## Contributing

1. Create a branch for your change.
2. Keep components focused and place feature-specific code inside its feature directory.
3. Run `npm run lint` and `npm run build` before committing.
4. Use [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

Example:

```text
feat(marketplace): add product pickup details
```
