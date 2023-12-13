'use client'

import { Header } from '@/components/header'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { uploadImage } from '@/lib/imgur/upload-image'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const createQuizSchema = z.object({
  title: z.string(),
  description: z.string(),
  cover: z.string(),
  coverImage: z.any().nullable(),
  color: z.string(),
})

type createQuizData = z.infer<typeof createQuizSchema>

export default function Create() {
  const { register, handleSubmit, watch } = useForm<createQuizData>({
    resolver: zodResolver(createQuizSchema),
  })

  async function handleCreateQuiz(data: createQuizData) {
    console.log(data)
  }

  useEffect(() => {
    const subscription = watch((value, { name, type }) => {
      if (name === 'coverImage') {
        const reader = new FileReader()
        reader.readAsDataURL(value.coverImage[0])
        reader.onload = async function () {
          if (typeof reader.result === 'string') {
            const base64Data = reader.result!.split(',')[1]

            const coverURL = await uploadImage(base64Data)

            console.log(coverURL)
          }
        }
      }
    })
    return () => subscription.unsubscribe()
  }, [watch])

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

                <div className="bg-zinc-100 h-96 rounded-2xl flex items-center justify-center border-dashed border-2 border-slate-400">
                  <span className="font-semibold text-slate-700">
                    <span className="underline">
                      Busque uma imagem em seus arquivos aqui.
                    </span>
                  </span>
                </div>

                <input {...register('coverImage')} type="file" />
              </Label>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label className="space-y-2">
                <span className="text-base font-semibold text-slate-700">
                  Titulo
                </span>
                <Input
                  {...register('title')}
                  className="h-12 px-4"
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
