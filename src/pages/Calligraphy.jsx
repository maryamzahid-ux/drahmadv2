import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import FadeIn from '../components/FadeIn'
import SectionTag from '../components/SectionTag'
import styles from './ActivityDetail.module.css'

const PHOTOS = {
 hero: 'https://images.unsplash.com/photo-1579762593175-20226054cad0?w=1400&q=85',
 calli: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=600&q=80',
 signs: 'https://images.unsplash.com/photo-1598618589929-b1433d05cfc6?w=600&q=80',
 interior: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
 plaques: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=80',
 deco: 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80',
 monument: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
}

const SERVICES = [
 { key:'calli', icon:'️', title:'Arabic Calligraphy Artwork',
 desc:'Traditional and modern Arabic calligraphy for corporate use, gifts, framed artwork, wall installations, and cultural displays — handcrafted by skilled artisans.' },
 { key:'signs', icon:'🪧', title:'Corporate Signage & Wayfinding',
 desc:'Professional exterior and interior signage systems, directional signs, reception signs, door plaques, and complete wayfinding solutions for offices and facilities.' },
 { key:'interior', icon:'', title:'Interior Design Lettering',
 desc:'Bespoke wall lettering, inspirational quotes, company values displays, and decorative Arabic and English typography for corporate interiors and hospitality spaces.' },
 { key:'plaques', icon:'️', title:'Custom Name Plates & Plaques',
 desc:'Engraved and printed name plates, award plaques, commemorative boards, and recognition displays crafted to the highest professional standard.' },
 { key:'deco', icon:'', title:'Artistic & Decorative Scripts',
 desc:'Ornamental Arabic scripts, Islamic geometric art integration, decorative borders, and bespoke artistic commissions for hotels, mosques, and institutions.' },
 { key:'monument', icon:'️', title:'Monument & Building Signs',
 desc:'Large-scale exterior monument signs, building identification, entrance branding, and architectural lettering for commercial and government properties.' },
]


export default function Calligraphy() {
 const { t } = useLang()
 return (
 <div className={styles.page}>

 <div className={styles.hero} style={{ backgroundImage: `url(${PHOTOS.hero})` }}>
 <div className={styles.heroOverlay} />
 <div className={styles.heroContent}>
 <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('act_3_label')}</SectionTag></FadeIn>
 <FadeIn direction="up" delay={80}><h1>{t('act_3_title')}</h1></FadeIn>
 <FadeIn direction="up" delay={160}><p>{t('act_3_desc')}</p></FadeIn>
 <FadeIn direction="up" delay={240}>
 <Link to="/contact" className={styles.heroCta}>{t('nav_contact')} →</Link>
 </FadeIn>
 </div>
 </div>

 <section className={styles.section}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.sectionHead}>
 <SectionTag variant="red">Our Services</SectionTag>
 <h2>Calligraphy & Signs Services</h2>
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
 <h2>Commission Custom Calligraphy</h2>
 <p>Share your vision — our artists will bring it to life in Arabic or English.</p>
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
