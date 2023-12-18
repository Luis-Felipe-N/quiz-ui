import { Header } from '@/components/header'
import { CreateQuizForm } from './form'

export default function Create() {
  return (
    <>
      <Header />

      <main className="flex flex-col max-w-5xl m-auto p-24 px-8 text-zinc-800 ">
        <section>
          <CreateQuizForm />
        </section>
      </main>
    </>
  )
}
