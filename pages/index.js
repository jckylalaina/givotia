import Head from 'next/head'
import Image from 'next/image'
import logo from '../public/img/logo-full.png'

export default function Home() {
  
const myLoader = ({ src, width, quality }) => {
  return `https://jackylalaina.ml/${src}?w=${width}&q=${quality || 75}`
}
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-5">
      <Head>
        <title>Givotia</title>
        <link rel="icon" href="/img/logo-256-tr.png" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
                  `En cours de Création`
        </h1>
        <div className="flex flex-row justify-center">


        </div>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
                  <Image
      loader={myLoader}
      src="img/logo-full.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
        </div>
      </main>


    </div>
  )
}
