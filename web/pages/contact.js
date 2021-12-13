import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout title="Say Hello - Roewyn Umayam" cannonical="contact">
      <section className="max-w-2xl m-5 md:m-0">
        <h1 className="text-3xl font-bold dark:text-gray-100 text-gray-900  ">
          Up For A Chat?
        </h1>
        <p className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          If you're curious about my work, would like a developer, or just an
          excuse for coffee, feel free to reach out to me on my socials or just
          shoot me an email here.
        </p>
      </section>
      <form
        className=""
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="flex flex-wrap  mb-6">
          <div className="w-full md:w-1/2 px-3 md:pr-3 mb-6 md:mb-0">
            <label
              className="block uppercase  text-gray-700 dark:text-gray-300 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 
              border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
              focus:outline-none focus:bg-gray-100 dark:text-gray-300"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2 dark:text-gray-300 "
              htmlFor="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 
              border border-gray-200 rounded py-3 px-4 leading-tight 
              focus:outline-none focus:bg-gray-100 focus:border-gray-1000"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="flex flex-wrap  mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2 dark:text-gray-300"
              htmlFor="email"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 
              border border-gray-200 rounded py-3 px-4 mb-3 leading-tight 
              focus:outline-none focus:bg-gray-100 focus:border-gray-1000"
              id="email"
              type="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap  mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs 
              font-bold mb-2 dark:text-gray-300"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 
              text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 
              leading-tight focus:outline-none focus:bg-gray-100 focus:border-gray-1000 h-48 resize-none"
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="px-3 mb-6">
          <button
            className="btn focus:shadow-outline focus:outline-none text-gray-100 
            font-bold py-2  rounded w-full"
            type="button"
          >
            Send
          </button>
        </div>
      </form>
    </Layout>
  );
}
