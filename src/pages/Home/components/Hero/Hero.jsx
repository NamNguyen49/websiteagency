import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Activity } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import styles from './Hero.module.css';

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtextRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    tl.fromTo(headlineRef.current, { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 1.5, delay: 0.3 })
      .fromTo(subtextRef.current, { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1 }, '-=1')
      .fromTo(ctaRef.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8 }, '-=0.6');
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.heroBadge}>
          <Activity size={14} className={styles.badgeIcon} />
          <span>{t.hero.badge}</span>
        </div>

        <h1 className={styles.heroTitle} ref={headlineRef}>
          {t.hero.line1} <br />
          <span className="gradient-text">{t.hero.line2}</span> {t.hero.line3}
        </h1>

        <p className={styles.heroSubtext} ref={subtextRef}>
          {t.hero.subtitle}
        </p>

        <div className={styles.heroActions} ref={ctaRef}>
          <button className="btn-primary">
            {t.hero.cta1} <ArrowRight size={20} />
          </button>
          <button className={styles.btnSecondary}>
            {t.hero.cta2}
          </button>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.glow1}></div>
          <div className={styles.glow2}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
