import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Target, Shield, Zap, Users } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
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

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what’s possible with cutting-edge tech.',
      icon: <Zap size={32} />
    },
    {
      title: 'Reliability',
      description: 'Mission-critical systems that SVS Corp partners can depend on 24/7.',
      icon: <Shield size={32} />
    },
    {
      title: 'User-Centric',
      description: 'Every line of code and pixel at Synvia Solutions is for the end user.',
      icon: <Target size={32} />
    },
    {
      title: 'Co-Creation',
      description: 'We don’t just work for you; we work with you to scale empires.',
      icon: <Users size={32} />
    }
  ];

  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection} ref={headerRef}>
        <div className="container">
          <span className={styles.badge}>Our Story</span>
          <h1 className={styles.title}>Synvia Solutions <span className="gradient-text">Corp</span></h1>
          <p className={styles.subtitle}>
            A collective of visionary engineers and designers dedicated to building the future of industrial-grade digital ecosystems.
          </p>
        </div>
      </section>

      <section className="container" ref={contentRef}>
        <div className={styles.gridSection}>
          <div className={`${styles.card} glass-morphism`}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.text}>
              To empower global brands with scalable, mission-critical digital products that drive growth and institutional reliability in an ever-evolving technological landscape.
            </p>
          </div>
          <div className={`${styles.card} glass-morphism`}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p className={styles.text}>
              Becoming the world's most trusted partner for enterprise-grade digital architecture and visionary design by 2030, fueling the next wave of industrial revolutions.
            </p>
          </div>
        </div>

        <div className={styles.valuesSection}>
          <h2 className={styles.centeredTitle}>The Core <span className="gradient-text">Values</span></h2>
          <div className={styles.valuesGrid}>
            {values.map((value, i) => (
              <div key={i} className={styles.valueItem}>
                <div className={styles.valueIcon}>{value.icon}</div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={`${styles.historyCard} glass-morphism`}>
          <h2 className={styles.sectionTitle}>A Decade of Scale</h2>
          <p className={styles.text}>
            Founded with a passion for high-performance computing, SVS Corp has evolved from a small design studio into a full-scale digital engineering firm. We've weathered market shifts and technological disruptions, emerge stronger and more specialized in building "impossible" solutions for "visionary" problems.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
