'use client'

import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Loader2 } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { Input } from '@/components/ui/input'
import { useRouter } from 'next/navigation'

const loginFormSchema = z.object({
  email: z.string(),
  password: z.string(),
})

export type loginFormData = z.infer<typeof loginFormSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
  } = useForm<loginFormData>({ resolver: zodResolver(loginFormSchema) })

  const router = useRouter()

  async function handleCreateAccount(credentials: loginFormData) {
    const response = await signIn('credentials', {
      email: credentials.email,
      password: credentials.password,
      redirect: false,
    })

    if (response?.ok) {
      router.replace('/')
    } else {
      console.log(response)
      setError('root', {
        message:
          'Credenciais incorretas. Por favor, verifique seu e-mail e senha.',
      })
    }
  }

  return (
    <>
      <div className="p-24">
        <div>
          <strong>/me-quiz</strong>
        </div>

        <div className="text-center mt-4 flex flex-col justify-center h-full max-w-xl mx-auto">
          <strong className="text-4xl">Bem vindo de volta</strong>
          <small className="mt-2">Faça login no /me-quiz</small>

          <form
            className="mt-16 text-sm leading-none	"
            onSubmit={handleSubmit(handleCreateAccount)}
          >
            {errors.root && (
              <p className="text-start mt-2 text-sm text-red-400 mb-4 font-bold">
                {errors.root?.message}
              </p>
            )}

            <Input
              {...register('email')}
              placeholder="E-mail"
              type="email"
              errors={errors.email}
            />
            <Input
              {...register('password')}
              placeholder="Senha"
              type="password"
              errors={errors.password}
              className="mt-4"
            />

            {isSubmitting ? (
              <button
                className="flex items-center justify-center gap-2 mt-8 px-4 h-14 w-full rounded-full font-bold bg-red-400 bg-opacity-80 cursor-wait"
                disabled={isSubmitting}
              >
                Carregando
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </button>
            ) : (
              <button
                className="mt-8 px-4 h-14 w-full rounded-full font-bold bg-red-400"
                disabled={isSubmitting}
              >
                Login
              </button>
            )}
          </form>

          <p className="mt-16">
            Não possui uma conta?{' '}
            <Link className="text-red-400 underline" href={'/register'}>
              Faça seu cadastro
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
