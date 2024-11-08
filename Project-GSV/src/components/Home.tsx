import "../styles/Home.css"
import Carousel from "./Carousel"
import Counter from "./Counter"
import Testimony from "./Testimony"
import HomeHero from "./HomeHero"
import {
  Link,
  useLoaderData
} from "react-router-dom"

function Home() {
  const loaderData = useLoaderData();

  return (
    <main className="Home">
      <HomeHero heroImg={loaderData.hero.img} heroAlt={loaderData.hero.alt} />

      <Carousel carousel={loaderData.carousel} />

      <div className="intro-text">
        <h3 className="heading">We Are...</h3>
        <p className="description">
          At Gnyana Sudha Vidyalaya, we are dedicated to shaping bright minds and nurturing holistic development. For the past 20 years, our institution has been committed to excellence, blending traditional values with modern education to inspire curiosity, creativity, and character. Located in the heart of Bidar, we provide a supportive environment where students are encouraged to excel academically, grow personally, and embrace a global outlook. Join us as we continue our journey in building future leaders and responsible world citizens.
        </p>
      </div>

      <div className="vicennial">
        <img src={loaderData.thumbnail.img} alt={loaderData.thumbnail.alt} />
      <h3 className="heading">Into Vicennality</h3>
      <p className="description">
        At Gnyana Sudha Vidyalaya, we are dedicated to shaping bright minds and nurturing holistic development. For the past 20 years, our institution has been committed to excellence, blending traditional values with modern education to inspire curiosity, creativity, and character. Located in the heart of Bidar, we provide a supportive environment where students are encouraged to excel academically, grow personally, and embrace a global outlook. Join us as we continue our journey in building future leaders and responsible world citizens.
      </p>
      <Link to="/timeline"><button className="button-85" role="button">Explore our Journey</button></Link>
    </div>

    <Counter />

    <div className="parent-testimonials">
      <h3 className="heading">Our Parents Say...</h3>
      <Testimony testimonyList={loaderData.testimony} />
    </div>

    <div className="chamber-text">
      <h3 className="heading">Straight from Desk</h3>
      <div className="wrapper">
        {loaderData.profiles.map((profile, index) => {
          return(<div className="profile" key={index}>
            <img src={profile.img} />
            <p className="name bold">
              {profile.name}
            </p>
            <p className="designation">
              {profile.designation}
            </p>
            <p className="talk">
              <span className="fa fa-quote-left left"></span>{profile.comment}<span className="fa fa-quote-right right"></span>
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