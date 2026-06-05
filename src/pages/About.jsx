import { useLang } from '../LangContext'
import SectionTag from '../components/SectionTag'
import FadeIn from '../components/FadeIn'
import styles from './About.module.css'

export default function About() {
 const { t } = useLang()
 const pillars = [t('pillar_1'), t('pillar_2'), t('pillar_3'), t('pillar_4')]
 const entities = [
 { name:t('entity_1_name'), url:'www.alkhabbaz.net', desc:t('entity_1_desc'), color:'navy' },
 { name:t('entity_2_name'), url:'www.hadakah.com', desc:t('entity_2_desc'), color:'green' },
 { name:t('entity_3_name'), url:'www.hadakah-hpc.com.sa', desc:t('entity_3_desc'), color:'red' },
 { name:t('entity_4_name'), url:'www.alkhabbaz.sa', desc:t('entity_4_desc'), color:'navy' },
 ]
 return (
 <div className={styles.page}>
 <div className={styles.pageHeader}>
 <div className={styles.container}>
 <FadeIn direction="down"><SectionTag variant="goldOnDark">{t('page_about_tag')}</SectionTag></FadeIn>
 <FadeIn direction="up" delay={80}><h1>{t('page_about_title')}</h1></FadeIn>
 <FadeIn direction="up" delay={160}><p>{t('page_about_desc')}</p></FadeIn>
 </div>
 </div>

 <section className={styles.section}>
 <div className={styles.container}>
 <div className={styles.grid}>
 <FadeIn direction="left">
 <div className={styles.visual}>
 <div className={styles.visualMain}>
 <div className={styles.arabicText}>حداقة</div>
 <p className={styles.visualSub}>Est. Al-Khobar, Saudi Arabia</p>
 <div className={styles.visualBadges}>
 <div className={styles.badge}><span className={styles.badgeNum}>4</span><span className={styles.badgeLbl}>{t('about_activities')}</span></div>
 <div className={`${styles.badge} ${styles.badgeGreen}`}><span className={styles.badgeNum}>KSA</span><span className={styles.badgeLbl}>Based</span></div>
 </div>
 </div>
 <div className={styles.yearBadge}>
 <span className={styles.yearNum}>20+</span>
 <span className={styles.yearLbl}>{t('about_years')}</span>
 </div>
 </div>
 </FadeIn>
 <FadeIn direction="right" delay={100}>
 <div className={styles.content}>
 <SectionTag variant="navy">{t('about_group_tag')}</SectionTag>
 <h2>{t('about_h2')}</h2>
 <div className={styles.divider} />
 <p>{t('about_p1')}</p>
 <p>{t('about_p2')}</p>
 <div className={styles.pillars}>
 {pillars.map((p,i) => (
 <FadeIn key={p} direction="up" delay={i*60}>
 <div className={styles.pillar}><div className={styles.pillarDot}/><span>{p}</span></div>
 </FadeIn>
 ))}
 </div>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>

 <section className={styles.mvSection}>
 <div className={styles.container}>
 <div className={styles.mvGrid}>
 <FadeIn direction="left">
 <div className={styles.mvCard}>
 
 <h3>{t('mission_title')}</h3>
 <p>{t('mission_text')}</p>
 </div>
 </FadeIn>
 <FadeIn direction="right" delay={100}>
 <div className={`${styles.mvCard} ${styles.mvCardGreen}`}>
 <div className={styles.mvIcon}>️</div>
 <h3>{t('vision_title')}</h3>
 <p>{t('vision_text')}</p>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>

 <section className={`${styles.section} ${styles.creamBg}`}>
 <div className={styles.container}>
 <FadeIn direction="up">
 <div className={styles.structureHeader}>
 <SectionTag variant="gold">{t('entities_tag')}</SectionTag>
 <h2 className={styles.h2Dark}>{t('entities_title')}</h2>
 <div className={styles.divider} />
 </div>
 </FadeIn>
 <div className={styles.entityGrid}>
 {entities.map((e,i) => (
 <FadeIn key={e.name} direction="up" delay={i*80}>
 <div className={`${styles.entityCard} ${styles[`entity_${e.color}`]}`}>
 <h4>{e.name}</h4>
 <a href={`http://${e.url}`} target="_blank" rel="noreferrer" className={styles.entityUrl}>{e.url}</a>
 <p>{e.desc}</p>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>
 </div>
 )
}
