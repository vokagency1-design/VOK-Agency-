import type { Metadata } from "next";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "../globals.css";
import { i18n, localeMeta, type Locale } from "@/lib/i18n-config";
import { getDictionary } from "@/lib/get-dictionary";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: {
      default: `${dict.meta.siteName} — ${dict.meta.tagline}`,
      template: `%s — ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    keywords: [
      "VOK Legal Agency",
      "AI legal services Erbil",
      "Kurdistan law firm",
      "Iraqi commercial law",
      "legal technology Iraq",
    ],
    alternates: {
      languages: { en: "/en", ar: "/ar", ku: "/ku" },
    },
    openGraph: {
      title: `${dict.meta.siteName} — ${dict.meta.tagline}`,
      description: dict.meta.description,
      locale: lang,
      siteName: dict.meta.siteName,
      type: "website",
    },
    metadataBase: new URL("https://voklegal.example.com"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const dir = localeMeta[lang]?.dir ?? "ltr";

  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <body className={`${fraunces.variable} ${inter.variable} ${mono.variable} font-body`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar lang={lang} dict={dict} />
          <main>{children}</main>
          <Footer lang={lang} dict={dict} />
        </ThemeProvider>
      </body>
    </html>
  );
}
