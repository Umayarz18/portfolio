import Layout from '../../components/layout'
import { useRouter } from 'next/router';


  export default function Post() {
    const router = useRouter();
    let {slug} = router.query;
    return (
      <Layout pageTitle={`${slug} | Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor`}>
        <div className="flex flex-col md:flex-row-reverse  mt-10 h-screen justify-center">
            
            {/** Article Section */}
            <div className="bg-white rounded-2xl shadow-md flex-1 px-24 ml-10 justify-self-start min-w-full ">
              <h1>{slug}</h1>
              <small> Sub line</small>

              <p>
                Block content to be replaced later.
              </p>
            </div>

            {/** Tags and other info */}
            <aside className="bg-blue-300 md:block hidden ">
              <div className="bg-blue-400 rounded-2xl shadow-md px-24">
                  <ul>
                    <li> Heading 1</li>
                    <li> Heading 2</li>
                    <li> Heading 3</li>
                    <li> Heading 4</li>
                  </ul>
              </div>

              <div className="bg-blue-500 rounded-2xl shadow-md">
                {/** Suggested projects details */}
                <div> Other cards here</div>
              </div>
            </aside>
        </div>
      </Layout>
    )
  }
