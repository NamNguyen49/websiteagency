import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target, Shield, Zap, Users } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './About.module.css';

const ICONS = [<Zap size={32} />, <Shield size={32} />, <Target size={32} />, <Users size={32} />];

const About = () => {
  const { t } = useLanguage();
  const headerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo(headerRef.current, 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 0.2 }
    )
    .fromTo(contentRef.current.children, 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 },
      '-=0.6'
    );
  }, []);

  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection} ref={headerRef}>
        <div className="container">
          <span className={styles.badge}>{t.about.badge}</span>
          <h1 className={styles.title}>{t.about.title} <span className="gradient-text">{t.about.highlight}</span></h1>
          <p className={styles.subtitle}>
            {t.about.subtitle}
          </p>
        </div>
      </section>

      <section className="container" ref={contentRef}>
        <div className={styles.gridSection}>
          <div className={`${styles.card} glass-morphism`}>
            <h2 className={styles.sectionTitle}>{t.about.mission.title}</h2>
            <p className={styles.text}>
              {t.about.mission.text}
            </p>
          </div>
          <div className={`${styles.card} glass-morphism`}>
            <h2 className={styles.sectionTitle}>{t.about.vision.title}</h2>
            <p className={styles.text}>
              {t.about.vision.text}
            </p>
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h2 className={styles.centeredTitle}>{t.about.valuesTitle} <span className="gradient-text">{t.about.valuesHighlight}</span></h2>
          <div className={styles.valuesGrid}>
            {t.about.valuesItems.map((value, i) => (
              <div key={i} className={styles.valueItem}>
                <div className={styles.valueIcon}>{ICONS[i]}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.historyCard} glass-morphism`}>
          <h2 className={styles.sectionTitle}>{t.about.history.title}</h2>
          <p className={styles.text}>
            {t.about.history.text}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
