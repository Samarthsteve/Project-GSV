import "../styles/Hero.css";

interface Props {
  heroTitle: string;
  heroImg: string;
}

function Hero(props: Props) {
   return (
     <div className="hero" style={
     {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.heroImg})`}
     }>
        <h1 className="hero__title">{props.heroTitle}</h1>
      </div>
   );
}

export default Hero