import {
  useState,
  useEffect
} from 'react';
import {
  Outlet,
  useLocation
} from 'react-router-dom';
import ScrollRestoration from './scripts/ScrollRestoration';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./App.css"

function App() {
  const [footerBorderRadius,
    setFooterBorderRadius] = useState < string > ('125px 125px 0 0');
  const [footerMargin,
    setFooterMargin] = useState < string > ('30px 0 0 0');
  const [footerLine,
    setFooterLine] = useState < boolean > (false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/timeline') {
      setFooterBorderRadius('0'); // Flat for the timeline and pages
      setFooterMargin('0');
      setFooterLine(true);
    } else {
      setFooterBorderRadius('125px 125px 0 0'); // Rounded for other pages
      setFooterMargin('30px 0 0 0');
      setFooterLine(false);
    }
    // Intersection Observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if ((entry.isIntersecting) && !(entry.target.classList.contains("intro-text"))) {
          entry.target.classList.add(`${entry.target.classList[0]}-transition`);
        }
        if ((entry.isIntersecting) && entry.target.classList.contains("heading")) {
          navbar.style.display = "block"
        }
      }
      );
    });

    const navbar = document.querySelector("#header") as HTMLElement;
    const headings = document.querySelectorAll('.heading') as NodeListOf < HTMLElement >;
    const aboutCards = document.querySelectorAll('.about__cards .card') as NodeListOf < HTMLElement >;
    const featureCards = document.querySelectorAll('.features .feature') as NodeListOf < HTMLElement >;
    const testmonials = document.querySelectorAll(".Testimony .wrapper .container") as NodeListOf < HTMLElement >;

    headings.forEach((element) => observer.observe(element));
    aboutCards.forEach((element) => observer.observe(element));
    featureCards.forEach((element) => observer.observe(element));
    testmonials.forEach((element) => observer.observe(element));
  },
    [location.pathname]);

  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
      <Footer borderRadius={ footerBorderRadius } margin={ footerMargin } footerLine={ footerLine } />
    </div>
  );
}


export default App;