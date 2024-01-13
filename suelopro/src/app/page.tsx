//import Image from 'next/image'
"use cliente"
import {Container} from '@/components/container/index';
//import { supabase } from '@/lib/supabase';

//import { getServerSession } from "next-auth";
//import { authOptions } from "./utils/auth";
//import { redirect } from "next/navigation"

export default async function Home() {

//const session = await getServerSession(authOptions);


 return (
    <Container>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3"> 
          {/* Conteúdo da página de boas-vindas e perguntas */}
          Teste
        </div>
      </main>
    </Container>
  );
}