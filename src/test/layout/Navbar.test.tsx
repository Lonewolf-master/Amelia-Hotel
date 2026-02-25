import { render, screen } from '@testing-library/react'
import { Navbar } from '../../components/layout/Navbar'

describe('Navbar Component', () => {
  it('renders the hotel name', () => {
    render(<Navbar />)
    expect(screen.getByText(/Amelia/i)).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Navbar />)
    expect(screen.getByText(/Rooms/i)).toBeInTheDocument()
    expect(screen.getByText(/Location/i)).toBeInTheDocument()
    expect(screen.getByText(/Contact/i)).toBeInTheDocument()
  })
})
