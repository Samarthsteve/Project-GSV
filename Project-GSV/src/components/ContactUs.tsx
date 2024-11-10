import "../styles/ContactUs.css";
import NewsletterForm from "./NewsletterForm";
import Hero from "./Hero";
import {
  useLoaderData
} from "react-router-dom";
import {
  ToastContainer
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactUs() {
  const hero = useLoaderData();

  return (
    <>
    <main className="contact-us">
      <Hero heroTitle={hero.title} heroImg={hero.img} />

      <div className="Mailbox">
        <div className="Map">
          <h3 className="heading">Our Location</h3>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.891705065658!2d77.52483939999999!3d17.937204299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec0d0579e6aa3%3A0xeb1018b5836b7bb5!2sGnyana%20Sudha%20Vidyalaya%2C%20Bidar!5e0!3m2!1sen!2sin!4v1730301885002!5m2!1sen!2sin" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>

        <div className="Address">
          <h3 className="heading">Our Address</h3>
          <div className="Address__box">
            <p className="bold">
              Gnyana Sudha Vidyalaya,
            </p>
            <p>
              Shivnagar, Mamanakere
            </p>
            <p>
              Bidar, Karnataka - <span className="bold">585401</span>
            </p>
          </div>
        </div>
      </div>

      <div className="contact__details">
        <h3 className="heading">Contact Details</h3>
        <div className="contact__details__box flex">
          <div className="Phone">
            <i className="fa-solid fa-phone"></i>
            <p className="bold outline">
              +91 94820 50396
            </p>
          </div>

          <div className="Email">
            <i className="fa-solid fa-envelope"></i>
            <p className="bold outline">
              gsvidyalaya@gmail.com
            </p>
          </div>
        </div>
      </div>

      <div className="social__media">
        <h3 className="heading">Social Media</h3>
        <div className="flex social__media__box">
          <div className="Facebook outline">
            <i className="fa-brands fa-facebook-f"></i>
            <a href="https://www.facebook.com/Gnyana.Sudha.Bidar/">
              /<span className="bold">Gnyana.Sudha.Bidar</span>
            </a>
          </div>

          <div className="Youtube outline">
            <i className="fa-brands fa-youtube"></i>
            <a href="https://youtube.com/@gsvidyalaya">
              @<span className="bold">gsvidyalaya</span>
            </a>
          </div>
        </div>
      </div>

      <div className="newsletter">
        <h3 className="heading">Newsletter</h3>
        <NewsletterForm />
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