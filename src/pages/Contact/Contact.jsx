import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import styles from "./Contact.module.css";

const Contact = () => {
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
    <div className={styles.contactPage}>
      <section className={styles.heroSection}>
        <div className="container">
          <h1 className={styles.title}>
            Let’s <span className="gradient-text">Connect</span>
          </h1>
          <p className={styles.subtitle}>
            Scale your digital presence with SVS Corp's industrial-grade
            engineering.
          </p>
        </div>
      </section>

      <section className="container">
        <div className={styles.contactGrid}>
          <div className={styles.infoCol} ref={infoRef}>
            <div className={styles.infoCard}>
              <h2 className={styles.cardTitle}>Station Details</h2>
              <div className={styles.methods}>
                <div className={styles.method}>
                  <div className={styles.iconBox}>
                    <Mail size={24} />
                  </div>
                  <div className={styles.methodText}>
                    <span>Protocol</span>
                    <p>hello@svscorp.tech</p>
                  </div>
                </div>
                <div className={styles.method}>
                  <div className={styles.iconBox}>
                    <Phone size={24} />
                  </div>
                  <div className={styles.methodText}>
                    <span>Hotline</span>
                    <p>+84 355 331 494</p>
                  </div>
                </div>
                <div className={styles.method}>
                  <div className={styles.iconBox}>
                    <MapPin size={24} />
                  </div>
                  <div className={styles.methodText}>
                    <span>Headquarters</span>
                    <p>Dist 1, Ho Chi Minh City, VN</p>
                  </div>
                </div>
                <div className={styles.method}>
                  <div className={styles.iconBox}>
                    <Clock size={24} />
                  </div>
                  <div className={styles.methodText}>
                    <span>Operational Hours</span>
                    <p>Mon - Fri, 09:00 - 18:00 (GMT+7)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.statusCard} glass-morphism`}>
              <MessageCircle size={32} className={styles.statusIcon} />
              <h3>Direct Consultation</h3>
              <p>
                Looking for an immediate solution? Talk to our chief architects
                today.
              </p>
              <button className="btn-primary">Book an Appointment</button>
            </div>
          </div>

          <div className={`${styles.formCol} glass-morphism`} ref={formRef}>
            <h2 className={styles.cardTitle}>Transmission Protocol</h2>
            <form className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input type="text" placeholder="Identity name" required />
                </div>
                <div className={styles.formGroup}>
                  <label>Email Address</label>
                  <input type="email" placeholder="Contact email" required />
                </div>
              </div>
              <div className={styles.formGroup}>
                <label>Industry / Sector</label>
                <select>
                  <option>Fintech</option>
                  <option>E-commerce</option>
                  <option>SaaS / Tech</option>
                  <option>Industrial / Logistics</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.formGroup}>
                <label>Operational Message</label>
                <textarea
                  rows="6"
                  placeholder="Project details or inquiry"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn-primary ${styles.submitBtn}`}
              >
                Send Transmission <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className={styles.mapSection}>
        <div className="container">
          <div className={`${styles.mapPlaceholder} glass-morphism`}>
            <div className={styles.mapPoint}></div>
            <p>Interactive Station Map Loading...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
