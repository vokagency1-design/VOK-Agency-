import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import AnimatedSection from "@/components/AnimatedSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.aboutPage.title, description: dict.aboutPage.subtitle };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const values = [
    { title: dict.aboutPage.value1Title, body: dict.aboutPage.value1Body },
    { title: dict.aboutPage.value2Title, body: dict.aboutPage.value2Body },
    { title: dict.aboutPage.value3Title, body: dict.aboutPage.value3Body },
    { title: dict.aboutPage.value4Title, body: dict.aboutPage.value4Body },
  ];

  return (
    <>
      <section className="container-vok py-20">
        <AnimatedSection className="max-w-2xl">
          <h1 className="font-display text-4xl sm:text-5xl">{dict.aboutPage.title}</h1>
          <p className="mt-5 text-base leading-relaxed text-obsidian/65 dark:text-bone/65">
            {dict.aboutPage.subtitle}
          </p>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12">
          <AnimatedSection className="lg:col-span-4">
            <p className="section-label">{dict.aboutPage.storyTitle}</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="space-y-6 lg:col-span-8">
            <p className="text-base leading-relaxed text-obsidian/70 dark:text-bone/70">
              {dict.aboutPage.storyBody1}
            </p>
            <p className="text-base leading-relaxed text-obsidian/70 dark:text-bone/70">
              {dict.aboutPage.storyBody2}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-t border-obsidian/10 bg-parchment/40 py-20 dark:border-bone/10 dark:bg-charcoal/30">
        <div className="container-vok">
          <AnimatedSection className="max-w-xl">
            <p className="section-label mb-4">{dict.aboutPage.valuesTitle}</p>
          </AnimatedSection>
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.08}>
                <div className="gold-rule mb-4" />
                <h3 className="font-display text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-obsidian/60 dark:text-bone/60">{v.body}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
