import "../styles/Timeline.css";
import Hero from "./Hero";
import TimelineScript from "../scripts/TimelineScript";

function Timeline() {
  TimelineScript();

  const timeCard = [{
    year: "2005",
    dataText: "It's just beginning",
    desc: "At Gnyana Sudha Vidyalaya, our mission is to provide a nurturing and inclusive learning environment where students are empowered to achieve academic excellence, embrace diversity, and make meaningful contributions to society. We are committed to foster a culture of lifelong learning, personal growth, and social responsibility among our students, preparing them to thrive in a dynamic and interconnected world.",
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
  },
    {
      year: "2008",
      dataText: "Moving further",
      desc: "At Gnyana Sudha Vidyalaya, our mission is to provide a nurturing and inclusive learning environment where students are empowered to achieve academic excellence, embrace diversity, and make meaningful contributions to society. We are committed to foster a culture of lifelong learning, personal growth, and social responsibility among our students, preparing them to thrive in a dynamic and interconnected world.",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      year: "2010",
      dataText: "Making progress",
      desc: "At Gnyana Sudha Vidyalaya, our mission is to provide a nurturing and inclusive learning environment where students are empowered to achieve academic excellence, embrace diversity, and make meaningful contributions to society. We are committed to foster a culture of lifelong learning, personal growth, and social responsibility among our students, preparing them to thrive in a dynamic and interconnected world.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3uWoiU3zgs6XXY9VQlijaXXwAQfnVpMaO4dS9tLHA8MGnFE8em-SSXc&s=10",
    },
    {
      year: "2015",
      dataText: "Halfway done",
      desc: "At Gnyana Sudha Vidyalaya, our mission is to provide a nurturing and inclusive learning environment where students are empowered to achieve academic excellence, embrace diversity, and make meaningful contributions to society. We are committed to foster a culture of lifelong learning, personal growth, and social responsibility among our students, preparing them to thrive in a dynamic and interconnected world.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_LGtZwhS1Sfmhaw6W07vxV3f05Zb70vChzNOrE7GDw5eR66WWAD8xplv0&s=10",
    },
    {
      year: "2019",
      dataText: "Towards light",
      desc: "At Gnyana Sudha Vidyalaya, our mission is to provide a nurturing and inclusive learning environment where students are empowered to achieve academic excellence, embrace diversity, and make meaningful contributions to society. We are committed to foster a culture of lifelong learning, personal growth, and social responsibility among our students, preparing them to thrive in a dynamic and interconnected world.",
      src: "https://cache.careers360.mobi/media/schools/social-media/media-gallery/8035/2019/7/20/Gnyana%20Sudha%20Vidyalaya-Christmas%20Celebration.jpg",
    },
    {
      year: "2005",
      dataText: "It's just beginning",
      desc: "At Gnyana Sudha Vidyalaya, our mission is to provide a nurturing and inclusive learning environment where students are empowered to achieve academic excellence, embrace diversity, and make meaningful contributions to society. We are committed to foster a culture of lifelong learning, personal growth, and social responsibility among our students, preparing them to thrive in a dynamic and interconnected world.",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
    },
  ]

  return(
    <div className="Timeline">
      <Hero heroTitle="Timeline" heroImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10" />

      <div className="timeline-container" id="timeline-1">
        <div className="timeline-header">
          <h2 className="timeline-header__title">Our Journey</h2>
          <h3 className="timeline-header__subtitle">Explore our 20 years of excellence</h3>
        </div>

        <div className="timeline">
          {timeCard.map((card, index) => {
            return(
              <div className="timeline-item" data-text={card.dataText} key={index}>
                <div className="timeline__content">
                  <img className="timeline__img" src={card.src} />
                <h2 className="timeline__content-title">{card.year}</h2>
                <p className="timeline__content-desc">
                  {card.desc}
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