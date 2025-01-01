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
    <section
      ref={sectionRef}
      id="about"
      className="container about d-flex"
    >
      <div className="content">
        <div className="judul animate">About Me</div>
        <p className="isi animate">
          &mdash; I am Rheza, a dedicated computer science student with a passion for web development. My journey has been driven by a commitment to continuous learning and the desire to craft innovative solutions that address real-world challenges. Through hands-on projects, I&apos;ve developed strong <span>problem-solving</span> skills and a <span>versatile skill set</span>, enabling me to tackle diverse development tasks. I&apos;m eager to collaborate and contribute to the ever-evolving field of web development, making a positive impact through my work.
        </p>
      </div>
    </section>
  );
}
