import styles from './SectionTag.module.css'

export default function SectionTag({ children, variant = 'gold' }) {
 return (
 <span className={`${styles.tag} ${styles[variant]}`}>
 {children}
 </span>
 )
}
