'use client'

import { uploadImage } from '@/lib/upload/image'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'

type UploadState = 'empty' | 'loading' | 'data'

export function UploadImage() {
  const [uploadState, setUploadState] = useState<UploadState>('empty')
  const { watch, setValue } = useFormContext()

  useEffect(() => {
    const subscription = watch(async (value, { name, type }) => {
      if (name === 'coverImage') {
        setUploadState('loading')
        const data = await uploadImage(value.coverImage[0])
        if (data.cdnUrl) {
          setValue('cover', data.cdnUrl)
          setUploadState('data')
        }
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, setValue])

  const coverImage = watch('coverImage')

  if (uploadState === 'loading') {
    return (
      <div>
        <div className="bg-zinc-100 rounded-2xl flex items-center justify-center p-4 h-96 border-2 border-green-200">
          <Loader2 className="mr-2 h-8 w-8 animate-spin text-green-400" />
          Carregando
        </div>
      </div>
    )
  }

  if (uploadState === 'data') {
    const imageURL = URL.createObjectURL(coverImage[0])

    return (
      <div>
        <div></div>
        <div className="bg-zinc-100 rounded-2xl flex items-center justify-center border-dashed p-4">
          <img className="h-96" src={imageURL} alt="" />
        </div>
        <span className="mt-2 inline-block text-slate-700">
          {coverImage[0].name}
        </span>
      </div>
    )
  }

  return (
    <div className="bg-zinc-100 h-96 rounded-2xl flex items-center justify-center border-dashed border-2 border-slate-200">
      <span className="font-semibold text-slate-700">
        <span className="underline">
          Busque uma imagem em seus arquivos aqui.
        </span>
      </span>
    </div>
  )
}
