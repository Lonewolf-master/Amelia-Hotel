import { render, screen } from '../test-utils'
import { RoomGallery } from '../../features/rooms/RoomGallery'

describe('RoomGallery Component', () => {
  it('renders the gallery section title', () => {
    render(<RoomGallery />)
    expect(screen.getByRole('heading', { name: /Accommodation/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Our Signature Rooms/i })).toBeInTheDocument()
  })

  it('renders multiple room cards', () => {
    render(<RoomGallery />)
    const roomCards = screen.getAllByRole('article')
    expect(roomCards.length).toBeGreaterThan(0)
    expect(screen.getByLabelText(/Previous rooms/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Next rooms/i)).toBeInTheDocument()
  })

  it('renders authentic room categories and prices', () => {
    render(<RoomGallery />)
    expect(screen.getByText(/Deluxe King Room/i)).toBeInTheDocument()
    expect(screen.getAllByText(/XAF 80,000/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Superior Apartment with Balcony/i)).toBeInTheDocument()
    expect(screen.getByText(/XAF 200,000/i)).toBeInTheDocument()
  })

  it('renders room amenities tags', () => {
    render(<RoomGallery />)
    // Check for some specific amenities we added
    expect(screen.getAllByText(/Spa Bath/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Kitchenette/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Rooftop View/i).length).toBeGreaterThan(0)
  })
})
