import "../styles/Accordian.css"

function Accordian() {
  const faq = [
    {
      title: "What is the admissions process at our School?",
      id: "admissions",
      para: "To apply for admission, you can obtain the application form from our school office or download it from our website. Complete the form and submit it along with the required documents. Once received, our admissions team will review your application and schedule an entrance assessment if necessary."
    },
    {
      title: "What is the admissions process at our School?",
      id: "visit",
      para: "To apply for admission, you can obtain the application form from our school office or download it from our website. Complete the form and submit it along with the required documents. Once received, our admissions team will review your application and schedule an entrance assessment if necessary."
    },
    {
      title: "What is the admissions process at our School?",
      id: "visit1",
      para: "To apply for admission, you can obtain the application form from our school office or download it from our website. Complete the form and submit it along with the required documents. Once received, our admissions team will review your application and schedule an entrance assessment if necessary."
    },
    {
      title: "What is the admissions process at our School?",
      id: "visit2",
      para: "To apply for admission, you can obtain the application form from our school office or download it from our website. Complete the form and submit it along with the required documents. Once received, our admissions team will review your application and schedule an entrance assessment if necessary."
    },
    {
      title: "Overview",
      id: "overview",
      para: "This CodePen demonstrates how we can animate the opening and closing	states of an accordion with fancy reveal animation using only CSS. This concept is suitable for creating"
    },
    ]
  
  return(
    <div className="Accordian">
      {faq.map((question, index) => {
    	return(<section className="accordion" id={question.id} key={index}>
		<h1 className="title"><a href={`#${question.id}`}>{question.title}</a></h1>
		<div className="content">
			<div className="wrapper">
				<p>{question.para}</p>
			</div>
		</div>
	</section>
)})}
    </div>
    );
}

export default Accordian;