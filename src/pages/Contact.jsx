import "./Contact.css"

export default function Contact() {
  return (
    <div className="contact">

      {/* TOP SECTION */}
      <div className="contact-top">

        {/* LEFT IMAGE */}
        <div className="contact-left">
          <img 
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="blog"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="contact-right">
          <h1>Welcome to My Blog</h1>

          <p>
            This blog is all about my personal weight loss journey. I share real
            experiences, struggles, and lessons I learned along the way.
          </p>

          <p>
            You will find tips, diet plans, and motivation that helped me stay
            consistent and improve my lifestyle step by step.
          </p>

          <p>
            My goal is to inspire you to start your own journey and stay
            committed no matter how difficult it feels.
          </p>
        </div>

      </div>

      {/* LINE */}
      <div className="line"></div>

      {/* FORM SECTION */}
      <div className="form-section">

        <h2>Get In Touch</h2>

        <form className="contact-form">
  <input type="text" placeholder="Your Name" required />
  <input type="email" placeholder="Your Email" required />
  <input type="tel" placeholder="Contact Number" required />

  <textarea placeholder="Your Message" rows="6" required></textarea>

  <button type="submit">Send Message</button>
</form>

      </div>

    </div>
  )
}