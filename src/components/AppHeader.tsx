"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronLeft, GraduationCap } from "lucide-react";

export default function AppHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-10 border-b border-black/10 dark:border-white/10 bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-6">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-md transition-transform active:scale-[0.97]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-accent/10 text-accent">
            <GraduationCap size={16} strokeWidth={2} />
          </span>
          <span className="text-sm font-semibold">Azure Practice</span>
        </Link>

        {!isHome && (
          <Link
            href="/"
            className="flex items-center gap-1 rounded-md text-sm text-black/50 dark:text-white/50 transition-transform hover:text-black/80 dark:hover:text-white/80 active:scale-[0.97]"
          >
            <ChevronLeft size={16} strokeWidth={2} />
            <span className="hidden sm:inline">All exams</span>
          </Link>
        )}
      </div>
    </header>
  );
}
