import "../styles/Home.css"
import Carousel from "./Carousel"
import Counter from "./Counter"
import Testimony from "./Testimony"
import HomeHero from "./HomeHero"
import {
  Link
} from "react-router-dom"

function Home() {
  const testimonyList = [{
    name: "Sandeep Dhankar",
    message: "I'm grateful for the opportunity to be a part of your alumni network. Your dedication to your school and your commitment to excellence have been invaluable. I'm excited to continue making a positive impact in my community.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
  },
    {
      name: "Jainath Kapoor",
      message: "I'm thankful for the opportunity to be a part of your alumni network. Your dedication to your school and your commitment to excellence have been invaluable. I'm excited to continue making a positive impact in my community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
    },
    {
      name: "Meera Jaintal",
      message: "I'm grateful for the opportunity to be a part of your alumni network. Your dedication to your school and your commitment to excellence have been invaluable. I'm excited to continue making a positive impact in my community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
    },
  ]
  const profiles = [{
    name: "Dr. Poornima George",
    designation: "President",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
    talk: "Our vision at Gnyana Sudha Vidyalaya is to be a leading institution of excellence in education, known for our innovative teaching practices, holistic approach to learning, and commitment to student success. We aspire to cultivate a community of lifelong learners who possess the knowledge, skills, and values needed to become compassionate leaders and active contributors to a global society.",
  },
    {
      name: "Dr. Muneshwar Lakha",
      designation: "Director",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
      talk: "Our vision at Gnyana Sudha Vidyalaya is to be a leading institution of excellence in education, known for our innovative teaching practices, holistic approach to learning, and commitment to student success. We aspire to cultivate a community of lifelong learners who possess the knowledge, skills, and values needed to become compassionate leaders and active contributors to a global society.",
    },
  ]

  return (
    <main className="Home">
      <HomeHero />

      <Carousel />

      <div className="intro-text">
        <h3 className="heading">We Are...</h3>
        <p className="description">
          At Gnyana Sudha Vidyalaya, we are dedicated to shaping bright minds and nurturing holistic development. For the past 20 years, our institution has been committed to excellence, blending traditional values with modern education to inspire curiosity, creativity, and character. Located in the heart of Bidar, we provide a supportive environment where students are encouraged to excel academically, grow personally, and embrace a global outlook. Join us as we continue our journey in building future leaders and responsible world citizens.
        </p>
      </div>

      <div className="vicennial">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LGtZwhS1Sfmhaw6W07vxV3f05Zb70vChzNOrE7GDw5eR66WWAD8xplv0&s=10" />
      <h3 className="heading">Into Vicennality</h3>
      <p className="description">
        At Gnyana Sudha Vidyalaya, we are dedicated to shaping bright minds and nurturing holistic development. For the past 20 years, our institution has been committed to excellence, blending traditional values with modern education to inspire curiosity, creativity, and character. Located in the heart of Bidar, we provide a supportive environment where students are encouraged to excel academically, grow personally, and embrace a global outlook. Join us as we continue our journey in building future leaders and responsible world citizens.
      </p>
      <Link to="/timeline"><button className="button-85" role="button">Explore our Journey</button></Link>
    </div>

    <Counter />

    <div className="parent-testimonials">
      <h3 className="heading">Our Parents Say...</h3>
      <Testimony testimonyList={testimonyList} />
    </div>

    <div className="chamber-text">
      <h3 className="heading">Straight from Desk</h3>
      <div className="wrapper">
        {profiles.map((profile, index) => {
          return(<div className="profile" key={index}>
            <img src={profile.img} />
            <p className="name bold">
              {profile.name}
            </p>
            <p className="designation">
              {profile.designation}
            </p>
            <p className="talk">
              <span className="fa fa-quote-left left"></span>{profile.talk}<span className="fa fa-quote-right right"></span>
            </p>
          </div>
        )})}
    </div>
  </div>
  
  <h3 className="heading">Get an Admission Enquiry</h3>
  <div className="Enquiry" id="enquiry">
    <div className="content">
      <div className="text">
        Request an Enquiry
      </div>
      <form action="#">
        <div className="field">
          <input type="text" required />
          <span className="fas fa-user"></span>
          <label>Full Name</label>
        </div>
        <div className="field">
          <input type="text" required />
          <span className="fas fa-lock"></span>
          <label>Phone Number</label>
        </div>
        <button>Submit</button>
      </form>
    </div>
  </div>
</main>
);
}

export default Home;