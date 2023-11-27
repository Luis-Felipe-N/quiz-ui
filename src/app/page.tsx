import { Header } from '@/components/header'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col max-w-5xl m-auto p-24 px-8">
        <section>
          <h3 className="text-xl font-semibold">Categorias populares 🔥</h3>
          <div className="mt-4 flex gap-4 flex-wrap items-stretch w-full lg:grid lg:grid-cols-3">
            <Link
              href="/quizzes/espaco"
              className="rounded-3xl overflow-hidden"
            >
              <div
                className="text-zinc-100 pt-40 pb-8 px-8 rounded-2xl bg-cover bg-center"
                style={{
                  backgroundImage:
                    'url("https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
                }}
              >
                <h3 className="text-3xl font-bold">Espaço</h3>
                <p className="text-sm mt-2 font-oswald">
                  Explore o Universo: Desvendando os Mistérios do Espaço
                </p>
              </div>
            </Link>

            <div
              className="text-zinc-100 pt-40 pb-8 px-8 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              }}
            >
              <h3 className="text-3xl font-bold">Musica</h3>
              <p className="text-sm mt-2 font-oswald">
                Harmonias e Ritmos: O Mundo Mágico da Música
              </p>
            </div>

            <div
              className="text-zinc-100 pt-40 pb-8 px-8 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              }}
            >
              <h3 className="text-3xl font-bold">Esporte</h3>
              <p className="text-sm mt-2 font-oswald">
                Jogando com Paixão: Um Quiz sobre Esportes
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-xl font-semibold">Recentes</h3>
          <div className="mt-4 ">
            <div className="rounded-3xl overflow-hidden bg-white flex p-4">
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

                  <button className="bg-red-400 font-oswald text-sm font-semibold h-12 px-8 rounded-full text-zinc-50">
                    Jogar
                  </button>
                </div>

                <div className="h-2 w-full bg-red-400 rounded-sm"></div>
              </div>
            </div>

            {/* <div
              className="text-zinc-100 pt-40 pb-8 px-8 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              }}
            >
              <h3 className="text-3xl font-bold">Musica</h3>
              <p className="text-sm mt-2 font-oswald">
                Harmonias e Ritmos: O Mundo Mágico da Música
              </p>
            </div>

            <div
              className="text-zinc-100 pt-40 pb-8 px-8 rounded-2xl bg-cover bg-center"
              style={{
                backgroundImage:
                  'url("https://images.pexels.com/photos/1080882/pexels-photo-1080882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              }}
            >
              <h3 className="text-3xl font-bold">Esporte</h3>
              <p className="text-sm mt-2 font-oswald">
                Jogando com Paixão: Um Quiz sobre Esportes
              </p>
            </div> */}
          </div>
        </section>
      </main>
    </>
  )
}
