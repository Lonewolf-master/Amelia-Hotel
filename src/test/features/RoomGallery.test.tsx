import { render, screen } from '@testing-library/react'
import RoomGallery from '../../features/rooms/RoomGallery'

describe('RoomGallery Component', () => {
  it('renders the gallery section title', () => {
    render(<RoomGallery />)
    expect(screen.getByText(/Our/i)).toBeInTheDocument()
    expect(screen.getByText(/Rooms/i)).toBeInTheDocument()
  })

  it('renders multiple room cards', () => {
    render(<RoomGallery />)
    const roomCards = screen.getAllByRole('article')
    expect(roomCards.length).toBeGreaterThan(0)
  })

  it('renders View Details buttons for each room', () => {
    render(<RoomGallery />)
    const detailButtons = screen.getAllByText(/View Details/i)
    expect(detailButtons.length).toBeGreaterThan(0)
  })
})
