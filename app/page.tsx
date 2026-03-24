"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

import { Header } from "./components/layout/Header";
import { SearchBar } from "./components/filters/SearchBar";
import type { ModalState } from "@/app/types";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [rawSearch, setRawSearch] = useState("");
  const [modal, setModal] = useState<ModalState>({ isOpen: false, type: null });

  const toggleTheme = () => {
    setIsDark((d) => !d);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col">
      <Header isDark={isDark} onThemeToggle={toggleTheme} />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <div className="max-w-5xl mx-auto px-6 pt-10">

          {/* Top Controls */}
          <div className="flex items-center justify-between gap-4">
            
            {/* Search */}
            <div className="flex-1 max-w-md">
              <SearchBar value={rawSearch} onChange={setRawSearch} />
            </div>

            {/* Add Task Button */}
            <button
              onClick={() => setModal({ isOpen: true, type: "create" })}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl 
              bg-indigo-600 text-white text-sm font-medium
              hover:bg-indigo-500 transition-all duration-200
              shadow-sm hover:shadow-md
              focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <Plus size={16} />
              Add Task
            </button>

          </div>

        </div>
      </main>
    </div>
  );
}