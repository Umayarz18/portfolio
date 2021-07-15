import Layout from "../../components/layout";
import Card from "../../components/card";

export default function ProjectList() {
  return (
    <Layout home pageTitle="My Projects | Roewyn Umayam | Full-Stack Developer & Taekwondo Instructor">

      <div className="grid grid-cols-1 m-0 justify-center items-center">
        <div className="flex flex-col  flew-wrap block items-center">
          <Card
            title="Sprout"
            description="An e-learning platform designed to teach high school students personal finance through short articles, quizzes, and activites to better prepare them for adulthood."
            color="#2FC06B"
            logo="/logos/sprout-logo.svg"
          />

          <Card
            title="DEISphere"
            description="An event conference website set for the University of Washington Bothell Beta Alpha Psi meant to bring attention to diversity and inclusion in the accounting field."
            color="#4B2E83"
            link="https://www.deisphere.com/"
            logo="/logos/DEISphere.svg"
          />

          <Card
            title="Our-Anime-Rec"
            description="A Django website made for a group Database Systems course that allows users to see titles of anime, manga, and light novels as well as reviews."
            color="#0E87A1"
            link="https://our-anime-rec.herokuapp.com/"
            logo="/logos/Our Anime Rec.svg"
          />
        </div>
      </div>
    </Layout>
  );
}
