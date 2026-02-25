import { render, screen, fireEvent } from '@testing-library/react'
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
    expect(screen.getByText(/France/i)).toBeInTheDocument()
  })

  it('can navigate between testimonials', async () => {
    render(<TestimonialsSlider />)
    const nextButton = screen.getByRole('button', { name: /chevronright/i })
    
    // Initial state
    expect(screen.getByText(/Leyuga/i)).toBeInTheDocument()
    
    // Click next
    fireEvent.click(nextButton)
    
    // We wait for the animation/state change (mocking/simplifying for the test)
    // In this specific implementation, we check for the next name
    expect(await screen.findByText(/Theresa/i)).toBeInTheDocument()
  })
})
