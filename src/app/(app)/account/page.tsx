'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Header } from '@/components/header'

import { getFallbackName } from '@/utils/get-fallback-name'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'

interface QuizzesProps {
  params: {
    slug: string
  }
}

export default function Quizzes({ params }: QuizzesProps) {
  const { data: session, status } = useSession()

  const router = useRouter()

  if (status === 'unauthenticated') {
    router.push('/')
  }

  return (
    <>
      <Header />

      <main className="flex flex-col max-w-5xl m-auto p-24 px-8 text-zinc-800 ">
        <section className="flex flex-col items-center gap-8">
          {status === 'loading' ? (
            <Skeleton className="h-32 w-32" />
          ) : (
            <Avatar size="xl">
              <AvatarImage src={session.user.avatar} alt={session.user.name} />
              <AvatarFallback>
                {getFallbackName(session.user.name)}
              </AvatarFallback>
            </Avatar>
          )}

          <h1 className="text-3xl font-semibold">{session?.user.name}</h1>

          <ul>
            <li>Vitorias</li>
            <li>Partidas</li>
            <li>Derrotas</li>
          </ul>
        </section>
      </main>
    </>
  )
}
