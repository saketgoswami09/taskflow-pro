"use client";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative flex items-center mt-8">
      <Search size={15} className="absolute left-3 text-zinc-400" />
      <input
        type="text"
        placeholder="Search tasks..."
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full bg-surface border border-border rounded-xl pl-9 pr-9 py-2 text-sm outline-none focus:ring-2 focus:ring-accent/50 transition-all"
      />
      {value && (
        <button onClick={() => onChange("")} className="absolute right-3  border-border border-amber-50 ">
          <X size={14} className="text-zinc-400 hover:text-zinc-600" />
        </button>
      )}
    </div>
  );
}
