import { api } from '@/lib/api'
import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Usuário', type: 'text' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        console.log('asda')

        const { data } = await api.post('/sessions', {
          username: credentials?.username,
          password: credentials?.password,
        })

        console.log(data)

        const { token } = data

        api.defaults.headers.Authorization = `Bearer ${token}`
        const { data: responseData } = await api.get('/me')
        console.log(responseData)

        if (responseData.user) {
          return responseData.user
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: '/',
  },
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST }
