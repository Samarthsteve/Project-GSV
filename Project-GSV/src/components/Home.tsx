import "../styles/Home.css"
import Carousel from "./Carousel"
import Counter from "./Counter"
import Testimony from "./Testimony"
import HomeHero from "./HomeHero"
import {
  Link,
  useLoaderData
} from "react-router-dom"
import {
  useState
} from "react";
import axios from "axios";
import {
  ToastContainer,
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const loaderData = useLoaderData();
  const [fullName,
    setFullName] = useState("");
  const [phoneNumber,
    setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone number (simple check for digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phoneNumber)) {
      toast.warning("Please enter a valid 10-digit phone number.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    try {
      // Sending request to backend
      const response = await axios.post("http://localhost:5000/enquiry", {
        fullName, phoneNumber
      });

      // Handling responses based on backend result
      if (response.data.status === "success") {
        toast.success("Enquiry submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          hideProgressBar: false,
        });
        setFullName("");
        setPhoneNumber("");
      }  else {
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          hideProgressBar: false,

        });
      }
    } catch (error) {
      console.log(error.message)
      toast.error("Failed to connect. Please check your network.", {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        hideProgressBar: false,
      });
    }
  };


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
      <form onSubmit={handleSubmit}>
        <div className="field">
          <input type="text" required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)} />
        <span className="fas fa-user"></span>
        <label>Full Name</label>
      </div>
      <div className="field">
        <input type="tel"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        required />
      <span className="fas fa-lock"></span>
      <label>Phone Number</label>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>
</div>
<ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
</main>
)
}

export default Home;