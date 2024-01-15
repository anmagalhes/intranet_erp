//import Image from 'next/image'
//"use cliente"
import { Container } from '@/components/container/index';
import { supabase, supabaseAdmin } from '../lib/supabase';

export default function Home() {
  const setNewView = async () => {
    const { data, error } = await supabaseAdmin 
      .from("views")
      .insert({
        nome: 'tony'
      });

    if (data) console.log('data',data);
    if (error) console.log(error);

    console.log('Tonu SetNewView');
  };

  // Condição para chamar setNewView apenas durante o desenvolvimento
  if (process.env.NODE_ENV === 'development') {
    setNewView();
  }


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
