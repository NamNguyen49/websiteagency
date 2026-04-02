import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../../../contexts/LanguageContext';
import { BarChart3, TrendingUp, Target, ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from '../WebDesign/WebDesign.module.css';

const ADS_SUB = {
  'facebook-ads': {
    title: 'Facebook Ads',
    icon: <BarChart3 size={48} />,
    color: '#3b82f6',
    features: ['Targeted Campaigns', 'Retargeting Strategy', 'A/B Testing', 'ROI Tracking']
  },
  'google-ads': {
    title: 'Google Ads',
    icon: <Target size={48} />,
    color: '#4285f4',
    features: ['Search Ads', 'Display Network', 'Video Ads', 'Budget Optimization']
  },
  'tiktok-ads': {
    title: 'TikTok Ads',
    icon: <TrendingUp size={48} />,
    color: '#ee1d52',
    features: ['Viral Content', 'Influencer Collab', 'In-feed Ads', 'Youth Engagement']
  }
};

const Ads = () => {
  const { subId } = useParams();
  const { language } = useLanguage();
  const currentSub = ADS_SUB[subId] || ADS_SUB['facebook-ads'];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subId]);

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.categoryLabel} style={{ color: currentSub.color }}>HIGH ROI ADVERTISING</span>
          <h1>{currentSub.title}</h1>
          <p>
            {language === 'vi' 
              ? 'Tăng tốc doanh số với các chiến dịch quảng cáo đa nền tảng tối ưu nhất.'
              : 'Accelerate your sales with the most optimized multi-platform advertising campaigns.'}
          </p>
          <div className={styles.iconBox} style={{ background: currentSub.color + '20', color: currentSub.color }}>
            {currentSub.icon}
          </div>
        </div>
      </section>

      <nav className={styles.subTabs}>
        {Object.entries(ADS_SUB).map(([id, data]) => (
          <Link key={id} to={`/services/ads/${id}`} className={`${styles.tab} ${subId === id ? styles.activeTab : ''}`}
            style={subId === id ? { borderColor: data.color, color: data.color } : {}}>
            {data.title}
          </Link>
        ))}
      </nav>

      <section className={styles.contentSection}>
        <div className={`container ${styles.contentGrid}`}>
          <div className={styles.textContent}>
            <h2>Maximum Advertising Impact</h2>
            <div className={styles.featureGrid}>
              {currentSub.features.map((f, i) => (
                <div key={i} className={styles.featureItem}>
                  <CheckCircle2 color={currentSub.color} />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <button className={styles.cta} style={{ background: currentSub.color }}>
              Start Campaign <ArrowRight size={20} />
            </button>
          </div>
          
          <div className={styles.visualContent}>
            <div className={styles.mockupFrame} style={{ borderColor: currentSub.color }}>
              <div className={styles.mockupHeader}>
                <div className={styles.dots}><span></span><span></span><span></span></div>
              </div>
              <div className={styles.mockupBody}>
                <div className={styles.skeletonTitle} style={{ background: currentSub.color, opacity: 0.3 }}></div>
                <div className={styles.skeletonPara} style={{ height: '80px' }}></div>
                <div className={styles.skeletonPara}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ads;
