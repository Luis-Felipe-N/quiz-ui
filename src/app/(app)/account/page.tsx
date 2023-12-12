'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import { Header } from '@/components/header'

import { getFallbackName } from '@/utils/get-fallback-name'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import Image from 'next/image'

interface QuizzesProps {
  params: {
    slug: string
  }
}

export default function Quizzes({ params }: QuizzesProps) {
  const { data: session, status } = useSession()

  const router = useRouter()

  console.log(status)

  if (status === 'unauthenticated') {
    router.replace('/')
  }

  return (
    <>
      <Header />

      <main className="flex flex-col max-w-5xl m-auto p-24 px-8 text-zinc-800 ">
        <section className="flex flex-col items-center gap-8">
          {status === 'loading' ? (
            <Skeleton className="h-52 w-52 rounded-full" />
          ) : (
            <Avatar size="xl">
              <AvatarImage src={session.user.avatar} alt={session.user.name} />
              <AvatarFallback>
                {getFallbackName(session.user.name)}
              </AvatarFallback>
            </Avatar>
          )}

          <h1 className="text-4xl font-semibold">{session?.user.name}</h1>

          <ul className="flex gap-4 text-slate-700">
            <li className="flex flex-col items-center">
              <span>Vitorias</span>
              <strong>2000</strong>
            </li>
            <li>|</li>
            <li className="flex flex-col items-center">
              <span>Partidas</span>
              <strong>2000</strong>
            </li>
            <li>|</li>

            <li className="flex flex-col items-center">
              <span>Derrotas</span>
              <strong>2000</strong>
            </li>
          </ul>
        </section>

        <section className="mt-24">
          <h3 className="text-xl font-semibold">Últimas Partidas</h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-3xl overflow-hidden bg-slate-50 flex p-4">
              <div>
                <Image
                  width={385}
                  height={385}
                  className="h-48 w-60 object-cover rounded-2xl flex-1"
                  src="https://images.pexels.com/photos/8474423/pexels-photo-8474423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                ></Image>
              </div>
              <div className="p-8 pb-4 rounded-2xl bg-cover bg-center text-zinc-700 w-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">Jupiter</h3>
                    <p className="text-sm mt-2 font-oswald">
                      O Gigante Gasoso no Centro do Nosso Sistema Solar
                    </p>
                  </div>

                  <button className="bg-red-400 font-oswald text-sm font-semibold h-12 px-8 rounded-full text-zinc-50">
                    Jogar
                  </button>
                </div>

                <div className="h-2 w-full bg-red-400 rounded-sm"></div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-slate-50 flex p-4">
              <div>
                <Image
                  width={385}
                  height={385}
                  className="h-48 w-60 object-cover rounded-2xl flex-1"
                  src="https://images.pexels.com/photos/8474423/pexels-photo-8474423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                ></Image>
              </div>
              <div className="p-8 pb-4 rounded-2xl bg-cover bg-center text-zinc-700 w-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">Jupiter</h3>
                    <p className="text-sm mt-2 font-oswald">
                      O Gigante Gasoso no Centro do Nosso Sistema Solar
                    </p>
                  </div>

                  <button className="bg-red-400 font-oswald text-sm font-semibold h-12 px-8 rounded-full text-zinc-50">
                    Jogar
                  </button>
                </div>

                <div className="h-2 w-full bg-red-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
