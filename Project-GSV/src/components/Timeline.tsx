import "../styles/Timeline.css";
import Hero from "./Hero";
import TimelineScript from "../scripts/TimelineScript";
import {
  useLoaderData
} from "react-router-dom";

function Timeline() {
  const loaderData = useLoaderData();

  TimelineScript();

  return(
    <div className="Timeline">
      <Hero heroTitle={loaderData.hero.title} heroImg={loaderData.hero.img} />

      <div className="timeline-container" id="timeline-1">
        <div className="timeline-header">
          <h2 className="timeline-header__title">Our Journey</h2>
          <h3 className="timeline-header__subtitle">Explore our 20 years of excellence</h3>
        </div>

        <div className="timeline">
          {loaderData.timeline.map((card, index) => {
            return(
              <div className="timeline-item" data-text={card.title} key={index}>
                <div className="timeline__content">
                  <img className="timeline__img" src={card.img} alt={card.alt}/>
                <h2 className="timeline__content-title">{card.time}</h2>
                <p className="timeline__content-desc">
                  {card.description}
                </p>
              </div>
            </div>
          )})}
      </div>
    </div>
  </div>
);
}

export default Timeline;