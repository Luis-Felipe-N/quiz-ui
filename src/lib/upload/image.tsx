import { uploadFile } from '@uploadcare/upload-client'

export async function uploadImage(file: File) {
  const blobFile = new Blob([new Uint8Array(await file.arrayBuffer())], {
    type: file.type,
  })

  const data = await uploadFile(blobFile, {
    publicKey: process.env.NEXT_PUBLIC_UPLOADCARE_PUBLIC_KEY!,
    fileName: file.name,
  })

  return data
}
