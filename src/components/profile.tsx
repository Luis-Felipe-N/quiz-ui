'use client'

import { getFallbackName } from '@/utils/get-fallback-name'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useSession } from 'next-auth/react'

export function Profile() {
  const { data: session, status } = useSession()
  console.log(session?.user.avatar)
  if (status === 'authenticated') {
    return (
      <>
        <div className="flex flex-col text-end">
          <small>
            Olá, <strong>{session.user.name}</strong>
          </small>
          <small className="font-semibold">0 pontos</small>
        </div>
        <Avatar>
          <AvatarImage src={session.user.avatar} alt={session.user.name} />
          <AvatarFallback>{getFallbackName(session.user.name)}</AvatarFallback>
        </Avatar>
      </>
    )
  }
}
