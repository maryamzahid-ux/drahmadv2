import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import FadeIn from '../components/FadeIn'
import SectionTag from '../components/SectionTag'
import styles from './ActivityDetail.module.css'

const PHOTOS = {
  hero:     'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1400&q=85',
  brand:    'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80',
  campaign: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
  promo:    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  event:    'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80',
  digital:  'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
  corp:     'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80',
}

export default function Advertising() {
  const { t } = useLang()

  const services = [
    { key:'brand',    title: t('a_brand_title'),    desc: t('a_brand_desc') },
    { key:'campaign', title: t('a_campaign_title'), desc: t('a_campaign_desc') },
    { key:'promo',    title: t('a_promo_title'),    desc: t('a_promo_desc') },
    { key:'event',    title: t('a_event_title'),    desc: t('a_event_desc') },
    { key:'digital',  title: t('a_digital_title'),  desc: t('a_digital_desc') },
    { key:'corp',     title: t('a_corp_title'),     desc: t('a_corp_desc') },
  ]

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
              <SectionTag variant="green">{t('adv_section_tag')}</SectionTag>
              <h2>{t('adv_section_h2')}</h2>
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

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <FadeIn direction="up">
            <div className={styles.ctaBox}>
              <h2>{t('adv_cta_h2')}</h2>
              <p>{t('adv_cta_p')}</p>
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
