import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../LangContext'
import styles from './Navbar.module.css'

export default function Navbar() {
 const { lang, setLang, t } = useLang()
 const [menuOpen, setMenuOpen] = useState(false)
 const [scrolled, setScrolled] = useState(false)
 const location = useLocation()

 const links = [
 { to: '/', label: t('nav_home') },
 { to: '/about', label: t('nav_about') },
 { to: '/activities', label: t('nav_activities') },
 { to: '/why-us', label: t('nav_why') },
 ]

 useEffect(() => {
 const onScroll = () => setScrolled(window.scrollY > 20)
 window.addEventListener('scroll', onScroll)
 return () => window.removeEventListener('scroll', onScroll)
 }, [])

 useEffect(() => { setMenuOpen(false); window.scrollTo({ top: 0 }) }, [location])

 return (
 <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
 <div className={styles.inner}>
 <NavLink to="/" className={styles.logo}>
 <img src="/logo-white.svg" alt="Al Khabbaz Corporate Enterprise" className={styles.logoImg} />
 </NavLink>

 <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
 {links.map(({ to, label }) => (
 <li key={to}>
 <NavLink to={to} end={to === '/'}
 className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ''}`}>
 {label}
 </NavLink>
 </li>
 ))}
 <li>
 <NavLink to="/contact"
 className={({ isActive }) => `${styles.cta} ${isActive ? styles.ctaActive : ''}`}>
 {t('nav_contact')}
 </NavLink>
 </li>
 <li>
 <button className={styles.langBtn}
 onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
 title={lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية'}>
 {lang === 'en' ? 'عربي' : 'EN'}
 </button>
 </li>
 </ul>

 <div className={styles.mobileRight}>
 <button className={styles.langBtnMobile} onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}>
 {lang === 'en' ? 'عربي' : 'EN'}
 </button>
 <button className={styles.hamburger} onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
 <span className={`${styles.bar} ${menuOpen ? styles.bar1Open : ''}`} />
 <span className={`${styles.bar} ${menuOpen ? styles.bar2Open : ''}`} />
 <span className={`${styles.bar} ${menuOpen ? styles.bar3Open : ''}`} />
 </button>
 </div>
 </div>
 </nav>
 )
}
