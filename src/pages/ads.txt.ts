import type { APIRoute } from "astro";
import { SITE } from "../site.config";

// ads.txt tells ad networks who is authorised to sell this site's inventory.
// Once AdSense approves you, set SITE.adsenseClient and this fills in itself.
const pub = SITE.adsenseClient.replace(/^ca-/, "");
const body = SITE.adsenseClient
  ? `google.com, ${pub}, DIRECT, f08c47fec0942fa0\n`
  : `# Add your Google AdSense line after approval, for example:\n# google.com, pub-0000000000000000, DIRECT, f08c47fec0942fa0\n`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
