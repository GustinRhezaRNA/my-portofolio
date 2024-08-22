import { useEffect, useState, useRef } from 'react';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import BackToTop from './components/BackToTop';

import './main.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRef = useRef(null); // Gunakan useRef untuk merujuk ke elemen DOM

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      const hiddenItems = sectionRef.current.querySelectorAll('.text');
      hiddenItems.forEach((item) => {
        item.classList.add('show');
      });
    }, 5000);

    return () => {
      const hiddenItems = sectionRef.current.querySelectorAll('.text');
      hiddenItems.forEach((item) => {
        item.classList.remove('show');
      });
      clearTimeout(timer);
    };
  }, []);

  return (
    <div ref={sectionRef}>
      <div className="loading-screen">
        <div className="text-container">
          <span className="text">Innovating, </span>
          <span className="text">Building, </span>
          <span className="text">Evolving.</span>
        </div>
      </div>
      <div className={`main-content ${isLoading ? 'hidden' : 'fade-in'}`}>
        <Header />
        <About />
        <Project />
        <Contact />
        <BackToTop />
      </div>
    </div>
  );
}

export default App;
