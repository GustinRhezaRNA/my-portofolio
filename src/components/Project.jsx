import { useEffect, useRef } from 'react';
import apod from '../assets/a.png';
import gym from '../assets/b.png';
import photos from '../assets/photos.png';

export default function Project() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenItems = sectionRef.current.querySelectorAll('.project-card');
    hiddenItems.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      hiddenItems.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="container project d-flex"
      id="project"
    >
      <div className="row">
        <div className="project-card left d-flex">
          <img
            src={gym}
            className="images"
            alt="..."
          />
          <div className="overlay">
            <p>Gym Program Generator</p>
            <a
              href="https://gym-fit-bro.netlify.app/"
              className="quick-view"
            >
              Quick View
            </a>
          </div>
        </div>
        <div className="project-card right d-flex">
          <img
            src={photos}
            className="images"
            alt="..."
          />
          <div className="overlay">
            <p>Astronomy Picture of the Day</p>
            <a
              href="https://our-photos.netlify.app/"
              className="quick-view"
            >
              Quick View
            </a>
          </div>
        </div>
        <div className="project-card right d-flex">
          <img
            src={apod}
            className="images"
            alt="..."
          />
          <div className="overlay">
            <p>Astronomy Picture of the Day</p>
            <a
              href="https://rheza-apod-app.netlify.app/"
              className="quick-view"
            >
              Quick View
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
