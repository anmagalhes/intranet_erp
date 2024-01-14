"use client"
import { supabase } from './lib/supabase';
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Container } from '@/components/container/index';


export default function Home() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const router = useRouter();
  
  const login = async () => {
    try {
      let { data: dataUser, error } = await supabase
        .auth
        .signInWithPassword({
          email: data.email,
          password: data.password
        });

      if (error) {
        console.error('Error during login:', error.message, error.response);
        // Adicione lógica para lidar com diferentes tipos de erros, se necessário
      } else if (dataUser) {
        console.log('Login successful');
        router.reload();
      }
  
      console.log(dataUser);
    } catch (error) {
      console.error('Unexpected error during login:', error);
    }
  }


  const handleChange = (e: any) => {
    console.log('Handling change:', e.target.name, e.target.value);
    const { name, value } = e.target;
    setData((prev:any) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  if (!router) {
    // Se o roteador ou a função reload não estiverem disponíveis, evite renderizar o componente
    return null;
  }
  


  return (
    <Container>
      <main className="flex flex-col mt-9 mb-2">
        <div className="flex items-center gap-3">
          <div className="container mx-auto w-[400]">
            <div className="grid">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                value={data?.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={data?.password}
                onChange={handleChange}
              />
            </div>
             <button className="px-4 py-2 bg-blue-500 rounded cursor-pointer" onClick={login}>Login</button>
          </div>
        </div>
      </main>
    </Container>
  );
}