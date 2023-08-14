import Link from 'next/link'
import styles from 'styles/logo.module.css'

const Logo = ({ boxOn = false }) => (
  <Link href='/' className={boxOn ? styles.box : styles.basic}>
    CUBE
  </Link>
)

export default Logo
