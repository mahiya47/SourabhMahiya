import "./HomePage.css";
import { NavBar } from "../../components/NavBar/NavBar";
import { LeftContainer } from "./LeftContainer";
import { RightContainer } from "./RightContainer";
import { BottomContainer } from "./BottomContainer";
import { AboutMe } from "../../components/AboutMe/AboutMe";
import { ShowcaseSection } from "./ShowcaseSection";
import { ExperienceSection } from "../../components/ExperienceSection/ExperienceSection";
import { Footer } from "../../components/Footer/Footer";

export function HomePage() {
    return (
        <>
            <NavBar />
            <main className="home-wrapper">
                {/* ==================== HERO SPLIT SECTION ==================== */}
                <section className="home-container-top">
                    <LeftContainer />
                    <RightContainer />
                </section>

                {/* ==================== SKILLS STRIP ==================== */}
                <section id="skills">
                    <BottomContainer />
                </section>

                {/* ==================== ABOUT ME SECTION ==================== */}
                <section id="about">
                    <AboutMe />
                </section>

                {/* ==================== PROJECTS & CERTIFICATIONS SHOWCASE ==================== */}
                <ShowcaseSection />

                {/* ==================== EXPERIENCE & CTA SECTION ==================== */}
                <section id="experience">
                    <ExperienceSection />
                </section>

                {/* ==================== FOOTER ==================== */}
                <Footer />
            </main>
        </>
    );
}