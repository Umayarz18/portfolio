import Layout from '../../components/layout'
/**
 * import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticPaths(){
    //Retun a list of possible value for id
}

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
      props: {
        postData
      }
    }
}

export default function Post({ postData }) {
    return (
      <Layout>
        {postData.title}
        <br />
        {postData.id}
        <br />
        {postData.date}
      </Layout>
    )
  }
 */

  export default function Post() {
    return (
      <Layout>
        huh
      </Layout>
    )
  }
