import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { QueryProvider } from '@/providers/useQueryProvider'

const inter = Inter({ subsets: ['latin'] })

const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' })

export const metadata: Metadata = {
  title: 'Quiz | Inicio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} ${oswald.variable} bg-orange-50 text-zinc-800`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  )
}
