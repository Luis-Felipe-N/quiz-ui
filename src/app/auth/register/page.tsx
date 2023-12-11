'use client'

import { Input } from '@/components/ui/input'
import { api } from '@/lib/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { AxiosError } from 'axios'
import { Loader2 } from 'lucide-react'

import Link from 'next/link'
import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { setTimeout } from 'timers'
import { z } from 'zod'

const registerFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Este email não parece válido. Tente outro' }),
  username: z
    .string()
    .min(3, { message: 'Usuário precisa conter no mínimo 3 letras' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'Usuário deve conter apenas letras e hífen',
    })
    .transform((username) => username.toLowerCase()),
  password: z
    .string()
    .min(6, { message: 'Senha precisa conter no mínimo 6 caracteres' }),
})

type registerFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    watch,
  } = useForm<registerFormData>({ resolver: zodResolver(registerFormSchema) })
  let setTimeoutCheckUser: ReturnType<typeof setTimeout>

  async function handleCreateAccount(credentials: registerFormData) {
    try {
      await api.post('/users', credentials)

      // LOGIN
    } catch (error) {
      if (error instanceof AxiosError) {
        setError('root', { message: error.response?.data.message })
      }
    }
  }
  const checkUserWithEmailAlreadyExists = useCallback(
    async (email: string) => {
      try {
        await api.get(`/users/search?email=${email}`)

        setError('email', {
          message: 'Esse email parece já estar sendo usado',
        })
      } catch (error) {}
    },
    [setError],
  )

  useEffect(() => {
    const subscription = watch(({ email }, { name }) => {
      if (email && name === 'email') {
        clearTimeout(setTimeoutCheckUser)

        setTimeoutCheckUser = setTimeout(
          () => checkUserWithEmailAlreadyExists(email),
          1000 * 2,
        )
      }
    })
    return () => subscription.unsubscribe()
  }, [watch, checkUserWithEmailAlreadyExists])

  return (
    <>
      <div className="p-24">
        <div>
          <h1 className="text-2xl font-bold">/me-quiz</h1>
        </div>

        <div className="text-center mt-4 flex flex-col justify-center h-full max-w-xl mx-auto">
          <strong className="text-4xl">Junte-se ao /me-links</strong>
          <small className="mt-2">Cadastre-se gratuitamente</small>

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
              placeholder="Email"
              errors={errors.email}
            />
            <Input
              placeholder="Usuário"
              className="mt-4"
              prefix="melinks.com/"
              {...register('username')}
              errors={errors.username}
            />
            <Input
              placeholder="Senha"
              className="mt-4"
              type="password"
              {...register('password')}
              errors={errors.password}
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
                Criar conta
              </button>
            )}
          </form>

          <p className="mt-16">
            Já possui uma conta?{' '}
            <Link className="text-green-400 hover:underline" href={'/login'}>
              Faça login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
