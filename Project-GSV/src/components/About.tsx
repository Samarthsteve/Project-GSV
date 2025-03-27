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
    description: "To empower students with the knowledge, skills, and values to excel in a rapidly changing world, shaping them into responsible global citizens who contribute to the welfare of humanity."
  },
    {
      title: "Our Mission",
      description: "At GSV, we are committed to providing an inclusive and holistic education that nurtures the intellectual, emotional, and social development of each student. We aim to create a learning environment where curiosity, creativity, and academic excellence flourish, preparing students for success in their personal and professional lives."
    },
    {
      title: "Core Values",
      description: "At GSV, we uphold integrity, excellence, and compassion as our guiding principles. We foster honesty, encourage innovation, and nurture a strong sense of community. With a focus on discipline and creativity, we shape responsible individuals ready to embrace the future with confidence."
    },
  ];

  return(
    <div className="About">
      <Hero heroTitle={loaderData.hero.title} heroImg={loaderData.hero.img} />

      <div className="about__intro">
        <h3 className="heading">Our Legacy</h3>
        <p className="description">
          Gnyana Sudha Vidyalaya has been a pillar of education in Bidar since its inception in 2005. What started as a small school with just 35 students has grown into one of the most respected institutions in the region. The guiding principle of <em>Vasudhaiva Kutumbakam</em> (the world is one family) has been the foundation of our success, shaping not only our academic curriculum but also instilling a sense of responsibility and compassion in our students.
          <span className="br"></span>Over the years, we have evolved into a place where education is a journey that nurtures curiosity, discipline, and a lifelong passion for learning. Our institution’s continuous growth, driven by a dedicated team of educators, visionary leadership, and unwavering community support, reflects the collective effort to shape well-rounded global citizens.
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
        At GSV, every child is seen as a unique individual with untapped potential. We offer more than just traditional education—we empower our students to explore their passions, challenge their limits, and discover their true capabilities. Our teachers act as mentors, guiding students not only through textbooks but also through life’s challenges, helping them to unlock their full potential and ignite a lifelong passion for learning.
        <span className="br"></span>We believe that every student has the ability to achieve greatness, and it is our job to help them realize it. With a diverse range of academic and co-curricular opportunities, we strive to provide an environment where students are motivated to reach new heights, both inside and outside the classroom.
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