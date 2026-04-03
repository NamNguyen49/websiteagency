import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { useTheme } from "../../contexts/ThemeContext";
import Background3D from "../../components/common/Background3D/Background3D";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "./Contact.module.css";

const Contact = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      infoRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.2 },
    ).fromTo(
      formRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 },
      "-=0.8",
    );
  }, []);

  return (
    <>
      <Background3D />
      <div className={styles.contactPage}>
        <section className={styles.heroSection}>
          <div className="container">
            <h1 className={styles.title}>
              {t.contact.title} <span className="gradient-text">{t.contact.highlight}</span>
            </h1>
            <p className={styles.subtitle}>
              {t.contact.subtitle}
            </p>
          </div>
        </section>

        <section className="container">
          <div className={styles.contactGrid}>
            <div className={styles.infoCol} ref={infoRef}>
              <div className={styles.infoCard}>
                <h2 className={styles.cardTitle}>{t.contact.station.title}</h2>
                <div className={styles.methods}>
                  <div className={styles.method}>
                    <div className={styles.iconBox}>
                      <Mail size={24} />
                    </div>
                    <div className={styles.methodText}>
                      <span>{t.contact.station.protocol}</span>
                      <p>hntsolution@gmail.com</p>
                    </div>
                  </div>
                  <div className={styles.method}>
                    <div className={styles.iconBox}>
                      <Phone size={24} />
                    </div>
                    <div className={styles.methodText}>
                      <span>{t.contact.station.hotline}</span>
                      <p>+84 355 331 494</p>
                    </div>
                  </div>
                  <div className={styles.method}>
                    <div className={styles.iconBox}>
                      <MapPin size={24} />
                    </div>
                    <div className={styles.methodText}>
                      <span>{t.contact.station.hq}</span>
                      <p>Dist 1, Ho Chi Minh City, VN</p>
                    </div>
                  </div>
                  <div className={styles.method}>
                    <div className={styles.iconBox}>
                      <Clock size={24} />
                    </div>
                    <div className={styles.methodText}>
                      <span>{t.contact.station.hours}</span>
                      <p>{t.contact.station.hoursVal}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${styles.statusCard} glass-morphism`}>
                <MessageCircle size={32} className={styles.statusIcon} />
                <h3>{t.contact.consult.title}</h3>
                <p>
                  {t.contact.consult.text}
                </p>
                <button className="btn-primary">{t.contact.consult.btn}</button>
              </div>
            </div>

            <div className={`${styles.formCol} glass-morphism`} ref={formRef}>
              <h2 className={styles.cardTitle}>{t.contact.form.title}</h2>
              <form className={styles.form}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>{t.contact.form.name}</label>
                    <input type="text" placeholder={t.contact.form.placeholderName} required />
                  </div>
                  <div className={styles.formGroup}>
                    <label>{t.contact.form.email}</label>
                    <input type="email" placeholder={t.contact.form.placeholderEmail} required />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label>{t.contact.form.industry}</label>
                  <select>
                    <option>Fintech</option>
                    <option>E-commerce</option>
                    <option>SaaS / Tech</option>
                    <option>Industrial / Logistics</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.formGroup}>
                  <label>{t.contact.form.message}</label>
                  <textarea
                    rows="6"
                    placeholder={t.contact.form.placeholderMsg}
                    required
                  ></textarea>
                </div>
                <div className={styles.recaptchaContainer}>
                  <ReCAPTCHA
                    sitekey="6LddGqQsAAAAAFBmT6kpclbGVNjsr6ohDOUeYTzx"
                    theme={theme === "dark" ? "dark" : "light"}
                  />
                </div>
                <button
                  type="submit"
                  className={`btn-primary ${styles.submitBtn}`}
                >
                  {t.contact.form.btn} <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className={styles.mapSection}>
          <div className="container">
            <div className={`${styles.mapPlaceholder} glass-morphism`}>
              <div className={styles.mapPoint}></div>
              <p>{t.contact.map}</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
