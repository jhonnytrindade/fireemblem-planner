import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { getData } from '../lib/data'
import { Data } from '../lib/model/Data'
import styles from '../styles/Home.module.css'

export default function Home({ data }: { data: Data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fire Emblem 3H Planner</title>
        <meta name="description" content="Planner para Fire Emblem Three houses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Fire Emblem Three Houses Planner
        </h1>
      </main>
      <ul >
        {data.units.map((char, i) => (
          <li key={i}>
            {char.name}
          </li>
        ))}
      </ul>
      <ul >
        {data.items.map((item, i) => (
          <li key={i}>
            {item.name}
          </li>
        ))}
      </ul>
      <ul >
        {data.chapters.map((chap, i) => (
          <li key={i}>
            {chap.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = getData()
  return {
    props: {
      data
    }
  }
}