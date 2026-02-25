import { render, screen, fireEvent } from '../test-utils'
import { ContactForm } from '../../features/contact/ContactForm'

describe('ContactForm Component', () => {
  it('renders all form fields', () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })

  it('shows validation errors for empty fields', () => {
    render(<ContactForm />)
    fireEvent.click(screen.getByRole('button', { name: /send/i }))
    // Should show some validation feedback
    expect(screen.getAllByText(/required/i).length).toBeGreaterThan(0)
  })

  it('submits correctly with valid data', () => {
    render(<ContactForm />)
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Inquiry' } })
    fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'Test message' } })
    
    fireEvent.click(screen.getByRole('button', { name: /send/i }))
    expect(screen.getByText(/success/i)).toBeInTheDocument()
  })
})
