"use client"
import { promises, resolve4 } from 'dns';
import ResponseCache from 'next/dist/server/response-cache';
import { resolve } from 'path';
import { useState, useEffect } from 'react'

interface DataProps{
  id: number;
  name: string;
  full_name: string;
  owner:{
    login: string;
    id: number;
    avatar_url: string;
    url: string;
  }
}
// cada 2 minutos
async function delayFetch(url: string, delay: number) {
  await new Promise(resolve => setTimeout(resolve, delay));
  const response = await fetch(url, { next: { revalidate: 120 } });
  return response.json();
}


export default function Repositorios(){
  const [repos, setRepos] = useState<DataProps[]>([])

  useEffect(() => {
    function getData(){
      fetch("https://api.github.com/users/devfraga/repos")
      .then( response => response.json() )
      .then((data: DataProps[]) => {

        setTimeout(() => {
          setRepos(data);
        }, 1000 )

      })
    }

    getData();
  }, [])

  return(
    <div>
      <h1>Página repositórios</h1>

      {repos.map( (item) => (
        <div key={item.id}>
          <strong>Repositório: </strong> <a>{item.name}</a>
          <br/><br/>
        </div>
      ))}
    </div>
  )
}