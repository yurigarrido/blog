import styles from './Header.module.css'

import IgniteLogo from '../assets/ignite-logo.svg'

export function Header() {
  return (
    <header data-testid="header" data-cy="header" className={styles.header}>
      <img src={IgniteLogo} alt="logotipo do ignite" data-cy="headerImg" />
    </header>
  )
}
