import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/yurigarrido.png',
      name: 'Yuri Garrido',
      role: 'Front end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio'
      },
      { type: 'link', content: 'jane.desing/doctorcare' }
    ],
    publishedAt: new Date('2023-05-03 20:30:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/LuisCarlosCruz.png',
      name: 'Luis Carlos',
      role: 'Desenvolvedor FullStack '
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifólio'
      },
      { type: 'link', content: 'jane.desing/doctorcare' }
    ],
    publishedAt: new Date('2023-05-01 20:30:00')
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />
          })}
        </main>
      </div>
    </div>
  )
}

export default App
