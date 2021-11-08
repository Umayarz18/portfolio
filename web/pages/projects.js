import Layout from "../components/layout";

export default function Projects() {
  return (
    <Layout>
      <div className="max-w-2xl text-gray-600 dark:text-gray-300">
        <section>
          <h2 className="text-3xl font-bold dark:text-gray-100 text-gray-900">
            Client Work
          </h2>
          <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
            Write up a brief description with links to the work you've done. You
            can also talk about the reasons for client work and opportunities to
            connect.{" "}
          </p>
          <ul>
            <li>
              <strong>Project Title</strong>: Describe the project and what you
              used/worked with along with a link
            </li>
            <li>
              <strong>Project Title</strong>: Describe the project and what you
              used/worked with along with a link
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold dark:text-gray-100 text-gray-900">
            Other Work
          </h2>
          <p>
            Write up a brief description with links to the work you've done. You
            can also talk about the reasons for your projects and use it as a
            CTA to contact you.{" "}
          </p>
          <ul>
            <li>
              <strong>Project Title</strong>: Describe the project and what you
              used/worked with along with a link
            </li>
            <li>
              <strong>Project Title</strong>: Describe the project and what you
              used/worked with along with a link
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}
