"use client";
import { useState } from "react";

import { Header } from "./components/layout/Header";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((d) => !d);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-[var(--bg)] flex flex-col">
      <Header isDark={isDark} onThemeToggle={toggleTheme} />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex items-center justify-center">
        <p className="text-muted-foreground">
          Start building your tasks 🚀
        </p>
      </main>
    </div>
  );
}