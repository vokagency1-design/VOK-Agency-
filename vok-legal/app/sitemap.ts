import type { MetadataRoute } from "next";
import { i18n } from "@/lib/i18n-config";

const routes = ["", "/services", "/pricing", "/about", "/faq", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://voklegal.example.com";
  return i18n.locales.flatMap((lang) =>
    routes.map((route) => ({
      url: `${base}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    }))
  );
}
