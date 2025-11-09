import type { MetadataRoute } from "next";

const baseUrl = "https://webcap.media";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const routes = ["", "/privacy"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }));

  return routes;
}


