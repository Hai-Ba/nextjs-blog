//Pages begin with [ and end with ] are DYNAMIC ROUTES in Next.js
//Always make the posts path is the markdown file under the top-level 'posts' directory
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { GetStaticProps, GetStaticPaths } from 'next'

// //Finally, implement "getStaticProps" to fetch nessecery datas for blog post with given id
// export async function getStaticProps({params}){
//     //Fetch necessary data using params.id
//     const postData = await getPostData(params.id);
//     return{
//         props:{
//             postData,
//         },
//     };
// }

// //This page will export an async funtion call "getStaticPaths", this funct return the list of possible value for id
// export async function getStaticPaths(){
//     //return list of possible value for id
//     const paths = getAllPostIds();
//     return {
//         paths, //contains the array of known paths returned by getAllPostIds()
//         fallback: false,
//     };
// }

export default function Post({
    postData
  }: {
    postData: {
      title: string
      date: string
      contentHtml: string
    }
  }) {
  return (
    <Layout>
        {/**Add head component */}
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}


