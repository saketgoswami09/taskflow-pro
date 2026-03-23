"use client";
import { Moon, Sun, Zap } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Header({ isDark, onThemeToggle }: HeaderProps) {
    
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Zap className="text-accent" size={20} />
        <h1 className="font-bold text-lg tracking-tight">TaskFlow Pro</h1>
      </div>
      <button
        onClick={onThemeToggle}
        className="p-2 rounded-lg hover:text-white hover:bg-zinc-100 dark:hover:bg-blue-600 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}
