import React, { useState } from 'react';
import { useLanguage } from '../../contexts/language';

const ContactForm = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
      hours: "Mon-Fri: 9am-5pm",
      phoneLabel: "Phone:",
      emailLabel: "Email:"
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
      hours: "E Hënë-E Premte: 9:00-17:00",
      phoneLabel: "Telefoni:",
      emailLabel: "Email:"
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
      hours: "Mo-Fr: 9:00-17:00",
      phoneLabel: "Telefon:",
      emailLabel: "E-Mail:"
    }
  };

  const t = translations[language];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-4 text-[#1a3e6a]">{t.title}</h2>
        <p className="text-gray-700 text-center max-w-2xl mx-auto mb-12">{t.description}</p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow border border-[#1a3e6a]/20">
              {['name', 'email', 'phone'].map((field) => (
                <div className="mb-4" key={field}>
                  <label htmlFor={field} className="block text-[#1a3e6a] font-medium mb-2">{t[field]}</label>
                  <input
                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required={field !== 'phone' ? true : false}
                    className="w-full px-4 py-2 border border-[#1a3e6a]/40 rounded focus:outline-none focus:ring-2 focus:ring-[#1a3e6a]"
                  />
                </div>
              ))}

              <div className="mb-4">
                <label htmlFor="subject" className="block text-[#1a3e6a] font-medium mb-2">{t.subject}</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#1a3e6a]/40 rounded focus:outline-none focus:ring-2 focus:ring-[#1a3e6a]"
                >
                  <option value="">
                    {language === 'en' ? 'Select a subject' : language === 'al' ? 'Zgjidhni një subjekt' : 'Wählen Sie ein Thema'}
                  </option>
                  <option value="consultation">{language === 'en' ? 'Consultation' : language === 'al' ? 'Konsultim' : 'Beratung'}</option>
                  <option value="corporate">{language === 'en' ? 'Corporate Law' : language === 'al' ? 'Ligji i Shoqërive' : 'Unternehmensrecht'}</option>
                  <option value="litigation">{language === 'en' ? 'Litigation' : language === 'al' ? 'Procesi Gjyqësor' : 'Prozessrecht'}</option>
                  <option value="realestate">{language === 'en' ? 'Real Estate' : language === 'al' ? 'Pasuri e Paluajtshme' : 'Immobilienrecht'}</option>
                  <option value="family">{language === 'en' ? 'Family Law' : language === 'al' ? 'Ligji i Familjes' : 'Familienrecht'}</option>
                  <option value="other">{language === 'en' ? 'Other' : language === 'al' ? 'Tjetër' : 'Andere'}</option>
                </select>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-[#1a3e6a] font-medium mb-2">{t.message}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-[#1a3e6a]/40 rounded focus:outline-none focus:ring-2 focus:ring-[#1a3e6a]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1a3e6a] text-white py-3 px-4 rounded font-medium hover:bg-[#16325b] transition-colors"
              >
                {t.submit}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow border border-[#1a3e6a]/20">
              <h3 className="text-xl font-serif font-bold mb-4 text-[#1a3e6a]">{t.office}</h3>
              <p className="text-gray-700 mb-2">{t.address}</p>
              <p className="text-gray-700 mb-4">{t.hours}</p>
              <p className="text-gray-700 mb-1"><span className="font-medium">{t.phoneLabel}</span> (+383) 45 123-456</p>
              <p className="text-gray-700"><span className="font-medium">{t.emailLabel}</span> info@justicelegal.com</p>
            </div>

            <div className="rounded-lg overflow-hidden shadow border border-[#1a3e6a]/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.355919712866!2d21.1557257!3d42.6595155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13549fe0946c8ad3%3A0x2f2a1da0ef4c7ea4!2sLawyer%20Asdren%20Bytyqi!5e0!3m2!1sen!2s!4v1726750000000!5m2!1sen!2s"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lawyer Asdren Bytyqi Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

