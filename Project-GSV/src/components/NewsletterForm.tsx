import '../styles/NewsletterForm.css';

export default function NewsletterForm() {
   return(
     <div className="panel-container">
	<small>
		Don't miss out the latest
	</small>
	<h3>
		Monthly School news and updates <br />
		straight to your inbox
	</h3>
   <form>
   	<input type="email" required placeholder="Email address" />
   	<button type="submit">Stay inspired</button>
   </form>
	<small>
		Commitment issues? <br />
		Unsubscribe at any time.
	</small>
</div> 
   );
}
