import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

export function NavBar() {
  const location = useLocation();
  const { pathname, hash } = location;

  // Helper to check which button is active
  const isHomeActive = pathname === "/" && (!hash || hash === "#");
  const isAboutActive = pathname === "/" && hash === "#about";
  const isExpActive = pathname === "/" && hash === "#experience";
  const isProjectsActive = pathname === "/projects";
  const isCertsActive = pathname === "/certifications";
  const isContactActive = pathname === "/contact";

  return (
    <header className="navbar">
      {/* ==================== LEFT BRAND LOGO ==================== */}
      <div className="left-section">
        <Link to="/" className="brand-logo">
          <span className="logo-symbol">&lt;</span>
          <span className="logo-full-name">
            <span className="logo-text-first">SOURABH </span>
            <span className="logo-text-last">MAHIYA</span>
          </span>
          <span className="logo-short-name">SM</span>
          <span className="logo-symbol">&gt;</span>
        </Link>
      </div>

      {/* ==================== MIDDLE NAVIGATION LINKS (BOTTOM BAR ON MOBILE) ==================== */}
      <nav className="middle-section">
        <Link to="/" className={`nav-link ${isHomeActive ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="nav-icon"
          >
            <path d="M3 10.5L12 3l9 7.5v9a2 2 0 0 1-2 2h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2z" />
          </svg>
          <span>Home</span>
        </Link>

        <a href="/#about" className={`nav-link ${isAboutActive ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="nav-icon"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-3.5 3.58-6 8-6s8 2.5 8 6" />
          </svg>
          <span>About</span>
        </a>

        <Link to="/projects" className={`nav-link ${isProjectsActive ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="nav-icon"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
            <line x1="8" y1="21" x2="16" y2="21" />
            <line x1="12" y1="17" x2="12" y2="21" />
          </svg>
          <span>Projects</span>
        </Link>

        <Link to="/certifications" className={`nav-link ${isCertsActive ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="nav-icon"
          >
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
          </svg>
          <span>Certificates</span>
        </Link>

        <a href="/#experience" className={`nav-link ${isExpActive ? "active" : ""}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="nav-icon"
          >
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
            <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
          </svg>
          <span>Experience</span>
        </a>
      </nav>

      {/* ==================== RIGHT CONTACT BUTTON ==================== */}
      <div className="right-section">
        <Link to="/contact" className={`contact-btn ${isContactActive ? "active-contact" : ""}`}>
          <span className="contact-text-desktop">CONTACT ME</span>
          <span className="contact-text-mobile">CONTACT</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="arrow-icon"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </div>
    </header>
  );
}