import { DiJavascript, DiReact, DiNodejs, DiMongodb, DiGit, DiJava, DiCss3, DiBootstrap } from 'react-icons/di';
import { SiFirebase, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai'; // Icon HTML5
// import { BsBootstrap } from 'react-icons/bs';
import { useRef, useEffect } from 'react';

function Techstack() {
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

    const hiddenItems = sectionRef.current.querySelectorAll('.animate');
    hiddenItems.forEach((el) => observer.observe(el));

    // Cleanup observer on unmount
    return () => {
      hiddenItems.forEach((el) => observer.unobserve(el));
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      id="about"
      className="container tech text-center py-5"
    >
      <h1 className="mb-5 judul animate ">Tech Stack I Use</h1>
      <div className="row g-4 justify-content-center">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <AiFillHtml5 className="tech-icon text-danger" />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <DiCss3 className="tech-icon text-primary" />
          </div>
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <DiJavascript className="tech-icon text-warning" />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <DiNodejs className="tech-icon text-success" />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <DiReact className="tech-icon "
            color="#06B6D4"
            />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <DiMongodb className="tech-icon text-success" />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <SiNextdotjs
              className="tech-icon "
              color="#fff"
            />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <DiGit className="tech-icon text-danger" />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <SiFirebase className="tech-icon text-warning" />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <DiJava className="tech-icon text-danger" />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <DiBootstrap
              className="tech-icon "
              color="#7952B3"
            />
          </div>
        </div>

        <div className="col-6 col-sm-4 col-md-3 col-lg-2">
          <div className="tech-item border rounded shadow-sm p-4">
            <SiTailwindcss
              className="tech-icon "
              color="#06B6D4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techstack;
