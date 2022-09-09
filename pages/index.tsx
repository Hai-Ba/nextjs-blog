import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { GetStaticProps } from 'next'
import { getApiData } from '../lib/apis'

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

export default function Home({
  allPostsData,allData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[],allData
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello I'm Hai - <Link href="/about">About me</Link></p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <Date dateString={date}></Date>
            </li>
          ))}
        </ul>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        {/**learn fetch data from API */}
        <h2 className={utilStyles.headingLg}>Fetch Data Guide</h2>
            <ul className={utilStyles.list}>
              <li className={utilStyles.listItem} key={allData.node_id}>
                <Link href={`/apies/${allData.node_id}`}>
                  <a>{allData.name}</a>
                </Link>
                <br />
                <Date dateString={allData.pushed_at}></Date>
              </li>
            </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  const allData = await getApiData();
  return {
    props: {
      allPostsData,
      allData
    }
  }
}