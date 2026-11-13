import { useEffect, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { NavBar } from "../../components/NavBar/NavBar";
import "./ContactMe.css";

export function ContactMe() {
    const [isVisible, setIsVisible] = useState(false);
    const [status, setStatus] = useState("idle"); // 'idle', 'sending', 'success', 'error'
    const pageRef = useRef(null);
    const formRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (pageRef.current) {
            observer.observe(pageRef.current);
        }
        return () => observer.disconnect();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        emailjs.sendForm(
            'service_y1kgqa9',   // Replace with your Service ID
            'template_p4zn3vy',  // Replace with your Template ID
            formRef.current,
            'e5IHCQKDEnf9WN4vu'    // Replace with your Public Key
        )
            .then((result) => {
                console.log("MESSAGE SENT", result.text);
                setStatus("success");
                e.target.reset();

                setTimeout(() => setStatus("idle"), 3000);
            }, (error) => {
                console.log("FAILED...", error.text);
                setStatus("error");

                setTimeout(() => setStatus("idle"), 3000);
            });
    };

    return (
        <>
            <NavBar />
            <main className="contact-main" ref={pageRef}>
                {/* ==================== LEFT 30% CONTAINER ==================== */}
                <section className={`left-side-container slide-left delay-1 ${isVisible ? "visible" : ""}`}>
                    <div className="status-tag">
                        <span className="status-dot"></span>
                        <span>OPEN TO WORK</span>
                    </div>

                    <div className="image-frame">
                        <img src="/pc.jpg" alt="Vintage Terminal Workstation" />
                        <div className="image-caption">TERMINAL :: ONLINE</div>
                    </div>

                    <div className="quick-info-card">
                        <div className="info-row">
                            <span className="info-key">BASE:</span>
                            <span className="info-val">New Delhi, IN</span>
                        </div>
                        <div className="info-row">
                            <span className="info-key">TIMEZONE:</span>
                            <span className="info-val">IST (UTC+5:30)</span>
                        </div>
                        <div className="info-row">
                            <span className="info-key">RESPONSE:</span>
                            <span className="info-val">&lt; 24 Hours</span>
                        </div>
                    </div>
                </section>

                {/* ==================== RIGHT 70% CONTAINER ==================== */}
                <section className={`right-side-container slide-right delay-2 ${isVisible ? "visible" : ""}`}>
                    <div className="form-column">
                        <div className="header-badge">COMMUNICATIONS LINK</div>
                        <h1 className="contact-heading">LET'S BUILD TOGETHER</h1>
                        <p className="contact-subtext">
                            Have an engineering role, freelance gig, or architecture question? Send a transmission below.
                        </p>

                        <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Sender Name</label>
                                    <input type="text" id="name" name="user_name" required placeholder="e.g. Ada Lovelace" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input type="email" id="email" name="user_email" required placeholder="e.g. ada@engineering.com" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Project Type / Inquiry Scope</label>
                                <div className="intent-tags">
                                    <label className="tag-checkbox">
                                        <input type="radio" name="intent" value="Full-Time Role" defaultChecked />
                                        <span>Full-Time Role</span>
                                    </label>
                                    <label className="tag-checkbox">
                                        <input type="radio" name="intent" value="Freelance / Web App" />
                                        <span>Freelance / Web App</span>
                                    </label>
                                    <label className="tag-checkbox">
                                        <input type="radio" name="intent" value="Consultation" />
                                        <span>Consultation</span>
                                    </label>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message / Payload</label>
                                <textarea id="message" name="message" rows="4" required placeholder="Describe the opportunity, technical requirements, or timelines..."></textarea>
                            </div>

                            <button type="submit" className="submit-btn" disabled={status === "sending"}>
                                <span>
                                    {status === "sending" ? "TRANSMITTING..." :
                                        status === "success" ? "TRANSMISSION SUCCESSFUL ✓" :
                                            status === "error" ? "TRANSMISSION FAILED ✕" :
                                                "TRANSMIT MESSAGE"}
                                </span>
                                {status === "idle" && <span>&rarr;</span>}
                            </button>
                        </form>
                    </div>

                    <div className="side-channels-column">
                        <div className="channel-box">
                            <h3>CONNECT & SOCIALS</h3>
                            <div className="social-grid">
                                <a href="https://github.com/mahiya47" target="_blank" rel="noreferrer" className="social-card github-card">
                                    <div className="social-card-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                                        </svg>
                                    </div>
                                    <div className="social-card-info">
                                        <span className="card-platform">GITHUB</span>
                                        <span className="card-handle">@mahiya47</span>
                                    </div>
                                    <span className="card-arrow">&rarr;</span>
                                </a>

                                <a href="https://linkedin.com/in/sourabh-mahiya-sm0047" target="_blank" rel="noreferrer" className="social-card linkedin-card">
                                    <div className="social-card-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                    <div className="social-card-info">
                                        <span className="card-platform">LINKEDIN</span>
                                        <span className="card-handle">sourabh-mahiya</span>
                                    </div>
                                    <span className="card-arrow">&rarr;</span>
                                </a>

                                <a href="mailto:ssmahiya7@gmail.com" className="social-card email-card">
                                    <div className="social-card-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <polyline points="22 7 12 13 2 7" />
                                        </svg>
                                    </div>
                                    <div className="social-card-info">
                                        <span className="card-platform">EMAIL</span>
                                        <span className="card-handle">ssmahiya7@gmail.com</span>
                                    </div>
                                    <span className="card-arrow">&rarr;</span>
                                </a>

                                <a href="https://wa.me/917982827307" target="_blank" rel="noreferrer" className="social-card whatsapp-card">
                                    <div className="social-card-icon">
                                        <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                                        </svg>
                                    </div>
                                    <div className="social-card-info">
                                        <span className="card-platform">WHATSAPP</span>
                                        <span className="card-handle">+91 7982827307</span>
                                    </div>
                                    <span className="card-arrow">&rarr;</span>
                                </a>
                            </div>
                        </div>

                        <div className="faq-box">
                            <h3>CURRENT AVAILABILITY</h3>
                            <p>Available for full-stack & front-end web engineering roles, high-performance UI refactors, and real-time interactive apps.</p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}