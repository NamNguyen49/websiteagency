import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CheckCircle2, Shield, Zap, Box } from "lucide-react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import styles from "./Features.module.css";

gsap.registerPlugin(ScrollTrigger);

const ICONS = [<Box size={28} />, <Zap size={28} />, <Shield size={28} />, <CheckCircle2 size={28} />];

const Features = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const elts = elementsRef.current;
    gsap.fromTo(elts,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 75%", toggleActions: "play none none reverse" },
      }
    );
  }, []);

  return (
    <div className={styles.featuresContainer} ref={containerRef}>
      <div className={styles.header} ref={(el) => (elementsRef.current[0] = el)}>
        <div className={styles.label}>{t.features.label}</div>
        <h2 className={styles.title}>
          {t.features.title} <span className="gradient-text">{t.features.highlight}</span>
        </h2>
        <p className={styles.subtitle}>{t.features.subtitle}</p>
      </div>

      <div className={styles.grid}>
        {t.features.items.map((feature, i) => (
          <div key={i} className={`${styles.card} glass-morphism`} ref={(el) => (elementsRef.current[i + 1] = el)}>
            <div className={styles.cardHeader}>
              <div className={styles.iconWrapper}>{ICONS[i]}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
            </div>
            <p className={styles.cardDesc}>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
