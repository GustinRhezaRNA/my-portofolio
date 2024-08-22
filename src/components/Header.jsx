import { useState, useEffect } from 'react';
// import logo from '../assets/logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Class conditionally applied based on scroll
  let navbarClasses = ['navbar', 'navbar-expand-lg', 'navbar-dark'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

  return (
    <header id="header">
      <nav className={navbarClasses.join(' ')}>
        <div className="container">
          <a
            className="navbar-brand"
            href="#header"
          >
            R
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-label="Toggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className={`navbar-nav gap-3 px-2`}>
              <li className="nav-item">
                <a
                  className="nav-link"
                  aria-current="page"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#project"
                >
                  Project
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div>
        <div className="container hero d-flex justify-content-evenly">
          <div className="mr-5">
            <p>
              <span id="sub1">I&apos;m</span>
              <br />
              <span className="nama">Gustin Rheza </span>
            </p>
            <br />
            <span id="sub2">Web Enthusiast | Undergraduate Student</span>
          </div>
          {/* <img
            className="image"
            alt="Hero"
          /> */}
        </div>
      </div>
    </header>
  );
}
