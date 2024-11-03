import "../styles/Counter.css"
import CountUp from 'react-countup';

function Counter() {
  const boxes = [{
    icon: "history",
    counter: "20",
    text: "Years of Excellence",
  },
    {
      icon: "person",
      counter: "3000",
      text: "Students Studying",
    },
    {
      icon: "users",
      counter: "200",
      text: "Teaching Staff",
    },
    {
      icon: "home-user",
      counter: "100",
      text: "Non-teaching Staff",
    },
  ]

  return (
    <div className="counter-up">
      <div className="content">
        {boxes.map((box, index) => {
          return (
            <div className="box" key={index}>
              <div className="icon">
                <i className={`fas fa-${box.icon}`}></i>
              </div>
              <div>
                <CountUp className="counter" end={box.counter} duration={2} suffix="+" enableScrollSpy={true} scrollSpyDelay={1} scrollSpyOnce={true}  />
              </div>
              <div className="text">
                {box.text}
              </div>
            </div>
          )})}
      </div>
    </div>
  );
}

export default Counter;