import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'

// import { authOptions } from "@/pages/api/auth/[...nextauth]"

// Getting the session in Next13 app/ directory
// https://next-auth.js.org/configuration/nextjs#in-app-directory
export async function getSession() {
  return await getServerSession(nextAuthOptions)
}

export async function getCurrentUser() {
  const session = await getSession()
  console.log(session)
  return session?.user
}
