import axios from 'axios'
import Cookies from 'js-cookie'
import { headers } from 'next/headers'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_DOMAIN_URL,
})

api.interceptors.request.use((request) => {
  const headers = request.headers ?? {}

  const token = Cookies.get('session-token')

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  console.log(token)
  request.headers = headers
  return request
})
