import { Header } from '@/components/header'
import { MyQuizzes } from '@/components/my-quizzes'
import { PopularCategories } from '@/components/popular-categories'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-5xl m-auto p-24 pt-12 px-8">
        <section className="bg-red-500 p-12 rounded-2xl mb-12">
          <div className="flex flex-col items-start gap-8">
            <strong className="text-5xl font-oswald text-zinc-50">
              Contribua com a <br /> comunidade
            </strong>
            <Link href={'/quiz/create'}>
              <Button variant="secondary">Crie um quiz</Button>
            </Link>
          </div>
        </section>

        <MyQuizzes />

        <section>
          <h3 className="text-xl font-semibold">Categorias populares 🔥</h3>
          <PopularCategories />
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold">Recentes</h3>
          <div className="mt-4 ">
            <div className="rounded-3xl overflow-hidden bg-slate-50 flex p-4">
              <div>
                <Image
                  width={385}
                  height={385}
                  className="h-48 w-60 object-cover rounded-2xl flex-1"
                  src="https://images.pexels.com/photos/8474423/pexels-photo-8474423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                ></Image>
              </div>
              <div className="p-8 pb-4 rounded-2xl bg-cover bg-center text-zinc-700 w-full flex flex-col justify-between">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-3xl font-bold">Jupiter</h3>
                    <p className="text-sm mt-2 font-oswald">
                      O Gigante Gasoso no Centro do Nosso Sistema Solar
                    </p>
                  </div>

                  <button className="bg-red-400 font-oswald text-sm font-semibold rounded-full h-12 px-8 text-zinc-50">
                    Jogar
                  </button>
                </div>

                <div className="h-2 w-full bg-red-400 rounded-sm"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
