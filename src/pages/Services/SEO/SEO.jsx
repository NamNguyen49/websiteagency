import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import { Search, SearchCheck, BarChart, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../WebDesign/WebDesign.module.css'; // Reusing the same base styles for consistency

const SEO_SUB = {
  'overall-seo': {
    title: 'Overall SEO',
    icon: <Search size={48} />,
    color: '#4ade80',
    features: ['Technical Audit', 'Content Strategy', 'Link Building', 'Monthly Reports']
  },
  'keyword-seo': {
    title: 'Keyword SEO',
    icon: <SearchCheck size={48} />,
    color: '#2dd4bf',
    features: ['Keyword Research', 'On-page Optimization', 'Competitor Analysis', 'Ranking Tracking']
  },
  'website-audit': {
    title: 'Website Audit',
    icon: <BarChart size={48} />,
    color: '#f97316',
    features: ['Performance Check', 'UX Review', 'Mobile Friendliness', 'Security Audit']
  }
};

const SEO = () => {
  const { subId } = useParams();
  const { language } = useLanguage();
  const currentSub = SEO_SUB[subId] || SEO_SUB['overall-seo'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subId]);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.categoryLabel} style={{ color: currentSub.color }}>SEO GROWTH SOLUTIONS</span>
          <h1>{currentSub.title}</h1>
          <p>
            {language === 'vi' 
              ? 'Thống lĩnh thứ hạng tìm kiếm và đột phá lưu lượng truy cập tự nhiên.'
              : 'Dominating search rankings and boosting organic traffic breakthroughs.'}
          </p>
          <div className={styles.iconBox} style={{ background: currentSub.color + '20', color: currentSub.color }}>
            {currentSub.icon}
          </div>
        </div>
      </section>

      <nav className={styles.subTabs}>
        {Object.entries(SEO_SUB).map(([id, data]) => (
          <Link key={id} to={`/services/seo/${id}`} className={`${styles.tab} ${subId === id ? styles.activeTab : ''}`}
            style={subId === id ? { borderColor: data.color, color: data.color } : {}}>
            {data.title}
          </Link>
        ))}
      </nav>

      <section className={styles.contentSection}>
        <div className={`container ${styles.contentGrid}`}>
          <div className={styles.textContent}>
            <h2>Achieve Top Rankings</h2>
            <div className={styles.featureGrid}>
              {currentSub.features.map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <CheckCircle2 color={currentSub.color} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button className={styles.cta} style={{ background: currentSub.color }}>
              Analyze My Site <ArrowRight size={20} />
            </button>
          </div>
          
          <div className={styles.visualContent}>
            <div className={styles.mockupFrame} style={{ borderColor: currentSub.color }}>
              <div className={styles.mockupHeader}>
                <div className={styles.dots}><span></span><span></span><span></span></div>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.skeletonTitle} style={{ width: '80%' }}></div>
                <div className={styles.skeletonPara} style={{ height: '140px' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;
