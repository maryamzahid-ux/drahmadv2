import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import SectionTag from '../components/SectionTag'
import FadeIn from '../components/FadeIn'
import styles from './Activities.module.css'

const ACTIVITY_PHOTOS = {
 trading: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
 advertising: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
 calligraphy: 'https://images.unsplash.com/photo-1579762593175-20226054cad0?w=800&q=80',
 printing: 'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=800&q=80',
}

const ACTIVITY_ROUTES = {
 trading: '/trading',
 advertising: '/advertising',
 calligraphy: '/calligraphy',
 printing: '/printing',
}

export default function Activities() {
 const { t } = useLang()

 const activities = [
 {
 num: '01', key: 'trading',
 label: t('act_1_label'), title: t('act_1_title'), icon: '',
 color: 'navy', photo: ACTIVITY_PHOTOS.trading,
 desc: t('act_1_desc'), items: t('act_1_items'), link: t('act_1_link'),
 },
 {
 num: '02', key: 'advertising',
 label: t('act_2_label'), title: t('act_2_title'), icon: '',
 color: 'green', photo: ACTIVITY_PHOTOS.advertising,
 desc: t('act_2_desc'), items: t('act_2_items'), link: t('act_2_link'),
 },
 {
 num: '03', key: 'calligraphy',
 label: t('act_3_label'), title: t('act_3_title'), icon: '️',
 color: 'red', photo: ACTIVITY_PHOTOS.calligraphy,
 desc: t('act_3_desc'), items: t('act_3_items'), link: t('act_3_link'),
 },
 {
 num: '04', key: 'printing',
 label: t('act_4_label'), title: t('act_4_title'), icon: '️',
 color: 'dark', photo: ACTIVITY_PHOTOS.printing,
 desc: t('act_4_desc'), items: t('act_4_items'), link: t('act_4_link'),
 },
 ]

 return (
 <div className={styles.page}>
 <div className={styles.pageHeader}>
 <div className={styles.container}>
 <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('page_act_tag')}</SectionTag></FadeIn>
 <FadeIn direction="up" delay={80}><h1>{t('page_act_title')}</h1></FadeIn>
 <FadeIn direction="up" delay={160}><p>{t('page_act_desc')}</p></FadeIn>
 </div>
 </div>

 <section className={styles.section}>
 <div className={styles.container}>
 <div className={styles.grid}>
 {activities.map((act, i) => (
 <FadeIn key={act.num} direction="up" delay={i * 80}>
 <div className={styles.card}>
 <div className={`${styles.cardImg} ${styles[`bg_${act.color}`]}`}>
 <img src={act.photo} alt={act.title} className={styles.photo}
 onError={e => { e.target.style.display = 'none' }} />
 <div className={styles.photoOverlay} />
 <span className={styles.cardNum}>{act.num}</span>
 </div>
 <div className={styles.cardBody}>
 <div className={styles.cardLabel}>{act.label}</div>
 <h3>{act.title}</h3>
 <p>{act.desc}</p>
 <ul className={styles.items}>
 {Array.isArray(act.items) && act.items.map(item => (
 <li key={item}>{item}</li>
 ))}
 </ul>
 <Link to={ACTIVITY_ROUTES[act.key]} className={styles.learnMore}>
 {act.link} →
 </Link>
 </div>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>
 </div>
 )
}
