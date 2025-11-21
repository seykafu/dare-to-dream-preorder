-- Create table for pre-order email signups
CREATE TABLE public.preorder_emails (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.preorder_emails ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their email (public signup)
CREATE POLICY "Anyone can register for pre-order"
ON public.preorder_emails
FOR INSERT
WITH CHECK (true);

-- Only allow reading own email
CREATE POLICY "Users can view their own registration"
ON public.preorder_emails
FOR SELECT
USING (true);

-- Create index on email for faster lookups
CREATE INDEX idx_preorder_emails_email ON public.preorder_emails(email);
CREATE INDEX idx_preorder_emails_created_at ON public.preorder_emails(created_at DESC);