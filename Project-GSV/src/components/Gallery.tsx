import "../styles/Gallery.css";
import Hero from "./Hero";
import GalleryScript from "../scripts/GalleryScript";

function Gallery() {
  const images = [
    {
      type: "alumni",
      title: "Alumni Gathering",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "alumni",
      title: "Alumni Reunion",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "alumni",
      title: "Alumni Speech",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "alumni",
      title: "Alumni Farewell",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "alumni",
      title: "Alumni Party",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "campus",
      title: "Main Campus",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "campus",
      title: "Campus Aerial",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "campus",
      title: "Campus Entrance",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "campus",
      title: "Campus Greenery",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "event",
      title: "Sports Event",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "event",
      title: "Annual Function",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "event",
      title: "Cultural Fest",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "event",
      title: "Guest Lecture",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "trip",
      title: "Field Trip",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "trip",
      title: "Adventure Trip",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "trip",
      title: "Science Excursion",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "trip",
      title: "Hiking Trip",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "trip",
      title: "City Tour",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "trip",
      title: "Camping",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    },
    {
      type: "trip",
      title: "Beach Trip",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    }
  ];

  GalleryScript();
  
   return (
     <div className="gallery-box">
     <Hero heroTitle="Gallery" heroImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"/>
       <h3 className="heading">Preword</h3>
       <p className="description">Explore the vibrant tapestry of our school community through our gallery. From memorable alumni gatherings anddynamic campus life to exciting events and adventurous trips, each image captures the essence of our school's spirit and legacy. Join us in celebrating the milestones, achievements, and experiences that have shaped our journey over the past 20 years. Dive into the memories and be inspired by the connections that make our school a thriving hub of learning and growth.</p>
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
      {images.map((image, index) => {
       return(
         <div className={`item ${image.type}`} key={index}>
				<img src={image.src} loading="lazy"/>
				<div className="overlay">
					<a href="#">{image.title}</a>
				</div>
			</div>
      );})}

		</div>
		{/* <!--  *****  Gallery Section Ends  *****  --> */}

	</main>

</section>
       <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.isotope/3.0.6/isotope.pkgd.min.js"></script>
     </div>
   );
}

export default Gallery;

