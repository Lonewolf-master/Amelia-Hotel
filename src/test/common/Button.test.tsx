import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../../components/common/Button'

describe('Button Component', () => {
  it('renders with children', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText(/Click Me/i)).toBeInTheDocument()
  })

  it('handles click events', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)
    fireEvent.click(screen.getByText(/Click Me/i))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies luxury styling by default', () => {
    render(<Button>Luxury</Button>)
    expect(screen.getByRole('button')).toHaveClass('luxury-button')
  })
})
