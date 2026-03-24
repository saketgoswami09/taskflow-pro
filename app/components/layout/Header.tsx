"use client";
import { Moon, Sun, Zap } from "lucide-react";

interface HeaderProps {
  isDark: boolean;
  onThemeToggle: () => void;
}

export function Header({ isDark, onThemeToggle }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200/60 dark:border-zinc-800/60 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-xl">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo / Brand */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 
            group-hover:bg-indigo-500/20 transition-all">
            <Zap size={18} />
          </div>

          <h1 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            TaskFlow <span className="text-zinc-400 font-medium">Pro</span>
          </h1>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          
          {/* Theme Toggle */}
          <button
            onClick={onThemeToggle}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 
            bg-white/60 dark:bg-zinc-900/60 
            hover:bg-zinc-100 dark:hover:bg-zinc-800 
            transition-all duration-200 
            shadow-sm hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            {isDark ? (
              <Sun size={18} className="text-yellow-500" />
            ) : (
              <Moon size={18} className="text-zinc-700 dark:text-zinc-300" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}