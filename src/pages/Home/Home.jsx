import React, { useEffect } from 'react';
import Hero from './components/Hero/Hero';
import ServiceGrid from '../../features/services/components/ServiceGrid/ServiceGrid';
import styles from './Home.module.css';

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.home}>
      <Hero />
      
      <section className={`${styles.sectionPadding} ${styles.altBg} ${styles.sectionBorder}`}>
        <div className="container">
          <ServiceGrid />
        </div>
      </section>

      <section className={styles.sectionPadding}>
        <div className="container">
          <div className={styles.ctaBanner}>
            <div className={`${styles.ctaInner} glass-morphism`}>
              <h2 className={styles.ctaTitle}>
                Ready to transform your <span className="gradient-text">ecosystem</span>?
              </h2>
              <p className={styles.ctaSubtext}>
                Partner with Synvia Solutions Corp for your next breakthrough
                digital project.
              </p>
              <button className="btn-primary">Connect With Us</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
