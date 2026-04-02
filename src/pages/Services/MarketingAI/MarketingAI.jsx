import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Zap, Cpu, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../WebDesign/WebDesign.module.css';

const AI_SUB = {
  'automation-marketing': {
    title: 'Automation Marketing',
    icon: <Zap size={48} />,
    color: '#a855f7',
    features: ['Email Workflows', 'Lead Scoring', 'CRM Sync', 'Automated Sales Funnels']
  },
  'ai-content': {
    title: 'AI Content',
    icon: <Cpu size={48} />,
    color: '#6366f1',
    features: ['SEO-optimized Text', 'Dynamic Images', 'Multilingual Creation', 'AI Copywriting']
  },
  'chatbot': {
    title: 'Chatbot',
    icon: <MessageCircle size={48} />,
    color: '#ec4899',
    features: ['24/7 Support', 'Lead Qualification', 'Natural Language AI', 'Instant Response']
  }
};

const MarketingAI = () => {
  const { subId } = useParams();
  const { language } = useLanguage();
  const currentSub = AI_SUB[subId] || AI_SUB['automation-marketing'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subId]);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.categoryLabel} style={{ color: currentSub.color }}>FUTURE-TECH SOLUTIONS</span>
          <h1>{currentSub.title}</h1>
          <p>
            {language === 'vi' 
              ? 'Tự động hóa kinh doanh và tích hợp Trí tuệ nhân tạo đột phá.'
              : 'Automating business and integrating breakthrough Artificial Intelligence.'}
          </p>
          <div className={styles.iconBox} style={{ background: currentSub.color + '20', color: currentSub.color }}>
            {currentSub.icon}
          </div>
        </div>
      </section>

      <nav className={styles.subTabs}>
        {Object.entries(AI_SUB).map(([id, data]) => (
          <Link key={id} to={`/services/marketing-ai/${id}`} className={`${styles.tab} ${subId === id ? styles.activeTab : ''}`}
            style={subId === id ? { borderColor: data.color, color: data.color } : {}}>
            {data.title}
          </Link>
        ))}
      </nav>

      <section className={styles.contentSection}>
        <div className={`container ${styles.contentGrid}`}>
          <div className={styles.textContent}>
            <h2>Intelligent Business Automation</h2>
            <div className={styles.featureGrid}>
              {currentSub.features.map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <CheckCircle2 color={currentSub.color} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button className={styles.cta} style={{ background: currentSub.color }}>
              Automate My Biz <ArrowRight size={20} />
            </button>
          </div>
          
          <div className={styles.visualContent}>
            <div className={styles.mockupFrame} style={{ borderColor: currentSub.color }}>
              <div className={styles.mockupHeader}>
                <div className={styles.dots}><span></span><span></span><span></span></div>
              </div>
              <div className={styles.mockupBody}>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '40px', height: '40px', background: currentSub.color, borderRadius: '50%' }}></div>
                  <div style={{ width: '150px', height: '10px', background: '#222', marginTop: '15px' }}></div>
                </div>
                <div className={styles.skeletonPara} style={{ background: '#111' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketingAI;
