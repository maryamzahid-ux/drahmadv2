import { NavLink } from 'react-router-dom'
import { useLang } from '../LangContext'
import styles from './Footer.module.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img src="/logo-white.png" alt="Al Khabbaz Corporate Enterprise" className={styles.logoImg} />
            <p>{t('footer_desc')}</p>
          </div>
          <div className={styles.col}>
            <h5>{t('footer_quick')}</h5>
            <ul>
              <li><NavLink to="/">{t('nav_home')}</NavLink></li>
              <li><NavLink to="/about">{t('nav_about')}</NavLink></li>
              <li><NavLink to="/activities">{t('nav_activities')}</NavLink></li>
              <li><NavLink to="/why-us">{t('nav_why')}</NavLink></li>
              <li><NavLink to="/contact">{t('nav_contact')}</NavLink></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h5>{t('footer_activities')}</h5>
            <ul>
              <li><NavLink to="/activities">{t('act_1_title')}</NavLink></li>
              <li><NavLink to="/activities">{t('act_2_title')}</NavLink></li>
              <li><NavLink to="/activities">{t('act_3_title')}</NavLink></li>
              <li><NavLink to="/activities">{t('act_4_title')}</NavLink></li>
            </ul>
          </div>
          <div className={styles.col}>
            <h5>{t('footer_contact')}</h5>
            <ul>
              <li><a href="tel:+966505800546" dir="ltr">{t('contact_phone_1')}</a></li>
              <li><a href="tel:+966581592107" dir="ltr">{t('contact_phone_2')}</a></li>
              <li><a href={`mailto:${t('contact_email_1')}`} dir="ltr">{t('contact_email_1')}</a></li>
              <li><a href={`mailto:${t('contact_email_2')}`} dir="ltr">{t('contact_email_2')}</a></li>
              <li><a href="http://www.alkhabbaz.net" target="_blank" rel="noreferrer" dir="ltr">www.alkhabbaz.net</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{t('footer_copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
