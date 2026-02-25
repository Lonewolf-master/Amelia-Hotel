import { render, screen } from '../test-utils';
import { TrustScore } from '../../components/common/TrustScore';

describe('TrustScore Component', () => {
  it('renders the overall score', () => {
    render(<TrustScore />);
    expect(screen.getByText('8.7')).toBeInTheDocument();
  });

  it('renders rating categories', () => {
    render(<TrustScore />);
    expect(screen.getByText(/Staff/i)).toBeInTheDocument();
    expect(screen.getByText(/Comfort/i)).toBeInTheDocument();
    expect(screen.getByText(/Location/i)).toBeInTheDocument();
  });

  it('renders the reviews count', () => {
    render(<TrustScore />);
    expect(screen.getByText(/23 reviews/i)).toBeInTheDocument();
  });
});
