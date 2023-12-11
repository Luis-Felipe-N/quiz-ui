import Link from 'next/link'

import { Profile } from './profile'

export function Header() {
  return (
    <header className="max-w-5xl w-full m-auto p-8 flex items-center justify-between gap-8">
      <div>
        <Link href={'/'}>
          <strong className="text-2xl font-bold">/me-quiz</strong>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Profile />
      </div>
    </header>
  )
}
