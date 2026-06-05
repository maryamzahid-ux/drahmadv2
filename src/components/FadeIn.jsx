import { useInView } from '../hooks/useInView'
import styles from './FadeIn.module.css'

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }) {
 const [ref, inView] = useInView()

 const dirClass = {
 up: styles.up,
 down: styles.down,
 left: styles.left,
 right: styles.right,
 none: styles.none,
 }[direction] || styles.up

 return (
 <div
 ref={ref}
 className={`${styles.base} ${dirClass} ${inView ? styles.visible : ''} ${className}`}
 style={{ transitionDelay: `${delay}ms` }}
 >
 {children}
 </div>
 )
}
