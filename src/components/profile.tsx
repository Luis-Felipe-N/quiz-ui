'use client'

import { useSession } from 'next-auth/react'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { NavigationUser } from './navigation-user'

export function Profile() {
  const { data: session, status } = useSession()

  console.log(session)

  if (status === 'loading') {
    return (
      <div className="flex items-end gap-1">
        <div className="mb-2 flex flex-col items-end">
          <Skeleton className="h-2 w-24 rounded" />
          <Skeleton className="h-2 w-14 rounded mt-2" />
        </div>
        <Skeleton className="h-14 w-14 rounded-full" />
      </div>
    )
  }
  if (status === 'authenticated') {
    return <NavigationUser session={session} />
  }

  if (status === 'unauthenticated') {
    return (
      <div className="flex gap-4 items-center font">
        <Link
          className="font-semibold font-oswald underline"
          href={'/auth/register'}
        >
          Cadastrar
        </Link>
        <Link
          className="bg-red-400 font-oswald text-sm font-semibold h-12 px-8 rounded-full text-zinc-50 flex items-center"
          href={'/auth/login'}
        >
          Entrar
        </Link>
      </div>
    )
  }
}
