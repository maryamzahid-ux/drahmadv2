import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import FadeIn from '../components/FadeIn'
import SectionTag from '../components/SectionTag'
import styles from './ActivityDetail.module.css'

const PHOTOS = {
  hero:   'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=85',
  elec:   'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  safety: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
  uniform:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80',
  laptop: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&q=80',
  gifts:  'https://images.unsplash.com/photo-1607344645866-009c320b63e0?w=600&q=80',
  supply: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
}

export default function Trading() {
  const { t } = useLang()

  const products = [
    { key:'elec',    title: t('t_elec_title'),    desc: t('t_elec_desc') },
    { key:'safety',  title: t('t_safety_title'),  desc: t('t_safety_desc') },
    { key:'uniform', title: t('t_uniform_title'), desc: t('t_uniform_desc') },
    { key:'laptop',  title: t('t_laptop_title'),  desc: t('t_laptop_desc') },
    { key:'gifts',   title: t('t_gifts_title'),   desc: t('t_gifts_desc') },
    { key:'supply',  title: t('t_supply_title'),  desc: t('t_supply_desc') },
  ]

  return (
    <div className={styles.page}>
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

      <section className={styles.section}>
        <div className={styles.container}>
          <FadeIn direction="up">
            <div className={styles.sectionHead}>
              <SectionTag variant="navy">{t('trading_section_tag')}</SectionTag>
              <h2>{t('trading_section_h2')}</h2>
              <div className={styles.divider} />
            </div>
          </FadeIn>
          <div className={styles.productGrid}>
            {products.map((p, i) => (
              <FadeIn key={p.key} direction="up" delay={i * 70}>
                <div className={styles.productCard}>
                  <div className={styles.productImgWrap}>
                    <img src={PHOTOS[p.key]} alt={p.title} className={styles.productImg}
                      onError={e => e.target.style.display='none'} />
                    <div className={styles.productOverlay} />
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

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <FadeIn direction="up">
            <div className={styles.ctaBox}>
              <h2>{t('trading_cta_h2')}</h2>
              <p>{t('trading_cta_p')}</p>
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
