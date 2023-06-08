import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  const cy = 'cardUser'

  return (
    <aside className={styles.sidebar} data-cy={`${cy}Container`}>
      <img
        className={styles.cover}
        data-cy={`${cy}Image`}
        src="https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
        alt="logo triangular"
      />
      <div className={styles.profile} data-cy={`${cy}UserInfo`}>
        <Avatar src="https://github.com/yurigarrido.png" />
        <strong data-cy={`${cy}Name`}>Yuri Garrido</strong>
        <span data-cy={`${cy}Role`}>Front-End Dev</span>
      </div>
      <footer>
        <a href="#" data-cy={`${cy}EditProfile`}>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
