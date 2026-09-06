import {
  House,
  ReceiptText,
  Store,
  TrendingUp,
  UserRound,
} from "lucide-react";

/**
 * Preserves the established 1Fi navigation frame around the assignment feature
 * while allowing a future router to own destination changes.
 */
export function BottomNav({ activeItem = "shop", onNavigate = () => {} }) {
  const items = [
    { value: "home", label: "Home", icon: House },
    { value: "shop", label: "Shop", icon: Store },
    { value: "emi-dues", label: "EMI Dues", icon: ReceiptText },
    { value: "limit", label: "Limit", icon: TrendingUp },
    { value: "profile", label: "Profile", icon: UserRound },
  ];

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-[500px] -translate-x-1/2 rounded-[28px] bg-white px-2 shadow-[0_8px_32px_rgba(20,14,50,0.12),0_0_0_1px_rgba(255,255,255,0.18)_inset]"
    >
      {items.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem === item.value;

        return (
          <button
            key={item.value}
            aria-current={isActive ? "page" : undefined}
            className={`relative flex flex-1 flex-col items-center justify-center gap-1 rounded-[18px] py-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#712CDC] ${
              isActive ? "text-[#712CDC]" : "text-gray-400"
            }`}
            style={
              isActive
                ? {
                    background:
                      "radial-gradient(at 50% 30%, rgba(113,44,220,0.12) 0%, transparent 70%)",
                  }
                : undefined
            }
            type="button"
            onClick={() => onNavigate(item.value)}
          >
            {isActive ? (
              <span
                aria-hidden="true"
                className="absolute -top-[3px] left-1/2 h-[3px] w-8 -translate-x-1/2 rounded-full bg-[#712CDC]"
              />
            ) : null}
            <Icon
              aria-hidden="true"
              className={`h-[22px] w-[22px] ${
                isActive
                  ? "drop-shadow-[0_0_6px_rgba(113,44,220,0.3)]"
                  : ""
              }`}
              strokeWidth={isActive ? 2 : 1.75}
            />
            <span
              className={`text-[10px] tracking-wide ${
                isActive ? "font-bold" : "font-medium"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}