import "../styles/Gallery.css";
import Hero from "./Hero";
import GalleryScript from "../scripts/GalleryScript";
import {
  useLoaderData
} from "react-router-dom";

function Gallery() {
  const loaderData = useLoaderData();

  GalleryScript();

  return (
    <div className="gallery-box">
      <Hero heroTitle={loaderData.hero.title} heroImg={loaderData.hero.img} />
      <h3 className="heading">Preword</h3>
      <p className="description">
        Explore the vibrant tapestry of our school community through our gallery. From memorable alumni gatherings anddynamic campus life to exciting events and adventurous trips, each image captures the essence of our school's spirit and legacy. Join us in celebrating the milestones, achievements, and experiences that have shaped our journey over the past 20 years. Dive into the memories and be inspired by the connections that make our school a thriving hub of learning and growth.
      </p>
      <section className="gallery-cards">

        <main className="mainContainer">

          {/* <!--  *****  Buttons Section Starts  *****  --> */}
          <div className="button-group">
            <button className="button active" data-filter="*">All</button>
            <button className="button" data-filter=".alumni">Alumni</button>
            <button className="button" data-filter=".event">Events</button>
            <button className="button" data-filter=".trip">Trips</button>
            <button className="button" data-filter=".campus">Campus</button>
          </div>
          {/* <!--  *****  Buttons Section Ends  *****  --> */}

          {/* <!--  *****  Gallery Section Starts  *****  --> */}
          <div className="gallery">
            {loaderData.images.map((image, index) => {
              return(
                <div className={`item ${image.type}`} key={index}>
                  <img src={image.img} loading="lazy" alt={image.alt}/>
                <div className="overlay">
                  <a href="#">{image.title}</a>
                </div>
              </div>
            );
            })}

        </div>
        {/* <!--  *****  Gallery Section Ends  *****  --> */}

      </main>

    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
  </div>
);
}

export default Gallery;