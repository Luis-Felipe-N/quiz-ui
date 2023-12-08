'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { api } from '@/lib/api'
import { Category } from '@/types'
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

  const { data: quizzes } = useQuery<Category>({
    queryKey: ['category'],
    queryFn: async (): Promise<Category> => {
      const response = await api.get(`categories/${params.slug}/`)
      return response.data.category
    },
  })
  console.log(category)

  return (
    <>
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
            <div className="rounded-2xl overflow-hidden">
              <figure className="relative">
                <Image
                  width={384}
                  height={384}
                  className="max-w-full"
                  src="https://images.pexels.com/photos/8474423/pexels-photo-8474423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <figcaption className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white">
                  Marte
                </figcaption>
              </figure>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <figure className="relative h-full w-full">
                <Image
                  className="object-cover h-full w-full"
                  width={384}
                  height={384}
                  src="https://images.pexels.com/photos/13229882/pexels-photo-13229882.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <figcaption className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white">
                  Jupiter
                </figcaption>
              </figure>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <figure className="relative h-full w-full">
                <Image
                  className="object-cover h-full w-full"
                  width={384}
                  height={384}
                  src="https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg"
                  alt=""
                />
                <figcaption className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white">
                  Supernova
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
