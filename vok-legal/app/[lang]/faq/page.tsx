import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import AnimatedSection from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.faqPage.title, description: dict.faqPage.subtitle };
}

export default async function FaqPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <section className="container-vok py-20">
      <AnimatedSection className="mx-auto max-w-2xl text-center">
        <p className="section-label mb-5">{dict.sectionLabels.faq}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{dict.faqPage.title}</h1>
        <p className="mt-5 text-base leading-relaxed text-obsidian/65 dark:text-bone/65">
          {dict.faqPage.subtitle}
        </p>
      </AnimatedSection>

      <div className="mx-auto mt-14 max-w-3xl">
        <FaqAccordion items={dict.faqPage.items} />
      </div>
    </section>
  );
}
