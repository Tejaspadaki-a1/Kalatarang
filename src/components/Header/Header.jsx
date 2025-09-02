import React, { useState, useEffect, useRef } from 'react'; // 1. Import useEffect and useRef
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); // 2. Create a ref to attach to the menu

  // 3. Add the useEffect hook to handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    // Add the event listener when the component mounts
    document.addEventListener('mousedown', handleClickOutside);
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []); // The empty array means this effect runs only once

  const getNavLinkClass = ({ isActive }) =>
    isActive ? `${styles.headerLink} ${styles.active}` : styles.headerLink;

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <NavLink to="/">
          <img src="/images/logo1.jpg" alt="Kalatarang Logo" />
        </NavLink>
      </div>

      <div 
        className={styles.hamburger} 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyPress={(e) => e.key === 'Enter' && setMenuOpen(!menuOpen)}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>

      {/* 4. Attach the ref to your nav element */}
      <nav ref={menuRef} className={`${styles.headerNav} ${menuOpen ? styles.menuOpen : ''}`}>
        <NavLink to="/" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Home</NavLink>
        <NavLink to="/about" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>About The Artist</NavLink>
        <NavLink to="/workshops" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Workshops</NavLink>
        <NavLink to="/portfolio" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Portfolio</NavLink>
        <NavLink to="/contact" className={getNavLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Header;