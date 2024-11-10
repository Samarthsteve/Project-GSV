import Hero from "./Hero";
import "../styles/Alumni.css";
import AlumniSlider from "./AlumniSlider";
import Testimony from "./Testimony";
import {
  useLoaderData
} from "react-router-dom";
import {
  useState
} from "react";
import axios from "axios";
import {
  ToastContainer,
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Alumni() {
  const loaderData = useLoaderData();
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending request to backend
      const response = await axios.post("http://localhost:5000/alumniForm", {
        name,
        email,
        graduationYear,
        message,
      });

      // Handling responses based on backend result
      if (response.data.status === "success") {
        toast.success("Alumni form submitted successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        setName("");
        setEmail("");
        setGraduationYear("");
        setMessage("");
      } else if (response.data.status === "duplicate") {
        toast.warning("This email is already registered.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error("An error occurred. Please try again later.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      toast.error("Failed to connect. Please check your network.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return(
    <>
    <main className="alumni">
      <Hero heroTitle={loaderData.hero.title} heroImg={loaderData.hero.img} />
      <div className="alumni__intro">
        <h3 className="heading">Our Alumni, Our Legacy</h3>
        <p className="description">
          For the past 20 years, our school has been a place where dreams are nurtured and lifelong values are instilled. Our alumni continue to shine as ambassadors of our institution, making remarkable contributions in their fields and communities. This page celebrates their stories and achievements.
        </p>
      </div>

      <div className="alumni__testimonies">
        <h3 className="heading">Voices of Our Alumni</h3>
        <p className="description">
          Our alumni reflect on their journeys, sharing the lessons, friendships, and experiences that shaped their paths. Their stories are a testament to the power of education, community, and lifelong learning.
        </p>
        <Testimony testimonyList={loaderData.testimony} />
      </div>

      <div className="alumni__gallery">
        <h3 className="heading">Celebrating Alumni Connections</h3>
        <p className="description">
          Our alumni remain an integral part of our school community, always connected by the shared memories of their time here. From reunions to professional milestones, these images capture moments of joy, celebration, and continued growth. Scroll through to see snapshots of our alumni gatherings and the enduring bonds that define our school family.
        </p>
        <AlumniSlider slider={loaderData.slider} />
      </div>

      <div className="alumni__form">
        <h3 className="heading">Join Our Alumni Network</h3>

        <p className="description">
          Whether you're reconnecting with old friends or looking to share your journey with current students, our alumni network is a growing community that welcomes all. Stay in touch, contribute to future events, and help inspire the next generation of students by joining our alumni platform. Your journey with us never truly ends!
        </p>

        <div className="form-container">
          <h3>Register as an Alumni</h3>
          <p className="form-caption">
            Join the legacy and stay connected with your alma mater.
          </p>
          <form onSubmit={handleSubmit}>
            {/* <!-- Name Field --> */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" placeholder="Full Name" value={name}
              onChange={(e) => setName(e.target.value)}
              required />
          </div>

          {/* <!-- Email Field --> */}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
        </div>

        {/* <!-- Graduation Year Field --> */}
        <div className="form-group">
          <label htmlFor="graduationYear">Graduation Year</label>
          <input id="graduationYear" name="graduationYear" type="number"
            placeholder="Graduation Year"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            required />
      </div>

      {/* <!-- Message Field --> */}
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required />
      </div>

      {/* <!-- Submit Button --> */}
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  </div>
</div>
</main>
<ToastContainer position="top-right"
autoClose={3000}
hideProgressBar={true}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover />
</>
);
}

export default Alumni;