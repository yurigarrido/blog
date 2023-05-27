import styles from './Header.module.css'

import IgniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header data-testid='header'  className={styles.header}>
      <img src={IgniteLogo} alt="logotipo do ignite" />
    </header>
  )
}
