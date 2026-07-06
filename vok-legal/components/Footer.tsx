import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n-config";
import type { Dictionary } from "@/lib/get-dictionary";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-obsidian/10 bg-bone dark:border-bone/10 dark:bg-obsidian">
      <div className="container-vok grid grid-cols-1 gap-12 py-16 md:grid-cols-4">
        <div>
          <Image src="/logo.png" alt="VOK Legal Agency" width={40} height={40} className="h-9 w-9 object-contain" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-obsidian/60 dark:text-bone/60">
            {dict.footer.tagline}
          </p>
        </div>

        <div>
          <p className="section-label mb-4">{dict.footer.linksTitle}</p>
          <ul className="space-y-2.5 text-sm text-obsidian/70 dark:text-bone/70">
            <li><Link href={`/${lang}`} className="hover:text-gold-dim dark:hover:text-gold">{dict.nav.home}</Link></li>
            <li><Link href={`/${lang}/about`} className="hover:text-gold-dim dark:hover:text-gold">{dict.nav.about}</Link></li>
            <li><Link href={`/${lang}/services`} className="hover:text-gold-dim dark:hover:text-gold">{dict.nav.services}</Link></li>
            <li><Link href={`/${lang}/faq`} className="hover:text-gold-dim dark:hover:text-gold">{dict.nav.faq}</Link></li>
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">{dict.footer.servicesTitle}</p>
          <ul className="space-y-2.5 text-sm text-obsidian/70 dark:text-bone/70">
            <li><Link href={`/${lang}/services`} className="hover:text-gold-dim dark:hover:text-gold">{dict.servicesPage.list[0].title}</Link></li>
            <li><Link href={`/${lang}/services`} className="hover:text-gold-dim dark:hover:text-gold">{dict.servicesPage.list[9].title}</Link></li>
            <li><Link href={`/${lang}/services`} className="hover:text-gold-dim dark:hover:text-gold">{dict.servicesPage.list[17].title}</Link></li>
            <li><Link href={`/${lang}/pricing`} className="hover:text-gold-dim dark:hover:text-gold">{dict.nav.pricing}</Link></li>
          </ul>
        </div>

        <div>
          <p className="section-label mb-4">{dict.footer.contactTitle}</p>
          <ul className="space-y-2.5 text-sm text-obsidian/70 dark:text-bone/70">
            <li>{dict.contactPage.officeAddress}</li>
            <li dir="ltr">vokagency1@gmail.com</li>
            <li dir="ltr">+964 750 000 0000</li>
          </ul>
        </div>
      </div>

      <div className="container-vok flex flex-col items-center justify-between gap-4 border-t border-obsidian/10 py-6 text-xs text-obsidian/50 dark:border-bone/10 dark:text-bone/50 sm:flex-row">
        <span>© {year} VOK Legal Agency. {dict.footer.rights}</span>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-gold-dim dark:hover:text-gold">{dict.footer.privacy}</span>
          <span className="cursor-pointer hover:text-gold-dim dark:hover:text-gold">{dict.footer.terms}</span>
        </div>
      </div>
    </footer>
  );
}
