'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { UploadImage } from '@/components/create-quiz/upload-image'
import { api } from '@/lib/api'

import { zodResolver } from '@hookform/resolvers/zod'

import { FormProvider, useForm } from 'react-hook-form'

import { z } from 'zod'
import { InputCategories } from '@/components/create-quiz/categories'

const createQuizSchema = z.object({
  title: z.string(),
  description: z.string(),
  cover: z.string(),
  coverImage: z.any().nullable(),
  color: z.string(),
})

type createQuizData = z.infer<typeof createQuizSchema>

export function CreateQuizForm() {
  const form = useForm<createQuizData>({
    resolver: zodResolver(createQuizSchema),
  })

  const { register, handleSubmit } = form

  async function handleCreateQuiz(data: createQuizData) {
    console.log(data)
    const { color, cover, description, title } = data

    const response = await api.post('/category/historia/quiz', {
      color,
      cover,
      description,
      title,
    })
  }

  return (
    <FormProvider {...form}>
      <form className="space-y-8" onSubmit={handleSubmit(handleCreateQuiz)}>
        <InputCategories />

        <div className="flex flex-col space-y-1.5">
          <Label className="space-y-2">
            <span className="text-base font-semibold text-slate-700">
              Imagem de banner
            </span>

            <UploadImage />

            <input {...register('coverImage')} type="file" className="hidden" />
          </Label>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label className="space-y-2">
            <span className="text-base font-semibold text-slate-700">Cor</span>
            <div>
              <input
                {...register('color')}
                className="h-20 w-20 rounded-md border-none outline-none p-0 m-0"
                placeholder="Cor para o quiz"
                type="color"
              />
            </div>
          </Label>
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label className="space-y-2">
            <span className="text-base font-semibold text-slate-700">
              Titulo
            </span>
            <Input
              {...register('title')}
              className="h-12 px-4 text-sm font-normal"
              placeholder="Titulo do quiz"
            />
          </Label>
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label className="space-y-2">
            <span className="text-base font-semibold text-slate-700">
              Descrição do quiz
            </span>
          </Label>
          <Textarea
            {...register('description')}
            placeholder="Descrição do quiz"
            className="min-h-[150px] p-6"
          />
        </div>

        <div className="flex justify-end">
          <Button size="lg">Criar</Button>
        </div>
      </form>
    </FormProvider>
  )
}
