import { render, screen } from '@testing-library/react'
import { AmenitiesShowcase } from '../../features/amenities/AmenitiesShowcase'

describe('AmenitiesShowcase Component', () => {
  it('renders the main section heading', () => {
    render(<AmenitiesShowcase />)
    expect(screen.getByText(/Luxury/i)).toBeInTheDocument()
    expect(screen.getByText(/Facilities/i)).toBeInTheDocument()
  })

  it('renders all core amenities', () => {
    render(<AmenitiesShowcase />)
    expect(screen.getByText(/Rooftop Pool/i)).toBeInTheDocument()
    expect(screen.getByText(/Fitness Centre/i)).toBeInTheDocument()
    expect(screen.getByText(/Sauna & Wellness/i)).toBeInTheDocument()
    expect(screen.getByText(/Signature Dining/i)).toBeInTheDocument()
  })
})
