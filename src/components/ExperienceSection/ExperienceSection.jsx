import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./ExperienceSection.css";

const experienceData = [
    {
        id: "micro-turners",
        role: "FRONT END DEVELOPER",
        company: "MICRO TURNERS GROUP",
        period: "01/2024 - 01/2026",
        location: "New Delhi / NCR",
        bullets: [
            "Worked closely with the engineering team to manage and update the Manufacturing Execution System (MES) and CMMS.",
            "Maintained the Quality Control Portal and core Inventory & Lot Traceability System for seamless daily manufacturing operations.",
            "Provided daily front-end support for the B2B Client Portal and collaborated across teams to build and launch the company website.",
            "Organized practical training sessions to help new employees confidently navigate internal company software."
        ]
    },
    {
        id: "desi-chef",
        role: "CO-FOUNDER & DIGITAL LEAD",
        company: "DESI CHEF",
        period: "01/2023 - 01/2024",
        location: "Bengaluru, KA",
        bullets: [
            "Built the restaurant web ordering platform and managed end-to-end digital marketing to drive online customer growth.",
            "Designed promotional brand assets and managed daily order lifecycle operations across Swiggy and Zomato.",
            "Interacted directly with customers and coordinated restaurant staff for smooth daily execution."
        ]
    },
    {
        id: "rk-builder",
        role: "WEB DEVELOPER",
        company: "RK BUILDER",
        period: "06/2022 - 12/2022",
        location: "Bengaluru, KA",
        bullets: [
            "Built a responsive corporate architecture website from scratch using HTML5, CSS3, JavaScript, and Bootstrap.",
            "Visited active construction sites to capture fresh progress photographs and integrated them into the digital portal.",
            "Delivered comprehensive project portfolios to showcase commercial and residential architectural work."
        ]
    }
];

export function ExperienceSection() {
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

    return (
        <section className="section-experience-contact" ref={sectionRef}>
            {/* ==================== LEFT PINK SIDE TAB ==================== */}
            <div className={`experience-side-pill slide-left delay-1 ${isVisible ? "visible" : ""}`}>
                <h3>EXPERIENCE</h3>
                <span className="pill-arrow">&rarr;</span>
            </div>

            {/* ==================== MIDDLE TIMELINE COLUMN ==================== */}
            <div className={`experience-timeline-column slide-left delay-2 ${isVisible ? "visible" : ""}`}>
                <div className="exp-timeline-list">
                    {experienceData.map((exp) => (
                        <div key={exp.id} className="exp-item">
                            <span className="exp-marker-dot" />
                            <div className="exp-content">
                                <div className="exp-role-row">
                                    <h4 className="exp-role-title">
                                        {exp.role} <span className="exp-company">• {exp.company}</span>
                                    </h4>
                                    <div className="exp-meta-badges">
                                        <span className="exp-location-tag">{exp.location}</span>
                                        <span className="exp-date">{exp.period}</span>
                                    </div>
                                </div>

                                <ul className="exp-bullet-list">
                                    {exp.bullets.map((point, index) => (
                                        <li key={index} className="exp-desc">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="exp-bottom-actions">
                    <a href="/SOURABH_MAHIYA-CV.pdf" target="_blank" rel="noopener noreferrer" className="retro-btn btn-resume-view">
                        <span>VIEW FULL RESUME (PDF)</span>
                        <span>↗</span>
                    </a>

                    <a href="/SOURABH_MAHIYA-CV.pdf" download="SOURABH_MAHIYA-CV.pdf" className="retro-btn btn-resume-download">
                        <span>DOWNLOAD CV</span>
                        <span>&darr;</span>
                    </a>
                </div>
            </div>

            {/* ==================== RIGHT PURPLE CTA COLUMN ==================== */}
            <aside className={`contact-banner-column slide-right delay-3 ${isVisible ? "visible" : ""}`}>
                <div className="contact-grid-pattern" />
                <div className="contact-banner-content">
                    <div className="cta-avail-tag">
                        <span className="avail-dot" /> AVAILABLE FOR ROLES
                    </div>
                    <h2 className="contact-giant-text">
                        LET&apos;S BUILD
                        <br />
                        SOMETHING
                        <br />
                        AMAZING
                        <br />
                        TOGETHER.
                    </h2>
                    <p className="contact-banner-sub">
                        Open for full-time frontend &amp; full-stack engineering roles or freelance projects.
                    </p>
                    <Link to="/contact" className="retro-btn btn-get-touch">
                        <span>GET IN TOUCH</span>
                        <span className="btn-arrow">&rarr;</span>
                    </Link>
                </div>
                <div className="sticker-starburst" aria-hidden="true">
                    ★
                </div>
            </aside>
        </section>
    );
}