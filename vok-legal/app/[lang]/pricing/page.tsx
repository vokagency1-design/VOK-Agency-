import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import AnimatedSection from "@/components/AnimatedSection";
import PricingCard from "@/components/PricingCard";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.pricingPage.title, description: dict.pricingPage.subtitle };
}

export default async function PricingPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="container-vok py-20">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-5">{dict.sectionLabels.pricing}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{dict.pricingPage.title}</h1>
        <p className="mt-5 text-base leading-relaxed text-obsidian/65 dark:text-bone/65">
          {dict.pricingPage.subtitle}
        </p>
      </AnimatedSection>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {dict.pricingPage.tiers.map((tier, i) => (
          <AnimatedSection key={tier.name} delay={i * 0.1}>
            <PricingCard
              tier={tier}
              featured={i === 1}
              ctaLabel={dict.pricingPage.getStarted}
              href={`/${lang}/contact`}
            />
          </AnimatedSection>
        ))}
      </div>

      <p className="mt-12 text-center text-sm text-obsidian/50 dark:text-bone/50">
        {dict.pricingPage.note}
      </p>
    </section>
  );
}
