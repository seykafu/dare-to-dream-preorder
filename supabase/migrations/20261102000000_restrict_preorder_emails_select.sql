-- The original SELECT policy used `USING (true)`, which let anyone holding the
-- public anon key (it ships in the site's JavaScript) read every email on the
-- pre-order list.
--
-- The signup form only inserts and never reads rows back, so with RLS enabled
-- and no SELECT policy, browser clients can still sign up but can no longer
-- read the list. You can still see every row in the Supabase dashboard.

DROP POLICY IF EXISTS "Users can view their own registration" ON public.preorder_emails;
