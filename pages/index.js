import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <Navigation />
      </main>
      </div>
  )
}
