import {createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function Post(req:NextRequest) {
    const url = new URL(req.url);
    const cookieStore = cookies();

    const FormData = await req.formData();
    
    const email: String(FormData.get('email'))
    const password = String(FormData.get('password'))

    const supabase = createRouteHandlerClient ({
        cookies() => cookieStore

    })

    await supabase
    .auth
    .signUp({
        email, password,
        Options: {
            emailRedirectTo: '$(url.origin)/auth/callback'
        }
    })

    return NextResponse.redirect(url.orign, {
        status:301
    });
}
