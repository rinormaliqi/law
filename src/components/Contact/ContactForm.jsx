import React, { useState } from 'react';
import { useLanguage } from '../../contexts/language';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import { Reveal } from '../Reveal';

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  company: '' // honeypot, hidden from real visitors
};

const ContactForm = ({ standalone = false }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, language })
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);
      setFormData(EMPTY_FORM);
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const translations = {
    en: {
      title: "Contact Us",
      description: "Get in touch with our legal team for a consultation",
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Your Message",
      submit: "Send Message",
      office: "Our Office",
      address: "5, 5 Garibaldi, Prishtina 10000",
      hours: "Mon-Fri: 08:00-18:00",
      phoneLabel: "Phone:",
      emailLabel: "Email:",
      sending: "Sending...",
      success: "Thank you! Your message has been sent. We will get back to you shortly.",
      error: "Sorry, your message could not be sent. Please try again or call us at +383 44 728 118."
    },
    al: {
      title: "Na Kontaktoni",
      description: "Lidhuni me ekipin tonë ligjor për një konsultim",
      name: "Emri i Plotë",
      email: "Adresa e Emailit",
      phone: "Numri i Telefonit",
      subject: "Subjekti",
      message: "Mesazhi Juaj",
      submit: "Dërgo Mesazhin",
      office: "Zyra Jonë",
      address: "5, 5 Garibaldi, Prishtina 10000",
      hours: "E Hënë-E Premte: 08:00-18:00",
      phoneLabel: "Telefoni:",
      emailLabel: "Email:",
      sending: "Duke dërguar...",
      success: "Faleminderit! Mesazhi juaj u dërgua. Do t'ju kontaktojmë së shpejti.",
      error: "Na vjen keq, mesazhi nuk u dërgua. Provoni përsëri ose na telefononi në +383 44 728 118."
    },
    de: {
      title: "Kontaktieren Sie Uns",
      description: "Nehmen Sie Kontakt mit unserem Rechtsteam für eine Beratung auf",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      phone: "Telefonnummer",
      subject: "Betreff",
      message: "Ihre Nachricht",
      submit: "Nachricht Senden",
      office: "Unser Büro",
      address: "5, 5 Garibaldi, Prishtina 10000",
      hours: "Mo-Fr: 08:00-18:00",
      phoneLabel: "Telefon:",
      emailLabel: "E-Mail:",
      sending: "Wird gesendet...",
      success: "Vielen Dank! Ihre Nachricht wurde gesendet. Wir melden uns in Kürze bei Ihnen.",
      error: "Leider konnte Ihre Nachricht nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an: +383 44 728 118."
    },
    tr: {
      title: "Bize Ulaşın",
      description: "Danışma için hukuk ekibimizle iletişime geçin",
      name: "Tam Adı",
      email: "E-posta Adresi",
      phone: "Telefon Numarası",
      subject: "Konu",
      message: "Mesajınız",
      submit: "Mesaj Gönder",
      office: "Ofisimiz",
      address: "5, 5 Garibaldi, Priştine 10000",
      hours: "Pzt-Cuma: 08:00-18:00",
      phoneLabel: "Telefon:",
      emailLabel: "E-posta:",
      sending: "Gönderiliyor...",
      success: "Teşekkürler! Mesajınız gönderildi. En kısa sürede size dönüş yapacağız.",
      error: "Üzgünüz, mesajınız gönderilemedi. Lütfen tekrar deneyin veya bizi arayın: +383 44 728 118."
    }
  };

  const t = translations[language];

  // Function to get subject options based on language
  const getSubjectOptions = () => {
    const options = {
      en: {
        default: "Select a subject",
        consultation: "Consultation",
        corporate: "Corporate Law",
        litigation: "Litigation",
        realestate: "Real Estate",
        family: "Family Law",
        other: "Other"
      },
      al: {
        default: "Zgjidhni një subjekt",
        consultation: "Konsultim",
        corporate: "Ligji i Shoqërive",
        litigation: "Procesi Gjyqësor",
        realestate: "Pasuri e Paluajtshme",
        family: "Ligji i Familjes",
        other: "Tjetër"
      },
      de: {
        default: "Wählen Sie ein Thema",
        consultation: "Beratung",
        corporate: "Unternehmensrecht",
        litigation: "Prozessrecht",
        realestate: "Immobilienrecht",
        family: "Familienrecht",
        other: "Andere"
      },
      tr: {
        default: "Bir konu seçin",
        consultation: "Danışma",
        corporate: "Kurumsal Hukuk",
        litigation: "Dava Hukuku",
        realestate: "Gayrimenkul",
        family: "Aile Hukuku",
        other: "Diğer"
      }
    };

    return options[language] || options.en;
  };

  const subjectOptions = getSubjectOptions();

  const Heading = standalone ? 'h1' : 'h2';
  const fieldTypes = { name: 'text', email: 'email', phone: 'tel' };
  const autoCompletes = { name: 'name', email: 'email', phone: 'tel' };

  const infoRows = [
    { icon: MapPin, content: t.address },
    { icon: Clock, content: t.hours },
    {
      icon: Phone,
      content: <a href="tel:+38344728118" className="transition-colors hover:text-brand-dark">+383 (44) 728-118</a>,
    },
    {
      icon: Mail,
      content: (
        <a href="mailto:Asdren.bytyqi91@gmail.com" className="break-all transition-colors hover:text-brand-dark">
          Asdren.bytyqi91@gmail.com
        </a>
      ),
    },
  ];

  return (
    <section id="contact" className={`section bg-white ${standalone ? 'page-top' : ''}`}>
      <div className="container-page">
        <Reveal className="section-header">
          <Heading className="section-title">{t.title}</Heading>
          <div className="section-divider" />
          <p className="section-subtitle">{t.description}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Contact form */}
          <Reveal className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="card relative p-6 sm:p-8">
              {/* Honeypot field for bots – hidden from people and screen readers */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" value={formData.company} onChange={handleChange} />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {['name', 'email', 'phone'].map((field) => (
                  <div key={field} className={field === 'name' ? 'sm:col-span-2' : ''}>
                    <label htmlFor={field} className="form-label">
                      {t[field]}
                      {field !== 'phone' && <span className="text-brand-dark"> *</span>}
                    </label>
                    <input
                      type={fieldTypes[field]}
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required={field !== 'phone'}
                      autoComplete={autoCompletes[field]}
                      className="form-input"
                    />
                  </div>
                ))}

                <div className="sm:col-span-2">
                  <label htmlFor="subject" className="form-label">
                    {t.subject}<span className="text-brand-dark"> *</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">{subjectOptions.default}</option>
                    <option value="consultation">{subjectOptions.consultation}</option>
                    <option value="corporate">{subjectOptions.corporate}</option>
                    <option value="litigation">{subjectOptions.litigation}</option>
                    <option value="realestate">{subjectOptions.realestate}</option>
                    <option value="family">{subjectOptions.family}</option>
                    <option value="other">{subjectOptions.other}</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="form-label">
                    {t.message}<span className="text-brand-dark"> *</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="form-input resize-y"
                  ></textarea>
                </div>
              </div>

              <button type="submit" disabled={status === 'sending'} className="btn btn-primary mt-6 w-full py-3.5">
                {status === 'sending' ? t.sending : t.submit}
                {status !== 'sending' && <Send className="h-4 w-4" aria-hidden="true" />}
              </button>

              <div aria-live="polite">
                {status === 'success' && <p className="form-status form-status-success">{t.success}</p>}
                {status === 'error' && <p className="form-status form-status-error">{t.error}</p>}
              </div>
            </form>
          </Reveal>

          {/* Office info + map */}
          <Reveal delay={0.08} className="flex flex-col gap-6 lg:col-span-5">
            <div className="rounded-2xl bg-ink p-6 text-white sm:p-8">
              <h3 className="mb-6 text-xl font-bold text-white">{t.office}</h3>
              <ul className="space-y-4">
                {infoRows.map(({ icon: Icon, content }, index) => (
                  <li key={index} className="flex items-start gap-3.5 text-gray-300">
                    <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Icon className="h-4 w-4 text-brand" aria-hidden="true" />
                    </span>
                    <span className="pt-1.5 text-[0.95rem] leading-snug">{content}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-h-[260px] flex-1 overflow-hidden rounded-2xl border border-gray-100 shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.355919712866!2d21.1557257!3d42.6595155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549fe0946c8ad3%3A0x2f2a1da0ef4c7ea4!2sLawyer%20Asdren%20Bytyqi!5e0!3m2!1sen!2s!4v1726750000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 260 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lawyer Asdren Bytyqi Location"
                className="h-full w-full"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
