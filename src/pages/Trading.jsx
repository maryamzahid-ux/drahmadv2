import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import FadeIn from '../components/FadeIn'
import SectionTag from '../components/SectionTag'
import styles from './ActivityDetail.module.css'

const PHOTOS = {
 hero: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=85',
 elec: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
 safety: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
 uniform:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
 laptop: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
 gifts: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80',
 supply: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
}

const PRODUCTS = [
 { key:'elec', icon:'', title:'Electrical & Electronics',
 desc:'Industrial electrical equipment, electronic devices, cables, switchgear, and communication hardware for commercial and industrial use.' },
 { key:'safety', icon:'', title:'Industrial Safety Equipment',
 desc:'PPE, hard hats, safety vests, fire protection gear, and safety signage for factories, construction sites, and oil & gas facilities.' },
 { key:'uniform', icon:'', title:'Readymade Uniforms & Workwear',
 desc:'Corporate uniforms, industrial workwear, T-shirts, reflective vests, and custom branded clothing for companies and institutions.' },
 { key:'laptop', icon:'', title:'Computers, Laptops & Accessories',
 desc:'Desktops, laptops, printers, peripherals, networking equipment, and photography & copy devices for offices and businesses.' },
 { key:'gifts', icon:'', title:'Gifts & Promotional Items',
 desc:'Corporate gifts, branded merchandise, promotional giveaways, and customised items for events and marketing campaigns.' },
 { key:'supply', icon:'', title:'General Office & Industrial Supplies',
 desc:'Complete supply solutions for offices, hospitals, factories, and government entities — from stationery to heavy industrial consumables.' },
]


export default function Trading() {
 const { t } = useLang()
 return (
 <div className={styles.page}>

 {/* HERO */}
 <div className={styles.hero} style={{ backgroundImage: `url(${PHOTOS.hero})` }}>
 <div className={styles.heroOverlay} />
 <div className={styles.heroContent}>
 <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('act_1_label')}</SectionTag></FadeIn>
 <FadeIn direction="up" delay={80}><h1>{t('act_1_title')}</h1></FadeIn>
 <FadeIn direction="up" delay={160}><p>{t('act_1_desc')}</p></FadeIn>
 <FadeIn direction="up" delay={240}>
 <Link to="/contact" className={styles.heroCta}>{t('nav_contact')} →</Link>
 </FadeIn>
 </div>
 </div>

 {/* PRODUCTS GRID */}
 <section className={styles.section}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.sectionHead}>
 <SectionTag variant="navy">Product Categories</SectionTag>
 <h2>What We Supply</h2>
 <div className={styles.divider} />
 </div>
 </FadeIn>
 <div className={styles.productGrid}>
 {PRODUCTS.map((p, i) => (
 <FadeIn key={p.key} direction="up" delay={i * 70}>
 <div className={styles.productCard}>
 <div className={styles.productImgWrap}>
 <img src={PHOTOS[p.key]} alt={p.title} className={styles.productImg}
 onError={e => e.target.style.display='none'} />
 <div className={styles.productOverlay} />
 <div className={styles.productEmoji}>{p.icon}</div>
 </div>
 <div className={styles.productBody}>
 <h3>{p.title}</h3>
 <p>{p.desc}</p>
 </div>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>

 {/* CTA */}
 <section className={styles.ctaSection}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.ctaBox}>
 <h2>Request a Trading Quote</h2>
 <p>Tell us what you need — we'll source it and get back to you promptly.</p>
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
