import React, { useEffect } from 'react';
import ServiceGrid from '../../features/services/components/ServiceGrid/ServiceGrid';
import styles from './Services.module.css';

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.servicesPage}>
      <div className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Strategic <span className="gradient-text">Competencies</span></h1>
          <p className={styles.pageSubtext}>Engineering future-proof solutions for global visionary brands and SVS Corp partners.</p>
        </div>
      </div>
      <div className={`container ${styles.gridContainer}`}>
        <ServiceGrid />
      </div>
    </div>
  );
};

export default Services;
