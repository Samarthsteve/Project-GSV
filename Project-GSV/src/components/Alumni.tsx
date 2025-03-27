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
  const loaderData = useLoaderData() as {
    hero: {
      img: string,
      title: string,
    },
    testimony: [{
      img: string,
      alt: string,
      name: string,
      comment: string,
    }],
    slider: [{
      img: string,
      alt: string,
    }],
    
  };
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [message, setMessage] = useState("");
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const baseUrl = import.meta.env.VITE_API_URL;
      // Sending request to backend
      const response = await axios.post(`${baseUrl}alumniForm`, {
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
    } catch {
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
          Gnyana Sudha Vidyalaya takes immense pride in its alumni, who have carved a niche for themselves across various fields. From academics to entrepreneurship, from the armed forces to global business, our former students are a testament to the values and education imparted here. Their journeys inspire current and future students, showcasing the power of perseverance, discipline, and excellence that GSV instills in every learner.
        </p>
      </div>

      <div className="alumni__testimonies">
        <h3 className="heading">Voices of Our Alumni</h3>
        <p className="description">
          The true essence of a school lies in the success and memories of its students. Here are the voices of some of our distinguished alumni, sharing their experiences and reflections on their time at GSV.
        </p>
        <Testimony testimonyList={loaderData.testimony} />
      </div>

      <div className="alumni__gallery">
        <h3 className="heading">Celebrating Alumni Connections</h3>
        <p className="description">
          At GSV, we believe that the bond between a student and their school lasts a lifetime. We actively foster connections with our alumni through reunions, networking events, and mentorship programs. Whether you wish to reconnect with old friends, contribute to school initiatives, or mentor the next generation of GSV students, we welcome you to be a part of our ever-growing alumni network.
        </p>
        <AlumniSlider slider={loaderData.slider} />
      </div>

      <div className="alumni__form">
        <h3 className="heading">Join Our Alumni Network</h3>

        <p className="description">
          We invite all our alumni to stay connected, share their experiences, and contribute to the GSV legacy. Whether you have a story to tell, achievements to celebrate, or simply want to reconnect, our alumni network is the perfect place for you.
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