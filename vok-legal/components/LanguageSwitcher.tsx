"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { i18n, localeMeta, type Locale } from "@/lib/i18n-config";

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function redirectedPathName(locale: Locale) {
    if (!pathname) return `/${locale}`;
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/") || `/${locale}`;
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-obsidian/70 transition-colors hover:text-gold dark:text-bone/70 dark:hover:text-gold"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Globe size={17} strokeWidth={1.5} />
        <span className="font-mono text-xs uppercase tracking-wider">{lang}</span>
      </button>
      {open && (
        <div className="absolute end-0 top-8 z-50 w-44 border border-obsidian/10 bg-bone shadow-seal dark:border-bone/10 dark:bg-charcoal">
          {i18n.locales.map((locale) => (
            <Link
              key={locale}
              href={redirectedPathName(locale)}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 text-sm transition-colors hover:bg-gold/10 hover:text-gold-dim dark:hover:text-gold ${
                locale === lang ? "text-gold" : "text-obsidian/80 dark:text-bone/80"
              }`}
            >
              {localeMeta[locale].native}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
