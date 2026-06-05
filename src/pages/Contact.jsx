import { useState } from 'react'
import { useLang } from '../LangContext'
import SectionTag from '../components/SectionTag'
import FadeIn from '../components/FadeIn'
import styles from './Contact.module.css'

export default function Contact() {
 const { t, lang } = useLang()
 const [submitted, setSubmitted] = useState(false)
 const [form, setForm] = useState({ name:'', company:'', email:'', phone:'', activity:'', message:'' })
 const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))
 const handleSubmit = e => { e.preventDefault(); setSubmitted(true) }

 return (
 <div className={styles.page}>
 <div className={styles.pageHeader}>
 <div className={styles.container}>
 <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('page_contact_tag')}</SectionTag></FadeIn>
 <FadeIn direction="up" delay={80}><h1>{t('page_contact_title')}</h1></FadeIn>
 <FadeIn direction="up" delay={160}><p>{t('page_contact_desc')}</p></FadeIn>
 </div>
 </div>

 <section className={styles.section}>
 <div className={styles.container}>
 <div className={styles.grid}>

 {/* ── INFO ── */}
 <FadeIn direction="left">
 <div className={styles.info}>

 <div className={styles.detail}>
 <div className={`${styles.detailIcon} ${styles.navy}`}></div>
 <div className={styles.detailText}>
 <h5>{t('contact_phone_label')}</h5>
 <a href="tel:+966505800546" dir="ltr">{t('contact_phone_1')}</a>
 <a href="tel:+966581592107" dir="ltr">{t('contact_phone_2')}</a>
 <a href="tel:+966559016710" dir="ltr">{t('contact_phone_3')}</a>
 </div>
 </div>

 <div className={styles.detail}>
 <div className={`${styles.detailIcon} ${styles.green}`}>️</div>
 <div className={styles.detailText}>
 <h5>{t('contact_email_label')}</h5>
 <a href={`mailto:${t('contact_email_1')}`} dir="ltr">{t('contact_email_1')}</a>
 <a href={`mailto:${t('contact_email_2')}`} dir="ltr">{t('contact_email_2')}</a>
 <a href={`mailto:${t('contact_email_3')}`} dir="ltr">{t('contact_email_3')}</a>
 </div>
 </div>

 <div className={styles.detail}>
 <div className={`${styles.detailIcon} ${styles.red}`}></div>
 <div className={styles.detailText}>
 <h5>{t('contact_web_label')}</h5>
 <a href="http://www.hadakah.com" target="_blank" rel="noreferrer" dir="ltr">www.hadakah.com</a>
 <a href="http://www.alkhabbaz.net" target="_blank" rel="noreferrer" dir="ltr">www.alkhabbaz.net</a>
 <a href="http://www.hadakah-hpc.com.sa" target="_blank" rel="noreferrer" dir="ltr">www.hadakah-hpc.com.sa</a>
 </div>
 </div>

 <div className={styles.addressBlock}>
 <h5>{t('contact_addr_title')}</h5>
 <p dir={lang === 'ar' ? 'rtl' : 'ltr'}>
 {t('contact_addr_code')}<br />
 {t('contact_addr_street')}<br />
 {t('contact_addr_district')}<br />
 {t('contact_addr_city')}<br />
 {t('contact_addr_country')}
 </p>
 </div>

 </div>
 </FadeIn>

 {/* ── FORM ── */}
 <FadeIn direction="right" delay={100}>
 <div className={styles.formWrap}>
 <h3>{t('form_title')}</h3>
 {submitted ? (
 <div className={styles.success}>
 <div className={styles.successIcon}></div>
 <h4>{t('form_success_title')}</h4>
 <p>{t('form_success_desc')}</p>
 <button className={styles.resetBtn} onClick={() => setSubmitted(false)}>{t('form_another')}</button>
 </div>
 ) : (
 <form onSubmit={handleSubmit}>
 <div className={styles.formRow}>
 <div className={styles.formGroup}>
 <label>{t('form_name')}</label>
 <input name="name" required value={form.name} onChange={handleChange} placeholder={t('form_name_ph')} />
 </div>
 <div className={styles.formGroup}>
 <label>{t('form_company')}</label>
 <input name="company" value={form.company} onChange={handleChange} placeholder={t('form_company_ph')} />
 </div>
 </div>
 <div className={styles.formRow}>
 <div className={styles.formGroup}>
 <label>{t('form_email')}</label>
 <input name="email" type="email" required value={form.email} onChange={handleChange} placeholder={t('form_email_ph')} />
 </div>
 <div className={styles.formGroup}>
 <label>{t('form_phone')}</label>
 <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder={t('form_phone_ph')} />
 </div>
 </div>
 <div className={styles.formGroup}>
 <label>{t('form_activity')}</label>
 <select name="activity" value={form.activity} onChange={handleChange}>
 <option value="">{t('form_act_default')}</option>
 <option>{t('form_act_1')}</option>
 <option>{t('form_act_2')}</option>
 <option>{t('form_act_3')}</option>
 <option>{t('form_act_4')}</option>
 <option>{t('form_act_5')}</option>
 </select>
 </div>
 <div className={styles.formGroup}>
 <label>{t('form_msg')}</label>
 <textarea name="message" required rows={4} value={form.message} onChange={handleChange} placeholder={t('form_msg_ph')} />
 </div>
 <button type="submit" className={styles.submitBtn}>{t('form_submit')}</button>
 <p className={styles.note}>{t('form_note')}</p>
 </form>
 )}
 </div>
 </FadeIn>

 </div>
 </div>
 </section>

 {/* ═══ GOOGLE MAPS ═══ */}
 <section className={styles.mapSection}>
 <FadeIn direction="up">
 <div className={styles.mapHeader}>
 <h3> {lang === 'ar' ? 'موقعنا على الخريطة' : 'Find Us on the Map'}</h3>
 <p>{lang === 'ar' ? 'الخبر، المنطقة الشرقية، المملكة العربية السعودية' : 'Al-Khobar, Eastern Province, Kingdom of Saudi Arabia'}</p>
 </div>
 </FadeIn>
 <FadeIn direction="up" delay={100}>
 <div className={styles.mapWrapper}>
 <iframe
 title="Hadakah Group Location — Al-Khobar"
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3575.9!2d50.2083!3d26.2172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49e5b5b5b5b5b5%3A0x0!2sAl+Awal+Street%2C+Al-Khobar+Ash+Shamaliya%2C+Al+Khobar+34429%2C+Saudi+Arabia!5e0!3m2!1sen!2ssa!4v1680000000000!5m2!1sen!2ssa&q=Al+Awal+Street+Al-Khobar+Shamaliya+Saudi+Arabia"
 width="100%"
 height="420"
 style={{ border: 0, display: 'block' }}
 allowFullScreen=""
 loading="lazy"
 referrerPolicy="no-referrer-when-downgrade"
 />
 <div className={styles.mapOverlayPin}>
 <div className={styles.mapPinCard}>
 <div className={styles.mapPinLogo}>H</div>
 <div>
 <strong>Hadakah Group</strong>
 <span>2729 Al Awal St, Al-Khobar</span>
 </div>
 </div>
 </div>
 </div>
 </FadeIn>
 </section>

 </div>
 )
}
