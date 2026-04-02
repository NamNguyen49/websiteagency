import React, { useEffect } from "react";
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
import { Helmet } from "react-helmet-async";
import styles from "./Home.module.css";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>HNT Solutions | High-Performance Digital Agency</title>
        <meta
          name="description"
          content="Mission-critical digital products with stunning design and industrial-grade performance. Design. Develop. Accelerate Growth."
        />
      </Helmet>
      <div className={styles.home}>
        <Hero />

        <section className={styles.sectionPadding}>
          <div className="container">
            <Features />
            <Stats />
          </div>
        </section>

        {}
        <section
          className={`${styles.sectionPadding} ${styles.altBg} ${styles.sectionBorder}`}
        >
          <div className="container">
            <Integrations />
          </div>
        </section>

        {}
        <section className={styles.sectionPadding}>
          <div className="container">
            <ServiceGrid />
          </div>
        </section>

        {}
        <section
          className={`${styles.sectionPadding} ${styles.altBg} ${styles.sectionBorder}`}
        >
          <div className="container">
            <TechShowcase />
          </div>
        </section>

        <section className={styles.sectionPadding}>
          <Process />
        </section>

        {}
        <section
          className={`${styles.sectionPadding} ${styles.altBg} ${styles.sectionBorder}`}
        >
          <div className="container">
            <Enterprise />
          </div>
        </section>

        {}
        <section className={styles.sectionPadding}>
          <div className="container">
            <CaseStudies />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
