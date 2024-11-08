import "../styles/HomeHero.css"
import heroImg from "../assets/Education.svg"

interface Props {
  heroImg: string;
  heroAlt: string;
}

function HomeHero(props: Props) {
  return (
    <div className="Home-hero">
      <div>
        <div className="nav-Home">
          <h1 className="logo">Gnyana Sudha Vidyalaya</h1>
        </div>
      </div>
      <main>
        <div className="container">
          <img src={props.heroImg} alt={props.heroAlt} />
        <div className="hero-text">
          <h1>Your Child's Best Nurturing Choice</h1>
          <p>
            Get your child into one of the top schools in Northern Karnataka. Teach them with the values of - "Vasudhaiva Kutumbakam"
          </p>
          <a href="#enquiry"><button>Get me to the Enquiry</button> </a>
        </div>
      </div>
    </main>
  </div>
);
}

export default HomeHero;