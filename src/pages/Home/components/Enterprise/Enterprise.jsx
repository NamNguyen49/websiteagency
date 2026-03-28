import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, ArrowRight } from 'lucide-react';
import styles from './Enterprise.module.css';

gsap.registerPlugin(ScrollTrigger);

const Enterprise = () => {
  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  
  const features = [
    {
      title: "Security and control",
      desc: "Fully on-prem option, SSO SAML, and LDAP, encrypted secret stores, version control, RBAC permissions."
    },
    {
      title: "Observability and transparency",
      desc: "Audit logs and log streaming to your SIEM, workflow history, real-time alerts, usage dashboards."
    },
    {
      title: "Developer experience",
      desc: "Git-based control, isolated environments, multi-user workflows, workflow diffs."
    },
    {
      title: "AI governance",
      desc: "Human-in-the-loop, guardrails, evaluations, bias detection protocols."
    }
  ];

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 75%',
        toggleActions: 'play none none reverse'
      }
    });

    tl.fromTo(leftRef.current, { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' })
      .fromTo(rightRef.current, { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }, "-=0.6");
  }, []);

  return (
    <div className={styles.enterpriseContainer} ref={containerRef}>
      <div className={styles.grid}>
        
        {/* Left Column */}
        <div className={styles.leftCol} ref={leftRef}>
          <div className={styles.badge}>
            <Zap size={14} /> Enterprise-ready
          </div>
          
          <h2 className={styles.title}>
            Reliable. Scalable. Secure.
          </h2>
          
          <p className={styles.subtitle}>
            Deploy on your infra or ours. Push digital platforms to production with the DevOps experience enterprise teams trust. SVS Corp’s security and governance features let you build, monitor, and scale systems without losing control.
          </p>

          <div className={styles.actionGroup}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Explore SVS for enterprise
            </button>
            <button className={`${styles.btn} ${styles.btnSecondary}`}>
              Talk to sales
            </button>
          </div>

          <div className={styles.featuresList}>
            {features.map((item, idx) => (
              <div key={idx} className={styles.featureRow}>
                <div className={styles.featureTitle}>{item.title}</div>
                <div className={styles.featureDesc}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className={styles.rightCol} ref={rightRef}>
          <div className={styles.serverVisual}>
            <img 
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800" 
              alt="Server Infrastructure" 
              className={styles.serverImage}
            />
            {/* Fade overlays */}
            <div className={styles.imageOverlayTop}></div>
            <div className={styles.imageOverlaySide}></div>
            
            {/* Floating Testimonial Card */}
            <div className={`${styles.floatingCard} glass-morphism`}>
              <p className={styles.quoteText}>
                "The idea is that everybody in the organization can use SVS to manage data retrieval or complex multi-node data transformation."
              </p>
              
              <div className={styles.authorGroup}>
                <div className={styles.avatar}>MB</div>
                <div className={styles.authorInfo}>
                  <div className={styles.authorName}>Martino Bonfiglioli</div>
                  <div className={styles.authorRole}>Senior Product Manager</div>
                </div>
              </div>

              <a href="#" className={styles.caseLink}>
                See the case <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Enterprise;
