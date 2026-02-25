import { render, screen } from '@testing-library/react'
import { AmenitiesShowcase } from '../../features/amenities/AmenitiesShowcase'

describe('AmenitiesShowcase Component', () => {
  it('renders the main section heading', () => {
    render(<AmenitiesShowcase />)
    expect(screen.getAllByText(/Luxury/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Facilities/i)[0]).toBeInTheDocument()
  })

  it('renders all core amenities', () => {
    render(<AmenitiesShowcase />)
    expect(screen.getAllByText(/Rooftop Pool/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Fitness Centre/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Sauna & Wellness/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/Signature Dining/i)[0]).toBeInTheDocument()
  })
})
