import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight, Moon, Sun } from "lucide-react";
import { useTheme } from "../../../contexts/ThemeContext";
import styles from "./Header.module.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Company", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link to="/" className={styles.logoGroup}>
          <img
            src={theme === "dark" ? "/logo.dark.png" : "/logo.light.png"}
            alt="SVS Corp Logo"
            className={`${styles.logoImage} ${theme === "dark" ? styles.logoDark : styles.logoLight}`}
          />
        </Link>

        <div
          className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileActive : ""}`}
        >
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

          <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <Link
            to="/contact"
            className="btn-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk <ArrowUpRight size={16} />
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
