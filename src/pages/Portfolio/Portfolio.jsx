import React, { useEffect } from 'react';
import ProjectList from '../../features/projects/components/ProjectList/ProjectList';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.pageHero}>
        <div className="container">
          <h1 className={styles.pageTitle}>Our <span className="gradient-text">Ecosystem</span></h1>
          <p className={styles.pageSubtext}>Explore the collection of industrial-grade digital products designed and engineered by Synvia Solutions Corp.</p>
        </div>
      </div>
      <div className="container">
        <ProjectList />
      </div>
    </div>
  );
};

export default Portfolio;
