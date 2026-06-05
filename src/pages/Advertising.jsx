import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import FadeIn from '../components/FadeIn'
import SectionTag from '../components/SectionTag'
import styles from './ActivityDetail.module.css'

const PHOTOS = {
 hero: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85',
 brand: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
 campaign: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
 promo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
 event: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
 digital: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
 corp: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
}

const SERVICES = [
 { key:'brand', icon:'', title:'Brand Design & Visual Identity',
 desc:'Logo design, colour palettes, typography, brand guidelines, and full visual identity packages that define how your business looks and feels.' },
 { key:'campaign', icon:'', title:'Advertising Campaign Creation',
 desc:'End-to-end campaign strategy, creative concept, copywriting in Arabic and English, production, and media placement across platforms.' },
 { key:'promo', icon:'️', title:'Promotional Material Design',
 desc:'Brochures, flyers, posters, roll-ups, and all marketing collateral — designed to convert and professionally printed on demand.' },
 { key:'event', icon:'', title:'Event Marketing & Signage',
 desc:'Event branding, stage backdrops, exhibition stands, pull-up banners, and full event visual packages for exhibitions and corporate events.' },
 { key:'digital', icon:'', title:'Digital & Print Media Production',
 desc:'Social media graphics, digital ads, email campaigns, and coordinated print-digital campaigns for maximum reach across channels.' },
 { key:'corp', icon:'', title:'Corporate Communications',
 desc:'Annual reports, company profiles, presentation decks, internal communications, and all branded corporate documents.' },
]


export default function Advertising() {
 const { t } = useLang()
 return (
 <div className={styles.page}>

 <div className={styles.hero} style={{ backgroundImage: `url(${PHOTOS.hero})` }}>
 <div className={styles.heroOverlay} />
 <div className={styles.heroContent}>
 <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('act_2_label')}</SectionTag></FadeIn>
 <FadeIn direction="up" delay={80}><h1>{t('act_2_title')}</h1></FadeIn>
 <FadeIn direction="up" delay={160}><p>{t('act_2_desc')}</p></FadeIn>
 <FadeIn direction="up" delay={240}>
 <Link to="/contact" className={styles.heroCta}>{t('nav_contact')} →</Link>
 </FadeIn>
 </div>
 </div>

 <section className={styles.section}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.sectionHead}>
 <SectionTag variant="green">Our Services</SectionTag>
 <h2>Advertising & Promotion Services</h2>
 <div className={styles.divider} />
 </div>
 </FadeIn>
 <div className={styles.productGrid}>
 {SERVICES.map((s, i) => (
 <FadeIn key={s.key} direction="up" delay={i * 70}>
 <div className={styles.productCard}>
 <div className={styles.productImgWrap}>
 <img src={PHOTOS[s.key]} alt={s.title} className={styles.productImg}
 onError={e => e.target.style.display='none'} />
 <div className={styles.productOverlay} />
 <div className={styles.productEmoji}>{s.icon}</div>
 </div>
 <div className={styles.productBody}>
 <h3>{s.title}</h3>
 <p>{s.desc}</p>
 </div>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>

 <section className={styles.ctaSection}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.ctaBox}>
 <h2>Start Your Advertising Campaign</h2>
 <p>Tell us about your brand and goals — we'll craft a strategy that gets results.</p>
 <Link to="/contact" className={styles.ctaBtn}>{t('nav_contact')} →</Link>
 </div>
 </FadeIn>
 </div>
 </section>

 <div className={styles.backRow}>
 <div className={styles.container}>
 <Link to="/activities" className={styles.backLink}>← {t('nav_activities')}</Link>
 </div>
 </div>

 </div>
 )
}
