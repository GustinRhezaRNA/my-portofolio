import { useEffect, useRef } from 'react';
export default function About() {
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
    <>
      <section
        ref={sectionRef}
        id="about"
        className="container about d-flex"
      >
        <div className="content">
          <div className="judul animate">About Me</div>
          <p className="isi animate">
            &mdash; My name is Rheza, and I am a computer science student with a keen interest in web development. I am a passionate and dedicated developer, eager to create innovative and efficient solutions. Throughout my studies, I have
            gained extensive knowledge in <span>HTML, CSS, JavaScript, React, and Express</span> . Each project I have undertaken has offered valuable insights and experiences, shaping me into the developer I am today.
          </p>
        </div>
      </section>
    </>
  );
}
