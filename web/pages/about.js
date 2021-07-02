import Layout from "../components/layout";
import { FaInstagram, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import Image from "next/image";

export default function About() {
  return (
    <Layout home pageTitle="About me | Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor">
      <section className="flex  flex-col md:flex-row  mx-20">
        <div className="photo m-8 rounded">
          <Image
            className=""
            src="/images/profile.jpg"
            alt="Roewyn Umayam profile picture"
            width={360}
            height={360}
            layout="fixed"
          />
        </div>
        <div className=" mx-8 md:m-8 md:w-3/6">
          <h1 className="text-3xl font-bold">👋 I’m Roewyn</h1>
          <p className=" my-5 ">
            Recent MIS graduate from the University of Washington Bothell
            Aspiring full-stack developer. Lead Developer @Sprout 🌱. Instructor
            @UWTA Taekwondo Center Lynnwood 🥋 Web Developer for @DEIsphere.
          </p>
          <div className="flex">
            <button className="btn">Check Resume</button>
            <a
              className="btn-secondary icon-btn"
              target="_blank"
              href="https://www.linkedin.com/in/roewyn-umayam/"
            >
              <FaLinkedinIn />
            </a>
            <a
              className="btn-secondary icon-btn"
              target="_blank"
              href="https://www.instagram.com/roewynaboat_tkd/"
            >
              <GrInstagram />
            </a>
            <a className="btn-secondary icon-btn" target="_blank">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </section>

      {/** Recent Activities */}
      <section>This is a test item</section>
    </Layout>
  );
}
