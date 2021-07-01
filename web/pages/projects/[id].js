import Layout from '../../components/layout'
import { useRouter } from 'next/router';


  export default function Post() {
    const router = useRouter();
    let {id} = router.query;
    return (
      <Layout>
        <h1>{id}</h1>
      </Layout>
    )
  }
