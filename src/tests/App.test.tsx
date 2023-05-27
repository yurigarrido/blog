// import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom'
import {  render, screen  } from '@testing-library/react'
import { describe, expect, test } from 'vitest'
import App from '../App'

describe('App', () => {
  test('O App está renderizando', () => {
    render(<App />)
    expect(screen.getByText('Front-End Dev')).toBeInTheDocument()
  })
})
