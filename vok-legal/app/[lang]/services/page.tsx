import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import AnimatedSection from "@/components/AnimatedSection";
import ServicesGrid from "@/components/ServicesGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.servicesPage.title, description: dict.servicesPage.subtitle };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const categories = [
    dict.servicesPage.categoryCorporate,
    dict.servicesPage.categoryLitigation,
    dict.servicesPage.categoryCompliance,
    dict.servicesPage.categoryIP,
    dict.servicesPage.categoryPeople,
  ];

  return (
    <section className="container-vok py-20">
      <AnimatedSection className="max-w-2xl">
        <p className="section-label mb-5">{dict.sectionLabels.services}</p>
        <h1 className="font-display text-4xl sm:text-5xl">{dict.servicesPage.title}</h1>
        <p className="mt-5 text-base leading-relaxed text-obsidian/65 dark:text-bone/65">
          {dict.servicesPage.subtitle}
        </p>
      </AnimatedSection>

      <div className="mt-14">
        <ServicesGrid
          services={dict.servicesPage.list}
          categories={categories}
          allLabel={dict.servicesPage.categoryAll}
        />
      </div>
    </section>
  );
}
