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
  const loaderData = useLoaderData() as {
    hero: {
      img: string,
      alt: string,
    },
    carousel: [{
      img: string,
      alt: string,
      title: string,
      subtitle: string,
    }],
    thumbnail: {
      img: string,
      alt: string,
    },
    testimony: [{
      img: string,
      alt: string,
      name: string,
      comment: string,
    }],
    profiles: [{
      img: string,
      name: string,
      designation: string,
      comment: string,
    }]
  };
  const [fullName,
    setFullName] = useState("");
  const [phoneNumber,
    setPhoneNumber] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      const baseUrl = import.meta.env.VITE_API_URL;
      // Sending request to backend
      const response = await axios.post(`${baseUrl}enquiry`, {
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
    } catch {
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
          For over 20 years, Gnyana Sudha Vidyalaya has been more than just a school—it’s a foundation for future leaders and responsible global citizens. Nestled in a serene, green landscape away from the city's noise, our campus provides the perfect environment for focused learning and personal growth. We blend academic excellence with strong values, nurturing curiosity, creativity, and character in every student. With experienced faculty, modern facilities, and a vision rooted in 'Vasudhaiva Kutumbakam,' we empower young minds to thrive in a global society.
        </p>
      </div>

      <div className="vicennial">
        <img src={loaderData.thumbnail.img} alt={loaderData.thumbnail.alt} />
      <h3 className="heading">Into Vicennality</h3>
      <p className="description">
        Twenty years ago, Gnyana Sudha Vidyalaya began as a vision—to nurture young minds with knowledge, values, and a global perspective. Over the years, as Bidar has grown, so have we. From a single institution to one of the city's largest schools, expanding into multiple branches and colleges, we have remained committed to excellence. Our alumni today stand as doctors, engineers, navy officers, and professionals shaping the world. As we celebrate this milestone, we invite you to explore our journey—20 years of shaping futures and making an impact.
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