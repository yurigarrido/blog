import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="logo triangular"
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/yurigarrido.png" />
        <strong>Yuri Garrido</strong>
        <span>Front-End Dev</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
