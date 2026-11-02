"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "dtd:joined";

type JoinState = "none" | "joined" | "returning";

interface SignupContextValue {
  state: JoinState;
  /** Which form completed the signup this visit, so only that one takes focus. */
  source: string | null;
  markJoined: (alreadyOnList: boolean, source: string) => void;
  reset: () => void;
}

const SignupContext = createContext<SignupContextValue | null>(null);

/**
 * Shares "this visitor is on the list" across every signup form on the page,
 * and remembers it so returning subscribers can grab the chapter again.
 */
export function SignupProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<JoinState>("none");
  const [source, setSource] = useState<string | null>(null);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(STORAGE_KEY)) setState("returning");
    } catch {
      // Storage can be blocked (private mode); the form still works.
    }
  }, []);

  const markJoined = useCallback((alreadyOnList: boolean, from: string) => {
    setState(alreadyOnList ? "returning" : "joined");
    setSource(from);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
  }, []);

  const reset = useCallback(() => {
    setState("none");
    setSource(null);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  }, []);

  const value = useMemo(
    () => ({ state, source, markJoined, reset }),
    [state, source, markJoined, reset],
  );
  return <SignupContext.Provider value={value}>{children}</SignupContext.Provider>;
}

export function useSignup() {
  const ctx = useContext(SignupContext);
  if (!ctx) throw new Error("useSignup must be used inside <SignupProvider>");
  return ctx;
}
