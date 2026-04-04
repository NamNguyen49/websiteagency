import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTheme } from "../../../contexts/ThemeContext";
import {
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Target,
  BarChart3,
  Search,
  Monitor,
  PenTool,
  ShieldCheck,
  Zap,
  Globe,
  Users,
  Plus,
  Mail,
  Phone,
  Layout,
} from "lucide-react";
import styles from "./SEO.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import dichVuSeo from "../../../assets/images/dich-vu-seo.png";
import border1 from "../../../assets/images/border1.png";
import border2 from "../../../assets/images/border2.png";
import border3 from "../../../assets/images/border3.png";

// New Service Type Images
import seoAuditImg from "../../../assets/images/dich-vu-seo-audit.png";
import seoBacklinkImg from "../../../assets/images/dich-vu-seo-backlink.png";
import seoTuKhoaImg from "../../../assets/images/dich-vu-seo-tu-khoa.png";
import seoNghienCuuImg from "../../../assets/images/dich-vu-nghien-cuu-tu-khoa.png";
import seoConsultImg from "../../../assets/images/dich-vu-tu-van-SEO.png";
import seoTongTheImg from "../../../assets/images/dich-vu-seo-tong-the.png";

const SEO = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);

  const seoData = t.seoDetail || {
    hero: {
      title: "SEO",
      highlight: "SERVICE",
      desc: "Loading...",
      btnPrimary: "Contact",
      btnSecondary: "Prices",
    },
    stats: [],
    benefits: [],
    packages: [],
    faqs: [],
    processTitle: "SEO Process",
    processSteps: [],
  };

  const processSteps = seoData.processSteps || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();
    if (!token) {
      alert(
        language === "vi"
          ? "Vui lòng xác nhận Captcha"
          : language === "ja"
            ? "Captchaを確認してください"
            : "Please confirm Captcha",
      );
      return;
    }
    setIsSending(true);
    setStatus(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      formRef.current.reset();
      recaptchaRef.current.reset();
    } catch (err) {
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={styles.container}>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <motion.div
              className={styles.heroText}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h1>
                {seoData.hero.title} <br />
                <span className={styles.highlightText}>
                  {seoData.hero.highlight}
                </span>
              </h1>
              <p className={styles.heroDesc}>{seoData.hero.desc}</p>
              <div className={styles.heroBtns}>
                <button className={styles.primaryBtn}>
                  {seoData.hero.btnPrimary} <ArrowRight size={20} />
                </button>
                <button className={styles.secondaryBtn}>
                  {seoData.hero.btnSecondary}
                </button>
              </div>
            </motion.div>
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className={styles.mainImgWrapper}>
                <img
                  src={dichVuSeo}
                  alt="Dịch vụ SEO"
                  className={styles.mainImg}
                />
                <motion.img
                  src={border2}
                  className={styles.floatIcon1}
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={border3}
                  className={styles.floatIcon2}
                  animate={{ y: [0, 25, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.img
                  src={border1}
                  className={styles.floatIcon3}
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. What is SEO Overview */}
      {seoData.intro && (
        <section className={styles.introOverview}>
          <div className="container">
            <div className={styles.overviewContent}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {seoData.intro.title}
              </motion.h2>
              <motion.h4
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {seoData.intro.subtitle}
              </motion.h4>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {seoData.intro.desc}
              </motion.p>

              {/* Floating Cubes Background */}
              <div className={styles.overviewShapes}>
                <motion.div
                  className={styles.shape1}
                  animate={{ y: [0, -30, 0], rotate: [0, 45, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />
                <motion.div
                  className={styles.shape2}
                  animate={{ y: [0, 40, 0], rotate: [0, -45, 0] }}
                  transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                  className={styles.shape3}
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </div>
          </div>
          <div className={styles.waveDivider}>
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                fill="#0f172a"
              ></path>
            </svg>
          </div>
        </section>
      )}

      {/* 3. Service Types Section */}
      {seoData.serviceTypes && (
        <section className={styles.serviceTypesSection}>
          <div className="container">
            <div className={styles.serviceIntro}>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                {seoData.serviceTypes.title}
              </motion.h2>
              <motion.h5
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                {seoData.serviceTypes.subtitle}
              </motion.h5>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                {seoData.serviceTypes.desc}
              </motion.p>
            </div>
          </div>

          <div className={styles.serviceZigzag}>
            {(() => {
              const groups = [];
              let currentGroup = null;

              seoData.serviceTypes.items.forEach((item, index) => {
                const isThemed = !!item.darkTheme;
                if (!currentGroup || currentGroup.isThemed !== isThemed) {
                  currentGroup = { isThemed, items: [], startIndex: index };
                  groups.push(currentGroup);
                }
                currentGroup.items.push({ ...item, actualIndex: index });
              });

              return groups.map((group, groupIdx) => (
                <div
                  key={groupIdx}
                  className={
                    group.isThemed ? styles.darkBgGroup : styles.lightBgGroup
                  }
                >
                  {group.isThemed && (
                    <div className={styles.groupWaveTop}>
                      <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                          fill="var(--bg-primary)"
                        ></path>
                      </svg>
                    </div>
                  )}

                  {group.items.map((item) => (
                    <div key={item.id} className={styles.zigzagRow}>
                      <div
                        className={`${styles.zigzagInner} container ${item.actualIndex % 2 !== 0 ? styles.rowReverse : ""}`}
                      >
                        <motion.div
                          className={styles.zigzagImg}
                          initial={{
                            opacity: 0,
                            x: item.actualIndex % 2 === 0 ? -50 : 50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <img
                            src={
                              item.actualIndex === 0
                                ? seoAuditImg
                                : item.actualIndex === 1
                                  ? seoTuKhoaImg
                                  : item.actualIndex === 2
                                    ? seoBacklinkImg
                                    : item.actualIndex === 3
                                      ? seoNghienCuuImg
                                      : item.actualIndex === 4
                                        ? seoConsultImg
                                        : item.actualIndex === 5
                                          ? seoTongTheImg
                                          : seoConsultImg
                            }
                            alt={item.title}
                          />
                        </motion.div>
                        <motion.div
                          className={styles.zigzagText}
                          initial={{
                            opacity: 0,
                            x: item.actualIndex % 2 === 0 ? 50 : -50,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                        >
                          <h3
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />
                          <p>{item.content}</p>
                        </motion.div>
                      </div>
                    </div>
                  ))}

                  {group.isThemed && (
                    <div className={styles.groupWaveBottom}>
                      <svg
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                          fill="var(--bg-primary)"
                        ></path>
                      </svg>
                    </div>
                  )}
                </div>
              ));
            })()}
          </div>
        </section>
      )}

      {/* 4. New Pricing Section */}
      <section className={styles.pricingSection}>
        <div className="container">
          <div className={styles.priceHeader}>
            <h2 dangerouslySetInnerHTML={{ __html: seoData.packagesTitle }} />
          </div>
          <div className={styles.priceGrid}>
            {(seoData.packages || []).map((pkg, i) => (
              <motion.div
                key={i}
                className={`${styles.priceCard} ${i === 1 ? styles.priceCardPopular : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {i === 1 && <div className={styles.popularBadge}>Phổ biến</div>}
                <div className={styles.cardTop}>
                  <h4>{pkg.name}</h4>
                  <div className={styles.pricePill}>{pkg.price}</div>
                </div>

                <ul className={styles.featureList}>
                  {pkg.features.map((f, idx) => (
                    <li key={idx}>
                      <span className={styles.bullet}>•</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={i === 1 ? styles.ctaBtnPopular : styles.ctaBtn}
                >
                  {pkg.btnText}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Process Section (Quy trình) */}
      <section className={styles.processSection}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 dangerouslySetInnerHTML={{ __html: seoData.processTitle }} />
            <div className={styles.processTimeline}>
              <div className={styles.timelineLine}></div>
              {processSteps.map((_, i) => (
                <div
                  key={i}
                  className={`${styles.timelineDot} ${i === activeProcessIndex ? styles.activeDot : ""}`}
                  onClick={() => setActiveProcessIndex(i)}
                ></div>
              ))}
            </div>
          </div>

          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {processSteps.map((step, index) => {
                const isActive = index === activeProcessIndex;
                const isPrevious =
                  index ===
                  (activeProcessIndex - 1 + processSteps.length) %
                    processSteps.length;
                const isNext =
                  index === (activeProcessIndex + 1) % processSteps.length;

                // Only render active, previous, and next for focus, or all with different styles
                let position = "hidden";
                if (isActive) position = "center";
                else if (isPrevious) position = "left";
                else if (isNext) position = "right";

                if (position === "hidden") return null;

                return (
                  <motion.div
                    key={index}
                    className={`${styles.processCard} ${styles[position]}`}
                    initial={false}
                    animate={position}
                    variants={{
                      center: { x: "0%", scale: 1, opacity: 1, zIndex: 10 },
                      left: { x: "-70%", scale: 0.8, opacity: 0.5, zIndex: 5 },
                      right: { x: "70%", scale: 0.8, opacity: 0.5, zIndex: 5 },
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className={styles.cardIcon}>
                      <img src={step.icon} alt={step.title} />
                    </div>
                    <div className={styles.cardBody}>
                      <div className={styles.stepNum}>
                        {language === "vi"
                          ? "BƯỚC"
                          : language === "ja"
                            ? "ステップ"
                            : "STEP"}{" "}
                        {index + 1}
                      </div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      {isActive && (
                        <p className={styles.stepDesc}>
                          {step.desc.split("\n").map((line, lIdx) => (
                            <React.Fragment key={lIdx}>
                              {line}
                              <br />
                            </React.Fragment>
                          ))}
                        </p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={() =>
                setActiveProcessIndex(
                  (prev) =>
                    (prev - 1 + processSteps.length) % processSteps.length,
                )
              }
            >
              <ArrowRight size={24} style={{ transform: "rotate(180deg)" }} />
            </button>
            <button
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={() =>
                setActiveProcessIndex(
                  (prev) => (prev + 1) % processSteps.length,
                )
              }
            >
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SEO;
