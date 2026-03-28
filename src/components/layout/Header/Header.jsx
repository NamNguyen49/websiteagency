import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import { useLanguage } from "../../../contexts/LanguageContext";
import styles from "./Header.module.css";

const LANGUAGES = [
  { code: "en", label: "EN", flag: "🇺🇸", full: "English" },
  { code: "vi", label: "VI", flag: "🇻🇳", full: "Tiếng Việt" },
  { code: "ja", label: "JA", flag: "🇯🇵", full: "日本語" },
  { code: "zh", label: "ZH", flag: "🇨🇳", full: "中文" },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const langRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: t.nav.services,  href: "/services" },
    { name: t.nav.portfolio, href: "/portfolio" },
    { name: t.nav.company,   href: "/about" },
    { name: t.nav.contact,   href: "/contact" },
  ];

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logoGroup}>
          <img
            src={theme === "dark" ? "/logo.dark.png" : "/logo.light.png"}
            alt="SVS Corp Logo"
            className={`${styles.logoImage} ${theme === "dark" ? styles.logoDark : styles.logoLight}`}
          />
        </Link>

        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileActive : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`${styles.navLink} ${location.pathname === link.href ? styles.active : ""}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          {}
          <div className={styles.langSwitcher} ref={langRef}>
            <button
              className={styles.langBtn}
              onClick={() => setIsLangOpen(!isLangOpen)}
              aria-label="Select language"
            >
              <span className={styles.langFlag}>{currentLang.flag}</span>
              <span className={styles.langLabel}>{currentLang.label}</span>
              <ChevronDown
                size={14}
                className={`${styles.langChevron} ${isLangOpen ? styles.langChevronOpen : ""}`}
              />
            </button>

            {isLangOpen && (
              <div className={`${styles.langDropdown} glass-morphism`}>
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    className={`${styles.langOption} ${language === lang.code ? styles.langOptionActive : ""}`}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsLangOpen(false);
                    }}
                  >
                    <span>{lang.flag}</span>
                    <span className={styles.langOptionFull}>{lang.full}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {}
          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/contact"
            className={`btn-primary ${styles.headerCta}`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {t.nav.cta} <ArrowUpRight size={16} />
          </Link>
        </div>

        <button
          className={styles.mobileToggle}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
