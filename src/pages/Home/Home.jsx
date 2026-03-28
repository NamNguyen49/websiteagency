import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero/Hero";
import ServiceGrid from "../../features/services/components/ServiceGrid/ServiceGrid";
import Features from "./components/Features/Features";
import Stats from "./components/Stats/Stats";
import Process from "./components/Process/Process";
import Integrations from "./components/Integrations/Integrations";
import TechShowcase from "./components/TechShowcase/TechShowcase";
import Enterprise from "./components/Enterprise/Enterprise";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Background3D from "../../components/common/Background3D/Background3D";
import styles from "./Home.module.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const ctaRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <Background3D />
      <div className={styles.home}>
        <Hero />

        <section className={styles.sectionPadding}>
          <div className="container">
            <Features />
            <Stats />
          </div>
        </section>

        {/* New Integrations Marquee Section */}
        <section className={`${styles.sectionPadding} ${styles.altBg} ${styles.sectionBorder}`}>
          <div className="container">
            <Integrations />
          </div>
        </section>

        {/* Strategic Digital Capability (Service Grid) */}
        <section className={styles.sectionPadding}>
          <div className="container">
            <ServiceGrid />
          </div>
        </section>

        {/* New Tech Showcase Section (Code when you need it) */}
        <section className={`${styles.sectionPadding} ${styles.altBg} ${styles.sectionBorder}`}>
          <div className="container">
            <TechShowcase />
          </div>
        </section>

        <section className={styles.sectionPadding}>
          <Process />
        </section>

        {/* New Enterprise Section */}
        <section className={`${styles.sectionPadding} ${styles.altBg} ${styles.sectionBorder}`}>
          <div className="container">
            <Enterprise />
          </div>
        </section>

        {/* New Case Studies & Feedback Section */}
        <section className={styles.sectionPadding}>
          <div className="container">
            <CaseStudies />
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.sectionPadding}>
          <div className="container">
            <div className={styles.ctaBanner} ref={ctaRef}>
              <div className={`${styles.ctaInner} glass-morphism`}>
                <h2 className={styles.ctaTitle}>
                  Ready to transform your{" "}
                  <span className="gradient-text">ecosystem</span>?
                </h2>
                <p className={styles.ctaSubtext}>
                  Partner with Synvia Solutions Corp for your next breakthrough
                  digital project.
                </p>
                <button className="btn-primary">Connect With Us</button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
