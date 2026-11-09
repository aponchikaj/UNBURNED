// Canonical origin. Set NEXT_PUBLIC_SITE_URL once the custom domain is live;
// until then Vercel's production URL is used, and localhost in dev.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/$/, "");

export const routes = ["/", "/pages/about", "/pages/partners", "/policies/privacy-policy"];
