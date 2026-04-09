import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useLanguage } from "../../../contexts/LanguageContext";
import { useTheme } from "../../../contexts/ThemeContext";
import {
  Search,
  CheckCircle2,
  ArrowRight,
  Zap,
  Monitor,
  Video,
  ShoppingCart,
  MapPin,
} from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import styles from "./GoogleAds.module.css";
import leadsImg from "../../../assets/images/Generating new leads-amico.png";
import partnerImg from "../../../assets/images/82627e61816d2945d37cc7af3e78022c.jpg";

const GoogleAds = () => {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const adsData = t.adsDetail["google-ads"];

  const formRef = useRef(null);
  const recaptchaRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = recaptchaRef.current.getValue();

    if (!token) {
      alert(
        language === "vi"
          ? "Vui lòng hoàn thành Captcha"
          : "Please complete the reCAPTCHA",
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

  if (!adsData || !adsData.hero) return null;

  const typeIcons = [
    <Search size={32} />,
    <Monitor size={32} />,
    <Video size={32} />,
    <ShoppingCart size={32} />,
    <MapPin size={32} />,
  ];

  return (
    <div>
      {/* 1. Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContainer}>
            <motion.div
              className={styles.heroContent}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className={styles.heroBadge}>{adsData.hero.badge}</span>
              <h1 dangerouslySetInnerHTML={{ __html: adsData.hero.title }}></h1>
              <p className={styles.heroDesc}>{adsData.hero.desc}</p>
              <div className={styles.heroActions}>
                <button
                  className="btn-primary"
                  onClick={() =>
                    document
                      .getElementById("google-contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {adsData.hero.btn} <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
            <motion.div
              className={styles.heroVisual}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <div className={styles.glowBackground}></div>
              <img
                src={leadsImg}
                alt="Google Ads"
                className={styles.mainImage}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Advertising Types Grid */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.typesGrid}>
            <div className={styles.typesTitleWrapper}>
              <div
                className={`${styles.typeIcon} ${styles.titleIcon}`}
                style={{ marginBottom: "16px" }}
              >
                <Zap size={32} />
              </div>
              <h2
                className={styles.sectionTitle}
                dangerouslySetInnerHTML={{ __html: adsData.types.title }}
                style={{ textAlign: "left", marginBottom: 0 }}
              ></h2>
            </div>
            {adsData.types.items.map((type, i) => (
              <motion.div
                key={i}
                className={styles.typeCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={styles.typeIcon}>
                  {typeIcons[i] || <Zap size={32} />}
                </div>
                <h3>{type.title}</h3>
                <p>{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Process Split Section */}
      <section className={`${styles.section} ${styles.processSectionBg}`}>
        <div className="container">
          <div className={styles.processSplit}>
            <div className={styles.processLeft}>
              <h2
                dangerouslySetInnerHTML={{ __html: adsData.process.title }}
              ></h2>
              <p>{adsData.process.subtitle}</p>
              <button
                className="btn-primary"
                onClick={() =>
                  document
                    .getElementById("google-contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                {adsData.process.btn} <ArrowRight size={20} />
              </button>
            </div>
            <div className={styles.processRight}>
              {adsData.process.steps.map((step, i) => (
                <motion.div
                  key={i}
                  className={styles.processStepItem}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.stepId}>{step.id}</div>
                  <div className={styles.stepContent}>
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Pricing Split Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.pricingSplit}>
            <div className={styles.pricingLeft}>
              <h2
                dangerouslySetInnerHTML={{ __html: adsData.pricing.title }}
              ></h2>
              <p className={styles.pricingDesc}>{adsData.pricing.desc}</p>
              <div className={styles.pricingFeatureList}>
                {adsData.pricing.features.map((feat, i) => (
                  <div key={i} className={styles.pricingFeature}>
                    <CheckCircle2 size={18} className={styles.checkIcon} />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <div className={styles.pricingLogo}>
                <img src={partnerImg} alt="Google Partner" />
              </div>
            </div>
            <div className={styles.pricingRight}>
              {adsData.pricing.tiers.map((tier, i) => (
                <motion.div
                  key={i}
                  className={styles.tierRow}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={styles.tierCircle}>{tier.label}</div>
                  <div className={styles.tierBudget}>{tier.budget}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Contact Section */}
      <section id="google-contact" className={styles.serviceContactSection}>
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
    </div>
  );
};

export default GoogleAds;
