import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '../../../../contexts/LanguageContext';
import styles from './ProjectList.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { id: 1, image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=1200' },
  { id: 4, image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200' }
];

const ProjectList = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  const portfolioData = [
    { title: 'NexFlow E-commerce', category: 'Web Development' },
    { title: 'Visionary Dashboard', category: 'UI/UX Design' },
    { title: 'Zen Fitness App', category: 'Mobile App' },
    { title: 'Quantum Portal', category: 'SaaS Platform' },
  ];

  useEffect(() => {
    gsap.fromTo(projectsRef.current, 
      { scale: 0.95, opacity: 0, y: 30 }, 
      { 
        scale: 1, 
        opacity: 1, 
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      }
    );
  }, [t]);

  return (
    <div className={styles.portfolio} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>{t.portfolio.showcaseTitle} <span className="gradient-text">{t.portfolio.showcaseHighlight}</span></h2>
        <p className={styles.sectionSubtext}>{t.portfolio.showcaseSubtitle}</p>
      </div>

      <div className={styles.portfolioGrid}>
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className={styles.projectCard}
            ref={el => projectsRef.current[index] = el}
          >
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={portfolioData[index].title} className={styles.projectImage} />
              <div className={`${styles.projectOverlay} glass-morphism`}>
                <span className={styles.projectCategory}>{portfolioData[index].category}</span>
                <h3 className={styles.projectTitle}>{portfolioData[index].title}</h3>
                <button className={styles.viewProjectBtn}>
                  {t.portfolio.viewProject} <ExternalLink size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
