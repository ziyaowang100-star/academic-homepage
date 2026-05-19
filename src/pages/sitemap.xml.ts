import type { APIRoute } from "astro";
import { profile } from "@data/profile";

const pages = ["", "publications", "projects", "cv", "contact"];

export const GET: APIRoute = () => {
  const urls = pages
    .map((page) => {
      const loc = new URL(page, profile.canonicalUrl).toString();
      return `<url><loc>${loc}</loc><changefreq>monthly</changefreq><priority>${page === "" ? "1.0" : "0.8"}</priority></url>`;
    })
    .join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
};
