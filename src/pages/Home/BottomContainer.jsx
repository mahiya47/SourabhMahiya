import "./BottomContainer.css";

const skills = [
    {
        name: "React",
        icon: (
            <svg viewBox="-11.5 -10.23174 23 20.46348" width="26" height="26" fill="none">
                <circle cx="0" cy="0" r="2.05" fill="currentColor" />
                <g stroke="currentColor" strokeWidth="1.2">
                    <ellipse rx="11" ry="4.2" />
                    <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                    <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
            </svg>
        )
    },
    {
        name: "JavaScript",
        icon: (
            <svg viewBox="0 0 24 24" width="25" height="25">
                <rect width="24" height="24" rx="3" fill="currentColor" />
                <text
                    x="12"
                    y="16.5"
                    fill="#faf6ee"
                    fontSize="11"
                    fontWeight="900"
                    fontFamily="'Space Mono', monospace"
                    textAnchor="middle"
                >
                    JS
                </text>
            </svg>
        )
    },
    {
        name: "TypeScript",
        icon: (
            <svg viewBox="0 0 24 24" width="25" height="25">
                <rect width="24" height="24" rx="3" fill="currentColor" />
                <text
                    x="12"
                    y="16.5"
                    fill="#faf6ee"
                    fontSize="11"
                    fontWeight="900"
                    fontFamily="'Space Mono', monospace"
                    textAnchor="middle"
                >
                    TS
                </text>
            </svg>
        )
    },
    {
        name: "Node.js",
        icon: (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8">
                <polygon points="12 2 21 7.2 21 16.8 12 22 3 16.8 3 7.2" strokeLinejoin="round" />
                <text
                    x="12"
                    y="15"
                    fill="currentColor"
                    stroke="none"
                    fontSize="8.5"
                    fontWeight="800"
                    fontFamily="'Space Mono', monospace"
                    textAnchor="middle"
                >
                    JS
                </text>
            </svg>
        )
    },
    {
        name: "PostgreSQL",
        icon: (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
            </svg>
        )
    },
    {
        name: "WebSockets",
        icon: (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
        )
    },
    {
        name: "Python",
        icon: (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
                <path d="M11.9 2c-3.1 0-5 1.4-5 3.5v2.6h5.2v.7H4.7c-2.1 0-3.7 1.6-3.7 4.1 0 2.2 1.4 4.1 3.5 4.1h2v-2.8c0-2.3 2-4.2 4.3-4.2h5.1V7.5c0-2.3-2-3.5-3.9-3.5h-.1zm-1.7 1.8a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8zm1.9 18.2c3.1 0 5-1.4 5-3.5v-2.6h-5.2v-.7h7.4c2.1 0 3.7-1.6 3.7-4.1 0-2.2-1.4-4.1-3.5-4.1h-2v2.8c0 2.3-2 4.2-4.3 4.2H7.7v2.5c0 2.3 2 3.5 3.9 3.5h.5zm1.7-1.8a.9.9 0 1 1 0-1.8.9.9 0 0 1 0 1.8z" />
            </svg>
        )
    },
    {
        name: "HTML / CSS",
        icon: (
            <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
                <line x1="14" y1="4" x2="10" y2="20" strokeWidth="1.8" />
            </svg>
        )
    },
    {
        name: "Git & GitHub",
        icon: (
            <svg viewBox="0 0 24 24" width="25" height="25" fill="currentColor">
                <path d="M21.6 10.4l-8-8c-.8-.8-2-.8-2.8 0L9.4 3.8l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.8.8.8 2.1 0 2.9s-2.1.8-2.9 0c-.6-.6-.8-1.6-.5-2.4l-3.2-3.2v6.6c.3.2.5.6.5 1 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.8.5-1v-6.6c-.3-.2-.5-.6-.5-1 0-.6.4-1.2.9-1.4L7.5 5.7 2.4 10.8c-.8.8-.8 2 0 2.8l8 8c.8.8 2 .8 2.8 0l8.4-8.4c.8-.8.8-2 0-2.8z" />
            </svg>
        )
    }
];

export function BottomContainer() {
    return (
        <section className="skills-strip-section">
            {/* ==================== SKILLS LABEL BADGE ==================== */}
            <div className="skills-badge">
                <span className="skills-badge-title">SKILLS</span>
                <span className="skills-badge-arrow">&rarr;</span>
            </div>

            {/* ==================== SKILLS ICONS TRACK ==================== */}
            <div className="skills-track">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                        <div className="skill-icon">{skill.icon}</div>
                        <span className="skill-label">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}