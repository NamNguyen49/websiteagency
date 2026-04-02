import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Zap, ArrowRight } from "lucide-react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import styles from "./Enterprise.module.css";

gsap.registerPlugin(ScrollTrigger);

const Enterprise = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(
      leftRef.current,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
    ).fromTo(
      rightRef.current,
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6",
    );
  }, [t]);

  return (
    <div className={styles.enterpriseContainer} ref={containerRef}>
      <div className={styles.grid}>
        {}
        <div className={styles.leftCol} ref={leftRef}>
          <div className={styles.badge}>
            <Zap size={14} /> {t.enterprise.badge}
          </div>

          <h2 className={styles.title}>{t.enterprise.title}</h2>

          <p className={styles.subtitle}>{t.enterprise.subtitle}</p>

          <div className={styles.actionGroup}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              {t.enterprise.btn1}
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              {t.enterprise.btn2}
            </button>
          </div>

          <div className={styles.featuresList}>
            {t.enterprise.features.map((item, idx) => (
              <div key={idx} className={styles.featureRow}>
                <div className={styles.featureTitle}>{item.title}</div>
                <div className={styles.featureDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {}
        <div className={styles.rightCol} ref={rightRef}>
          <div className={styles.serverVisual}>
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800"
              alt="Server Infrastructure"
              className={styles.serverImage}
            />
            {}
            <div className={styles.imageOverlayTop}></div>
            <div className={styles.imageOverlaySide}></div>

            {}
            <div className={`${styles.floatingCard} glass-morphism`}>
              <p className={styles.quoteText}>{t.enterprise.quoteText}</p>

              <div className={styles.authorGroup}>
                <div className={styles.avatar}>MB</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>Martino Bonfiglioli</div>
                  <div className={styles.authorRole}>
                    {t.enterprise.quoteRole}
                  </div>
                </div>
              </div>

              <a href="#" className={styles.caseLink}>
                {t.enterprise.quoteCta} <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enterprise;
