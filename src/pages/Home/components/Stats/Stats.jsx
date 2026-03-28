import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '../../../../contexts/LanguageContext';
import styles from './Stats.module.css';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  useEffect(() => {
    const elts = elementsRef.current;
    gsap.fromTo(elts,
      { y: 30, opacity: 0, scale: 0.9 },
      {
        y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    );
  }, []);

  return (
    <div className={styles.statsWrapper} ref={containerRef}>
      <div className={styles.grid}>
        {t.stats.map((stat, i) => (
          <div key={i} className={styles.statBox} ref={el => elementsRef.current[i] = el}>
            <div className={`gradient-text ${styles.statValue}`}>{stat.value}</div>
            <div className={styles.statLabel}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
