import { api } from '@/lib/api'
import { Category } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '../ui/skeleton'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import { useFormContext } from 'react-hook-form'
import { Label } from '@radix-ui/react-label'

export function InputCategories() {
  const { register } = useFormContext()
  const { data: categories, isLoading } = useQuery<Category[]>({
    queryKey: ['categories'],
    queryFn: async (): Promise<Category[]> => {
      const response = await api.get('categories')
      return response.data.categories
    },
  })

  return (
    <div className="flex flex-col space-y-1.5">
      <span className="text-base font-semibold text-slate-700">Categoria</span>
      {isLoading ? (
        <Skeleton></Skeleton>
      ) : categories ? (
        <div className="flex">
          {categories.map((category) => (
            <div key={category.slug} className="">
              <Label>
                <div
                  className="text-zinc-100 h-80 w-64 px-8 pb-8 rounded-2xl bg-cover bg-center flex items-end overflow-hidden"
                  style={{
                    backgroundImage: `url("${category.cover}")`,
                  }}
                >
                  <div
                    style={{
                      background: `#0000007d`,
                      boxShadow: `0 40px 101px 122px #0000007d`,
                    }}
                  >
                    <h3 className="text-3xl font-bold">{category.title}</h3>
                    <p className="text-sm mt-2 font-oswald">
                      {category.description}
                    </p>
                  </div>
                  <input
                    type="radio"
                    {...register('categorie')}
                    // className="hidden"
                  />
                </div>
              </Label>
            </div>
          ))}
        </div>
      ) : (
        <h1>Sem Categorias</h1>
      )}
    </div>
  )
}
