import Head from 'next/head'
import Main from './Main/Main'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Main />
      </main>
      </div>
  )
}
