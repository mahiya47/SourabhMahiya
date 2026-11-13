import { Link } from "react-router-dom";
import "./AboutMe.css";
import { useEffect, useRef, useState } from "react";

export function AboutMe() {
    const [isVisible, setIsVisible] = useState(false);
    const sheetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.05,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        if (sheetRef.current) {
            observer.observe(sheetRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="about-section" id="about">
            <div className="about-layout-grid" ref={sheetRef}>

                {/* ==================== COLUMN 1: PROFILE & VITALS ==================== */}
                <aside className={`about-card profile-card slide-left delay-1 ${isVisible ? "visible" : ""}`}>
                    <div className="avatar-frame">
                        <img src="/dp.jpg" alt="Sourabh Mahiya" className="avatar-img" />
                        <span className="live-status">
                            <span className="pulse-dot" /> Open to Opportunities
                        </span>
                    </div>

                    <div className="profile-identity">
                        <h3 className="profile-name">Sourabh Mahiya</h3>
                        <p className="profile-role">Frontend &amp; React Developer</p>
                    </div>

                    <div className="tech-badge-cluster">
                        <span className="tech-chip">JavaScript (ES6+)</span>
                        <span className="tech-chip">React &amp; Vite</span>
                        <span className="tech-chip">Node.js &amp; Express</span>
                        <span className="tech-chip">PostgreSQL &amp; Prisma</span>
                    </div>

                    <div className="cv-summary-card">
                        <div className="cv-summary-header">
                            <span>📄</span>
                            <strong>Executive Brief</strong>
                        </div>
                        <p className="cv-summary-text">
                            Frontend engineer skilled in React, JavaScript, HTML, and CSS. Proven experience building responsive web applications, Progressive Web Apps (PWAs), and real-time interactive platforms.
                        </p>
                        <a
                            href="/SOURABH_MAHIYA-CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cv-download-btn"
                        >
                            <span>View Full Resume</span>
                            <span>&nearr;</span>
                        </a>
                    </div>

                    <div className="profile-metrics">
                        <div className="metric-box">
                            <span className="metric-val">300+</span>
                            <span className="metric-label">LeetCode Solved</span>
                        </div>
                        <div className="metric-divider" />
                        <div className="metric-box">
                            <span className="metric-val">9+</span>
                            <span className="metric-label">Production Apps</span>
                        </div>
                    </div>
                </aside>

                {/* ==================== COLUMN 2: CORE FOCUS & PRINCIPLES ==================== */}
                <div className={`about-card slide-up delay-2 ${isVisible ? "visible" : ""}`}>
                    <div className="section-label">
                        <span>// CORE FOCUS</span>
                    </div>

                    <h3 className="card-headline">
                        Building performant, maintainable software.
                    </h3>

                    <p className="narrative-body">
                        I focus on crafting responsive user experiences and solving non-trivial engineering problems. My development workflow centers around modern JavaScript tooling, modular component architectures, clean Git practices, and predictable state patterns.
                    </p>

                    <div className="principles-strip">
                        <div className="principle-item">
                            <span className="principle-bullet">▪</span>
                            <div>
                                <strong>Clean Architecture</strong>
                                <p>Strict component boundaries and DRY state principles.</p>
                            </div>
                        </div>
                        <div className="principle-item">
                            <span className="principle-bullet">▪</span>
                            <div>
                                <strong>Performance First</strong>
                                <p>Minimal bundle weight, memoization, and DOM efficiency.</p>
                            </div>
                        </div>
                    </div>

                    <div className="feature-row">
                        <div className="feature-block">
                            <div className="feature-icon">⚙️</div>
                            <div>
                                <h4 className="feature-title">Algorithmic Problem Solving</h4>
                                <p className="feature-desc">
                                    Over 300 problems mastered across graphs, breadth-first search, dynamic programming, and optimal data structures.
                                </p>
                            </div>
                        </div>
                        <div className="feature-block">
                            <div className="feature-icon">⚡</div>
                            <div>
                                <h4 className="feature-title">Full-Stack &amp; Real-Time Systems</h4>
                                <p className="feature-desc">
                                    End-to-end delivery with React, Socket.io multiplayer engines, REST APIs, Prisma ORM, and cloud Linux deployments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ==================== COLUMN 3: ACADEMICS & JOURNEY ==================== */}
                <div className={`about-card education-card slide-right delay-3 ${isVisible ? "visible" : ""}`}>
                    <div className="section-label">
                        <span>🎓 ACADEMICS &amp; JOURNEY</span>
                    </div>

                    <div className="timeline-container">
                        <div className="timeline-item">
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <span className="timeline-year">BACHELOR OF ENGINEERING (CS)</span>
                                <h4 className="timeline-title">Visvesvaraya Technological University</h4>
                                <span className="timeline-institute">Bengaluru, Karnataka</span>
                                <p className="timeline-details">
                                    Focused on core computer science foundations, algorithm design, relational database principles, and software engineering.
                                </p>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker" />
                            <div className="timeline-content">
                                <span className="timeline-year">12TH (CBSE SCIENCE)</span>
                                <h4 className="timeline-title">Kendriya Vidyalaya, Sector 2</h4>
                                <span className="timeline-institute">R.K. Puram, New Delhi</span>
                                <p className="timeline-details">
                                    Completed senior secondary education with a focus on Physics, Chemistry, Mathematics, and Computer Science.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="milestone-box">
                        <div className="milestone-title">Key Competencies &amp; Focus</div>
                        <div className="milestone-tags">
                            <span className="m-tag">✓ Data Structures &amp; Algorithms</span>
                            <span className="m-tag">✓ WebSockets &amp; PWAs</span>
                            <span className="m-tag">✓ RESTful API Design</span>
                        </div>
                    </div>

                    <div className="about-cta-box">
                        <div className="cta-content">
                            <h4 className="cta-heading">Let&apos;s build something amazing together</h4>
                            <p className="cta-sub">
                                Have an exciting project, full-time role, or contract in mind? My inbox is always open.
                            </p>
                        </div>
                        <Link to="/contact" className="cta-action-btn">
                            Let&apos;s Connect &rarr;
                        </Link>
                    </div>
                </div>

                {/* ==================== BOTTOM FULL-WIDTH TOOLING STRIP ==================== */}
                <div className={`about-card full-span-card slide-up delay-4 ${isVisible ? "visible" : ""}`}>
                    <div className="dock-left">
                        <span className="dock-title">PRIMARY TOOLING &amp; ENVIRONMENT:</span>
                        <div className="dock-tags">
                            <span className="dock-tag">VS Code</span>
                            <span className="dock-tag">React &amp; Vite</span>
                            <span className="dock-tag">Node.js &amp; Express</span>
                            <span className="dock-tag">PostgreSQL &amp; Prisma</span>
                            <span className="dock-tag">Git &amp; GitHub</span>
                            <span className="dock-tag">Linux / nginx / PM2</span>
                        </div>
                    </div>
                    <div className="dock-right">
                        <span className="dock-indicator" /> High-focus development mode
                    </div>
                </div>
            </div>
        </section>
    );
}