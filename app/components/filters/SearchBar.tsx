"use client";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div>
      <div className="relative group  ">
        {/* Input */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="input-primary"
        />

        {/* Search Icon */}
        <Search size={16} className="icon-left" />

        {/* Clear Button */}
        {value && (
          <button onClick={() => onChange("")} className="btn-clear">
            <X
              size={14}
              className="btn-x"
            />
          </button>
        )}
      </div>
    </div>
  );
}
