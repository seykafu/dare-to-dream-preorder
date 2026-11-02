declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

function trackEvent(action: string, params: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, params);
  }
}

export function trackDownload(fileName: string, fileType: string) {
  trackEvent("file_download", {
    event_category: "Downloads",
    event_label: fileName,
    file_name: fileName,
    file_type: fileType,
  });
}

/** GA4 recommended `sign_up` event; `location` says which form was used. */
export function trackSignup(location: string, alreadyJoined: boolean) {
  trackEvent("sign_up", { method: "email", location, already_joined: alreadyJoined });
}
