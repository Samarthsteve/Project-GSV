import "../styles/Carousel.css"
import CarouselScript from "../scripts/CarouselScript"
import {
  useNavigate
} from "react-router-dom";

function Carousel() {
  const items = [{
    topic: "Campus",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
    title: "Our State-of-Art Campus",
  },
    {
      topic: "Faculty",
      src: "https://cache.careers360.mobi/media/schools/social-media/media-gallery/8035/2019/7/20/Gnyana%20Sudha%20Vidyalaya-Christmas%20Celebration.jpg",
      title: "Our Trained Staff",
    },
    {
      topic: "Events",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3uWoiU3zgs6XXY9VQlijaXXwAQfnVpMaO4dS9tLHA8MGnFE8em-SSXc&s=10",
      title: "Our Majestic Celebrations",
    },
    {
      topic: "Sports",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LGtZwhS1Sfmhaw6W07vxV3f05Zb70vChzNOrE7GDw5eR66WWAD8xplv0&s=10",
      title: "Our Stars",
    },
  ]

  CarouselScript();
  const navigate = useNavigate();


  return (
    <div className="carousel">
      <div className="list">
        {items.map((item, index) => {
          return(
            <div className="item" key={index}>
              <img src={item.src} />
            <div className="content">
              <div className="title">
                {item.title}
              </div>
              <div className="topic">
                {item.topic}
              </div>
              <div className="buttons">
                <button type="button" onClick={() => navigate("/gallery")}>SEE MORE</button>
              </div>
            </div>
          </div>
        )})}
    </div>
    <div className="thumbnail">
      {items.map((thumbnail, index) => {
        return(
          <div className="item" key={index}>
            <img src={thumbnail.src} />
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