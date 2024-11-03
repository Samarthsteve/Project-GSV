import Hero from "./Hero";
import "../styles/Alumni.css";
import AlumniSlider from "./AlumniSlider";
import Testimony from "./Testimony";

function Alumni() {
  const testimonyList = [{
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
    }]

  return(
    <main className="alumni">
      <Hero heroTitle="Our Alumni" heroImg="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCvjuMC2rSizh1-uDAT0MI7aDymGwvCiQDkvbIJSPV2tI49IPc2ByvmpQ&s=10" />
      <div className="alumni__intro">
        <h3 className="heading">Our Alumni, Our Legacy</h3>
        <p className="description">
          For the past 20 years, our school has been a place where dreams are nurtured and lifelong values are instilled. Our alumni continue to shine as ambassadors of our institution, making remarkable contributions in their fields and communities. This page celebrates their stories and achievements.
        </p>
      </div>

      <div className="alumni__testimonies">
        <h3 className="heading">Voices of Our Alumni</h3>
        <p className="description">
          Our alumni reflect on their journeys, sharing the lessons, friendships, and experiences that shaped their paths. Their stories are a testament to the power of education, community, and lifelong learning.
        </p>
        <Testimony testimonyList={testimonyList} />
        <button className="button-85" role="button">View more</button>
      </div>

      <div className="alumni__gallery">
        <h3 className="heading">Celebrating Alumni Connections</h3>
        <p className="description">
          Our alumni remain an integral part of our school community, always connected by the shared memories of their time here. From reunions to professional milestones, these images capture moments of joy, celebration, and continued growth. Scroll through to see snapshots of our alumni gatherings and the enduring bonds that define our school family.
        </p>
        <AlumniSlider />
    </div>

    <div className="alumni__form">
      <h3 className="heading">Join Our Alumni Network</h3>

      <p className="description">
        Whether you're reconnecting with old friends or looking to share your journey with current students, our alumni network is a growing community that welcomes all. Stay in touch, contribute to future events, and help inspire the next generation of students by joining our alumni platform. Your journey with us never truly ends!
      </p>

      <div className="form-container">
        <h3>Register as an Alumni</h3>
        <p className="form-caption">
          Join the legacy and stay connected with your alma mater.
        </p>
        <form>
          {/* <!-- Name Field --> */}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
        </div>

        {/* <!-- Email Field --> */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
      </div>

      {/* <!-- Graduation Year Field --> */}
      <div className="form-group">
        <label htmlFor="graduationYear">Graduation Year</label>
        <input type="number" id="graduationYear" name="graduationYear" required />
    </div>

    {/* <!-- Message Field --> */}
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message"></textarea>
    </div>

    {/* <!-- Submit Button --> */}
    <button type="submit" className="submit-btn">Submit</button>
  </form>
</div>
</div>
</main>
);
}

export default Alumni;