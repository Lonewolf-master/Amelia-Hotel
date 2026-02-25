import { render, screen, fireEvent } from '@testing-library/react'
import LocationSection from '../../features/location/LocationSection'

describe('LocationSection Component', () => {
  it('renders the find location button', () => {
    render(<LocationSection />)
    expect(screen.getByText(/Find Our Location/i)).toBeInTheDocument()
  })

  it('shows the map container after clicking the button', async () => {
    render(<LocationSection />)
    const button = screen.getByText(/Find Our Location/i)
    fireEvent.click(button)
    // Map container should be visible
    expect(screen.getByTestId('map-container')).toBeInTheDocument()
  })
})
