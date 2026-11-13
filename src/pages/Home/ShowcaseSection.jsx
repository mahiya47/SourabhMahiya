import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { projectsData, certificationsData } from "../../data/portfolioData";
import "./ShowcaseSection.css";

export function ShowcaseSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const prevProject = () => {
        setCurrentIndex((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
    };

    const nextProject = () => {
        setCurrentIndex((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
    };

    const current = projectsData[currentIndex];

    return (
        <section className="showcase-section" ref={sectionRef}>
            {/* ==================== LEFT 70% PROJECTS CAROUSEL ==================== */}
            <div className={`projects-showcase-pane slide-left delay-1 ${isVisible ? "visible" : ""}`}>
                <div className="showcase-header-bar">
                    <div className="pane-title-group">
                        <h2 className="pane-title">FEATURED PROJECTS</h2>
                        <Link to="/projects" className="action-pill-btn">
                            VIEW ALL PROJECTS ({projectsData.length}) &rarr;
                        </Link>
                    </div>

                    <div className="carousel-nav-btns">
                        <button onClick={prevProject} className="arrow-btn" aria-label="Previous project">
                            &lt;
                        </button>
                        <button onClick={nextProject} className="arrow-btn" aria-label="Next project">
                            &gt;
                        </button>
                    </div>
                </div>

                <div className="featured-project-card">
                    <div
                        className="card-media-canvas"
                        style={{ backgroundColor: current.badgeColor || "#fbcfe8" }}
                    >
                        {current.image ? (
                            <img src={current.image} alt={current.title} className="media-cover-img" />
                        ) : (
                            <div className="canvas-placeholder-banner">
                                <span className="media-preview-icon">{current.icon}</span>
                                <span className="media-category-pill">{current.category}</span>
                            </div>
                        )}
                    </div>

                    <div className="card-info-pane">
                        <div className="card-title-row">
                            <h3 className="project-name">{current.title}</h3>
                            <span className="project-counter">
                                0{currentIndex + 1} / 0{projectsData.length}
                            </span>
                        </div>

                        <p className="project-summary">{current.description}</p>

                        {current.highlights && (
                            <ul className="showcase-highlights">
                                {current.highlights.slice(0, 2).map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                            </ul>
                        )}

                        <div className="project-tags">
                            {current.tech.map((tag) => (
                                <span key={tag} className="tag-chip">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="showcase-card-actions">
                            <Link to="/projects" className="view-details-btn">
                                VIEW TECHNICAL BREAKDOWN &rarr;
                            </Link>
                            {current.demo && current.demo !== "#" && (
                                <a href={current.demo} target="_blank" rel="noreferrer" className="live-site-pill">
                                    LIVE SITE &nearr;
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="carousel-indicators">
                    {projectsData.map((p, idx) => (
                        <button
                            key={p.id}
                            onClick={() => setCurrentIndex(idx)}
                            className={`indicator-dot ${idx === currentIndex ? "active" : ""}`}
                            aria-label={`Go to project ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* ==================== RIGHT 30% CERTIFICATIONS WITH IMAGES ==================== */}
            <div className={`certs-showcase-pane slide-right delay-2 ${isVisible ? "visible" : ""}`}>
                <h2 className="pane-title">CERTIFICATIONS</h2>

                <div className="certs-list">
                    {certificationsData.slice(0, 3).map((cert) => (
                        <a
                            key={cert.id}
                            href={encodeURI(cert.image)}
                            target="_blank"
                            rel="noreferrer"
                            className="cert-tile-with-img"
                        >
                            <div className="cert-thumb-box">
                                <img src={encodeURI(cert.image)} alt={cert.title} />
                            </div>
                            <div className="cert-info">
                                <span className="cert-issuer-badge">
                                    {cert.issuer} • {cert.year}
                                </span>
                                <h4 className="cert-name">{cert.title}</h4>
                            </div>
                        </a>
                    ))}
                </div>

                <Link to="/certifications" className="view-all-certs-btn">
                    VIEW ALL {certificationsData.length} CERTIFICATIONS &rarr;
                </Link>
            </div>
        </section>
    );
}