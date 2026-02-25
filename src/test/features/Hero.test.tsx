import { render, screen } from '@testing-library/react'
import { Hero } from '../../features/hero/Hero'

describe('Hero Component', () => {
  it('renders the main headlines', () => {
    render(<Hero />)
    expect(screen.getByText(/Exquisite/i)).toBeInTheDocument()
    expect(screen.getByText(/Living/i)).toBeInTheDocument()
  })

  it('renders the call to action button', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover More/i)).toBeInTheDocument()
  })

  it('renders background media container', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('.hero-bg-container')).toBeInTheDocument()
  })
})
