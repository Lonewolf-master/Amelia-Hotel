import { render, screen } from '@testing-library/react'
import { TestimonialsSlider } from '../../features/testimonials/TestimonialsSlider'

describe('TestimonialsSlider Component', () => {
  it('renders the section title', () => {
    render(<TestimonialsSlider />)
    expect(screen.getByText(/Guest/i)).toBeInTheDocument()
    expect(screen.getByText(/Experiences/i)).toBeInTheDocument()
  })

  it('renders authentic guest reviews', () => {
    render(<TestimonialsSlider />)
    expect(screen.getByText(/Leyuga/i)).toBeInTheDocument()
    expect(screen.getByText(/Theresa/i)).toBeInTheDocument()
    expect(screen.getByText(/Tabuwe/i)).toBeInTheDocument()
  })

  it('displays scores and nationalities', () => {
    render(<TestimonialsSlider />)
    expect(screen.getAllByText(/10\/10/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/France/i)).toBeInTheDocument()
    expect(screen.getByText(/Ireland/i)).toBeInTheDocument()
  })
})
