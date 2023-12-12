'use client'

import { useRouter } from 'next/navigation'

import { signOut } from 'next-auth/react'
import { Session } from 'next-auth'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import { getFallbackName } from '@/utils/get-fallback-name'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'

interface NavigationUserProps {
  session: Session
}

export function NavigationUser({ session }: NavigationUserProps) {
  const router = useRouter()

  async function logout() {
    await signOut({
      redirect: false,
    })

    router.replace('/')
  }

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <div className="flex flex-col text-end mr-2">
              <small>
                Olá, <strong>{session.user.name}</strong>
              </small>
              <small className="font-semibold">0 pontos</small>
            </div>
            <Avatar>
              <AvatarImage src={session.user.avatar} alt={session.user.name} />
              <AvatarFallback>
                {getFallbackName(session.user.name)}
              </AvatarFallback>
            </Avatar>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <NavigationMenuLink>
              <Link
                href={`/account`}
                className="block px-6 pt-4 w-40 text-sm font-semibold text-slate-700"
              >
                Perfil
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink>
              <button
                onClick={logout}
                className="block px-6 py-4 w-40 text-start font-semibold text-sm text-red-700"
              >
                Sair
              </button>
            </NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
