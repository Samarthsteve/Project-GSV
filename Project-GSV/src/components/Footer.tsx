import '../styles/Footer.css'
import {
  Link
} from 'react-router-dom'

interface FooterProps {
  borderRadius: string,
  margin: string,
  footerLine: boolean;
}

export default function Footer({
  borderRadius,
  margin,
  footerLine
}: FooterProps) {
  return (
    <footer style={ { borderRadius, margin }} className={footerLine ? "active": ""}>
      <div className="row">
        <div className="col">
          <h3 className="logo">Gnyana Sudha Vidyalaya</h3>
          <p>
            Celebrating 20 years of excellence, shaping young minds and empowering future leaders.
          </p>
        </div>

        <div className="col">
          <h3>School Address <div className="underline">
            <span></span>
          </div>
          </h3>
          <p>
            Gnyana Sudha Vidyalaya
          </p>
          <p>
            Shivnagar, Mamanakere
          </p>
          <p>
            Bidar, Karnataka - 585401
          </p>
          <p className="email-id">
            gsvidyalaya@gmail.com
          </p>
          <h4>91+ 94820 50396</h4>
        </div>

        <div className="col">
          <h3>Links  <div className="underline">
            <span></span>
          </div>
          </h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About School</Link></li>
            <li><Link to="/timeline">Timeline</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/alumni">Our Alumni</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="col">
          <h3>Newsletter  <div className="underline">
            <span></span>
          </div>
          </h3>
          <form>
            <i className="fa-regular fa-envelope"></i>
            <input type="email" placeholder="Enter your email" required />
          <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
        </form>

        <div className="social-icons">
          <a href="https://www.facebook.com/Gnyana.Sudha.Bidar/"><i className="fa-brands fa-facebook"></i></a>
          <a href="https://youtube.com/@gsvidyalaya"><i className="fa-brands fa-youtube"></i></a>
          <a href="https://www.instagram.com/gnyana_sudha_vidyalaya/"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <hr />
  <p className="copyright">
    Copyright &copy; 2024 Gnyana Sudha Vidyalaya
  </p>
  <p className="copyright dev">
    Developed by <a href="https://github.com/Samarthsteve">Samarth Kotian</a>
  </p>
</footer>
);
}