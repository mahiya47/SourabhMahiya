import { useEffect, useState } from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import { projectsData } from "../../data/portfolioData";
import "./ProjectsPage.css";

export function ProjectsPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        const timer = requestAnimationFrame(() => {
            setIsVisible(true);
        });
        return () => cancelAnimationFrame(timer);
    }, []);

    return (
        <>
            <NavBar />
            <main className="projects-page-wrapper">
                {/* ==================== MASTHEAD SECTION ==================== */}
                <section className={`projects-masthead slide-up delay-1 ${isVisible ? "visible" : ""}`}>
                    <div className="masthead-badge">
                        TECHNICAL ARCHIVE // ({projectsData.length} PROJECTS)
                    </div>
                    <h1 className="masthead-title">
                        COMPREHENSIVE TECHNICAL SHOWCASE &amp; ARCHITECTURE
                    </h1>
                    <p className="masthead-subtext">
                        Full-stack production platforms, real-time WebSocket game engines, AI verification tools, and client-side graphics workspaces.
                    </p>
                </section>

                {/* ==================== PROJECTS DISPLAY GRID ==================== */}
                <section className="projects-display-grid">
                    {projectsData.map((project, index) => {
                        const dynamicDelay = `delay-${(index % 5) + 1}`;
                        return (
                            <article
                                key={project.id}
                                className={`project-detail-card slide-up ${dynamicDelay} ${isVisible ? "visible" : ""}`}
                            >
                                <div
                                    className="project-card-header"
                                    style={{ backgroundColor: project.badgeColor }}
                                >
                                    {project.image ? (
                                        <img src={project.image} alt={project.title} className="project-header-img" />
                                    ) : (
                                        <span className="card-icon">{project.icon}</span>
                                    )}
                                    <div className="header-overlay-strip">
                                        <span className="card-index-badge">0{index + 1}</span>
                                        <span className="card-category-tag">{project.category}</span>
                                    </div>
                                </div>

                                <div className="project-card-body">
                                    <h2 className="card-project-title">{project.title}</h2>
                                    <p className="card-project-tagline">{project.tagline}</p>
                                    <p className="card-project-desc">{project.description}</p>

                                    {project.highlights && (
                                        <div className="project-highlights-box">
                                            <span className="highlights-heading">ARCHITECTURAL HIGHLIGHTS:</span>
                                            <ul className="project-highlights-list">
                                                {project.highlights.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="card-tech-stack">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tech-badge">{t}</span>
                                        ))}
                                    </div>

                                    <div className="card-links">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="card-action-btn primary">
                                            GITHUB REPO &rarr;
                                        </a>
                                        {project.demo && project.demo !== "#" && (
                                            <a href={project.demo} target="_blank" rel="noreferrer" className="card-action-btn secondary">
                                                LIVE PLATFORM &rarr;
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </section>
            </main>
        </>
    );
}