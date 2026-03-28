import React, { useEffect } from 'react';
import ServiceGrid from '../../features/services/components/ServiceGrid/ServiceGrid';
import { useLanguage } from '../../contexts/LanguageContext';
import Background3D from '../../components/common/Background3D/Background3D';
import styles from './Services.module.css';

const Services = () => {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Background3D />
      <div className={styles.servicesPage}>
        <div className={styles.pageHero}>
          <div className="container">
            <h1 className={styles.pageTitle}>{t.services.title} <span className="gradient-text">{t.services.highlight}</span></h1>
            <p className={styles.pageSubtext}>{t.services.subtitle}</p>
          </div>
        </div>
        <div className={`container ${styles.gridContainer}`}>
          <ServiceGrid />
        </div>
      </div>
    </>
  );
};

export default Services;
