// ---------------------------------------------------------------------------
// CENTRAL SITE CONFIG  —  edit these values, everything else updates itself.
// ---------------------------------------------------------------------------

export const SITE = {
  /** Brand name shown in header, titles, footer. Rename freely. */
  name: "ToolMint",

  /** Short tagline used on the homepage + meta descriptions. */
  tagline: "Free Online Converters & Tools",

  /**
   * Production URL (no trailing slash). REQUIRED for correct canonical URLs
   * and sitemap. After you deploy, set this to your real domain/subdomain,
   * e.g. "https://toolnova.pages.dev" or "https://yourdomain.com".
   */
  url: "https://toolmint.jumor.workers.dev",

  /** Default social/share image (place the file in /public). */
  ogImage: "/og-default.svg",

  /** Author / owner shown on About + legal pages. */
  author: "ToolNova Team",

  /** Contact email used on Contact + Privacy pages. */
  email: "hello@example.com",

  /**
   * Google AdSense publisher id, e.g. "ca-pub-1234567890123456".
   * Leave "" until AdSense approves you. When empty, ad slots render an
   * invisible placeholder and NO AdSense script is loaded (so the site is
   * still fast + valid before approval).
   */
  adsenseClient: "",

  /** Optional Google Analytics 4 id, e.g. "G-XXXXXXXXXX". "" disables it. */
  ga4Id: "",

  /** Google Search Console verification code (the content="" value). "" disables it. */
  googleVerification: "ekNIc79yoYXbScifUOoTtJ9gIZodt2kOulEtui0fUi8",
} as const;

export type SiteConfig = typeof SITE;
