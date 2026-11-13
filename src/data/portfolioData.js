export const projectsData = [
  {
    id: "oh-sheet",
    title: "Oh Sheet! — Social Blogging & Live Arcade",
    tagline: "Twitter/Reddit-style social platform with 12 built-in arcade games, multiplayer rooms, and AI bots.",
    description: "Full-stack social blogging platform ('sheets') engineered with React, Node.js/Express, Prisma ORM, and PostgreSQL. Hosted on an Oracle Cloud Ubuntu VM managed via PM2 and reverse-proxied through nginx with Let's Encrypt SSL, paired with a Vercel CI/CD frontend.",
    highlights: [
      "8 single-player games (seeded daily Crossword & Sudoku with streak tracking, Flappy Bird, Endless Runner with 90° mobile canvas transform, Snake, Tetris, Minesweeper, Reaction Timer).",
      "4 real-time Socket.io multiplayer games (Ludo with full 15x15 cross-board rules, Snake & Ladder, Tic-Tac-Toe, Rock Paper Scissors).",
      "Built-in DM & comment bots: 'Tonald Drump' powered by Groq LLM (openai/gpt-oss-20b) and 'Pikku the Cat' automated commenter.",
      "Rich media composer supporting 4:5 image cropping, 20MB video uploads, React Portal user-tagging, threaded replies, and 7-day soft-delete account recovery."
    ],
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL", "Prisma", "Socket.io", "Groq AI", "Oracle Cloud", "nginx", "PM2"],
    category: "Full Stack / Real-Time",
    github: "https://github.com/mahiya47/oh-sheet-blog-2.0",
    demo: "https://ohsheet.blog",
    image: "/ohsheet.PNG",
    badgeColor: "#fbcfe8",
    icon: "👾"
  },
  {
    id: "verify-ai",
    title: "VerifyAI — Fake News & AI Image Checker",
    tagline: "Full-stack misinformation detection engine and deep EXIF metadata forensic inspector.",
    description: "Decoupled full-stack application designed to combat misinformation by evaluating whether news articles are misleading and analyzing uploaded images for AI generation or digital manipulation signatures.",
    highlights: [
      "Scrapes and extracts core article text via Cheerio and cross-references claims against the Google Fact Check Tools API.",
      "Integrates Google Gemini AI to generate structured truth verdicts, confidence scores, and detailed reasoning.",
      "Processes uploaded images via Multer and Exif-Parser to extract camera manufacturer, capture timestamps, resolution specs, and GPS coordinates."
    ],
    tech: ["React", "Vite", "Node.js", "Express.js", "Gemini API", "Google Fact Check API", "Cheerio", "Multer", "Exif-Parser"],
    category: "Full Stack AI & Forensics",
    github: "https://github.com/mahiya47/VerifyAI---Fake-News---AI-Image-Checker",
    demo: "#",
    image: "",
    badgeColor: "#fed7aa",
    icon: "🔍"
  },
  {
    id: "oh-jobs",
    title: "Oh! Jobs — Tech Talent Portal",
    tagline: "Feature-rich React SPA connecting technology professionals with industry roles.",
    description: "Modern single-page application built with React 18 and Vite showcasing custom state-orchestrated navigation, real-time multi-parameter filtering, and persistent client-side storage without external routing bloat.",
    highlights: [
      "Custom lightweight navigation engine built via React state orchestration to eliminate routing library overhead.",
      "Instantaneous search filtering across job titles, company names, and geographic locations as the user types.",
      "LocalStorage persistence via useEffect hooks for saved job bookmarks, application history, dark mode preferences, and Base64 profile image uploads."
    ],
    tech: ["React 18", "Vite", "Vanilla CSS", "Custom Properties", "LocalStorage API"],
    category: "Frontend SPA Architecture",
    github: "https://github.com/mahiya47/react-job-portal-application",
    demo: "#",
    image: "",
    badgeColor: "#bbf7d0",
    icon: "💼"
  },
  {
    id: "canvas-image-editor",
    title: "HTML5 Canvas Image Editor Workspace",
    tagline: "High-performance browser photo editing suite with real-time nested object filters.",
    description: "Client-side digital photo editing workspace engineered to handle complex graphic manipulation variables, chained filter matrices, and one-click cinematic grading natively in the browser.",
    highlights: [
      "Dynamic configuration mapping that loops through multi-dimensional filter objects to generate interactive slider controls on the fly.",
      "Pristine reference memory caching with optimized clearRect routines to prevent pixel degradation and memory leaks during rapid adjustments.",
      "Chained filtering matrix merging brightness, contrast, Gaussian blur, and hue-rotation alongside presets (Cyberpunk, Cinema Noir, Retro Old School)."
    ],
    tech: ["HTML5 Canvas API", "Vanilla JavaScript (ES6+)", "CSS3 Custom Properties", "DOM Manipulation"],
    category: "Client-Side Graphics Engine",
    github: "https://github.com/mahiya47/Dynamic-Image-Editor-Workspace",
    demo: "#",
    image: "",
    badgeColor: "#e0f2fe",
    icon: "🎨"
  },
  {
    id: "brute-force-simulator",
    title: "Brute-Force Password Cracker Simulator",
    tagline: "Interactive cybersecurity simulator demonstrating real-time brute-force mathematics.",
    description: "Educational cybersecurity web application built with asynchronous recursive loops in JavaScript to vividly illustrate how password length and complexity exponentially multiply cracking effort.",
    highlights: [
      "Features 'The Matrix Terminal'—an auto-scrolling live activity log rendering every algorithmic combination guess in real time.",
      "Comprehensive telemetry dashboard tracking elapsed time, total processing attempts, current test string, and live system status flags.",
      "Configurable character set toggles (Lowercase, Uppercase, Numbers, Symbols) and variable execution delays from slow-motion step-through to maximum overdrive."
    ],
    tech: ["Vanilla JavaScript", "Async/Await Promises", "Recursive Algorithms", "DOM Manipulation"],
    category: "Cybersecurity & Algorithms",
    github: "https://github.com/mahiya47/Recursive-Brute-Force-Simulator",
    demo: "#",
    image: "",
    badgeColor: "#fef08a",
    icon: "🔓"
  },
  {
    id: "progressive-snake",
    title: "Progressive Canvas Snake Game",
    tagline: "Speed-adaptive 600x600 desktop arcade engine with dimensional border wrapping.",
    description: "Fast-paced retro arcade game engine built on a high-resolution 600px by 600px HTML5 Canvas grid using modular timer callbacks, data serialization, and wrap-around coordinate math.",
    highlights: [
      "Dimensional edge-wrapping mathematics that automatically teleport snake coordinates to opposite walls when crossing canvas boundaries.",
      "Dynamic difficulty scaling that reduces loop execution intervals by 5ms with every food item consumed.",
      "Complete interactive state machine (Start Tutorial overlay, Pause navigation, Game Over analytics) with lifetime high-score persistence via LocalStorage."
    ],
    tech: ["HTML5 Canvas", "Vanilla JavaScript", "LocalStorage API", "Keyboard Event Listeners"],
    category: "Arcade Game Engine",
    github: "https://github.com/mahiya47/Canvas-Speed-Adaptive-Snake-Game",
    demo: "#",
    image: "",
    badgeColor: "#ddd6fe",
    icon: "🐍"
  },
  {
    id: "currency-crypto-converter",
    title: "Live Currency & Crypto Converter",
    tagline: "Real-time global fiat and cryptocurrency exchange calculator with smart precision.",
    description: "Dynamic financial conversion utility integrating the Fawazahmed0 Currency API to deliver instantaneous exchange rate calculations across top global fiat currencies and volatile digital assets.",
    highlights: [
      "Smart decimal formatting algorithm that outputs 2-decimal precision for fiat pairs (USD, EUR, GBP, JPY, AUD) and scales up to 6 decimals for crypto (BTC, ETH, SOL, BNB, XRP).",
      "Live market rate sidebars populated via non-blocking async/await fetch pipelines and cached conversion matrices."
    ],
    tech: ["JavaScript (ES6+ Async/Await)", "REST APIs", "HTML5", "CSS3", "Dynamic DOM Rendering"],
    category: "FinTech & REST APIs",
    github: "https://github.com/mahiya47/Currency-And-Crypto-Converter",
    demo: "#",
    image: "",
    badgeColor: "#fed7aa",
    icon: "💱"
  },
  {
    id: "password-generator",
    title: "Password Generator & Strength Finder",
    tagline: "Cryptographic credential generator and real-time entropy vulnerability analyzer.",
    description: "Client-side security utility engineered to generate randomized passwords while evaluating the exact entropy and structural strength of existing credentials against dictionary and brute-force attacks.",
    highlights: [
      "Customizable parameter controls for length thresholds, uppercase/lowercase alphabets, numerical digits, and specialized symbols.",
      "Real-time strength evaluation engine with dynamic color-coded feedback metrics and one-click Clipboard API integration."
    ],
    tech: ["HTML5", "CSS3 Flexbox", "Vanilla JavaScript", "Clipboard API"],
    category: "Security Utility",
    github: "https://github.com/mahiya47/Password-Generator-And-Strength-Analyzer",
    demo: "#",
    image: "",
    badgeColor: "#bbf7d0",
    icon: "🛡️"
  },
  {
    id: "caesar-cipher",
    title: "Caesar Cipher Web App",
    tagline: "Real-time cryptographic substitution cipher scrambler and inverse decryptor.",
    description: "Clean, responsive cryptographic utility for encrypting and decrypting text messages using customizable numerical shift keys based on the classic substitution cipher algorithm.",
    highlights: [
      "Real-time text scrambling and inverse shift decryption calculations as the user types or modifies the shift key.",
      "One-click Clipboard API copying and responsive layout tailored for cryptography students and quick message verification."
    ],
    tech: ["HTML5", "CSS3", "JavaScript (ES6+)", "Clipboard API"],
    category: "Cryptography Utility",
    github: "https://github.com/mahiya47/Cryptography-Encoder-Decoder-App",
    demo: "#",
    image: "",
    badgeColor: "#fbcfe8",
    icon: "🔐"
  }
];

export const certificationsData = [
  {
    id: "frontend-skyscanner",
    title: "Front-End Software Engineering",
    issuer: "Skyscanner",
    image: "/Certificates/frontend_skyscanner.PNG",
    year: "2026",
    credentialId: "SK-FE-2026",
    skills: ["React", "Frontend Architecture", "UI Engineering"]
  },
  {
    id: "html-css-meta",
    title: "HTML and CSS in Depth",
    issuer: "Meta",
    image: "/Certificates/HTML_And_CSS.PNG",
    year: "2023",
    credentialId: "META-HC-2023",
    skills: ["Semantic HTML5", "CSS3 Flexbox & Grid", "Responsive Design"]
  },
  {
    id: "python-ibm",
    title: "Python for Data Science, AI & Development",
    issuer: "IBM",
    image: "/Certificates/Python_for_Data_Science_and_AI_Deveplopment.png",
    year: "2023",
    credentialId: "IBM-PY-2023",
    skills: ["Python", "Data Science", "AI Fundamentals"]
  },
  {
    id: "software-engineering-sim",
    title: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    image: "/Certificates/Software_Engineering_JPMorgan_Chase_and_Co.PNG",
    year: "2023",
    credentialId: "SWE-JPMC-2023",
    skills: ["Software Engineering", "System Architecture", "Git Workflows"]
  },
  {
    id: "cybersecurity-jpmc",
    title: "Cybersecurity Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    image: "/Certificates/cyber_security_jpmorgna.PNG",
    year: "2023",
    credentialId: "JPMC-SEC-2023",
    skills: ["Application Security", "Access Control", "Threat Modeling"]
  },
  {
    id: "cyber-security-anz",
    title: "Cyber Security Management Simulation",
    issuer: "ANZ",
    image: "/Certificates/Cyber_Security_ANZ.PNG",
    year: "2023",
    credentialId: "ANZ-SEC-2023",
    skills: ["Incident Response", "Packet Analysis", "Network Security"]
  },
  {
    id: "intro-cybersecurity-ibm",
    title: "Introduction to Cybersecurity Tools & Cyberattacks",
    issuer: "IBM",
    image: "/Certificates/Introduction_to_cyber_security_by_ibm.jpeg",
    year: "2023",
    credentialId: "IBM-INTRO-SEC-23",
    skills: ["Threat Intelligence", "Malware Analysis", "Network Defense"]
  },
  {
    id: "cybersecurity-roles-ibm",
    title: "Cybersecurity Roles, Processes & OS Security",
    issuer: "IBM",
    image: "/Certificates/Cybersecurity_Roles,_Processes_&_Operating_System_Security.jpg",
    year: "2023",
    credentialId: "IBM-ROLES-SEC-23",
    skills: ["OS Hardening", "IAM", "Security Operations"]
  },
  {
    id: "operating-systems-ibm",
    title: "Operating Systems: Overview, Administration & Security",
    issuer: "IBM",
    image: "/Certificates/Operating_Systems-_Overview,_Administration_and_security.PNG",
    year: "2023",
    credentialId: "IBM-OS-SEC-23",
    skills: ["Linux Administration", "Windows Security", "Shell Scripting"]
  },
  {
    id: "digital-marketing-google",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google Digital Garage",
    image: "/Certificates/Digital_Marketing.PNG",
    year: "2023",
    credentialId: "GOOGLE-DM-2023",
    skills: ["SEO", "Web Analytics", "Search Engine Marketing"]
  },
  {
    id: "elements-of-ai",
    title: "Elements of AI",
    issuer: "University of Helsinki",
    image: "/Certificates/certificate-elements-of-ai.png",
    year: "2023",
    credentialId: "HELSINKI-AI-23",
    skills: ["Neural Networks", "Machine Learning", "AI Ethics"]
  }
];