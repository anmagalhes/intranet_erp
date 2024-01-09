import { Inter } from 'next/font/google'
import './ui/globals.css'

import Providers from "../context/Providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Suelopro',
  description: 'Erp Suelo',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
      <Providers>{children}</Providers>
        </body>
    </html>
  )
}
