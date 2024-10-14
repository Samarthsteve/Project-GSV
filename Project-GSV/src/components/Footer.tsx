import '../styles/Footer.css'

export default function Footer() {
  return (
  <footer>
    <div className="row">
      <div className="col">
        <h3 className="logo">Gnyana Sudha Vidyalaya</h3>
        <p>Celebrating 20 years of excellence, shaping young minds and empowering future leaders.</p>
      </div>
      
      <div className="col">
        <h3>School Address <div className="underline"><span></span></div></h3>
        <p>Gnyana Sudha Vidyalaya</p>
        <p>Shivnagar, Mamanakere</p>
        <p>Bidar, Karnataka - 585401</p>
        <p className="email-id">gsvidyalaya@gmail.com</p>
        <h4>91+ 94820 50396</h4>
      </div>
      
      <div className="col">
        <h3>Links  <div className="underline"><span></span></div></h3>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About School</a></li>
          <li><a href="">Timeline</a></li>
          <li><a href="">Events</a></li>
          <li><a href="">Our Alumini</a></li>
          <li><a href="">Gallery</a></li>
          <li><a href="">Contact Us</a></li>
        </ul>
      </div>
      
      <div className="col">
        <h3>Newsletter  <div className="underline"><span></span></div></h3>
        <form>
          <i className="fa-regular fa-envelope"></i>
          <input type="email" placeholder="Enter your email" required/>
          <button type="submit"><i className="fa-solid fa-arrow-right"></i></button>
        </form>
        
        <div className="social-icons">
        <a href="https://www.facebook.com/Gnyana.Sudha.Bidar/"><i className="fa-brands fa-facebook"></i></a>
        <a href="https://youtube.com/@gsvidyalaya"><i className="fa-brands fa-youtube"></i></a>
        <a href="https://www.instagram.com/gnyana_sudha_vidyalaya/"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
    <hr/>
    <p className="copyright">Copyright &copy; 2024 Gnyana Sudha Vidyalaya</p>
    <p className="copyright dev">Developed by <a>Samarth Kotian</a></p>
  </footer>
  );
}