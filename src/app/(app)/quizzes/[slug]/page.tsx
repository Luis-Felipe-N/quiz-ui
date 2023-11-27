import { Header } from '@/components/header'
import { Input } from '@/components/input'
import { Link, Search } from 'lucide-react'
import Image from 'next/image'

interface QuizzesProps {
  params: {
    slug: string
  }
}

export default function Quizzes({ params }: QuizzesProps) {
  return (
    <>
      <main className="flex flex-col max-w-5xl m-auto p-24 px-8 text-zinc-800 ">
        <div
          className="text-zinc-100 pt-40 pb-8 px-8 rounded-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/796206/pexels-photo-796206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          }}
        >
          <strong className="text-xl">{params.slug}</strong>
          <p>Explore o Universo: Desvendando os Mistérios do Espaço</p>
        </div>
        <section className="mt-12">
          <div className="flex justify-between">
            <div>
              <strong className="text-xl">Quiz sobre espaço</strong>
              <p className="text-zinc-600">Selecione um quiz para iniciar</p>
            </div>

            <form>
              <Input
                icon={<Search />}
                type="text"
                placeholder="Pesquise por tema aqui..."
              />
            </form>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap items-stretch w-full lg:grid lg:grid-cols-4">
            {/* <div className="aspect-video rounded-2xl overflow-hidden">
              <figure className="relative">
                <Image
                  width={384}
                  height={384}
                  className="max-w-full"
                  src="https://images.pexels.com/photos/87651/earth-blue-planet-globe-planet-87651.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <figcaption className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white">
                  Terra
                </figcaption>
              </figure>
            </div> */}

            <div className="rounded-2xl overflow-hidden">
              <figure className="relative">
                <Image
                  width={384}
                  height={384}
                  className="max-w-full"
                  src="https://images.pexels.com/photos/8474423/pexels-photo-8474423.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <figcaption className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white">
                  Marte
                </figcaption>
              </figure>
            </div>

            <div className="rounded-2xl overflow-hidden">
              <figure className="relative h-full w-full">
                <Image
                  className="object-cover h-full w-full"
                  width={384}
                  height={384}
                  src="https://images.pexels.com/photos/13229882/pexels-photo-13229882.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <figcaption className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white">
                  Jupiter
                </figcaption>
              </figure>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <figure className="relative h-full w-full">
                <Image
                  className="object-cover h-full w-full"
                  width={384}
                  height={384}
                  src="https://images.pexels.com/photos/3805983/pexels-photo-3805983.jpeg"
                  alt=""
                />
                <figcaption className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white">
                  Supernova
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
