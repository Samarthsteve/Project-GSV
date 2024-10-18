import "../styles/Testimony.css";

function Testimony() {
  var testimonyList = [
    {
      name: "John Doe",
      message: "I'm grateful for the opportunity to be a part of your alumni network. Your dedication to your school and your commitment to excellence have been invaluable. I'm excited to continue making a positive impact in my community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
    },
    {
      name: "Jane Smith",
      message: "I'm thankful for the opportunity to be a part of your alumni network. Your dedication to your school and your commitment to excellence have been invaluable. I'm excited to continue making a positive impact in my community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
    },
    {
      name: "Michael Johnson",
      message: "I'm grateful for the opportunity to be a part of your alumni network. Your dedication to your school and your commitment to excellence have been invaluable. I'm excited to continue making a positive impact in my community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
    },
    {
      name: "Emily Brown",
      message: "I'm thankful for the opportunity to be a part of your alumni network. Your dedication to your school and your commitment to excellence have been invaluable. I'm excited to continue making a positive impact in my community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
    },
    {
      name: "David Lee",
      message: "I'm grateful for the opportunity to be a part of your alumni network. Your dedication to your school and your commitment to excellence have been invaluable. I'm excited to continue making a positive impact in my community.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
    }
  ]
  
   return(
     <>
       <div className="wrapper">
         {testimonyList.map((item, index) => {
        return(
          <div className="container" key={index}>
         <div className="profile">
           <div className="imgBox">
             <img src={item.image} />
           </div>
           <h2>{item.name}</h2>
         </div>
         <p><span className="fa fa-quote-left left"></span>{item.message}<span className="fa fa-quote-right right"></span></p>
       </div>
     )})}
       </div>
       <button className="button-85" role="button">View more</button>
     </>
   );
}

export default Testimony;