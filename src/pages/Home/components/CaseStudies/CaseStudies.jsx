import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import styles from './CaseStudies.module.css';

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  const cases = [
    {
      company: "FinTech Neo",
      title: "How FinTech Neo built a scalable core banking ecosystem and accelerated deployment by 40%",
      author: "Sarah Jenkins",
      role: "VP of Engineering",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      company: "MedCore Health",
      title: "How SVS modernized MedCore's record processing, ensuring 100% compliance and zero downtime",
      author: "Dr. James Wilson",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const feedbacks = [
    {
      quote: "SVS Corp didn't just build our software; they re-engineered our entire digital workflow. The ROI was evident within the first quarter.",
      author: "Elena Rodriguez",
      company: "Global Retail Solutions"
    },
    {
      quote: "Their DevOps architecture is unmatched. We handle 10x the traffic now without a single performance hiccup.",
      author: "Marcus Chen",
      company: "Streamline Media"
    },
    {
      quote: "Transformative digital engineering. Their codebase is so clean and scalable, our internal team couldn't believe it.",
      author: "Sophia Laurent",
      company: "NextGen Logix"
    },
    {
      quote: "From AI integrations to robust backends, SVS consistently delivers beyond expectations. An incredible partner.",
      author: "David O. Reynolds",
      company: "Hyperion Finance"
    },
    {
      quote: "The only development agency we trust with our mission-critical infrastructure. Reliable and completely secure.",
      author: "Emma Zhang",
      company: "MedCore Health"
    },
    {
      quote: "Working with SVS feels like having an elite Silicon Valley tech team in-house. Delivery is always flawless.",
      author: "Thomas Wright",
      company: "E-Commerce Elevate"
    }
  ];

  useEffect(() => {
    const elts = elementsRef.current;
    
    gsap.fromTo(elts,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  return (
    <div className={styles.caseContainer} ref={containerRef}>
      
      {/* Case Studies Section */}
      <div className={styles.header} ref={el => elementsRef.current[0] = el}>
        <h2 className={styles.title}>
          Case <span className="gradient-text">Studies</span>
        </h2>
        <p className={styles.subtitle}>
          Discover how industry leaders leverage SVS Corp to solve complex architectural challenges.
        </p>
      </div>

      <div className={styles.caseGrid}>
        {cases.map((item, idx) => (
          <div 
            key={idx} 
            className={`${styles.caseCard} glass-morphism`}
            ref={el => elementsRef.current[1 + idx] = el}
          >
            <div className={styles.caseImageWrapper}>
              <img src={item.image} alt={item.company} className={styles.caseImage} />
            </div>
            <div className={styles.caseContent}>
              <div className={styles.companyName}>{item.company}</div>
              <h3 className={styles.caseTitle}>{item.title}</h3>
              <div className={styles.caseMeta}>
                <div className={styles.author}>{item.author} <span className={styles.role}>— {item.role}</span></div>
              </div>
              <a href="#" className={styles.readMore}>
                Read Case Study <ArrowRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Customer Feedback Section */}
      <div className={styles.feedbackSection} ref={el => elementsRef.current[cases.length + 1] = el}>
        <div className={styles.feedbackHeader}>
          <MessageSquareQuote size={32} className={styles.feedbackIcon} />
          <h3>What our partners say</h3>
        </div>
        
        <div className={styles.feedbackMarquee}>
          <div className={styles.feedbackMarqueeContent}>
            {feedbacks.map((fb, idx) => (
              <div key={idx} className={styles.feedbackCard}>
                <p className={styles.quote}>"{fb.quote}"</p>
                <div className={styles.fbAuthor}>
                  <strong>{fb.author}</strong>
                  <span>{fb.company}</span>
                </div>
              </div>
            ))}
            {/* Duplicate for infinite scroll loop */}
            {feedbacks.map((fb, idx) => (
              <div key={`dup-${idx}`} className={styles.feedbackCard}>
                <p className={styles.quote}>"{fb.quote}"</p>
                <div className={styles.fbAuthor}>
                  <strong>{fb.author}</strong>
                  <span>{fb.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default CaseStudies;
