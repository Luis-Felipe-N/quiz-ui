interface uploadImageProps {
  file: File[]
}

export function UploadImage({ file }: uploadImageProps) {
  console.log(file)

  if (file && file.length > 0) {
    const imageURL = URL.createObjectURL(file[0])

    return (
      <div>
        <div></div>
        <div className="bg-zinc-100 rounded-2xl flex items-center justify-center border-dashed p-4">
          <img className="h-96" src={imageURL} alt="" />
        </div>
        <span className="mt-2 inline-block text-slate-700">{file[0].name}</span>
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
