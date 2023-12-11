'use client'

import { api } from '@/lib/api'
import { Category } from '@/types'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'

export function PopularCategories() {
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => {
      const response = await api.get('categories')
      return response.data.categories
    },
  })

  console.log(categories)
  return (
    <div className="mt-4 flex gap-4 flex-wrap items-stretch w-full lg:grid lg:grid-cols-3">
      {categories ? (
        categories.map((category) => (
          <Link
            key={category.slug}
            href={`/quizzes/${category.slug}`}
            className="rounded-3xl overflow-hidden"
          >
            <div
              className="text-zinc-100 h-80 px-8 pb-8 rounded-2xl bg-cover bg-center flex items-end"
              style={{
                backgroundImage: `url("${category.cover}")`,
              }}
            >
              <div
                style={{
                  background: `${category.color}c2`,
                  boxShadow: `0 40px 101px 122px ${category.color}c2`,
                }}
              >
                <h3 className="text-3xl font-bold">{category.title}</h3>
                <p className="text-sm mt-2 font-oswald">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h1>a</h1>
      )}
    </div>
  )
}
