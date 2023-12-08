import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'

export function Header() {
  return (
    <header className="max-w-5xl w-full m-auto p-8 flex items-center justify-between gap-8">
      <div>
        <h1 className="text-3xl font-bold">Quiz</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex flex-col text-end">
          <small>
            Olá, <strong>Luis Felipe</strong>
          </small>
          <small className="font-semibold">0 pontos</small>
        </div>
        <Avatar>
          <AvatarImage
            src="https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg"
            alt="@shadcn"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
