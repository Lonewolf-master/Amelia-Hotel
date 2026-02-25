import { render, screen } from '@testing-library/react'
import { App } from '../App'

describe('App Component', () => {
  it('renders the luxury title', () => {
    render(<App />)
    expect(screen.getAllByText(/Apart Hotel Amelia/i)[0]).toBeInTheDocument()
  })
})
