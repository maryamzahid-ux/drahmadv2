import { useLang } from '../LangContext'
import styles from './TopBanner.module.css'

export default function TopBanner() {
 const { t } = useLang()
 return (
 <div className={styles.banner}>
 <p>
 <strong className={styles.name}>{t('banner_group')}</strong>
 <span className={styles.sep}>|</span>
 {t('banner_sub')}
 <span className={styles.sep}>|</span>
 {t('banner_location')}
 <span className={styles.sep}>|</span>
 <span className={styles.arabic}>{t('banner_arabic')}</span>
 </p>
 </div>
 )
}
