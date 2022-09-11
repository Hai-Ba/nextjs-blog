import { GetStaticProps,GetStaticPaths } from "next"
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import Layout from "../../components/layout"
import { getApiData, getApiPath } from "../../lib/apis"

export default function Api({data}) {
    return (
        <Layout>
            {/**Add head component */}
            <Head>
                <title>{data.name}</title>
            </Head>
            <article>
            <h1 className={utilStyles.headingXl}>{data.name}</h1>
            <div className={utilStyles.lightText}>
              <Date dateString={data.pushed_at} />
            </div>
            <div className={utilStyles.lightText}>
              <b>API Link:</b> <a href={data.url}>{data.url}</a>
              <br/>
              <b>Link:</b> <a href={data.html_url}>{data.html_url}</a>
            </div>
            <div>
              This page is not been render by read file(.md) but from fetch API
              <br /> 
              I have learn how to fetch Data from API in this page.
              <br />
              Hahahaahaha!!!
            </div>
            </article>
        </Layout>
      );
}

export const getStaticPaths: GetStaticPaths = async () => {
    // const res = await fetch('https://api.github.com/repos/vercel/next.js')
    // const posts = [await res.json()]
    const paths = await getApiPath();
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async () => {
    const data = await getApiData();
    return {
        props: {
            data
        }
    }
}