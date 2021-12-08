import Layout from "../components/layout";

export default function Resources() {
  return (
    <Layout title="Resources - Roewyn Umayam">
      <div className="max-w-2xl text-gray-600 dark:text-gray-300 m-5">
        <section className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          <h1 className="text-3xl font-bold dark:text-gray-100 text-gray-900">
            Rad Resources 😎
          </h1>
          <p className="my-5">
            There are lots of awesome tools and learning resources out there
            that I{`'`}ve come across that might be helpful for you too. If
            there are any other cool tools you{`'`}ve come across, please let me
            know by contacting me and I can add them in.
          </p>
        </section>
        {/**
         * <section className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          <a
            href={`#`}
            target="_blank"
            className="flex flex-col justify-start dark:bg-gray-900 
              bg-gray-200  py-4 px-2 rounded  border-gray-400 border-2 
              dark:border-gray-700 self-center lg:h-32 h-full"
          >
            <h3 className="dark:text-gray-200 font-bold text-gray-700 text-md lg:text-lg">
              title
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              description
            </p>
          </a>
        </section>
         */}
      </div>
    </Layout>
  );
}
