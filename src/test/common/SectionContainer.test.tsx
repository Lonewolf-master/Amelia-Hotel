import { render, screen } from '@testing-library/react'
import SectionContainer from '../../components/common/SectionContainer'

describe('SectionContainer Component', () => {
  it('renders children within a max-width container', () => {
    render(
      <SectionContainer>
        <div data-testid="child">Content</div>
      </SectionContainer>
    )
    expect(screen.getByTestId('child')).toBeInTheDocument()
    expect(screen.getByRole('region')).toHaveClass('max-w-7xl')
  })

  it('applies custom background classes', () => {
    render(
      <SectionContainer className="bg-navy">
        <div>Content</div>
      </SectionContainer>
    )
    expect(screen.getByRole('region')).toHaveClass('bg-navy')
  })
})
