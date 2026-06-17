import type { MetadataRoute } from "next";
import { converters } from "@/lib/converters";

const BASE_URL = "https://converhub-three.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const converterPages = converters.map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...converterPages,
  ];
}
