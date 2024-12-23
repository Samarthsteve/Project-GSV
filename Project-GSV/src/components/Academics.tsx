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
    description: "Explore our comprehensive curriculum designed to foster academic excellence and holistic development.",
    icon: "earth-americas",
  },
    {
      title: "Faculty",
      description: "Meet our dedicated faculty members who are committed to inspiring and guiding students towards success.",
      icon: "people-arrows",
    },
    {
      title: "Facilites",
      description: "Engage in a variety of extracurricular activities aimed at nurturing talents and fostering well-rounded individuals.",
      icon: "person",
    },
    {
      title: "Student Support",
      description: "Access personalized support services and resources to ensure every student's academic and personal success.",
      icon: "house-user",
    },
    {
      title: "Community Engagement",
      description: "Explore our initiatives to foster community involvement, social responsibility, and civic engagement among our students.",
      icon: "users",
    },
    {
      title: "Extracurricular Activities",
      description: "Engage in a variety of extracurricular activities aimed at nurturing talents and fostering well-rounded individuals.",
      icon: "handshake",
    },
  ];

  return(
    <div className="academics">
      <Hero heroTitle={loaderData.hero.title} heroImg={loaderData.hero.img} />

      <div className="academics__intro">
        <h3 className="heading">Where Knowledge Meets Inspiration</h3>
        <p className="description">
          With a focus on holistic development and personalized instruction, we strive to nurture a passion for learning that extends beyond the classroom. From foundational concepts to advanced topics, our dynamic curriculum prepares students to excel academically and become lifelong learners. Join us as we embark on a journey of intellectual discovery and academic excellence at Guru Nanak Public School.
        </p>
      </div>

      <div className="features">
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