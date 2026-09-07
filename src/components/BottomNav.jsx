import {
  ChartNoAxesCombined,
  House,
  ReceiptIndianRupee,
  Store,
  User,
} from "lucide-react";

/**
 * Preserves the established 1Fi navigation frame around the assignment feature
 * while allowing a future router to own destination changes.
 */
export function BottomNav({ activeItem = "shop", onNavigate = () => {} }) {
  const items = [
    { value: "home", label: "Home", icon: House },
    { value: "shop", label: "Shop", icon: Store },
    { value: "emi-dues", label: "EMI Dues", icon: ReceiptIndianRupee },
    { value: "limit", label: "Limit", icon: ChartNoAxesCombined },
    { value: "profile", label: "Profile", icon: User },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 px-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-[500px] items-stretch rounded-[28px] border border-white/40 bg-white px-1.5 py-1.5 shadow-[0_8px_32px_rgba(20,14,50,0.12),0_0_0_1px_rgba(255,255,255,0.18)_inset]">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeItem === item.value;

          return (
            <button
              key={item.value}
              aria-current={isActive ? "page" : undefined}
              className={`group relative flex min-w-0 flex-1 flex-col items-center justify-center gap-[3px] rounded-[18px] px-1 py-2 text-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                isActive ? "text-brand" : "text-gray-400 hover:text-gray-600"
              }`}
              type="button"
              onClick={() => onNavigate(item.value)}
            >
              {isActive ? (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute left-1/2 -top-[3px] h-[3px] w-8 -translate-x-1/2 rounded-full bg-brand"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-1 rounded-[14px] opacity-50"
                    style={{
                      background:
                        "radial-gradient(at 50% 30%, rgba(113, 44, 220, 0.12) 0%, transparent 70%)",
                    }}
                  />
                </>
              ) : null}

              <Icon
                aria-hidden="true"
                className={`relative h-[22px] w-[22px] cursor-pointer transition-transform duration-200 group-active:scale-90 ${
                  isActive ? "drop-shadow-[0_0_6px_rgba(113,44,220,0.3)]" : ""
                }`}
                strokeWidth={isActive ? 2 : 1.75}
              />

              <span
                className={`relative max-w-full truncate text-[10px] tracking-wide ${
                  isActive ? "font-bold" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}