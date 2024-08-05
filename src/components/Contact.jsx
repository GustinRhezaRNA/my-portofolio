export default function Contact() {
  return (
    <div>
      <div
        className="container contact d-flex justify-content-center flex-column "
        id="contact"
      >
        <div className=" main">Contact</div>
        <p className="sub">I&apos; m always open to discussing product design work or partnership opportunities.</p>
        <div className="contacts flex-row">
          <a
            className=" d-flex "
            href="https://www.linkedin.com/in/gustin-rheza-r-n-a-11b22424b/"
          >
            <div className="logo d-grid">
              <i className=" fa-brands fa-linkedin"></i>
            </div>
            <div className="content">
              <span id="head">&ensp;LinkedIn</span>
              <br />
              &ensp;Gustin Rheza R.N.A
            </div>
          </a>
          <a
            className=" d-flex "
            href="mailto:rezarna4@gmail.com"
          >
            <div className="logo d-grid">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <div className="content">
              <span id="head">&ensp;Email</span>
              <br />
              &ensp;rezarna4@gmail.com
            </div>
          </a>
          <a
            className=" d-flex "
            href="mailto:rezarna4@gmail.com"
          >
            <div className="logo d-grid">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="content">
              <span id="head">&ensp;Phone</span>
              <br />
              &ensp;(+62) 859 5674 2205
            </div>
          </a>
          {/* <a
            className=" d-flex "
            href="https://wa.link/v17seu"
          >
            <div className="logo d-grid">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div className="content">
              <span id="head">&ensp;Phone</span>
              <br />
              &ensp;(+62) 859 5674 2205
            </div>
          </a> */}
        </div>
      </div>
    </div>
  );
}
