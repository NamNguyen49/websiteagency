import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Shield, Zap, Box } from "lucide-react";
import styles from "./Features.module.css";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  const features = [
    {
      title: "Architectural Excellence",
      description:
        "We build scalable, resilient systems designed for long-term growth. From microservices to global CDN deployments.",
      icon: <Box size={28} />,
    },
    {
      title: "Lightning Performance",
      description:
        "Meticulously optimized codebases ensuring sub-second load times and flawless 60fps animations.",
      icon: <Zap size={28} />,
    },
    {
      title: "Enterprise Security",
      description:
        "Military-grade encryption and robust security protocols integrated into every layer of our applications.",
      icon: <Shield size={28} />,
    },
    {
      title: "Quality Assurance",
      description:
        "Rigorous automated testing and multi-device QA protocols guarantee flawless production releases.",
      icon: <CheckCircle2 size={28} />,
    },
  ];

  useEffect(() => {
    const elts = elementsRef.current;

    gsap.fromTo(
      elts,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      },
    );
  }, []);

  return (
    <div className={styles.featuresContainer} ref={containerRef}>
      <div
        className={styles.header}
        ref={(el) => (elementsRef.current[0] = el)}
      >
        <div className={styles.label}>The SVS Advantage</div>
        <h2 className={styles.title}>
          Engineered for <span className="gradient-text">Dominance</span>
        </h2>
        <p className={styles.subtitle}>
          We don't just build websites; we engineer digital platforms that give
          your business an unfair advantage in the modern market.
        </p>
      </div>

      <div className={styles.grid}>
        {features.map((feature, i) => (
          <div
            key={i}
            className={`${styles.card} glass-morphism`}
            ref={(el) => (elementsRef.current[i + 1] = el)}
          >
            <div className={styles.iconWrapper}>{feature.icon}</div>
            <h3 className={styles.cardTitle}>{feature.title}</h3>
            <p className={styles.cardDesc}>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
