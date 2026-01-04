"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { supabase } from "@/lib/supabase/client";

export function EmailSignupCard() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!email.trim()) {
      setError("Please enter your email address");
      setIsLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    try {
      const { error: supabaseError } = await supabase
        .from('preorder_emails')
        .insert([{ email: email.trim() }]);

      if (supabaseError) {
        if (supabaseError.code === '23505') {
          setError("This email is already registered");
        } else {
          setError("Something went wrong. Please try again.");
        }
        setIsLoading(false);
        return;
      }

      setIsSubmitted(true);
      setEmail("");
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
        Get Updates & Pre-Order Access
      </h3>
      <p className="text-sm md:text-base text-gray-300 mb-6">
        Sign up to get exclusive updates and be the first to know when the book launches.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email…"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            className="flex-1 bg-gray-700 border-gray-600 text-white placeholder:text-gray-400 focus:border-primary"
            disabled={isSubmitted || isLoading}
            aria-label="Email address"
          />
          <Button
            type="submit"
            disabled={isSubmitted || isLoading}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold uppercase px-6 py-2 rounded-md whitespace-nowrap"
          >
            {isLoading ? "JOINING..." : "JOIN THE LIST"}
          </Button>
        </div>
        
        {error && (
          <p className="text-sm text-red-400">{error}</p>
        )}
        
        {isSubmitted && (
          <div className="text-sm text-green-400 bg-green-400/10 rounded-md p-3">
            You're in! Check your inbox soon.
          </div>
        )}

        <p className="text-xs text-gray-400 mt-2">
          By signing up, you'll receive pre-order updates and join the Doing The Dream newsletter.
        </p>
      </form>
    </div>
  );
}

