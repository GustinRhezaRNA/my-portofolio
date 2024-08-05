import { useState, useEffect } from 'react';

export default function Header() {
  const [decor, setDecor] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleResize = () => {
    setDecor(window.innerWidth <= 991.98);
  };

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  useEffect(() => {
    // Set initial state
    handleResize();

    // Add event listener on mount
    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <nav className="navbar navbar-expand-lg  navbar-dark mt-2">
        <div className="container-fluid">
          <a href=""></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isCollapsed}
            aria-label="Toggle"
            onClick={handleToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center "
            id="navbarNav"
          >
            <ul className={`navbar-nav gap-3 px-2 ${decor || isCollapsed ? '' : 'navigation'}`}>
              <li className="nav-item">
                <a
                  className="nav-link "
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
    </header>
  );
}
