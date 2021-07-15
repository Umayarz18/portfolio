import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout pageTitle="Contact | Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor">
      {/** Contact Form */}
      <section className="self-center justify-center m-24 w-1/2 grid justify-self-center shadow rounded bg-purple-200 p-20">
        <h2 className="font-bold text-gray-900 text-2xl lg:text-3xl text-left">
          Want to Chat?💬
        </h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="grid justify-items-center"
        >
          <p className="m-2.5 ">
            <label htmlFor="name">Name</label> <br />
            <input className="w-60 rounded-xl" type="text" id="name" name="name" />
          </p>
          <p className="m-2.5">
            <label htmlFor="email">Email</label> <br />
            <input className="w-60 rounded-xl" type="text" id="email" name="email" />
          </p>
          <p className="m-2.5">
            <label htmlFor="message">Message</label> <br />
            <textarea className="w-60 rounded-xl" id="message" name="message"></textarea>
          </p>

          <button className="m-2.5  w-60 justify-self-center btn-secondary" type="submit">
            Say Hey👋
          </button>
        </form>
      </section>{" "}
    </Layout>
  );
}
