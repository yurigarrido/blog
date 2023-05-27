// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import {  render, screen, fireEvent  } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Post, PostType } from '../components/Post'
import { post } from './mocks/post.mock'

describe('Post', () => {
  test('O nome do autor está renderizando', () => {
    const {debug} =  render(<Post post={post as unknown as PostType} />)
    debug()
    expect(screen.getByText('Yuri Garrido')).toBeInTheDocument()
  })
  test('O cargo do autor está renderizando', () => {
    render(<Post post={post as unknown as PostType}/>)
    expect(screen.getByText('Front end Developer')).toBeInTheDocument()
  })
  test('A imagem do autor está renderizando', () => {
    render(<Post post={post as unknown as PostType}/>)
    expect(screen.getByTestId('postAuthorImage')).toHaveAttribute('src')
  })
  test('O tempo de publicação do post está renderizando', () => {
    render(<Post post={post as unknown as PostType}/>)
    expect(screen.getByText('há 23 dias')).toBeInTheDocument()
  })

  describe('Formulario', () => {
    test('O formulário de novo post está renderizando', () => {
      render(<Post post={post as unknown as PostType}/>)
      expect(screen.getByTestId('newComentForm')).toBeInTheDocument()
    })
    test('O input de novo post está renderizando', () => {
      render(<Post post={post as unknown as PostType}/>)
      expect(screen.getByPlaceholderText('Deixe um comentário')).toBeInTheDocument()
    })
    test('É possível digitar no input', () => {
      render(<Post post={post as unknown as PostType}/>)
      fireEvent.change(screen.getByPlaceholderText('Deixe um comentário'),  {
        target: {
          value: 'text',
        },
      })
      expect(screen.getByPlaceholderText('Deixe um comentário')).toHaveValue('text')
    })
    test('É possível adicionar um comentário', () => {
      render(<Post post={post as unknown as PostType}/>)
      fireEvent.change(screen.getByPlaceholderText('Deixe um comentário'),  {
        target: {
          value: 'text',
        },
      })
      fireEvent(screen.getByText('Publicar'), new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }))
      expect(screen.getAllByTestId('commentImage')).toHaveLength(2)
    })
  })

})
