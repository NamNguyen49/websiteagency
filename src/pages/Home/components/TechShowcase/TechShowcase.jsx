import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Terminal,
  Zap,
  ShieldCheck,
  RefreshCw,
  GitBranch,
  Layers,
} from "lucide-react";
import { useLanguage } from "../../../../contexts/LanguageContext";
import styles from "./TechShowcase.module.css";

gsap.registerPlugin(ScrollTrigger);

const ICONS = [
  <Zap size={20} />,
  <ShieldCheck size={20} />,
  <RefreshCw size={20} />,
  <GitBranch size={20} />,
  <Layers size={20} />,
];

const TechShowcase = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const elts = elementsRef.current.filter(Boolean);
    gsap.fromTo(
      elts,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
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
    <div className={styles.showcaseContainer} ref={containerRef}>
      <div
        className={styles.header}
        ref={(el) => (elementsRef.current[0] = el)}
      >
        <h2 className={styles.title}>
          {t.techShowcase.title}{" "}
          <span className="gradient-text">{t.techShowcase.highlight}</span>
        </h2>
        <p className={styles.subtitle}>{t.techShowcase.subtitle}</p>
      </div>

      {/* Row 1: Code card (left) + Feature list (right) */}
      <div
        className={styles.bentoRow}
        ref={(el) => (elementsRef.current[1] = el)}
      >
        {/* Left — Code terminal card */}
        <div className={`${styles.codeCard} glass-morphism`}>
          <div className={styles.cardHeader}>
            <div className={styles.iconWrapper}>
              <Terminal size={20} />
            </div>
            <div className={styles.dots}>
              <span className={`${styles.dot} ${styles.dotRed}`}></span>
              <span className={`${styles.dot} ${styles.dotYellow}`}></span>
              <span className={`${styles.dot} ${styles.dotGreen}`}></span>
            </div>
          </div>
          <h3 className={styles.cardTitle}>{t.techShowcase.codeTitle}</h3>
          <p className={styles.cardDesc}>{t.techShowcase.codeDesc}</p>
          <div className={styles.terminalBlock}>
            <div className={styles.terminalLine}>
              <span className={styles.prompt}>$</span>
              <span className={styles.cmd}>
                {" "}
                svs deploy --region global --auto-scale
              </span>
            </div>
            <div className={styles.terminalOutput}>
              <span className={styles.ok}>✔</span> Building production bundle...
            </div>
            <div className={styles.terminalOutput}>
              <span className={styles.ok}>✔</span> Spinning up 12 edge nodes...
            </div>
            <div className={styles.terminalOutput}>
              <span className={styles.ok}>✔</span> Deploy complete in{" "}
              <span className={styles.highlight}>1.4s</span>
            </div>
            <div className={styles.codeBlock}>
              <pre>
                <code>{`const deploy = async () => {
  await scaleInfra({
    autoScale: true,
    region: 'global',
    redundancy: 3,
  });
};`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Right — three feature cards stacked */}
        <div className={styles.featureStack}>
          {t.techShowcase.features.map((feature, i) => (
            <div
              key={i}
              className={`${styles.featureCard} glass-morphism`}
              ref={(el) => (elementsRef.current[2 + i] = el)}
            >
              <div className={styles.featureTop}>
                <div className={styles.featureNumber}>{feature.num}</div>
                <h4>{feature.title}</h4>
              </div>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: capability tags */}
      <div
        className={styles.tagsRow}
        ref={(el) => (elementsRef.current[5] = el)}
      >
        {t.techShowcase.tags.map((tagLabel, i) => (
          <div key={i} className={`${styles.tagPill} glass-morphism`}>
            <span className={styles.tagIcon}>{ICONS[i]}</span>
            {tagLabel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechShowcase;
