"use client";

import { useMemo, useState } from "react";
import ServiceCard from "./ServiceCard";

type Service = {
  id: string;
  category: string;
  title: string;
  description: string;
};

export default function ServicesGrid({
  services,
  categories,
  allLabel,
}: {
  services: Service[];
  categories: string[];
  allLabel: string;
}) {
  const [active, setActive] = useState<string>(allLabel);

  const filtered = useMemo(
    () => (active === allLabel ? services : services.filter((s) => s.category === active)),
    [active, services, allLabel]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {[allLabel, ...categories].map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`border px-4 py-2 text-xs uppercase tracking-wide transition-colors ${
              active === cat
                ? "border-gold bg-gold text-obsidian"
                : "border-obsidian/15 text-obsidian/60 hover:border-gold hover:text-gold-dim dark:border-bone/15 dark:text-bone/60 dark:hover:text-gold"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <ServiceCard key={s.id} {...s} />
        ))}
      </div>
    </div>
  );
}
