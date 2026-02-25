import { render, screen, fireEvent } from '@testing-library/react'
import { FAQSection } from '../../features/faq/FAQSection'

describe('FAQSection Component', () => {
  it('renders the main headings', () => {
    render(<FAQSection />)
    expect(screen.getByText(/Frequently Asked/i)).toBeInTheDocument()
    expect(screen.getByText(/House Rules/i)).toBeInTheDocument()
  })

  it('renders common questions', () => {
    render(<FAQSection />)
    expect(screen.getByText(/pool/i)).toBeInTheDocument()
    expect(screen.getByText(/check-in/i)).toBeInTheDocument()
  })

  it('expands answers when clicking questions', () => {
    render(<FAQSection />)
    const question = screen.getByText(/pool/i)
    fireEvent.click(question)
    // Assuming the answer contains "Yes" based on the provided info
    expect(screen.getByText(/Yes, this hotel has a pool/i)).toBeInTheDocument()
  })
})
