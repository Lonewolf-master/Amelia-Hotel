import { render, screen, fireEvent } from '../test-utils';
import { Lightbox } from '../../components/common/Lightbox';

describe('Lightbox Component', () => {
  const mockProps = {
    isOpen: true,
    onClose: vi.fn(),
    images: ['img1.jpg', 'img2.jpg'],
    title: 'Deluxe Room',
    description: 'Lovely room',
    price: 'XAF 40,000',
    onBookNow: vi.fn()
  };

  it('renders room details when open', () => {
    render(<Lightbox {...mockProps} />);
    expect(screen.getByText('Deluxe Room')).toBeInTheDocument();
    expect(screen.getByText('XAF 40,000')).toBeInTheDocument();
  });

  it('calls onClose when close button clicked', () => {
    render(<Lightbox {...mockProps} />);
    const closeBtn = screen.getByLabelText(/Close lightbox/i);
    fireEvent.click(closeBtn);
    expect(mockProps.onClose).toHaveBeenCalled();
  });

  it('calls onBookNow when book button clicked', () => {
    render(<Lightbox {...mockProps} />);
    fireEvent.click(screen.getByText(/Book This Room/i));
    expect(mockProps.onBookNow).toHaveBeenCalled();
  });
});
