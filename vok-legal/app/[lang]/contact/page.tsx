import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import type { Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import AnimatedSection from "@/components/AnimatedSection";
import ContactForm from "@/components/ContactForm";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return { title: dict.contactPage.title, description: dict.contactPage.subtitle };
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const details = [
    { icon: MapPin, label: dict.contactPage.officeTitle, value: dict.contactPage.officeAddress },
    { icon: Mail, label: dict.contactPage.emailLabel, value: "vokagency1@gmail.com" },
    { icon: Phone, label: dict.contactPage.phoneLabel, value: "+964 750 000 0000" },
    { icon: Clock, label: dict.contactPage.hoursLabel, value: dict.contactPage.hoursValue },
  ];

  return (
    <section className="container-vok py-20">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <AnimatedSection>
            <p className="section-label mb-5">{dict.sectionLabels.contact}</p>
            <h1 className="font-display text-4xl sm:text-5xl">{dict.contactPage.title}</h1>
            <p className="mt-5 text-base leading-relaxed text-obsidian/65 dark:text-bone/65">
              {dict.contactPage.subtitle}
            </p>
          </AnimatedSection>

          <div className="mt-12 space-y-7">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <d.icon size={18} strokeWidth={1.5} className="mt-1 shrink-0 text-gold" />
                <div>
                  <p className="text-xs uppercase tracking-wide text-obsidian/45 dark:text-bone/45">
                    {d.label}
                  </p>
                  <p className="mt-1 text-sm text-obsidian/80 dark:text-bone/80" dir="ltr">
                    {d.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnimatedSection delay={0.1} className="lg:col-span-7">
          <div className="card-surface p-8 sm:p-10">
            <ContactForm dict={dict} services={dict.servicesPage.list} />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
