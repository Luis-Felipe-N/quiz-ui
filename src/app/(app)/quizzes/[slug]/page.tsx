'use client'

import { Header } from '@/components/header'
import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/lib/api'
import { Category, Quiz, Quiz } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import Image from 'next/image'

interface QuizzesProps {
  params: {
    slug: string
  }
}

export default function Quizzes({ params }: QuizzesProps) {
  const { data: category, isLoading } = useQuery<Category>({
    queryKey: ['category'],
    queryFn: async (): Promise<Category> => {
      const response = await api.get(`categories/${params.slug}/`)
      return response.data.category
    },
  })

  const { data: quizzes, isLoading: isLoadingQuizzes } = useQuery<Quiz[]>({
    queryKey: ['quizzes'],
    queryFn: async (): Promise<Quiz[]> => {
      const response = await api.get(`category/${params.slug}/quizzes`)
      return response.data.quizzes
    },
  })
  console.log(category, quizzes)

  return (
    <>
      <Header />

      <main className="flex flex-col max-w-5xl m-auto p-24 px-8 text-zinc-800 ">
        {category ? (
          <div
            className="text-zinc-100 pt-60 pb-8 px-8 rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage: `url("${category?.cover}")`,
            }}
          >
            <strong className="text-xl">{category?.title}</strong>
            <p>{category?.description}</p>
          </div>
        ) : (
          <Skeleton className="w-full h-[348px]" />
        )}
        <section className="mt-12">
          <div className="flex justify-between">
            <div>
              {category ? (
                <strong className="text-xl">
                  Quiz sobre {category.title.toLowerCase()}
                </strong>
              ) : (
                <Skeleton className="w-60 h-8" />
              )}

              <p className="text-zinc-600">Selecione um quiz para iniciar</p>
            </div>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap items-stretch w-full lg:grid lg:grid-cols-4">
            {isLoadingQuizzes ? (
              <h1>Carregando</h1>
            ) : quizzes && !!quizzes.length ? (
              quizzes.map((quiz) => (
                <div key={quiz.id} className="rounded-2xl overflow-hidden">
                  <figure className="relative h-full w-full">
                    <Image
                      className="object-cover h-full w-full"
                      width={384}
                      height={384}
                      src={quiz.cover}
                      alt=""
                    />
                    <figcaption
                      style={{
                        background: `${quiz.color}c2`,
                        boxShadow: `0 0 101px 84px ${quiz.color}c2`,
                      }}
                      className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white"
                    >
                      {quiz.title}
                    </figcaption>
                  </figure>
                </div>
              ))
            ) : (
              <h1>Sem Quizzes</h1>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
