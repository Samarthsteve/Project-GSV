import "../styles/Testimony.css";

interface TestimonyProps {
  testimonyList: [{
      img: string,
      alt: string,
      name: string,
      comment: string,
    }];
}

function Testimony({
  testimonyList
}: TestimonyProps) {

  return(
    <div className="Testimony">
      <div className="wrapper">
        {testimonyList.map((item, index) => {
          return(
            <div className="container" key={index}>
              <div className="profile">
                <div className="imgBox">
                  <img src={item.img} alt={item.alt} />
              </div>
              <h2>{item.name}</h2>
            </div>
            <p>
              <span className="fa fa-quote-left left"></span>{item.comment}<span className="fa fa-quote-right right"></span>
            </p>
          </div>
        )})}
    </div>
  </div>
);
}

export default Testimony;