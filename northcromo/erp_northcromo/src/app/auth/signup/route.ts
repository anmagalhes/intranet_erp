import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req:NextRequest) {
    const url = new URL(req.url);
    const cookieStore = cookies();

    const formData=await req.formData();
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))

    const supabase = createRouteHandlerClient({
        cookies: () => cookieStore
    })


    try {
        // Registre o usuário no Supabase
      await supabase.auth.signUp({
          email,
          password,
          options: {
            // Redirecionamento de email após o registro
            redirectTo: `${url.origin}/auth/callback`,
          },
        });
        if (error) {
            // Se houver um erro durante o registro, lide com ele aqui
            console.error(error);
            return NextResponse.status(500).send('Internal Server Error');
          }

     // Se tudo estiver correto, redirecione ou envie uma resposta adequada
     return NextResponse.redirect(url.origin, { status: 301 });
    } catch (error) {
      // Trate erros gerais
      console.error(error);
      return NextResponse.status(500).send('Internal Server Error');
    }
  }