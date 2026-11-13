import { Link } from "react-router-dom";
import "./LeftContainer.css";

export function LeftContainer() {
    return (
        <div className="left-container">
            {/* ==================== HEADER BIO ==================== */}
            <div className="top-text">
                <p className="greeting">
                    <span>HEY, I AM SOURABH</span>
                    <span className="wave-hand">👋</span>
                </p>
                <h1>
                    SOFTWARE <br /> DEVELOPER
                </h1>
                <p className="bio">
                    I build scalable web applications and <br />
                    turn ideas into impactful products <br />
                    with clean, efficient code.
                </p>
            </div>

            {/* ==================== CTA BUTTONS ==================== */}
            <div className="middle">
                <Link to="/projects" className="cta-btn primary">
                    <span>VIEW MY WORK</span>
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
                    >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                    </svg>
                </Link>

                <a
                    href="/SOURABH_MAHIYA-CV.pdf"
                    download="SOURABH_MAHIYA-CV.pdf"
                    className="cta-btn secondary"
                >
                    <span>DOWNLOAD RESUME</span>
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
                    >
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <polyline points="19 12 12 19 5 12" />
                    </svg>
                </a>
            </div>

            {/* ==================== SOCIAL LINKS ==================== */}
            <div className="bottom">
                <p className="connect-text">CONNECT WITH ME</p>
                <div className="social-links-container">
                    <a
                        href="https://github.com/mahiya47"
                        target="_blank"
                        rel="noreferrer"
                        className="social-btn"
                        aria-label="GitHub"
                        title="GitHub (@mahiya47)"
                    >
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
                        >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                        </svg>
                    </a>

                    <a
                        href="https://linkedin.com/in/sourabh-mahiya-sm0047"
                        target="_blank"
                        rel="noreferrer"
                        className="social-btn"
                        aria-label="LinkedIn"
                        title="LinkedIn (Sourabh Mahiya)"
                    >
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
                        >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect x="2" y="9" width="4" height="12" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </a>

                    <a
                        href="mailto:ssmahiya7@gmail.com"
                        className="social-btn"
                        aria-label="Email"
                        title="Email (ssmahiya7@gmail.com)"
                    >
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
                        >
                            <rect x="3" y="5" width="18" height="14" rx="2" />
                            <polyline points="3 7 12 13 21 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}