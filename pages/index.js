import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className="page">
      <div className="nav">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      </div>
      <Header />

      <main>
        <h1>Home Page</h1>
      </main>
      <style jsx>{`
        .page {
          height: 100%;
        }
        main {
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .nav{
          display: flex;
          justify-content: space-around;
        }
      `}</style>

    </div>
  )
}
