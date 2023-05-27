// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import {  render, screen  } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import { Header } from '../components/Header'

describe('Header', () => {
  test('O Header está renderizando', () => {
     render(<Header />)
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })
  test('O Logo está renderizando', () => {
    render(<Header />)
    expect(screen.getByAltText('logotipo do ignite')).toBeInTheDocument()
  })
})
