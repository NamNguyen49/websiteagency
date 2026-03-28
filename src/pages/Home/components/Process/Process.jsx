import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../../../contexts/LanguageContext';
import styles from './Process.module.css';

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const elts = elementsRef.current.filter(Boolean);
    gsap.fromTo(elts,
      { y: 50, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
      }
    );
  }, []);

  return (
    <div className={styles.processContainer} ref={containerRef}>
      <div className={styles.processHeader} ref={el => elementsRef.current[0] = el}>
        <h2 className={styles.title}>{t.process.title} <span className="gradient-text">{t.process.highlight}</span></h2>
        <p className={styles.subtitle}>{t.process.subtitle}</p>
      </div>

      <div className={styles.stepsWrapper}>
        {t.process.steps.map((step, i) => (
          <React.Fragment key={i}>
            <div
              className={`${styles.step} glass-morphism`}
              ref={el => elementsRef.current[i + 1] = el}
            >
              <div className={styles.stepNumber}>{String(i + 1).padStart(2, '0')}</div>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepText}>{step.text}</p>
              </div>
            </div>
            {i !== t.process.steps.length - 1 && (
              <div className={styles.stepConnector}>
                <div className={styles.connectorLine}></div>
                <div className={styles.connectorArrow}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Process;
