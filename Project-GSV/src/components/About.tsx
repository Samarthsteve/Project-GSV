import "../styles/About.css"
import Hero from './Hero'
import {
  useLoaderData
} from "react-router-dom";

function About() {
  const loaderData = useLoaderData() as {
    hero: {
      img: string,
      title: string,
    },
    thumbnail: {
      img: string,
      alt: string,
    },
    profiles: [{
      img: string,
      name: string,
      designation: string,
      place: string,
    }]
  }

  const cards = [{
    title: "Our Vision",
    description: "At Gnyana Sudha Vidyalaya, our mission is to provide a nurturing and inclusive learning environment where students are empowered to achieve academic excellence, embrace diversity, and make meaningful contributions to society. We are committed to foster a culture of lifelong learning, personal growth, and social responsibility among our students, preparing them to thrive in a dynamic and interconnected world."
  },
    {
      title: "Our Mission",
      description: "Our vision at Gnyana Sudha Vidyalaya is to be a leading institution of excellence in education, known for our innovative teaching practices, holistic approach to learning, and commitment to student success. We aspire to cultivate a community of lifelong learners who possess the knowledge, skills, and values needed to become compassionate leaders and active contributors to a global society."
    },
    {
      title: "Core Values",
      description: "Gnyana Sudha Vidyalaya, excellence is our standard, integrity our cornerstone, and inclusivity our hallmark. Through these core values, we inspire a community committed to academic excellence, personal growth, and positive societal impact, shaping individuals who embody the spirit of excellence, integrity, inclusivity, empowerment, collaboration, resilience, and service in all endeavors"
    },
  ];

  return(
    <div className="About">
      <Hero heroTitle={loaderData.hero.title} heroImg={loaderData.hero.img} />

      <div className="about__intro">
        <h3 className="heading">Our Legacy</h3>
        <p className="description">
          The purpose of education is not only to gain knowledge but wisdom also. Wisdom is one’s true wealth and better than strength.
          <span className="br"></span>For the past 20 years, our school has been a place where dreams are nurtured and lifelong values are instilled. Our alumni continue to shine as ambassadors of our institution, making remarkable contributions in their fields and communities. This page celebrates their stories and achievements.
          <span className="br"></span>The genesis of GSV is a blessing in the field of education in Bidar.  This dedicated institution has uplifted the morale of education in the terms of teaching, learning and holistic development a child.
        </p>
      </div>

      <div className="about-img">
        <img src={loaderData.thumbnail.img} alt={loaderData.thumbnail.alt} />
    </div>

    <div className="about__cards">
      {cards.map((card, index) => {
        return(
          <div className="card" key={index}>
            <h2 className="card-head">{card.title}</h2>
            <p className="card-desc">
              {card.description}
            </p>
          </div>
        )})
      }
    </div>

    <div className="about__potential">
      <h3 className="heading">Unlocking Potential, Igniting Passion</h3>
      <p className="description">
        At Gnyana Sudha Vidyalaya, we believe in unlocking the potential of every student and igniting their passion for learning. Through a dynamic and engaging curriculum, personalized support, and innovative teaching methods, we inspire students to explore their interests, pursue their goals, and make meaningful contributions to the world. Join us on a journey of discovery, growth, and transformation as we empower students to unleash their full potential and become leaders of tomorrow.
      </p>
    </div>

    <div className="team">
      <h3 className="heading">Our team</h3>
      <div className="wrapper">
        {loaderData.profiles.map((profile, index) => {
          return(<div className="profile" key={index}>
            <img src={profile.img} />
            <p className="name bold">
              {profile.name}
            </p>
            <p className="designation">
              {`${profile.designation} | ${ profile.place }`}
            </p>
          </div>
        )})}
    </div>
  </div>

  <div className="song">
    <h3 className="heading">Song of Hope</h3>
    <p>
      When dreams come true and hopes grow strong<br />
    A desperate try became joyful song<br />
  To GSV each of us belong...<span className="br"></span>
  The future is grand with hope now restore<br />
with faith, purpose and vision<br />
We will not fall, will not give up <br />
untill we touch the stars<br />
To GSV each of us belong<span className="br"></span>
The universal family joins us together<br />
in one unified song<br />
We live our lives not like before<br />
To GSV we belong<br />
To GSV each of us belong <span className="br"></span>
</p>
</div>
</div>
);
}

export default About;