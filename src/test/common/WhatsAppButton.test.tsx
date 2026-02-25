import { render, screen } from '@testing-library/react'
import { WhatsAppButton } from '../../components/common/WhatsAppButton'

describe('WhatsAppButton Component', () => {
  it('renders the WhatsApp icon link', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link', { name: /whatsapp/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', expect.stringContaining('652422909'))
  })

  it('has the correct target and rel attributes for security', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link', { name: /whatsapp/i })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
