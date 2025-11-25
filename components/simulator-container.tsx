"use client";

import type React from "react";
import { ThemeToggle } from "./theme-toggle";

export function SimulatorContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-6 transition-colors duration-300">
      <div className="w-full max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10 text-center space-y-2 relative">
          <div className="absolute right-0 top-0">
            <ThemeToggle />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-3">
            Pumping Lemma Simulator
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interactive visualization of the Pumping Lemma for Context Free Languages
          </p>
        </header>
        {children}
      </div>
    </div>
  );
}
