import { render, screen } from '@testing-library/react'
import { Footer } from '../../components/layout/Footer'

describe('Footer Component', () => {
  it('renders the hotel name and copyright', () => {
    render(<Footer />)
    expect(screen.getAllByText(/Apart Hotel Amelia/i)[0]).toBeInTheDocument()
    expect(screen.getByText(/©/i)).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/Find Us/i)).toBeInTheDocument()
    expect(screen.getByText(/652422909/)).toBeInTheDocument()
    expect(screen.getByText(/chidaluwisdomorima@gmail.com/i)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    const instagramLink = screen.getByRole('link', { name: /instagram/i })
    const facebookLink = screen.getByRole('link', { name: /facebook/i })
    expect(instagramLink).toHaveAttribute('href', expect.stringContaining('instagram.com'))
    expect(facebookLink).toHaveAttribute('href', expect.stringContaining('facebook.com'))
  })
})
