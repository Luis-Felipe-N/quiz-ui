import { imgur } from '.'

export async function uploadImage(file: string): Promise<string> {
  const response = await imgur.upload({
    image: file,
    type: 'base64',
  })

  console.log(response.data)
  return response.data.ad_url
}
