import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import Seal from "@/components/Seal";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const stats = [
    { value: dict.hero.stat1Value, label: dict.hero.stat1Label },
    { value: dict.hero.stat2Value, label: dict.hero.stat2Label },
    { value: dict.hero.stat3Value, label: dict.hero.stat3Label },
    { value: dict.hero.stat4Value, label: dict.hero.stat4Label },
  ];

  const process = [
    { title: dict.home.process1Title, body: dict.home.process1Body },
    { title: dict.home.process2Title, body: dict.home.process2Body },
    { title: dict.home.process3Title, body: dict.home.process3Body },
    { title: dict.home.process4Title, body: dict.home.process4Body },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-obsidian/10 bg-bone dark:border-bone/10 dark:bg-obsidian">
        <div className="container-vok grid grid-cols-1 gap-16 py-20 lg:grid-cols-12 lg:py-32">
          <div className="lg:col-span-8">
            <AnimatedSection>
              <p className="section-label mb-6">{dict.hero.eyebrow}</p>
              <h1 className="font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                {dict.hero.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-obsidian/65 dark:text-bone/65 sm:text-lg">
                {dict.hero.subtitle}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={`/${lang}/contact`} className="btn-primary">
                  {dict.hero.ctaPrimary}
                </Link>
                <Link href={`/${lang}/services`} className="btn-secondary">
                  {dict.hero.ctaSecondary}
                </Link>
              </div>
            </AnimatedSection>
          </div>

          <div className="flex items-start justify-center lg:col-span-4 lg:justify-end">
            <AnimatedSection delay={0.15}>
              <div className="relative flex h-48 w-48 items-center justify-center sm:h-56 sm:w-56">
                <Seal size={224} />
                <Image
                  src="/logo.png"
                  alt="VOK Legal Agency"
                  width={96}
                  height={96}
                  className="absolute h-24 w-24 object-contain"
                  priority
                />
              </div>
            </AnimatedSection>
          </div>
        </div>

        <div className="container-vok grid grid-cols-2 gap-8 border-t border-obsidian/10 py-10 dark:border-bone/10 md:grid-cols-4">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.08}>
              <p className="font-display text-3xl text-gold sm:text-4xl">{s.value}</p>
              <p className="mt-1.5 text-xs uppercase tracking-wide text-obsidian/55 dark:text-bone/55">
                {s.label}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="container-vok py-24">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <p className="section-label mb-5">§ VOK</p>
          <h2 className="font-display text-3xl leading-snug sm:text-4xl">{dict.home.introTitle}</h2>
          <p className="mt-6 text-base leading-relaxed text-obsidian/65 dark:text-bone/65">
            {dict.home.introBody}
          </p>
        </AnimatedSection>
      </section>

      {/* Services preview */}
      <section className="border-y border-obsidian/10 bg-parchment/40 py-24 dark:border-bone/10 dark:bg-charcoal/30">
        <div className="container-vok">
          <AnimatedSection className="mx-auto max-w-2xl text-center">
            <p className="section-label mb-5">{dict.sectionLabels.services}</p>
            <h2 className="font-display text-3xl sm:text-4xl">{dict.home.servicesTitle}</h2>
            <p className="mt-5 text-base leading-relaxed text-obsidian/65 dark:text-bone/65">
              {dict.home.servicesSubtitle}
            </p>
          </AnimatedSection>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dict.servicesPage.list.slice(0, 6).map((s) => (
              <ServiceCard key={s.id} {...s} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${lang}/services`}
              className="inline-flex items-center gap-2 font-medium text-gold-dim transition-colors hover:text-gold dark:text-gold"
            >
              {dict.home.viewAllServices}
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-vok py-24">
        <AnimatedSection className="mx-auto max-w-2xl text-center">
          <p className="section-label mb-5">{dict.sectionLabels.process}</p>
          <h2 className="font-display text-3xl sm:text-4xl">{dict.home.processTitle}</h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <AnimatedSection key={p.title} delay={i * 0.1}>
              <span className="font-mono text-sm text-gold">{`0${i + 1}`}</span>
              <div className="gold-rule my-4" />
              <h3 className="font-display text-xl">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-obsidian/60 dark:text-bone/60">{p.body}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-vok py-24 text-center">
        <AnimatedSection className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl">{dict.home.ctaTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-obsidian/65 dark:text-bone/65">
            {dict.home.ctaSubtitle}
          </p>
          <Link href={`/${lang}/contact`} className="btn-primary mt-9 inline-flex">
            {dict.home.ctaButton}
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
