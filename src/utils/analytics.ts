type GTMEvent = {
  event: string;
  category?: string;
  action?: string;
  label?: string;
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
}

export const trackEvent = (eventData: GTMEvent) => {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventData);
};
