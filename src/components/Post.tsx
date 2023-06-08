/* eslint-disable import/no-duplicates */
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

export interface PostType {
  author: Author;
  publishedAt: Date;
  content: Content[];
  id: number;
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(['Post muito bacana!'])
  const [newCommentText, setNewCommentText] = useState('')

  const publishedDateFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  )
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório.')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(
      (comment) => comment !== commentToDelete
    )

    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length === 0

  return (
    <article className={styles.post} data-cy="postContainer">
      <header data-cy="postHeader">
        <div className={styles.author}>
          <Avatar
            src={post.author.avatarUrl}
            cy="postAvatar"
            data-testid="postAuthorImage"
          />
          <div className={styles.authorInfo}>
            <strong data-cy="postAuthorName">{post.author.name}</strong>
            <span data-cy="postAuthorRole">{post.author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={post.publishedAt.toISOString()}
          data-cy="postTimeOfPublished"
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line) => {
          if (line.type === 'paragraph') {
            return (
              <p data-cy="postContentWithotLink" key={line.content}>
                {line.content}
              </p>
            )
          }
          if (line.type === 'link') {
            return (
              <p data-cy="postContentWithLink" key={line.content}>
                <a href="#" data-cy="postContentLink">
                  {line.content}
                </a>
              </p>
            )
          }
        })}
      </div>

      <form
        onSubmit={handleCreateNewComment}
        data-testid="newComentForm"
        className={styles.commentForm}
        data-cy="postNewCommentForm"
      >
        <strong data-cy="postSendFeedbackMessage">deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newCommentText}
          onChange={handleNewCommentChange}
          required
          onInvalid={handleNewCommentInvalid}
          data-cy="postInputAddComent"
        />

        <footer>
          <button
            data-cy="postButtonSubmitNewComent"
            disabled={isNewCommentEmpty}
            type="submit"
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList} data-cy="postCommentsContainer">
        {comments.map((comment) => {
          return (
            <Comment
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>
    </article>
  )
}
