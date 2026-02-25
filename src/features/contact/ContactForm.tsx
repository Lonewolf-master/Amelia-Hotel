import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { SectionContainer } from '../../components/common/SectionContainer';
import { Button } from '../../components/common/Button';
import { useLanguage } from '../../context/LanguageContext';
import { Send, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactForm: React.FC = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const t = {
    en: {
      subheading: "Get in Touch",
      heading: "Contact Us",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      placeholderName: "Your Name",
      placeholderEmail: "Your Email",
      placeholderSubject: "How can we help?",
      placeholderMessage: "Your Message",
      send: "Send Message",
      successHeading: "Success!",
      successText: "Thank you for reaching out. We have received your inquiry and will get back to you shortly at",
      successButton: "Send another message",
      errorRequired: "is required",
      errorInvalid: "is invalid"
    },
    fr: {
      subheading: "Contactez-nous",
      heading: "Nous Contacter",
      name: "Nom",
      email: "E-mail",
      subject: "Sujet",
      message: "Message",
      placeholderName: "Votre Nom",
      placeholderEmail: "Votre E-mail",
      placeholderSubject: "Comment pouvons-nous vous aider ?",
      placeholderMessage: "Votre Message",
      send: "Envoyer le Message",
      successHeading: "Succès !",
      successText: "Merci de nous avoir contactés. Nous avons reçu votre demande et vous répondrons bientôt à",
      successButton: "Envoyer un autre message",
      errorRequired: "est requis",
      errorInvalid: "est invalide"
    }
  }[language];

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = `${t.name} ${t.errorRequired}`;
    if (!formData.email) {
      newErrors.email = `${t.email} ${t.errorRequired}`;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = `${t.email} ${t.errorInvalid}`;
    }
    if (!formData.subject) newErrors.subject = `${t.subject} ${t.errorRequired}`;
    if (!formData.message) newErrors.message = `${t.message} ${t.errorRequired}`;
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate submission
    setSubmitted(true);
    setErrors({});
    
    console.log(`Form submitted to: chidaluwisdomorima@gmail.com (${language})`, formData);
  };

  useEffect(() => {
    if (submitted) {
      gsap.from('.success-message', {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        ease: 'back.out(1.7)'
      });
    }
  }, [submitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <SectionContainer id="contact" className="bg-slate-900">
        <div className="max-w-2xl mx-auto text-center py-20 success-message">
          <CheckCircle className="w-20 h-20 text-gold mx-auto mb-8" />
          <h3 className="text-4xl luxury-heading text-white mb-4">{t.successHeading}</h3>
          <p className="text-slate-400 text-lg mb-12">
            {t.successText} {formData.email}.
          </p>
          <Button onClick={() => setSubmitted(false)}>{t.successButton}</Button>
        </div>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer id="contact" className="bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gold mb-4 font-sans font-medium">{t.subheading}</h2>
          <h3 className="text-4xl md:text-6xl luxury-heading text-white">{t.heading}</h3>
        </div>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 bg-slate-950 p-6 md:p-12 border border-slate-800 luxury-shadow"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{t.name}</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full bg-slate-900 border ${errors.name ? 'border-red-500' : 'border-slate-800'} focus:border-gold outline-none p-4 text-white transition-colors duration-300`}
              placeholder={t.placeholderName}
            />
            {errors.name && <p className="text-red-500 text-[10px] uppercase tracking-tighter mt-1">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{t.email}</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-slate-900 border ${errors.email ? 'border-red-500' : 'border-slate-800'} focus:border-gold outline-none p-4 text-white transition-colors duration-300`}
              placeholder={t.placeholderEmail}
            />
            {errors.email && <p className="text-red-500 text-[10px] uppercase tracking-tighter mt-1">{errors.email}</p>}
          </div>

          <div className="md:col-span-2 space-y-2">
            <label htmlFor="subject" className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{t.subject}</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`w-full bg-slate-900 border ${errors.subject ? 'border-red-500' : 'border-slate-800'} focus:border-gold outline-none p-4 text-white transition-colors duration-300`}
              placeholder={t.placeholderSubject}
            />
            {errors.subject && <p className="text-red-500 text-[10px] uppercase tracking-tighter mt-1">{errors.subject}</p>}
          </div>

          <div className="md:col-span-2 space-y-2">
            <label htmlFor="message" className="text-xs uppercase tracking-widest text-slate-500 font-semibold">{t.message}</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              className={`w-full bg-slate-900 border ${errors.message ? 'border-red-500' : 'border-slate-800'} focus:border-gold outline-none p-4 text-white transition-colors duration-300 resize-none`}
              placeholder={t.placeholderMessage}
            ></textarea>
            {errors.message && <p className="text-red-500 text-[10px] uppercase tracking-tighter mt-1">{errors.message}</p>}
          </div>

          <div className="md:col-span-2 pt-4">
            <Button 
              type="submit" 
              className="w-full flex items-center justify-center space-x-3 group"
            >
              <span>{t.send}</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </Button>
          </div>
        </form>
      </div>
    </SectionContainer>
  );
};
