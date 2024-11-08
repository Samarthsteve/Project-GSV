import "../styles/Accordian.css"

interface Props {
  questions: Array < Record < string,
  any>>;
}

function Accordian({
  questions
}: Props) {

  return(
    <div className="Accordian">
      {questions.map((question, index) => {
        return(<section className="accordion" id={question.Uid} key={index}>
          <h1 className="title"><a href={`#${question.Uid}`}>{question.question}</a></h1>
          <div className="content">
            <div className="wrapper">
              <p>
                {question.answer}
              </p>
            </div>
          </div>
        </section>
        )})}
    </div>
  );
}

export default Accordian;