// @lib/supabase.ts
import {createBrowserClient} from '@supabase/ssr';

export const supabaseBrowser = () =>
createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,

    process.env.NEXT_PUBLIC_SUPABASE_AMON_KEY!,

)
