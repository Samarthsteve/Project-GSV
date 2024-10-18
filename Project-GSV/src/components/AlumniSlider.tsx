import "../styles/AlumniSlider.css";
import AlumniSliderScript from "../scripts/AlumniSliderScript";

function AlumniSlider() {
    AlumniSliderScript();

    var sliderList = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10"
    ]
    
   return(
       <>
         <div className="slider">
        <div className="list">
        {sliderList.map((item, index) => {
                    return(
                        <div className="item" key={index} >
                        <img src={item} />
                        </div>
                    )
                })}
        </div>
        <div className="buttons">
            <button id="prev"></button>
            <button id="next"></button>
        </div>
        <ul className="dots">
            <li className="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
       <button className="button-85" role="button">View more</button>
       </>
   );
}

export default AlumniSlider;