"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

import { Header } from "./components/layout/Header";
import { SearchBar } from "./components/filters/SearchBar";
import type { TaskFilters, ModalState } from "@/app/types";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [rawSearch, setRawSearch] = useState("");
  const [modal, setModal] = useState<ModalState>({ isOpen: false, type: null });

  const toggleTheme = () => {
    setIsDark((d) => !d);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col">
      <Header isDark={isDark} onThemeToggle={toggleTheme} />

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-4">
        <div className="flex gap-3">
          <div className="flex-1">
            <SearchBar value={rawSearch} onChange={setRawSearch} />
          </div>
          <button
            onClick={() => setModal({ isOpen: true, type: "create" })}
            className="flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            <Plus size={16} /> Add Task
          </button>
        </div>
      </main>
    </div>
  );
}
