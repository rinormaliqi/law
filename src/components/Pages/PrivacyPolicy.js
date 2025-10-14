// pages/PrivacyPolicy.js
import React from 'react';
import { Link } from 'react-router-dom';
import { translations, useLanguage } from '../../contexts/language';

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white mt-20">

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {language === 'en' && 'Privacy Policy'}
              {language === 'al' && 'Politika e Privatësisë'}
              {language === 'de' && 'Datenschutzerklärung'}
              {language === 'tr' && 'Gizlilik Politikası'}
            </h1>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
          </div>

          {/* Last Updated */}
          <div className="bg-yellow-50 border-l-4 border-[#FFD700] p-6 mb-8">
            <p className="text-gray-700">
              <strong>
                {language === 'en' && 'Last Updated: October 2025'}
                {language === 'al' && 'Përditësuar Së Fundmi: Tetor 2025'}
                {language === 'de' && 'Zuletzt aktualisiert: Oktober 2025'}
                {language === 'tr' && 'Son Güncelleme: Ekim 2025'}
              </strong>
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Introduction'}
                {language === 'al' && 'Hyrje'}
                {language === 'de' && 'Einführung'}
                {language === 'tr' && 'Giriş'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'At Bytyqi & Partners, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.'}
                {language === 'al' && 'Në Bytyqi & Partners, jemi të përkushtuar për mbrojtjen e privatësisë suaj dhe sigurimin e të dhënave tuaja personale. Kjo Politika e Privatësisë shpjegon se si mbledhim, përdorim dhe mbrojmë të dhënat tuaja kur përdorni faqen tonë të internetit dhe shërbimet.'}
                {language === 'de' && 'Bei Bytyqi & Partners sind wir dem Schutz Ihrer Privatsphäre und der Sicherheit Ihrer persönlichen Daten verpflichtet. Diese Datenschutzerklärung erläutert, wie wir Ihre Daten erfassen, verwenden und schützen, wenn Sie unsere Website und Dienstleistungen nutzen.'}
                {language === 'tr' && 'Bytyqi & Partners olarak, gizliliğinizi korumaya ve kişisel bilgilerinizin güvenliğini sağlamaya kararlıyız. Bu Gizlilik Politikası, web sitemizi ve hizmetlerimizi kullandığınızda verilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Information We Collect'}
                {language === 'al' && 'Informacioni që Mbledhim'}
                {language === 'de' && 'Informationen, die wir sammeln'}
                {language === 'tr' && 'Topladığımız Bilgiler'}
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  {language === 'en' && 'Personal identification information (Name, email address, phone number)'}
                  {language === 'al' && 'Informacion personal identifikues (Emri, adresa e email-it, numri i telefonit)'}
                  {language === 'de' && 'Persönliche Identifikationsinformationen (Name, E-Mail-Adresse, Telefonnummer)'}
                  {language === 'tr' && 'Kişisel kimlik bilgileri (Ad, e-posta adresi, telefon numarası)'}
                </li>
                <li>
                  {language === 'en' && 'Case-related information you provide during consultations'}
                  {language === 'al' && 'Informacione të lidhura me çështjen që ju ofroni gjatë konsultimeve'}
                  {language === 'de' && 'Fallbezogene Informationen, die Sie während Beratungen angeben'}
                  {language === 'tr' && 'Danışmalar sırasında sağladığınız dava ile ilgili bilgiler'}
                </li>
                <li>
                  {language === 'en' && 'Website usage data and analytics'}
                  {language === 'al' && 'Të dhëna për përdorimin e faqes së internetit dhe analitikë'}
                  {language === 'de' && 'Website-Nutzungsdaten und Analysen'}
                  {language === 'tr' && 'Web sitesi kullanım verileri ve analitikleri'}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'How We Use Your Information'}
                {language === 'al' && 'Si i Përdorim Informatat Tuaja'}
                {language === 'de' && 'Wie wir Ihre Informationen verwenden'}
                {language === 'tr' && 'Bilgilerinizi Nasıl Kullanıyoruz'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'We use the information we collect to provide legal services, communicate with you about your case, improve our website, and comply with legal obligations. Your information is treated with the utmost confidentiality and is protected by attorney-client privilege where applicable.'}
                {language === 'al' && 'Ne përdorim informacionin që mbledhim për të ofruar shërbime ligjore, për të komunikuar me ju në lidhje me çështjen tuaj, për të përmirësuar faqen tonë të internetit dhe për të përmbushur detyrimet ligjore. Informatat tuaja trajtohen me konfidencialitet maksimal dhe mbrohen nga privilegji avokat-klient ku është e zbatueshme.'}
                {language === 'de' && 'Wir verwenden die gesammelten Informationen, um Rechtsdienstleistungen zu erbringen, mit Ihnen über Ihren Fall zu kommunizieren, unsere Website zu verbessern und gesetzliche Verpflichtungen zu erfüllen. Ihre Informationen werden mit äußerster Vertraulichkeit behandelt und sind, sofern zutreffend, durch das Anwaltsgeheimnis geschützt.'}
                {language === 'tr' && 'Topladığımız bilgileri hukuki hizmetler sunmak, davalarınız hakkında sizinle iletişim kurmak, web sitemizi iyileştirmek ve yasal yükümlülüklere uymak için kullanıyoruz. Bilgileriniz en üst düzeyde gizlilikle ele alınır ve uygulanabilir olduğu durumlarda avukat-müvekkil ayrıcalığı ile korunur.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Data Security'}
                {language === 'al' && 'Siguria e të Dhënave'}
                {language === 'de' && 'Datensicherheit'}
                {language === 'tr' && 'Veri Güvenliği'}
              </h2>
              <p>
                {language === 'en' && 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All electronic communications are encrypted, and physical documents are stored in secure facilities.'}
                {language === 'al' && 'Ne zbatojmë masa të përshtatshme teknike dhe organizative të sigurisë për të mbrojtur informacionin tuaj personal nga aksesi i paautorizuar, ndryshimi, zbulimi ose shkatërrimi. Të gjitha komunikimet elektronike janë të koduara, dhe dokumentet fizike ruhen në ambiente të sigurta.'}
                {language === 'de' && 'Wir setzen angemessene technische und organisatorische Sicherheitsmaßnahmen um, um Ihre persönlichen Daten vor unbefugtem Zugriff, Veränderung, Offenlegung oder Zerstörung zu schützen. Alle elektronischen Kommunikationen sind verschlüsselt und physische Dokumente werden in sicheren Einrichtungen aufbewahrt.'}
                {language === 'tr' && 'Kişisel bilgilerinizi yetkisiz erişim, değiştirme, ifşa veya imhadan korumak için uygun teknik ve organizasyonel güvenlik önlemleri uyguluyoruz. Tüm elektronik iletişimler şifrelenir ve fiziksel belgeler güvenli tesislerde saklanır.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Contact Us'}
                {language === 'al' && 'Na Kontaktoni'}
                {language === 'de' && 'Kontaktieren Sie uns'}
                {language === 'tr' && 'Bize Ulaşın'}
              </h2>
              <p>
                {language === 'en' && 'If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at:'}
                {language === 'al' && 'Nëse keni ndonjë pyetje në lidhje me këtë Politika të Privatësisë ose se si trajtojmë informacionin tuaj personal, ju lutemi na kontaktoni në:'}
                {language === 'de' && 'Wenn Sie Fragen zu dieser Datenschutzerklärung oder zur Handhabung Ihrer persönlichen Daten haben, kontaktieren Sie uns bitte unter:'}
                {language === 'tr' && 'Bu Gizlilik Politikası veya kişisel bilgilerinizi nasıl ele aldığımız hakkında herhangi bir sorunuz varsa, lütfen bizimle iletişime geçin:'}
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">Bytyqi & Partners</p>
                <p>info@bytyqipartners.com</p>
                <p>+383 (44) 728-118</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Back to Top */}
      <div className="text-center py-8">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-[#FFD700] text-gray-900 font-semibold rounded-lg hover:bg-yellow-600 transition-colors"
        >
          {language === 'en' && '← Back to Home'}
          {language === 'al' && '← Kthehu në Faqen Kryesore'}
          {language === 'de' && '← Zurück zur Startseite'}
          {language === 'tr' && '← Ana Sayfaya Dön'}
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;