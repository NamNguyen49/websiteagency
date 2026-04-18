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
  Layout,
} from "lucide-react";
import styles from "./SEO.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
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

// Carousel Decoration Images
import bfBox from "../../../assets/images/bf_box.png";
import stepImg1 from "../../../assets/images/img_sec_4_step.png";
import stepImg2 from "../../../assets/images/img_sec_4_step2.png";

const SEO = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null);
  const [activeProcessIndex, setActiveProcessIndex] = useState(0);
  const [activeSol, setActiveSol] = useState(null);

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
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_laraj8c",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lto9tjp",
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "WXnj6WhHjtm1mQRLF",
      );
      setStatus("success");
      formRef.current.reset();
      recaptchaRef.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
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
                  {seoData.hero.btnPrimary}
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
                      left: {
                        x: "-110%",
                        scale: 0.75,
                        opacity: 0.9,
                        zIndex: 5,
                      },
                      right: {
                        x: "110%",
                        scale: 0.75,
                        opacity: 0.9,
                        zIndex: 5,
                      },
                    }}
                    transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {isActive && (
                      <img
                        src={bfBox}
                        className={styles.decorCube}
                        alt="decor"
                      />
                    )}

                    {!isActive && (
                      <div className={styles.cardIcon}>
                        {isPrevious ? (
                          <img
                            src={stepImg1}
                            alt="previous step illustration"
                          />
                        ) : (
                          <img src={stepImg2} alt="next step illustration" />
                        )}
                      </div>
                    )}
                    <div className={styles.cardBody}>
                      {isActive && (
                        <div className={styles.stepNum}>
                          {language === "vi"
                            ? "BƯỚC"
                            : language === "ja"
                              ? "ステップ"
                              : "STEP"}{" "}
                          {index + 1}
                        </div>
                      )}
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

      {/* Contact Section Form - Replicating LandingPage layout */}
      <section className={styles.serviceContactSection}>
        <div className="container">
          <div className={styles.contactFlex}>
            <div className={styles.contactTextSide}>
              <h2 className={styles.contactTitle}>
                {t.webDesignDetail.common.labels.contactTitle}
              </h2>
              <p className={styles.contactSubtitle}>
                {t.webDesignDetail.common.labels.contactSubtitle}
              </p>
            </div>

            <div className={styles.contactFormSide}>
              <form
                className={styles.serviceForm}
                ref={formRef}
                onSubmit={handleSubmit}
              >
                <div className={styles.formRow}>
                  <input
                    type="text"
                    name="user_name"
                    placeholder={t.webDesignDetail.common.labels.formName}
                    className={styles.glassInput}
                    required
                  />
                  <input
                    type="text"
                    name="user_phone"
                    placeholder={t.webDesignDetail.common.labels.formPhone}
                    className={styles.glassInput}
                    required
                  />
                  <input
                    type="email"
                    name="user_email"
                    placeholder={t.webDesignDetail.common.labels.formEmail}
                    className={styles.glassInput}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder={t.webDesignDetail.common.labels.formMessage}
                  className={styles.glassTextarea}
                  required
                ></textarea>

                <div className={styles.formBottom}>
                  <div className={styles.recaptchaContainer}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey="6LeCHKQsAAAAABBtITNVPh-xLl9NEs0YF2z-ZucS"
                      theme={theme === "dark" ? "dark" : "light"}
                      onChange={(val) => console.log("Captcha value:", val)}
                    />
                  </div>
                  {status === "success" && (
                    <p className={styles.successMsg}>
                      {t.webDesignDetail.common.labels.formSuccess}
                    </p>
                  )}
                  {status === "error" && (
                    <p className={styles.errorMsg}>
                      {t.webDesignDetail.common.labels.formError}
                    </p>
                  )}
                  <button
                    type="submit"
                    className={styles.formSubmitBtn}
                    disabled={isSending}
                  >
                    {isSending
                      ? t.webDesignDetail.common.labels.formSending
                      : t.webDesignDetail.common.labels.formBtn}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive SEO Solutions (Giải pháp SEO) */}
      <section className={styles.solutionsSection}>
        <div className="container">
          <div className={styles.solutionsHeader}>
            <h2
              className={styles.solutionsTitle}
              dangerouslySetInnerHTML={{
                __html:
                  seoData.solutionsSectionTitle ||
                  "HNT Solution - Cung cấp <span class='styles.stressText'>giải pháp SEO</span> hiệu quả",
              }}
            />
          </div>

          {/* Row 1 Grid */}
          <div className={styles.solutionsGrid}>
            {/* Box 0: Logo HNT Solution */}
            <div
              className={`${styles.solutionCard} ${styles.logoCard} ${activeSol === 0 ? styles.solActive : ""}`}
              onClick={() => setActiveSol(0)}
            >
              <div className={styles.logoGridContent}>
                <Globe size={48} className={styles.logoGhostIcon} />
                <span className={styles.brandName}>HNT Solution</span>
              </div>
            </div>

            {(seoData.solutionsSectionItems || [])
              .slice(0, 3)
              .map((sol, idx) => {
                const solId = idx + 1;
                const icons = [
                  <TrendingUp size={32} />,
                  <BarChart3 size={32} />,
                  <Monitor size={32} />,
                ];
                return (
                  <div
                    key={solId}
                    className={`${styles.solutionCard} ${activeSol === solId ? styles.solActive : ""}`}
                    onClick={() => setActiveSol(solId)}
                  >
                    <div className={styles.solIconWrapper}>{icons[idx]}</div>
                    <h4 className={styles.solCardTitle}>{sol.title}</h4>
                  </div>
                );
              })}
          </div>

          {/* Detail Box for Row 1 (Visible if 1, 2, 3 selected) */}
          {activeSol !== null && activeSol >= 1 && activeSol <= 3 && (
            <motion.div
              className={styles.solDetailSection}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.solDetailCard}>
                <div className={styles.solDetailVisual}>
                  <img src={dichVuSeo} alt="Illustration" />
                </div>
                <div className={styles.solDetailContent}>
                  <div className={styles.solDetailIcon}>
                    {
                      [
                        null,
                        <TrendingUp size={40} />,
                        <BarChart3 size={40} />,
                        <Monitor size={40} />,
                      ][activeSol]
                    }
                  </div>
                  <h3>{seoData.solutionsSectionItems[activeSol - 1]?.title}</h3>
                  <p>{seoData.solutionsSectionItems[activeSol - 1]?.desc}</p>
                </div>
              </div>
            </motion.div>
          )}

          {/* Row 2 Grid */}
          <div className={`${styles.solutionsGrid} ${styles.marginTopGrid}`}>
            {(seoData.solutionsSectionItems || [])
              .slice(3, 7)
              .map((sol, idx) => {
                const solId = idx + 4;
                const icons = [
                  <Search size={32} />,
                  <Zap size={32} />,
                  <ShieldCheck size={32} />,
                  <CheckCircle2 size={32} />,
                ];
                return (
                  <div
                    key={solId}
                    className={`${styles.solutionCard} ${activeSol === solId ? styles.solActive : ""}`}
                    onClick={() => setActiveSol(solId)}
                  >
                    <div className={styles.solIconWrapper}>{icons[idx]}</div>
                    <h4 className={styles.solCardTitle}>{sol.title}</h4>
                  </div>
                );
              })}
          </div>

          {/* Detail Box for Row 2 (Visible if 4, 5, 6, 7 selected) */}
          {activeSol !== null && activeSol >= 4 && (
            <motion.div
              className={styles.solDetailSection}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.solDetailCard}>
                <div className={styles.solDetailVisual}>
                  <img src={dichVuSeo} alt="Illustration" />
                </div>
                <div className={styles.solDetailContent}>
                  <div className={styles.solDetailIcon}>
                    {
                      [
                        null,
                        null,
                        null,
                        null,
                        <Search size={40} />,
                        <Zap size={40} />,
                        <ShieldCheck size={40} />,
                        <CheckCircle2 size={40} />,
                      ][activeSol]
                    }
                  </div>
                  <h3>{seoData.solutionsSectionItems[activeSol - 1]?.title}</h3>
                  <p>{seoData.solutionsSectionItems[activeSol - 1]?.desc}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default SEO;
