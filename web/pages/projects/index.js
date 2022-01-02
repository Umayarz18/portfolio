import Layout from "../../components/layout";

export default function Projects() {
  return (
    <Layout title="My Projects - Roewyn Umayam" cannonical="projects">
      <div className="max-w-2xl text-gray-600 dark:text-gray-300 m-5">
        <section className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
          <h2 className="text-3xl font-bold dark:text-gray-100 text-gray-900">
            Projects for the Memes or Work
          </h2>
          <p className="my-5">
            I continually work on projects to learn new things in web
            development. Most of my work is done for organization or to
            prototype ideas that have promise to do a lot of good. Other times,
            they exist only to meme around with a new technology or concept 🤡.
          </p>
          <ul className="my-5 grid grid-cols-1 gap-y-3 text-md md:text-lg">
            <li>
              <a
                className="link"
                href={"https://pokedex-react-pwa.vercel.app/"}
                target="_blank"
                rel="noopener"
              >
                <strong>Pokedex Next.js PWA</strong>
              </a>{" "}
              - A total joke project to test PWA functionality on Next.js sites
              with Next-PWA. What better way to do it than by using Pokemon! The
              PWA acts as a Pokedex, a register of all these wonderful fictional
              animals. I used the{" "}
              <a
                href="https://www.pokemon.com/us/pokedex/"
                target="_blank"
                rel="noopener"
                className="hover:underline font-medium"
              >
                official Pokedex on the Pokemon website
              </a>{" "}
              and{" "}
              <a
                href="https://www.youtube.com/watch?v=LMRAEUPkFXI"
                target="_blank"
                rel="noopener"
                className="hover:underline font-medium"
              >
                James Q. Quick's Pokedex Next.js tutorial
              </a>{" "}
              as guides for this goofy project. Made with TailwindCSS, Next.js,
              PokeAPI and deployed on Vercel. <em>[solo Nov 2021]</em>
            </li>
            <li>
              <a className="link" href={"/"} rel="noopener">
                <strong>My portfolio site</strong>
              </a>{" "}
              - This site was made with inspiration and coding techniques
              learned from a breakdown of{" "}
              <a
                href="https://leerob.io/"
                target="_blank"
                rel="noopener"
                className="hover:underline font-medium"
              >
                Lee Robinson's website
              </a>{" "}
              and{" "}
              <a
                href="https://bionicjulia.com/"
                target="_blank"
                rel="noopener"
                className="hover:underline font-medium"
              >
                Julia Tan's personal site.
              </a>{" "}
              I wanted to learn how to make a site with Nextjs to act as a blog
              and document about my work. I used Lee's site as a reference to
              how to set up dark mode and also how to structure SEO for each web
              page. Made with Sanity, TailwindCSS, Next.js, group + individual
              designs from Figma, and deployed on Netlify.{" "}
              <em>[solo Oct 2021 - ]</em>
            </li>

            <li>
              <a
                className="link"
                href={"https://sprout-learning.vercel.app/"}
                target="_blank"
                rel="noopener"
              >
                <strong>Sprout</strong>
              </a>{" "}
              - An e-learning platform designed to teach high school students
              personal finance through short articles, quizzes, and activites to
              better prepare them for adulthood. Made with Sanity, TailwindCSS,
              Next.js, group + individual designs from Figma, and deployed on
              Vercel. <em>[team project Mar - Sep 2021, solo Sep 2021 - ]</em>
            </li>

            <li>
              <a
                className="link"
                href={"https://deisphere.com"}
                target="_blank"
                rel="noopener"
              >
                <strong>DEISphere</strong>
              </a>{" "}
              - An event conference website set for the University of Washington
              Bothell Beta Alpha Psi meant to bring attention to diversity and
              inclusion in the accounting field. Made with Wix, vanilla
              Javascript, and used self-created designs from Figma into the
              website. <em>[group project Mar - Aug 2021]</em>
            </li>

            <li>
              <a
                className="link"
                href={"https://our-anime-rec.herokuapp.com/"}
                target="_blank"
                rel="noopener"
              >
                <strong>Our-Anime-Rec</strong>
              </a>{" "}
              - A Django website made for a Database Systems course that allows
              users to view and review different anime, manga, and light novels.
              Made with Django / Python, Javascript, Bootstrap, vanilla CSS,
              SQL, PostgreSQL, self-created designs from Figma, and deployed on
              Heroku. <em>[group project Mar - June 2021]</em>
            </li>

            <li>
              <a
                className="link"
                href={"https://stupefied-benz-fd5f0c.netlify.app/"}
                target="_blank"
                rel="noopener"
              >
                <strong>Simple Weather PWA</strong>
              </a>{" "}
              - A basic weather react SPA as a PWA, allowing for downloads on
              nearly every devices. Taken from a React PWA tutorial by
              Javascript Mastery to learn more about PWA as a concept and how to
              turn basic web apps into PWAs. Made with React, vanilla CSS, and
              deployed on Netlify. <em>[solo project Mar 2021]</em>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}

/**
 *
 function ClientWork() {
   return (
     <section className="text-gray-600 dark:text-gray-300 font-normal text-lg md:text-xl my-5">
     <h2 className="text-3xl font-bold dark:text-gray-100 text-gray-900">
     Client Work
     </h2>
     <p className="my-5">
     Sometimes I like to apply my skills to individuals or organizations that
     need help with their business. I've helped with design, web development,
     and social media marketing for a few clients. Here's a list of some of
     my past client work and what I did. If you need help with a business
     project,{" "}
     <a
     href="mailto:roewyn.e.umayam@gmail.com?subject=Client%20Inquiry"
     target="_blank"
     className="text-primary font-medium hover:text-primary-dark
     transition duration-300 ease-in-out"
     >
     I'm always open to chat
     </a>
     .
     </p>
     <ul className="my-5 grid grid-cols-1 gap-y-3 text-md md:text-lg">
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
     );
    }

    */
