import React, { useEffect } from 'react';
import ProjectList from '../../features/projects/components/ProjectList/ProjectList';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  const { t } = useLanguage();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>{t.portfolio.title} <span className="gradient-text">{t.portfolio.highlight}</span></h1>
          <p className={styles.pageSubtext}>{t.portfolio.subtitle}</p>
        </div>
      </div>
      <div className="container">
        <ProjectList />
      </div>
    </div>
  );
};

export default Portfolio;
