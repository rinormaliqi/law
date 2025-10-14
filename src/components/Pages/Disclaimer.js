// pages/Disclaimer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { translations, useLanguage } from '../../contexts/language';

const Disclaimer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gray-900 text-white py-6 border-b-4 border-[#FFD700]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-serif font-bold text-[#FFD700]">
              Bytyqi & Partners
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-[#FFD700] transition-colors">
                {t.nav.home}
              </Link>
              <Link to="/about" className="hover:text-[#FFD700] transition-colors">
                {t.nav.about}
              </Link>
              <Link to="/contact" className="hover:text-[#FFD700] transition-colors">
                {t.nav.contact}
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              {language === 'en' && 'Legal Disclaimer'}
              {language === 'al' && 'Mohim i Përgjegjësisë Ligjore'}
              {language === 'de' && 'Rechtlicher Haftungsausschluss'}
              {language === 'tr' && 'Yasal Feragatname'}
            </h1>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto"></div>
          </div>

          {/* Important Notice */}
          <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
            <div className="flex items-start">
              <span className="text-red-500 text-xl mr-3">⚠️</span>
              <div>
                <h3 className="font-bold text-red-800 mb-2">
                  {language === 'en' && 'Important Notice'}
                  {language === 'al' && 'Njoftim i Rëndësishëm'}
                  {language === 'de' && 'Wichtiger Hinweis'}
                  {language === 'tr' && 'Önemli Uyarı'}
                </h3>
                <p className="text-red-700">
                  {language === 'en' && 'The information on this website does not constitute legal advice and no attorney-client relationship is formed by browsing this site.'}
                  {language === 'al' && 'Informacioni në këtë faqe interneti nuk përbën këshillë ligjore dhe asnjë marrëdhënie avokat-klient nuk formohet duke shfletuar këtë faqe.'}
                  {language === 'de' && 'Die Informationen auf dieser Website stellen keine Rechtsberatung dar und durch das Durchsuchen dieser Website entsteht keine Anwalts-Klienten-Beziehung.'}
                  {language === 'tr' && 'Bu web sitesindeki bilgiler hukuki tavsiye teşkil etmez ve bu siteyi gezmekle avukat-müvekkil ilişkisi oluşmaz.'}
                </p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'No Legal Advice'}
                {language === 'al' && 'Asnjë Këshillë Ligjore'}
                {language === 'de' && 'Keine Rechtsberatung'}
                {language === 'tr' && 'Hukuki Tavsiye Yok'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'The content on this website is provided for general informational purposes only and should not be construed as legal advice on any subject matter. No recipient of content from this site should act or refrain from acting based on any content included in the site without seeking appropriate legal or other professional advice.'}
                {language === 'al' && 'Përmbajtja në këtë faqe interneti është dhënë vetëm për qëllime informative të përgjithshme dhe nuk duhet të interpretohet si këshillë ligjore për asnjë çështje. Asnjë marrës i përmbajtjes nga kjo faqe nuk duhet të veprojë ose të hezitojë të veprojë bazuar në ndonjë përmbajtje të përfshirë në faqe pa kërkuar këshillën e duhur ligjore ose profesionale tjetër.'}
                {language === 'de' && 'Der Inhalt dieser Website dient nur zu allgemeinen Informationszwecken und sollte nicht als Rechtsberatung zu einem beliebigen Thema ausgelegt werden. Kein Empfänger von Inhalten dieser Website sollte handeln oder davon absehen, auf der Grundlage von Inhalten dieser Website zu handeln, ohne angemessene rechtliche oder andere professionelle Beratung einzuholen.'}
                {language === 'tr' && 'Bu web sitesindeki içerik yalnızca genel bilgilendirme amaçlıdır ve herhangi bir konuda hukuki tavsiye olarak yorumlanmamalıdır. Bu siteden içerik alan hiç kimse, uygun hukuki veya diğer profesyonel tavsiye almadan, sitede yer alan herhangi bir içeriğe dayanarak hareket etmemeli veya hareket etmekten kaçınmamalıdır.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'No Attorney-Client Relationship'}
                {language === 'al' && 'Asnjë Marrëdhënie Avokat-Klient'}
                {language === 'de' && 'Keine Anwalts-Klienten-Beziehung'}
                {language === 'tr' && 'Avukat-Müvekkil İlişkisi Yok'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'Transmission of information from this website does not create an attorney-client relationship between you and Bytyqi & Partners, nor is it intended to do so. The transmission of the website, in part or in whole, and/or any communication with us via email through this site does not constitute or create an attorney-client relationship between us and any recipients.'}
                {language === 'al' && 'Transmetimi i informacionit nga kjo faqe interneti nuk krijon një marrëdhënie avokat-klient midis jush dhe Bytyqi & Partners, as nuk synon ta bëjë atë. Transmetimi i faqes së internetit, pjesërisht ose tërësisht, dhe/ose çdo komunikim me ne përmes email-it përmes kësaj faqeje nuk përbën ose nuk krijon një marrëdhënie avokat-klient midis nesh dhe çdo marrësi.'}
                {language === 'de' && 'Die Übermittlung von Informationen von dieser Website begründet keine Anwalts-Klienten-Beziehung zwischen Ihnen und Bytyqi & Partners, noch ist dies beabsichtigt. Die Übermittlung der Website, teilweise oder vollständig, und/oder jegliche Kommunikation mit uns per E-Mail über diese Website begründet keine Anwalts-Klienten-Beziehung zwischen uns und den Empfängern.'}
                {language === 'tr' && 'Bu web sitesinden bilgi iletilmesi, sizin ve Bytyqi & Partners arasında bir avukat-müvekkil ilişkisi oluşturmaz ve bunu amaçlamaz. Web sitesinin kısmen veya tamamen iletilmesi ve/veya bu site aracılığıyla e-posta yoluyla bizimle yapılan herhangi bir iletişim, bizimle herhangi bir alıcı arasında avukat-müvekkil ilişkisi oluşturmaz veya teşkil etmez.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Case Results Not Guaranteed'}
                {language === 'al' && 'Rezultatet e Çështjeve Nuk Garantohen'}
                {language === 'de' && 'Fallresultate nicht garantiert'}
                {language === 'tr' && 'Dava Sonuçları Garanti Edilmez'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'The results obtained in previous cases do not guarantee similar outcomes in future matters. Each case is unique and must be evaluated individually based on its specific facts and circumstances.'}
                {language === 'al' && 'Rezultatet e marra në çështjet e mëparshme nuk garantojnë rezultate të ngjashme në çështjet e ardhshme. Çdo çështje është unike dhe duhet të vlerësohet individualisht bazuar në faktet dhe rrethanat e saj specifike.'}
                {language === 'de' && 'Die in früheren Fällen erzielten Ergebnisse garantieren keine ähnlichen Ergebnisse in zukünftigen Angelegenheiten. Jeder Fall ist einzigartig und muss individuell auf der Grundlage seiner spezifischen Tatsachen und Umstände bewertet werden.'}
                {language === 'tr' && 'Önceki davalarda elde edilen sonuçlar, gelecekteki işlerde benzer sonuçları garanti etmez. Her dava benzersizdir ve kendi özel gerçeklerine ve koşullarına göre bireysel olarak değerlendirilmelidir.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Third-Party Links'}
                {language === 'al' && 'Lidhjet e Palëve të Treta'}
                {language === 'de' && 'Links zu Drittanbietern'}
                {language === 'tr' && 'Üçüncü Taraf Bağlantıları'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'This website may contain links to third-party websites. These links are provided for convenience only. Bytyqi & Partners has no control over and assumes no responsibility for the content, privacy policies, or practices of any third-party websites.'}
                {language === 'al' && 'Kjo faqe interneti mund të përmbajë lidhje me faqet e internetit të palëve të treta. Këto lidhje ofrohen vetëm për lehtësi. Bytyqi & Partners nuk ka asnjë kontroll dhe nuk merr asnjë përgjegjësi për përmbajtjen, politikën e privatësisë ose praktikat e ndonjë faqeje të internetit të palëve të treta.'}
                {language === 'de' && 'Diese Website kann Links zu Websites Dritter enthalten. Diese Links werden nur der Bequemlichkeit halber bereitgestellt. Bytyqi & Partners hat keine Kontrolle über und übernimmt keine Verantwortung für den Inhalt, die Datenschutzrichtlinien oder die Praktiken von Websites Dritter.'}
                {language === 'tr' && 'Bu web sitesi üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca kolaylık sağlamak amacıyla verilmiştir. Bytyqi & Partners\'ın herhangi bir üçüncü taraf web sitesinin içeriği, gizlilik politikaları veya uygulamaları üzerinde hiçbir kontrolü yoktur ve bunlar için hiçbir sorumluluk kabul etmez.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Contact for Legal Advice'}
                {language === 'al' && 'Kontakt për Këshillë Ligjore'}
                {language === 'de' && 'Kontakt für Rechtsberatung'}
                {language === 'tr' && 'Hukuki Tavsiye İçin İletişim'}
              </h2>
              <p>
                {language === 'en' && 'If you require legal advice for your specific situation, please contact our office to schedule a consultation. We would be pleased to discuss how we can assist you with your legal needs.'}
                {language === 'al' && 'Nëse keni nevojë për këshillë ligjore për situatën tuaj specifike, ju lutemi kontaktoni zyrën tonë për të planifikuar një konsultim. Do të ishim të kënaqur të diskutonim se si mund t\'ju ndihmojmë me nevojat tuaja ligjore.'}
                {language === 'de' && 'Wenn Sie für Ihre spezifische Situation Rechtsberatung benötigen, kontaktieren Sie bitte unser Büro, um eine Beratung zu vereinbaren. Wir würden uns freuen, zu besprechen, wie wir Sie bei Ihren rechtlichen Anliegen unterstützen können.'}
                {language === 'tr' && 'Özel durumunuz için hukuki tavsiyeye ihtiyacınız varsa, lütfen bir danışma ayarlamak için ofisimizle iletişime geçin. Hukuki ihtiyaçlarınızda size nasıl yardımcı olabileceğimizi görüşmekten memnuniyet duyarız.'}
              </p>
              <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold">Bytyqi & Partners</p>
                <p>info@bytyqipartners.com</p>
                <p>+383 (44) 728-118</p>
                <p className="text-sm text-gray-600 mt-2">
                  {language === 'en' && 'Prishtinë, Kosovo'}
                  {language === 'al' && 'Prishtinë, Kosovë'}
                  {language === 'de' && 'Prishtina, Kosovo'}
                  {language === 'tr' && 'Priştine, Kosova'}
                </p>
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

export default Disclaimer;