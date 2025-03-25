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
          <h1>Empowering Young Minds, Enriching Bright Futures</h1>
          <p>
            A top choice for quality education in Northern Karnataka, where learning meets values under the guiding principle of 'Vasudhaiva Kutumbakam.
          </p>
          <a href="#enquiry"><button>Explore Admissions</button> </a>
        </div>
      </div>
    </main>
  </div>
);
}

export default HomeHero;