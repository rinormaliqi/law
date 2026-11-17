import React, { useState } from 'react';
import { useLanguage } from '../../contexts/language';

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  company: '' // honeypot, hidden from real visitors
};

const ContactForm = () => {
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

  return (
    <section id="contact" className="py-10 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 pt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-center mb-3 md:mb-4 text-[#FFD700]">{t.title}</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base px-2">{t.description}</p>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="relative bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow border border-[#FFD700]/20">
              {/* Honeypot field for bots – hidden from people and screen readers */}
              <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
                <label htmlFor="company">Company</label>
                <input type="text" id="company" name="company" tabIndex={-1} autoComplete="off" value={formData.company} onChange={handleChange} />
              </div>

              {['name', 'email', 'phone'].map((field) => (
                <div className="mb-3 md:mb-4" key={field}>
                  <label htmlFor={field} className="block text-[#1a3e6a] font-medium mb-1 md:mb-2 text-sm md:text-base">{t[field]}</label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== 'phone'}
                    className="w-full px-3 py-2 md:px-4 md:py-2 border border-[#1a3e6a]/40 rounded focus:outline-none focus:ring-2 focus:ring-[#1a3e6a] text-sm md:text-base"
                  />
                </div>
              ))}

              <div className="mb-3 md:mb-4">
                <label htmlFor="subject" className="block text-[#1a3e6a] font-medium mb-1 md:mb-2 text-sm md:text-base">{t.subject}</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-[#1a3e6a]/40 rounded focus:outline-none focus:ring-2 focus:ring-[#1a3e6a] text-sm md:text-base"
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

              <div className="mb-4 md:mb-6">
                <label htmlFor="message" className="block text-[#1a3e6a] font-medium mb-1 md:mb-2 text-sm md:text-base">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2 md:px-4 md:py-2 border border-[#1a3e6a]/40 rounded focus:outline-none focus:ring-2 focus:ring-[#1a3e6a] text-sm md:text-base"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-[#FFD700] text-gray-900 py-2 md:py-3 px-4 rounded font-semibold hover:bg-black hover:text-white transition-colors text-sm md:text-base disabled:opacity-60 disabled:cursor-wait"
              >
                {status === 'sending' ? t.sending : t.submit}
              </button>

              <div aria-live="polite">
                {status === 'success' && (
                  <p className="mt-4 rounded border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">{t.success}</p>
                )}
                {status === 'error' && (
                  <p className="mt-4 rounded border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">{t.error}</p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-4 md:space-y-6 mt-6 lg:mt-0">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow border border-[#FFD700]/20">
              <h3 className="text-lg md:text-xl font-serif font-bold mb-3 md:mb-4 text-[#FFD700]">{t.office}</h3>
              <p className="text-gray-700 mb-2 text-sm md:text-base">{t.address}</p>
              <p className="text-gray-700 mb-3 md:mb-4 text-sm md:text-base">{t.hours}</p>
              <p className="text-gray-700 mb-1 text-sm md:text-base"><span className="font-medium">{t.phoneLabel}</span> <a href="tel:+38344728118" className="hover:underline">(+383) 44 728-118</a></p>
              <p className="text-gray-700 text-sm md:text-base"><span className="font-medium">{t.emailLabel}</span> <a href="mailto:Asdren.bytyqi91@gmail.com" className="hover:text-[#1a3e6a] underline-offset-2 hover:underline break-all">Asdren.bytyqi91@gmail.com</a></p>
            </div>

            <div className="rounded-lg overflow-hidden shadow border border-[#1a3e6a]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.355919712866!2d21.1557257!3d42.6595155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549fe0946c8ad3%3A0x2f2a1da0ef4c7ea4!2sLawyer%20Asdren%20Bytyqi!5e0!3m2!1sen!2s!4v1726750000000!5m2!1sen!2s"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lawyer Asdren Bytyqi Location"
                className="w-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;