const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type SignupOutcome =
  | { status: "joined" }
  | { status: "already-joined" }
  | { status: "error"; message: string };

export function normalizeEmail(raw: string) {
  return raw.trim().toLowerCase();
}

export function validateEmail(email: string): string | null {
  if (!email) return "Please enter your email address.";
  if (!EMAIL_RE.test(email)) return "That doesn't look like a valid email address.";
  return null;
}

/** Warms up the Supabase chunk (e.g. when the email field gets focus). */
export function preloadSignup() {
  void import("@/lib/supabase/client");
}

/** Stores the email in Supabase `preorder_emails`. Expects a normalized email. */
export async function joinPreorderList(email: string): Promise<SignupOutcome> {
  let supabase;
  try {
    // Loaded on demand so supabase-js stays out of the initial page bundle.
    const { getSupabase } = await import("@/lib/supabase/client");
    supabase = getSupabase();
  } catch (err) {
    console.error("Could not load the signup client", err);
    return {
      status: "error",
      message: "We couldn't reach the server. Check your connection and try again.",
    };
  }
  if (!supabase) {
    console.error(
      "Signup disabled: NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY are not set.",
    );
    return {
      status: "error",
      message: "Signups are temporarily unavailable. Please try again later.",
    };
  }

  try {
    const { error } = await supabase.from("preorder_emails").insert({ email });
    if (!error) return { status: "joined" };

    // Unique violation: they're already on the list, which is a success for them.
    if (error.code === "23505") return { status: "already-joined" };

    console.error("Pre-order signup failed", error);
    return { status: "error", message: "Something went wrong. Please try again." };
  } catch (err) {
    console.error("Pre-order signup failed", err);
    return {
      status: "error",
      message: "We couldn't reach the server. Check your connection and try again.",
    };
  }
}
