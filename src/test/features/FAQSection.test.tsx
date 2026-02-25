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
    expect(screen.getAllByText(/pool/i)[0]).toBeInTheDocument()
    expect(screen.getAllByText(/check-in/i)[0]).toBeInTheDocument()
  })

  it('expands answers when clicking questions', () => {
    render(<FAQSection />)
    const question = screen.getAllByText(/pool/i)[0]
    fireEvent.click(question)
    // Assuming the answer contains "Yes" based on the provided info
    expect(screen.getAllByText(/Yes, this hotel has a pool/i)[0]).toBeInTheDocument()
  })
})
