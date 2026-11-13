import "./RightContainer.css";
import { useEffect, useRef, useState } from "react";
export function RightContainer() {
    const [isVisible, setIsVisible] = useState(false);
    const sheetRef = useRef(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stops watching once it appears
                }
            },
            { threshold: 0.2 }
        );

        if (sheetRef.current) {
            observer.observe(sheetRef.current);
        }

        return () => observer.disconnect();
    }, []);
    return (
        <div className="right-container">
            <article
                ref={sheetRef}
                className={`newspaper-sheet ${isVisible ? "visible" : ""}`}
            >
                {/* ==================== MASTHEAD ==================== */}
                <header className="newspaper-header">
                    <div className="newspaper-meta-top">
                        <span>NO. 047</span>
                        <span>SPECIAL PORTFOLIO EDITION</span>
                        <span>PRICE: FREE</span>
                    </div>

                    <h2 className="newspaper-title">THE DEVELOPER TIMES</h2>

                    <div className="newspaper-subbar">
                        <span>VOL. XXIV</span>
                        <span>NEW DELHI • TECH &amp; ENGINEERING</span>
                        <span>EST. 2024</span>
                    </div>
                </header>

                {/* ==================== LEAD HEADLINE ==================== */}
                <div className="lead-headline">
                    <h3>ENGINEER CRAFTS NEXT-GEN WEB APPS &amp; REAL-TIME SYSTEMS</h3>
                </div>

                {/* ==================== TOP SPLIT (IMAGE & CODE) ==================== */}
                <div className="newspaper-body-top">
                    <div className="newspaper-photo-col">
                        <div className="photo-frame">
                            <img
                                src="/dp.jpg"
                                alt="Sourabh Mahiya Portrait"
                                className="newspaper-img"
                            />
                            <span className="photo-caption">
                                Fig 1. Sourabh Mahiya — Frontend Engineer &amp; CS Graduate (VTU).
                            </span>
                        </div>
                    </div>

                    <div className="newspaper-article-col">
                        <h4 className="column-subhead">DEV CONFIG</h4>
                        <pre className="newspaper-code-block">
                            <code>
                                <span className="code-keyword">const</span>{" "}
                                <span className="code-var">developer</span> = &#123;{"\n"}
                                {"  "}
                                <span className="code-key">code</span>:{" "}
                                <span className="code-string">&apos;JavaScript&apos;</span>,{"\n"}
                                {"  "}
                                <span className="code-key">build</span>:{" "}
                                <span className="code-string">&apos;React / Node&apos;</span>,{"\n"}
                                {"  "}
                                <span className="code-key">deploy</span>:{" "}
                                <span className="code-string">&apos;Vercel / OCI&apos;</span>,{"\n"}
                                {"  "}
                                <span className="code-key">passion</span>:{" "}
                                <span className="code-string">&apos;Problem Solving&apos;</span>
                                {"\n"}
                                &#125;;
                            </code>
                        </pre>
                        <p className="column-lead-text">
                            Specializing in scalable React frontends, PWAs, WebSockets, and relational database systems. Proven track record deploying production-grade web solutions.
                        </p>
                    </div>
                </div>

                {/* ==================== BOTTOM EDITORIAL BIO ==================== */}
                <div className="newspaper-body-bottom">
                    <div className="news-col">
                        <h5 className="news-col-title">INDUSTRY DISPATCH</h5>
                        <p className="news-col-text">
                            <strong>Micro Turners Group (2024–2026):</strong> Engineered and maintained mission-critical Manufacturing Execution Systems (MES), CMMS, and the Quality Control Portal. Supported the client-facing B2B Portal ensuring reliable enterprise workflows.
                        </p>
                    </div>

                    <div className="news-col center-divider">
                        <h5 className="news-col-title">KEY RELEASES</h5>
                        <p className="news-col-text">
                            <strong>Oh Sheet! Platform:</strong> Full-stack social blogging suite with WebSockets real-time arcade and AI bot integration.
                        </p>
                        <p className="news-col-text">
                            <strong>VerifyAI:</strong> Fact verification &amp; AI image analysis engine via Google Fact Check and Gemini EXIF inspection.
                        </p>
                    </div>

                    <div className="news-col">
                        <h5 className="news-col-title">TECH SPECS</h5>
                        <div className="tags-container">
                            <span className="tech-tag">React</span>
                            <span className="tech-tag">JavaScript</span>
                            <span className="tech-tag">Node.js</span>
                            <span className="tech-tag">Express</span>
                            <span className="tech-tag">PostgreSQL</span>
                            <span className="tech-tag">Prisma</span>
                            <span className="tech-tag">WebSockets</span>
                            <span className="tech-tag">Python</span>
                        </div>
                        <p className="news-col-text extra-note">
                            <strong>Credentials:</strong> B.E. Computer Science (VTU) • Skyscanner &amp; Meta Certified.
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
}