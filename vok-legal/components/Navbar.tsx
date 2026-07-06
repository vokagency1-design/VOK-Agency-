"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/get-dictionary";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `/${lang}`, label: dict.nav.home },
    { href: `/${lang}/services`, label: dict.nav.services },
    { href: `/${lang}/pricing`, label: dict.nav.pricing },
    { href: `/${lang}/about`, label: dict.nav.about },
    { href: `/${lang}/faq`, label: dict.nav.faq },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-obsidian/10 bg-bone/90 backdrop-blur-md dark:border-bone/10 dark:bg-obsidian/90"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-vok flex h-20 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center">
          <Image src="/logo.png" alt="VOK Legal Agency" width={40} height={40} className="h-9 w-9 object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-obsidian/75 transition-colors hover:text-gold-dim dark:text-bone/75 dark:hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <LanguageSwitcher lang={lang} />
          <ThemeToggle />
          <Link href={`/${lang}/contact`} className="btn-primary text-xs">
            {dict.nav.cta}
          </Link>
        </div>

        <button
          type="button"
          className="flex items-center gap-3 lg:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <LanguageSwitcher lang={lang} />
          <Menu size={22} strokeWidth={1.5} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-obsidian text-bone lg:hidden"
          >
            <div className="container-vok flex h-20 items-center justify-between">
              <Image src="/logo.png" alt="VOK Legal Agency" width={36} height={36} className="h-9 w-9 object-contain" />
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>
            <nav className="container-vok mt-8 flex flex-col gap-6">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl text-bone/90 hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <Link
                href={`/${lang}/contact`}
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-fit"
              >
                {dict.nav.cta}
              </Link>
              <div className="mt-6 flex items-center gap-2 text-bone/70 [&_button]:text-bone/70 [&_button:hover]:text-gold">
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
