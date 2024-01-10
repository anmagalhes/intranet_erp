import type { Metadata } from 'next'
import './globals.css'
import  { Header } from '@/components/hearder'

export const metadata: Metadata = {
  title: 'SueloPro',
  description: 'ERP - Sistema interno',
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
