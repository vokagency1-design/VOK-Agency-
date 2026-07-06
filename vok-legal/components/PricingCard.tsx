import Link from "next/link";
import { Check } from "lucide-react";

type Tier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
};

export default function PricingCard({
  tier,
  featured,
  ctaLabel,
  href,
}: {
  tier: Tier;
  featured?: boolean;
  ctaLabel: string;
  href: string;
}) {
  return (
    <div
      className={`flex flex-col p-9 ${
        featured
          ? "border border-gold bg-obsidian text-bone shadow-seal"
          : "card-surface"
      }`}
    >
      <h3 className="font-display text-2xl">{tier.name}</h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          featured ? "text-bone/60" : "text-obsidian/60 dark:text-bone/60"
        }`}
      >
        {tier.description}
      </p>
      <div className="mt-6 flex items-baseline gap-1.5">
        <span className="font-display text-4xl">{tier.price}</span>
        <span className={featured ? "text-bone/50" : "text-obsidian/50 dark:text-bone/50"}>
          {tier.period}
        </span>
      </div>

      <ul className="mt-8 flex-1 space-y-3.5">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <Check size={16} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
            <span className={featured ? "text-bone/80" : "text-obsidian/75 dark:text-bone/75"}>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`mt-9 w-full text-center ${featured ? "btn-primary" : "btn-secondary"}`}
      >
        {ctaLabel}
      </Link>
    </div>
  );
}
