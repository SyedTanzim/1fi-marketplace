import { Search } from "lucide-react";

export function SearchBar({ label, placeholder, value, onChange }) {
  return (
    <div className="flex h-[46px] items-center gap-[10px] rounded-full border border-zinc-200 bg-white px-4">
      <Search
        aria-hidden="true"
        className="h-[17px] w-[17px] shrink-0 text-gray-400"
      />
      <input
        aria-label={label}
        className="min-w-0 flex-1 bg-transparent text-[13px] leading-[1.45] text-gray-900 outline-none placeholder:text-gray-400"
        placeholder={placeholder}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}