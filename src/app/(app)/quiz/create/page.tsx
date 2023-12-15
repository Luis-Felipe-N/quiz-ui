'use client'

import { Header } from '@/components/header'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { UploadImage } from '@/components/upload-image'
import { uploadImage } from '@/lib/upload/image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { isAborted, z } from 'zod'

const createQuizSchema = z.object({
  title: z.string(),
  description: z.string(),
  cover: z.string(),
  coverImage: z.any().nullable(),
  color: z.string(),
})

type createQuizData = z.infer<typeof createQuizSchema>

export default function Create() {
  const { register, watch } = useForm<createQuizData>({
    resolver: zodResolver(createQuizSchema),
  })

  const coverImageRef = useRef<HTMLDivElement>(null)

  async function handleCreateQuiz(data: createQuizData) {
    console.log(data)
  }

  const coverImage = watch('coverImage') // you can supply default value as second argument

  useEffect(() => {
    const subscription = watch(async (value, { name, type }) => {
      if (name === 'coverImage') {
        const data = await uploadImage(value.coverImage[0])
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, coverImageRef])

  return (
    <>
      <Header />

      <main className="flex flex-col max-w-5xl m-auto p-24 px-8 text-zinc-800 ">
        <section>
          <form className="space-y-8">
            <div className="flex flex-col space-y-1.5">
              <Label className="space-y-2">
                <span className="text-base font-semibold text-slate-700">
                  Imagem de banner
                </span>

                <UploadImage file={coverImage} />

                <input
                  {...register('coverImage')}
                  type="file"
                  className="hidden"
                />
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
          </form>
        </section>
      </main>
    </>
  )
}
