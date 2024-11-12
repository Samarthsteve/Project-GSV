import "../styles/Carousel.css"
import CarouselScript from "../scripts/CarouselScript"
import {
  useNavigate
} from "react-router-dom";

interface Props {
  carousel: [{
      img: string,
      alt: string,
      title: string,
      subtitle: string,
    }];
}

function Carousel({
  carousel
}: Props) {

  CarouselScript();
  const navigate = useNavigate();

  return (
    <div className="carousel">
      <div className="list">
        {carousel.map((item, index) => {
          return(
            <div className="item" key={index}>
              <img src={item.img} alt={item.alt} />
            <div className="content">
              <div className="title">
                {item.subtitle}
              </div>
              <div className="topic">
                {item.title}
              </div>
              <div className="buttons">
                <button type="button" onClick={() => navigate("/gallery")}>SEE MORE</button>
              </div>
            </div>
          </div>
        )})}
    </div>
    <div className="thumbnail">
      {carousel.map((thumbnail, index) => {
        return(
          <div className="item" key={index}>
            <img src={thumbnail.img} alt={thumbnail.alt} />
        </div>
      )})}
  </div>
  <div className="arrows">
    <button id="prev">&lt;</button>
    <button id="next">&gt;</button>
  </div>

  <div className="time"></div>
</div>
);
}

export default Carousel;