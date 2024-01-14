import type { Metadata } from 'next'
import './globals.css'
import  { Header } from '@/components/hearder'
//import {AuthProvider} from '@/providers/auth'
//import { NextAuthProvider } from "./components/NextAuthProvider";

export const metadata: Metadata = {
  title: 'NorthCromo',
  description: 'ERP - Controles Internos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body >
        <Header/>
        {children}
        </body>
    </html>
  )
}