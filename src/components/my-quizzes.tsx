import { api } from '@/lib/api'
import { getCurrentUser } from '@/lib/session'
import { Quiz } from '@/types'
import { useQuery } from '@tanstack/react-query'
import { getSession, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

async function getData() {
  const res = await api('/creator/:userId/quizzes')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  console.log({ res })
  if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.data()
}

export async function MyQuizzes() {
  const user = await getCurrentUser()
  console.log(user)
  // const { data: quizzes, isLoading: isLoadingQuizzes } = useQuery<Quiz[]>({
  //   queryKey: ['quizzes'],
  //   queryFn: async (): Promise<Quiz[]> => {
  //     const response = await api.get(`creator/${session?.user.id}/quizzes`)
  //     return response.data.quizzes
  //   },
  // })

  return (
    <>
      <section>
        <h3 className="text-xl font-semibold">Meus quiz🔥</h3>
        {/* <div className="mt-8 flex gap-4 flex-wrap items-stretch w-full lg:grid lg:grid-cols-4">
          {isLoadingQuizzes ? (
            <h1>Carregando</h1>
          ) : quizzes && !!quizzes.length ? (
            quizzes.map((quiz) => (
              <div key={quiz.id} className="rounded-2xl overflow-hidden">
                <figure className="relative h-full w-full">
                  <Image
                    className="object-cover h-full w-full"
                    width={384}
                    height={384}
                    src={quiz.cover}
                    alt=""
                  />
                  <figcaption
                    style={{
                      background: `#00000066`,
                      boxShadow: `0 40px 101px 122px #00000066`,
                    }}
                    className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 font-bold text-white"
                  >
                    {quiz.title}
                  </figcaption>
                </figure>
              </div>
            ))
          ) : (
            <h1>Sem Quizzes</h1>
          )}
        </div> */}
      </section>
    </>
  )
}
