import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import FadeIn from '../components/FadeIn'
import SectionTag from '../components/SectionTag'
import styles from './ActivityDetail.module.css'

const PHOTOS = {
 hero: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1400&q=85',
 offset: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&q=80',
 cards: 'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&q=80',
 banner: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
 stationary:'https://images.unsplash.com/photo-1568057373073-69e81b6e59a0?w=600&q=80',
 packaging:'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80',
 books: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80',
}

const SERVICES = [
 { key:'offset', icon:'️', title:'Offset & Digital Printing',
 desc:'High-volume commercial offset printing and short-run digital printing with exceptional colour accuracy — for any quantity, any format.' },
 { key:'cards', icon:'', title:'Business Cards, Brochures & Flyers',
 desc:'Premium business cards, tri-fold brochures, A5/A4 flyers, and all small-format marketing materials printed to impress — same day options available.' },
 { key:'banner', icon:'🪟', title:'Large-Format Banners & Displays',
 desc:'Roll-up banners, vinyl banners, outdoor hoarding, exhibition displays, and building wraps — any size, full colour, weather-resistant.' },
 { key:'stationary', icon:'', title:'Corporate Stationery & Forms',
 desc:'Letterheads, envelopes, invoice forms, order pads, delivery notes, NCR books, and complete corporate stationery packages for businesses.' },
 { key:'packaging', icon:'', title:'Packaging & Label Printing',
 desc:'Product labels, carton printing, sticker rolls, custom packaging boxes, and brand-consistent packaging solutions for manufacturers and retailers.' },
 { key:'books', icon:'', title:'Books, Catalogues & Magazines',
 desc:'Perfect-bound books, saddle-stitch catalogues, product catalogues, annual reports, and full magazine production — from design to delivery.' },
]


export default function Printing() {
 const { t } = useLang()
 const [submitted, setSubmitted] = useState(false)
 const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', type:'', qty:'', notes:'' })
 const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
 const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

 return (
 <div className={styles.page}>

 <div className={styles.hero} style={{ backgroundImage: `url(${PHOTOS.hero})` }}>
 <div className={styles.heroOverlay} />
 <div className={styles.heroContent}>
 <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('act_4_label')}</SectionTag></FadeIn>
 <FadeIn direction="up" delay={80}><h1>{t('act_4_title')}</h1></FadeIn>
 <FadeIn direction="up" delay={160}><p>{t('act_4_desc')}</p></FadeIn>
 <FadeIn direction="up" delay={240}>
 <a href="#quote" className={styles.heroCta}>Request a Quote →</a>
 </FadeIn>
 </div>
 </div>

 <section className={styles.section}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.sectionHead}>
 <SectionTag variant="navy">Print Services</SectionTag>
 <h2>Printing Solutions</h2>
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

 {/* QUOTE FORM */}
 <section id="quote" className={styles.quoteSection}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.sectionHead}>
 <SectionTag variant="navy">Get a Price</SectionTag>
 <h2>Request a Print Quote</h2>
 <div className={styles.divider} />
 <p className={styles.photoIntro}>Fill in the details below and we'll send you a competitive quote within 24 hours.</p>
 </div>
 </FadeIn>
 <FadeIn direction="up" delay={100}>
 <div className={styles.quoteForm}>
 {submitted ? (
 <div className={styles.quoteSuccess}>
 <div style={{fontSize:'3rem', marginBottom:'1rem'}}></div>
 <h3>Quote Request Received!</h3>
 <p>Thank you — we'll send your print quote within 24 hours.</p>
 <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>Submit Another</button>
 </div>
 ) : (
 <form onSubmit={handleSubmit}>
 <div className={styles.qRow}>
 <div className={styles.qGroup}>
 <label>Your Name *</label>
 <input name="name" required value={form.name} onChange={handleChange} placeholder="Full name" />
 </div>
 <div className={styles.qGroup}>
 <label>Company</label>
 <input name="company" value={form.company} onChange={handleChange} placeholder="Company name" />
 </div>
 </div>
 <div className={styles.qRow}>
 <div className={styles.qGroup}>
 <label>Email *</label>
 <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder="your@email.com" />
 </div>
 <div className={styles.qGroup}>
 <label>Phone</label>
 <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+966 ..." />
 </div>
 </div>
 <div className={styles.qRow}>
 <div className={styles.qGroup}>
 <label>Print Type *</label>
 <select name="type" required value={form.type} onChange={handleChange}>
 <option value="">— Select type —</option>
 <option>Business Cards</option>
 <option>Brochures / Flyers</option>
 <option>Banners & Displays</option>
 <option>Corporate Stationery</option>
 <option>Packaging & Labels</option>
 <option>Books & Catalogues</option>
 <option>Other</option>
 </select>
 </div>
 <div className={styles.qGroup}>
 <label>Quantity</label>
 <input name="qty" value={form.qty} onChange={handleChange} placeholder="e.g. 500, 1000, 5000" />
 </div>
 </div>
 <div className={styles.qGroup}>
 <label>Additional Notes</label>
 <textarea name="notes" rows={3} value={form.notes} onChange={handleChange}
 placeholder="Size, paper type, finishing, artwork ready? Any special requirements..." />
 </div>
 <button type="submit" className={styles.quoteBtn}>Submit Quote Request</button>
 </form>
 )}
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
