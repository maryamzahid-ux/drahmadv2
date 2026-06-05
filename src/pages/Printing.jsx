import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import FadeIn from '../components/FadeIn'
import SectionTag from '../components/SectionTag'
import styles from './ActivityDetail.module.css'

const PHOTOS = {
  hero:      'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=1400&q=85',
  offset:    'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=600&q=80',
  cards:     'https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=600&q=80',
  banner:    'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80',
  stationary:'https://images.unsplash.com/photo-1568057373073-69e81b6e59a0?w=600&q=80',
  packaging: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80',
  books:     'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80',
}

export default function Printing() {
  const { t } = useLang()
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', type:'', qty:'', notes:'' })
  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

  const services = [
    { key:'offset',     title: t('p_offset_title'),     desc: t('p_offset_desc') },
    { key:'cards',      title: t('p_cards_title'),      desc: t('p_cards_desc') },
    { key:'banner',     title: t('p_banner_title'),     desc: t('p_banner_desc') },
    { key:'stationary', title: t('p_stationary_title'), desc: t('p_stationary_desc') },
    { key:'packaging',  title: t('p_packaging_title'),  desc: t('p_packaging_desc') },
    { key:'books',      title: t('p_books_title'),      desc: t('p_books_desc') },
  ]

  return (
    <div className={styles.page}>
      <div className={styles.hero} style={{ backgroundImage: `url(${PHOTOS.hero})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('act_4_label')}</SectionTag></FadeIn>
          <FadeIn direction="up" delay={80}><h1>{t('act_4_title')}</h1></FadeIn>
          <FadeIn direction="up" delay={160}><p>{t('act_4_desc')}</p></FadeIn>
          <FadeIn direction="up" delay={240}>
            <a href="#quote" className={styles.heroCta}>{t('print_request_btn')} →</a>
          </FadeIn>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <FadeIn direction="up">
            <div className={styles.sectionHead}>
              <SectionTag variant="navy">{t('print_section_tag')}</SectionTag>
              <h2>{t('print_section_h2')}</h2>
              <div className={styles.divider} />
            </div>
          </FadeIn>
          <div className={styles.productGrid}>
            {services.map((s, i) => (
              <FadeIn key={s.key} direction="up" delay={i * 70}>
                <div className={styles.productCard}>
                  <div className={styles.productImgWrap}>
                    <img src={PHOTOS[s.key]} alt={s.title} className={styles.productImg}
                      onError={e => e.target.style.display='none'} />
                    <div className={styles.productOverlay} />
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

      <section id="quote" className={styles.quoteSection}>
        <div className={styles.container}>
          <FadeIn direction="up">
            <div className={styles.sectionHead}>
              <SectionTag variant="navy">{t('print_quote_tag')}</SectionTag>
              <h2 style={{color:'var(--white)'}}>{t('print_quote_h2')}</h2>
              <div className={styles.divider} />
              <p style={{color:'rgba(255,255,255,0.65)'}}>{t('print_quote_p')}</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={100}>
            <div className={styles.quoteForm}>
              {submitted ? (
                <div className={styles.quoteSuccess}>
                  <h3>{t('print_success_h3')}</h3>
                  <p>{t('print_success_p')}</p>
                  <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>
                    {t('form_another')}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className={styles.qRow}>
                    <div className={styles.qGroup}>
                      <label>{t('form_name')}</label>
                      <input name="name" required value={form.name} onChange={handleChange} placeholder={t('form_name_ph')} />
                    </div>
                    <div className={styles.qGroup}>
                      <label>{t('form_company')}</label>
                      <input name="company" value={form.company} onChange={handleChange} placeholder={t('form_company_ph')} />
                    </div>
                  </div>
                  <div className={styles.qRow}>
                    <div className={styles.qGroup}>
                      <label>{t('form_email')}</label>
                      <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t('form_email_ph')} />
                    </div>
                    <div className={styles.qGroup}>
                      <label>{t('form_phone')}</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={t('form_phone_ph')} />
                    </div>
                  </div>
                  <div className={styles.qRow}>
                    <div className={styles.qGroup}>
                      <label>{t('print_type_lbl')}</label>
                      <select name="type" required value={form.type} onChange={handleChange}>
                        <option value="">{t('print_opt_default')}</option>
                        <option>{t('print_opt_1')}</option>
                        <option>{t('print_opt_2')}</option>
                        <option>{t('print_opt_3')}</option>
                        <option>{t('print_opt_4')}</option>
                        <option>{t('print_opt_5')}</option>
                        <option>{t('print_opt_6')}</option>
                        <option>{t('print_opt_7')}</option>
                      </select>
                    </div>
                    <div className={styles.qGroup}>
                      <label>{t('print_qty_lbl')}</label>
                      <input name="qty" value={form.qty} onChange={handleChange} placeholder={t('print_qty_ph')} />
                    </div>
                  </div>
                  <div className={styles.qGroup}>
                    <label>{t('print_notes_lbl')}</label>
                    <textarea name="notes" rows={3} value={form.notes} onChange={handleChange} placeholder={t('print_notes_ph')} />
                  </div>
                  <button type="submit" className={styles.quoteBtn}>{t('print_submit_btn')}</button>
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
