import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment} data-cy="commentContainer">
      <Avatar
        data-testid="commentImage"
        cy="commentImage"
        hasBorder={false}
        src="https://github.com/LuisCarlosCruz.png"
        alt=""
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong data-cy="commentAuthor">Luis Carlos</strong>
              <time
                title="11 de maio as 08:13"
                dateTime="2022-05-11 08:13:30"
                data-cy="commentPublishedAtTime"
              >
                Cerca de 1h atrás
              </time>
            </div>
            <button
              data-cy="commentDeleteButton"
              onClick={handleDeleteComment}
              title="Deletar comentário"
              type="button"
            >
              <Trash size={24} />
            </button>
          </header>
          <p data-cy="commentContent">{content}</p>
        </div>

        <footer>
          <button
            data-cy="commentLikeButton"
            onClick={handleLikeComment}
            type="button"
          >
            <ThumbsUp />
            Aplaudir <span data-cy="commentLikesCount">{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
