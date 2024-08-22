export default function Contact() {
  return (
    <section
      id="contact"
      className="container"
    >
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <div className="input-group d-flex">
            <input
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
          />
          <textarea
            name="message"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="submit-btn"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-info">
        <h3>Contact Info</h3>
        <p>I&apos; m always open to discussing product design work or partnership opportunities</p>
        <br />
        <div className="container d-grid">
          <div className="logo">
            <a
              className=" "
              href="https://www.linkedin.com/in/gustin-rheza-r-n-a-11b22424b/"
            >
              <i className="icon fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="name">
            <div className="row">
              <span>&ensp;LinkedIn</span>
            </div>
            <div className="row">
              <div className="content">&ensp;Gustin Rheza R.N.A</div>
            </div>
          </div>
        </div>
        <div className="container d-grid">
          <div className="logo">
            <a
              className=" "
              href="mailto:rezarna4@gmail.com"
            >
              <i className="icon fa-solid fa-envelope"></i>
            </a>
          </div>
          <div className="name">
            <div className="row">
              <span>&ensp;Email</span>
            </div>
            <div className="row">
              <div className="content">&ensp;rezarna4@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="container d-grid">
          <div className="logo">
            <a
              className=" "
              href="https://wa.link/v17seu"
            >
              <i className="icon fa-solid fa-phone"></i>
            </a>
          </div>
          <div className="name">
            <div className="row">
              <span>&ensp;Phone</span>
            </div>
            <div className="row">
              <div className="content">&ensp;(+62) 859 5674 2205</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
