import "../styles/AlumniSlider.css";
import AlumniSliderScript from "../scripts/AlumniSliderScript";
import {
  Link
} from 'react-router-dom';

interface Props {
  slider: Array < Record < string,
  any>>;
}

function AlumniSlider({
  slider
}: Props) {
  
  AlumniSliderScript();
  return(
    <>
      <div className="slider">
        <div className="list">
          {slider.map((item, index) => {
            return(
              <div className="item" key={index}>
                <img src={item.img} alt={item.alt} />
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
    <Link to="/gallery"><button className="button-85" role="button">View more</button></Link>
  </>
);
}

export default AlumniSlider;