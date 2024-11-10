import '../styles/NewsletterForm.css';
import {
  useState
} from "react";
import axios from "axios";
import {
  toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function NewsletterForm() {
  const [email,
    setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/newsletter", {
        email
      });
      if (response.data.status === "success") {
        toast.success("Subscription successful!", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          hideProgressBar: false,

        });
      } else if (response.data.status === "duplicate") {
        toast.warning("You are already subscribed!", {
          position: "top-right",
          autoClose: 3000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          hideProgressBar: false,

        });
      } else {
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


  return(
    <>
      <div className="panel-container">
        <small>
          Don't miss out the latest
        </small>
        <h3>
          Monthly School news and updates <br />
        straight to your inbox
      </h3>
      <form onSubmit={handleSubmit}>
        <input type="email" required placeholder="Email address" name="email" value={email}
        onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Stay inspired</button>
    </form>
    <small>
      Commitment issues? <br />
    Unsubscribe at any time.
  </small>
</div>
</>
);
}