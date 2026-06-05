import { useLang } from '../LangContext'
import SectionTag from '../components/SectionTag'
import FadeIn from '../components/FadeIn'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import styles from './WhyUs.module.css'

function CounterStat({ num, label, delay }) {
 const [ref, inView] = useInView()
 const isNumeric = !isNaN(parseInt(num))
 const count = useCounter(isNumeric ? parseInt(num) : 0, 1600, inView)
 const suffix = num.toString().replace(/[0-9]/g,'')
 return (
 <div ref={ref} className={styles.statItem} style={{ transitionDelay:`${delay}ms` }}>
 <div className={styles.statNum}>{isNumeric ? `${count}${suffix}` : num}</div>
 <div className={styles.statLabel}>{label}</div>
 </div>
 )
}

export default function WhyUs() {
 const { t } = useLang()
 const features = [
 { title:t('feat_1_title'), desc:t('feat_1_desc') },
 { title:t('feat_2_title'), desc:t('feat_2_desc') },
 { title:t('feat_3_title'), desc:t('feat_3_desc') },
 { title:t('feat_4_title'), desc:t('feat_4_desc') },
 { title:t('feat_5_title'), desc:t('feat_5_desc') },
 { title:t('feat_6_title'), desc:t('feat_6_desc') },
 ]
 const stats = [
 { num:'4', label:t('hero_stat_1_lbl') },
 { num:'20+', label:t('hero_stat_2_lbl') },
 { num:'3', label:'Business Entities' },
 { num:'100', label:'% Committed' },
 ]
 const values = [
 { title:t('val_1_title'), desc:t('val_1_desc') },
 { title:t('val_2_title'), desc:t('val_2_desc') },
 { title:t('val_3_title'), desc:t('val_3_desc') },
 { title:t('val_4_title'), desc:t('val_4_desc') },
 ]
 return (
 <div className={styles.page}>
 <div className={styles.pageHeader}>
 <div className={styles.container}>
 <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('page_why_tag')}</SectionTag></FadeIn>
 <FadeIn direction="up" delay={80}><h1>{t('page_why_title')}</h1></FadeIn>
 <FadeIn direction="up" delay={160}><p>{t('page_why_desc')}</p></FadeIn>
 </div>
 </div>

 <section className={styles.section}>
 <div className={styles.container}>
 <div className={styles.grid}>
 {features.map((f,i) => (
 <FadeIn key={f.title} direction="up" delay={i*70}>
 <div className={styles.card}>
 
 <h4>{f.title}</h4>
 <p>{f.desc}</p>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>

 <section className={styles.statsSection}>
 <div className={styles.container}>
 <div className={styles.statsGrid}>
 {stats.map((s,i) => (
 <CounterStat key={s.label} num={s.num} label={s.label} delay={i*120} />
 ))}
 </div>
 </div>
 </section>

 <section className={styles.valuesSection}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.valuesHeader}>
 <SectionTag variant="green">{t('val_tag')}</SectionTag>
 <h2 className={styles.h2}>{t('val_title')}</h2>
 <div className={styles.divider} />
 </div>
 </FadeIn>
 <div className={styles.valuesGrid}>
 {values.map((v,i) => (
 <FadeIn key={v.title} direction="up" delay={i*80}>
 <div className={styles.valueCard}>
 <h4>{v.title}</h4>
 <p>{v.desc}</p>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>
 </div>
 )
}
