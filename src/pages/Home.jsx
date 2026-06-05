import { Link } from 'react-router-dom'
import { useLang } from '../LangContext'
import FadeIn from '../components/FadeIn'
import { useInView } from '../hooks/useInView'
import { useCounter } from '../hooks/useCounter'
import styles from './Home.module.css'

function StatCounter({ num, label, delay = 0 }) {
 const [ref, inView] = useInView()
 const isNum = !isNaN(parseInt(num))
 const count = useCounter(isNum ? parseInt(num) : 0, 2000, inView)
 const suffix = num.toString().replace(/[0-9]/g, '')
 return (
 <div ref={ref} className={styles.stat} style={{ transitionDelay: `${delay}ms` }}>
 <div className={styles.statNum}>{isNum ? `${count}${suffix}` : num}</div>
 <div className={styles.statLabel}>{label}</div>
 </div>
 )
}

export default function Home() {
 const { t } = useLang()

 const activities = [
 { num:'01', icon:'', title:t('act_1_title'), label:t('act_1_label'), route:'/trading',
 photo:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80',
 accent: 'var(--navy)' },
 { num:'02', icon:'', title:t('act_2_title'), label:t('act_2_label'), route:'/advertising',
 photo:'https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80',
 accent: 'var(--green-mid)' },
 { num:'03', icon:'️', title:t('act_3_title'), label:t('act_3_label'), route:'/calligraphy',
 photo:'https://images.unsplash.com/photo-1579762593175-20226054cad0?w=700&q=80',
 accent: 'var(--red-mid)' },
 { num:'04', icon:'️', title:t('act_4_title'), label:t('act_4_label'), route:'/printing',
 photo:'https://images.unsplash.com/photo-1562564055-71e051d33c19?w=700&q=80',
 accent: 'var(--navy-light)' },
 ]

 return (
 <div className={styles.page}>

 {/* ═══ HERO ═══ */}
 <section className={styles.hero}>
 <div className={styles.heroBg} />
 <div className={styles.heroNoise} />
 <div className={styles.heroInner}>
 <div className={styles.heroLeft}>
 <FadeIn direction="down" delay={0}>
 <div className={styles.heroEyebrow}>
 <span className={styles.heroDot} />
 {t('hero_tag')}
 </div>
 </FadeIn>
 <FadeIn direction="up" delay={100}>
 <h1 className={styles.heroTitle}>
 {t('hero_title_1')}<br />
 <span className={styles.heroAccent}>{t('hero_title_span')}</span>
 </h1>
 </FadeIn>
 <FadeIn direction="up" delay={200}>
 <p className={styles.heroDesc}>{t('hero_desc')}</p>
 </FadeIn>
 <FadeIn direction="up" delay={300}>
 <div className={styles.heroBtns}>
 <Link to="/activities" className={styles.btnGold}>{t('hero_btn_activities')}</Link>
 <Link to="/contact" className={styles.btnGhost}>{t('hero_btn_contact')}</Link>
 </div>
 </FadeIn>
 </div>

 {/* Right: stacked activity thumbnails */}
 <FadeIn direction="right" delay={150}>
 <div className={styles.heroRight}>
 <div className={styles.heroGrid}>
 {activities.map((a) => (
 <Link key={a.num} to={a.route} className={styles.heroCard}>
 <img src={a.photo} alt={a.title} className={styles.heroCardImg}
 onError={e => e.target.style.display='none'} />
 <div className={styles.heroCardOverlay} style={{ background: `linear-gradient(to top, ${a.accent}EE, ${a.accent}55)` }} />
 <div className={styles.heroCardBody}>
 <span className={styles.heroCardNum}>{a.num}</span>
 <h4 className={styles.heroCardTitle}>{a.title}</h4>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </FadeIn>
 </div>

 {/* Stats bar */}
 <div className={styles.heroStats}>
 <div className={styles.heroStatsInner}>
 <StatCounter num={t('hero_stat_1_num')} label={t('hero_stat_1_lbl')} delay={0} />
 <div className={styles.statDivider} />
 <StatCounter num={t('hero_stat_2_num')} label={t('hero_stat_2_lbl')} delay={150} />
 <div className={styles.statDivider} />
 <StatCounter num={t('hero_stat_3_num')} label={t('hero_stat_3_lbl')} delay={300} />
 <div className={styles.statDivider} />
 <div className={styles.stat}>
 <div className={styles.statNum}></div>
 <div className={styles.statLabel}>{t('strip_1_desc').split(',')[0]}</div>
 </div>
 </div>
 </div>
 </section>

 {/* ═══ WHO WE ARE ═══ */}
 <section className={styles.who}>
 <div className="container">
 <div className={styles.whoGrid}>
 <FadeIn direction="left">
 <div className={styles.whoText}>
 <span className={styles.eyebrow}>{t('about_group_tag')}</span>
 <h2 className={styles.whoTitle}>{t('about_h2')}</h2>
 <div className={styles.goldBar} />
 <p>{t('about_p1')}</p>
 <p style={{marginTop:'1rem'}}>{t('about_p2')}</p>
 <Link to="/about" className={styles.btnNavyOutline} style={{marginTop:'2rem', display:'inline-block'}}>{t('nav_about')} →</Link>
 </div>
 </FadeIn>
 <FadeIn direction="right" delay={100}>
 <div className={styles.whoCards}>
 {[
 { title:t('mission_title'), text:t('mission_text').slice(0,100)+'…' },
 { icon:'️', title:t('vision_title'), text:t('vision_text').slice(0,100)+'…' },
 { title:t('feat_1_title'), text:t('feat_1_desc').slice(0,100)+'…' },
 { title:t('feat_2_title'), text:t('feat_2_desc').slice(0,100)+'…' },
 ].map((c,i) => (
 <FadeIn key={c.title} direction="up" delay={i*60}>
 <div className={styles.whoCard}>
 
 <div>
 <h4 className={styles.whoCardTitle}>{c.title}</h4>
 <p className={styles.whoCardText}>{c.text}</p>
 </div>
 </div>
 </FadeIn>
 ))}
 </div>
 </FadeIn>
 </div>
 </div>
 </section>

 {/* ═══ ACTIVITIES ═══ */}
 <section className={styles.acts}>
 <div className="container">
 <FadeIn direction="up">
 <div className={styles.actHead}>
 <span className={styles.eyebrowLight}>{t('page_act_tag')}</span>
 <h2 className={styles.actTitle}>{t('page_act_title')}</h2>
 <div className={styles.goldBarCenter} />
 </div>
 </FadeIn>
 <div className={styles.actGrid}>
 {activities.map((a, i) => (
 <FadeIn key={a.num} direction="up" delay={i * 90}>
 <Link to={a.route} className={styles.actCard}>
 <div className={styles.actImgWrap}>
 <img src={a.photo} alt={a.title} className={styles.actImg}
 onError={e => e.target.style.display='none'} />
 <div className={styles.actImgOverlay} />
 <div className={styles.actNum}>{a.num}</div>
 </div>
 <div className={styles.actBody}>
 <span className={styles.actLabel}>{a.label}</span>
 <h3 className={styles.actCardTitle}>{a.title}</h3>
 <span className={styles.actArrow}>→</span>
 </div>
 </Link>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>

 {/* ═══ TRUST BAR ═══ */}
 <section className={styles.trust}>
 <div className="container">
 <div className={styles.trustGrid}>
 {[
 { icon:'',  text: t('strip_1_title') },
 { icon:'⭐', text: 'Vision 2030 Aligned' },
 { icon:'',  text: t('feat_6_title') },
 { icon:'',  text: t('feat_1_title') },
 { icon:'',  text: 'Arabic & English' },
 ].map((item,i) => (
 <FadeIn key={item.text} direction="none" delay={i*50}>
 <div className={styles.trustItem}>
 <span></span>
 <span>{item.text}</span>
 </div>
 </FadeIn>
 ))}
 </div>
 </div>
 </section>

 {/* ═══ CTA ═══ */}
 <section className={styles.cta}>
 <div className="container">
 <div className={styles.ctaInner}>
 <FadeIn direction="left">
 <div>
 <h2 className={styles.ctaTitle}>{t('cta_title')}</h2>
 <p className={styles.ctaDesc}>{t('cta_desc')}</p>
 </div>
 </FadeIn>
 <FadeIn direction="right" delay={100}>
 <div className={styles.ctaBtns}>
 <Link to="/contact" className={styles.btnGold}>{t('cta_enquiry')}</Link>
 <Link to="/about" className={styles.btnGhostDark}>{t('cta_learn')}</Link>
 </div>
 </FadeIn>
 </div>
 </div>
 </section>

 </div>
 )
}
