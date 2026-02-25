import { render, screen } from '@testing-library/react'
import Footer from '../../components/layout/Footer'

describe('Footer Component', () => {
  it('renders the hotel name and copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/Apart Hotel Amelia/i)).toBeInTheDocument()
    expect(screen.getByText(/©/i)).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/Find Us/i)).toBeInTheDocument()
  })
})
