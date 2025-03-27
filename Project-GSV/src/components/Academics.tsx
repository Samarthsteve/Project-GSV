import "../styles/Academics.css"
import Accordian from "./Accordian"
import Hero from "./Hero"
import {
  useLoaderData
} from "react-router-dom";

function Academics () {
  const loaderData = useLoaderData() as {
    hero: {
      img: string,
      title: string,
    },
    questions: [{
      Uid: string,
      question: string,
      answer: string
    }]
  };

  const cards = [{
    title: "Curriculum",
    description: "Our comprehensive curriculum starts with a fun, engaging approach in Kindergarten, builds strong fundamentals in Classes I-V, and evolves into a rigorous academic challenge in Classes VI-X. It’s an educational journey where every lesson is a step toward a brighter future.",
    icon: "earth-americas",
  },
    {
      title: "Faculty",
      description: "Our team of dedicated educators isn’t just teaching—they’re inspiring. With passion, expertise, and a dash of creative genius, our faculty ensures every student gets the guidance they need to soar.",
      icon: "people-arrows",
    },
    {
      title: "Facilites",
      description: "From modern classrooms to well-equipped labs and libraries, our campus is built to foster innovative learning. The environment is designed to be as dynamic as our students, with every corner encouraging exploration and growth.",
      icon: "person",
    },
    {
      title: "Student Support",
      description: "We believe every child has untapped potential. With personalized mentoring, academic counseling, and career guidance, we help students overcome challenges and unlock their full capabilities—no magic wand required!",
      icon: "house-user",
    },
    {
      title: "Community Engagement",
      description: "Education at GSV goes beyond our campus. We actively involve our students in community initiatives and cultural programs, reinforcing the values of social responsibility and teamwork.",
      icon: "users",
    },
    {
      title: "Extracurricular Activities",
      description: "Whether it’s sports, music, arts, or tech clubs, our extracurricular programs ensure that learning happens everywhere. After all, developing well-rounded talents is just as important as acing that exam.",
      icon: "handshake",
    },
  ];

  return(
    <div className="academics">
      <Hero heroTitle={loaderData.hero.title} heroImg={loaderData.hero.img} />

      <div className="academics__intro">
        <h3 className="heading">Where Knowledge Meets Inspiration</h3>
        <p className="description">
          At GSV, learning isn’t just about textbooks—it’s about sparking curiosity and nurturing a lifelong passion for discovery. Our academic journey, from the playful beginnings in kindergarten to the robust challenges of Class X, is designed to empower every student with the skills and confidence to excel.
        </p>
      </div>

      <div className="features">
        <h3 className="heading">Our Six Pillars</h3>
        {cards.map((card, index) => {
          return(
            <div className="feature" key={index}>
              <i className={`fa-solid fa-${card.icon}`}></i>
              <h2 className="feature-head">{card.title}</h2>
              <p className="feature-desc">
                {card.description}
              </p>
            </div>
          )})
        }

      </div>

      <div className="faqs">
        <h3 className="heading">FAQs</h3>
        <Accordian questions={loaderData.questions} />
      </div>
    </div>
  );
}

export default Academics;