const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";
const CALENDLY_CSS_HREF =
  "https://assets.calendly.com/assets/external/widget.css";

const CALENDLY_BASE_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/invest-bativille";

// Brand the embedded scheduler to match the site palette
const CALENDLY_URL = `${CALENDLY_BASE_URL}?hide_gdpr_banner=1&primary_color=c9a24b&text_color=15233f`;

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

let assetsPromise: Promise<void> | null = null;

export function preloadCalendlyAssets(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();

  if (!assetsPromise) {
    assetsPromise = new Promise<void>((resolve, reject) => {
      if (!document.querySelector(`link[href="${CALENDLY_CSS_HREF}"]`)) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = CALENDLY_CSS_HREF;
        document.head.appendChild(link);
      }

      if (window.Calendly) {
        resolve();
        return;
      }

      const script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => {
        assetsPromise = null;
        reject(new Error("Failed to load Calendly widget"));
      };
      document.head.appendChild(script);
    });
  }

  return assetsPromise;
}

export async function openCalendlyPopup(): Promise<void> {
  try {
    await preloadCalendlyAssets();
    window.Calendly?.initPopupWidget({ url: CALENDLY_URL });
  } catch {
    // Widget blocked or offline — fall back to Calendly in a new tab
    window.open(CALENDLY_BASE_URL, "_blank", "noopener,noreferrer");
  }
}
