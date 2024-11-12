import "../styles/HomeHero.css"

interface Props {
  heroImg: string;
  heroAlt: string;
}

function HomeHero({
  heroImg,
  heroAlt
}: Props) {
  return (
    <div className="Home-hero">
      <div>
        <div className="nav-Home">
          <h1 className="logo">Gnyana Sudha Vidyalaya</h1>
        </div>
      </div>
      <main>
        <div className="container">
          <img src={heroImg} alt={heroAlt} />
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