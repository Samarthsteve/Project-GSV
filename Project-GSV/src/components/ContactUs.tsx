import "../styles/ContactUs.css";
import NewsletterForm from "./NewsletterForm";

export default function ContactUs() {
  return (
    <main className="contact-us">
      <div className="contact__hero">
        <h1 className="hero__title">Contact Us</h1>
      </div>

      <div className="Mailbox">
        <div className="Map">
          <h3 className="heading">Our Location</h3>
          <iframe className="outline"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7963116.20763668!2d77.594624!3d12.9564672!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcec0d0579e6aa3%3A0xeb1018b5836b7bb5!2sGnyana%20Sudha%20Vidyalaya%2C%20Bidar!5e0!3m2!1sen!2sin!4v1728469195281!5m2!1sen!2sin"
            loading="lazy"
          ></iframe>
        </div>

        <div className="Address">
          <h3 className="heading">Our Address</h3>
          <div className="Address__box">
            <p className="bold">Gnyana Sudha Vidyalaya,</p>
            <p>Shivnagar, Mamanakere</p>
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
          <p className="bold outline">+91 94820 50396</p>
        </div>

        <div className="Email">
          <i className="fa-solid fa-envelope"></i>
          <p className="bold outline">gsvidyalaya@gmail.com</p>
        </div>
        </div>
      </div>

      <div className="social__media">
        <h3 className="heading">Social Media</h3>
        <div className="flex social__media__box">
        <div className="Facebook outline">
          <i className="fa-brands fa-facebook-f"></i>
          <a href="">
            /<span className="bold">Gnyana.Sudha.Bidar</span>
          </a>
        </div>

        <div className="Youtube outline">
          <i className="fa-brands fa-youtube"></i>
          <a href="">
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
  );
}
