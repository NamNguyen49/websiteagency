import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';
import styles from './ProjectList.module.css';

gsap.registerPlugin(ScrollTrigger);

const ProjectList = () => {
  const sectionRef = useRef(null);
  const projectsRef = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'NexFlow E-commerce',
      category: 'Web Development',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 2,
      title: 'Visionary Dashboard',
      category: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 3,
      title: 'Zen Fitness App',
      category: 'Mobile App',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?auto=format&fit=crop&q=80&w=1200'
    },
    {
      id: 4,
      title: 'Quantum Portal',
      category: 'SaaS Platform',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1200'
    }
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
  }, []);

  return (
    <div className={styles.portfolio} ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Digital <span className="gradient-text">Ecosystem</span> Showcase</h2>
        <p className={styles.sectionSubtext}>A glimpse into the mission-critical products we've engineered for SVS Corp partners.</p>
      </div>

      <div className={styles.portfolioGrid}>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={styles.projectCard}
            ref={el => projectsRef.current[index] = el}
          >
            <div className={styles.imageWrapper}>
              <img src={project.image} alt={project.title} className={styles.projectImage} />
              <div className={`${styles.projectOverlay} glass-morphism`}>
                <span className={styles.projectCategory}>{project.category}</span>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <button className={styles.viewProjectBtn}>
                  View Ecosystem <ExternalLink size={16} />
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
