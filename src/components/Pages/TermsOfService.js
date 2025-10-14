// pages/TermsOfService.js
import React from 'react';
import { Link } from 'react-router-dom';
import { translations, useLanguage } from '../../contexts/language';

const TermsOfService = () => {
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
              {language === 'en' && 'Terms of Service'}
              {language === 'al' && 'Kushtet e Shërbimit'}
              {language === 'de' && 'Nutzungsbedingungen'}
              {language === 'tr' && 'Hizmet Şartları'}
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
                {language === 'en' && 'Acceptance of Terms'}
                {language === 'al' && 'Pranimi i Kushteve'}
                {language === 'de' && 'Annahme der Bedingungen'}
                {language === 'tr' && 'Şartların Kabulü'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'By accessing and using this website, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.'}
                {language === 'al' && 'Duke aksesuar dhe përdorur këtë faqe interneti, ju pranoni dhe pajtoheni të jeni të lidhur nga këto Kushte të Shërbimit. Nëse nuk pajtoheni me këto kushte, ju lutemi mos e përdorni faqen tonë të internetit.'}
                {language === 'de' && 'Durch den Zugriff auf und die Nutzung dieser Website akzeptieren Sie diese Nutzungsbedingungen und erklären sich damit einverstanden, an sie gebunden zu sein. Wenn Sie mit diesen Bedingungen nicht einverstanden sind, nutzen Sie bitte unsere Website nicht.'}
                {language === 'tr' && 'Bu web sitesine erişerek ve kullanarak, bu Hizmet Şartlarını kabul etmiş ve bunlara bağlı kalmayı kabul etmiş olursunuz. Bu şartları kabul etmiyorsanız, lütfen web sitemizi kullanmayın.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Legal Services'}
                {language === 'al' && 'Shërbime Ligjore'}
                {language === 'de' && 'Rechtsdienstleistungen'}
                {language === 'tr' && 'Hukuki Hizmetler'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'The information on this website is for general informational purposes only and does not constitute legal advice. An attorney-client relationship is formed only through a signed engagement agreement. Past results do not guarantee similar outcomes in future cases.'}
                {language === 'al' && 'Informacioni në këtë faqe interneti është vetëm për qëllime informative të përgjithshme dhe nuk përbën këshillë ligjore. Një marrëdhënie avokat-klient formohet vetëm përmes një marrëveshjeje të nënshkruar angazhimi. Rezultatet e kaluara nuk garantojnë rezultate të ngjashme në çështjet e ardhshme.'}
                {language === 'de' && 'Die Informationen auf dieser Website dienen nur allgemeinen Informationszwecken und stellen keine Rechtsberatung dar. Eine Anwalts-Klienten-Beziehung entsteht nur durch eine unterzeichnete Mandatsvereinbarung. Vergangene Ergebnisse garantieren keine ähnlichen Ergebnisse in zukünftigen Fällen.'}
                {language === 'tr' && 'Bu web sitesindeki bilgiler yalnızca genel bilgilendirme amaçlıdır ve hukuki tavsiye teşkil etmez. Bir avukat-müvekkil ilişkisi yalnızca imzalanmış bir hizmet sözleşmesi ile oluşur. Geçmiş sonuçlar, gelecekteki davalarda benzer sonuçları garanti etmez.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Intellectual Property'}
                {language === 'al' && 'Pronësia Intelektuale'}
                {language === 'de' && 'Geistiges Eigentum'}
                {language === 'tr' && 'Fikri Mülkiyet'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'All content on this website, including text, graphics, logos, and images, is the property of Bytyqi & Partners and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.'}
                {language === 'al' && 'I gjithë përmbajtja në këtë faqe interneti, duke përfshirë tekstin, grafikën, logot dhe imazhet, është pronë e Bytyqi & Partners dhe mbrohet me ligjet e të drejtave të autorit dhe pronësisë intelektuale. Ju nuk mund të riprodhooni, shpërndani ose krijoni vepra të prejardhura pa lejen tonë të shkruar të qartë.'}
                {language === 'de' && 'Alle Inhalte auf dieser Website, einschließlich Text, Grafiken, Logos und Bilder, sind Eigentum von Bytyqi & Partners und durch Urheberrechts- und geistige Eigentumsgesetze geschützt. Sie dürfen keine Inhalte reproduzieren, verteilen oder abgeleitete Werke erstellen, ohne unsere ausdrückliche schriftliche Erlaubnis.'}
                {language === 'tr' && 'Bu web sitesindeki tüm içerik, metin, grafikler, logolar ve resimler dahil olmak üzere Bytyqi & Partners\'ın mülkiyetindedir ve telif hakkı ve fikri mülkiyet yasaları ile korunmaktadır. Açık yazılı iznimiz olmadan çoğaltamaz, dağıtamaz veya türev çalışmalar oluşturamazsınız.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Limitation of Liability'}
                {language === 'al' && 'Kufizimi i Përgjegjësisë'}
                {language === 'de' && 'Haftungsbeschränkung'}
                {language === 'tr' && 'Sorumluluk Sınırlaması'}
              </h2>
              <p className="mb-4">
                {language === 'en' && 'Bytyqi & Partners shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this website. We make no warranties about the accuracy or completeness of the information provided.'}
                {language === 'al' && 'Bytyqi & Partners nuk do të jetë përgjegjës për asnjë dëmtim të drejtpërdrejtë, indirekt, të rastësishëm ose pasues që rezulton nga përdorimi ose pamundësia për të përdorur këtë faqe interneti. Ne nuk japim asnjë garanci për saktësinë ose plotësinë e informacionit të ofruar.'}
                {language === 'de' && 'Bytyqi & Partners haftet nicht für direkte, indirekte, zufällige oder Folgeschäden, die sich aus der Nutzung oder der Unfähigkeit zur Nutzung dieser Website ergeben. Wir übernehmen keine Gewähr für die Richtigkeit oder Vollständigkeit der bereitgestellten Informationen.'}
                {language === 'tr' && 'Bytyqi & Partners, bu web sitesinin kullanılmasından veya kullanılamamasından kaynaklanan doğrudan, dolaylı, arızi veya sonuç zararlarından sorumlu değildir. Sağlanan bilgilerin doğruluğu veya tamlığı hakkında hiçbir garanti vermiyoruz.'}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-[#FFD700] rounded-full mr-3"></span>
                {language === 'en' && 'Governing Law'}
                {language === 'al' && 'Ligji Zbatues'}
                {language === 'de' && 'Anwendbares Recht'}
                {language === 'tr' && 'Uygulanabilir Hukuk'}
              </h2>
              <p>
                {language === 'en' && 'These Terms of Service shall be governed by and construed in accordance with the laws of Kosovo. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of Prishtina, Kosovo.'}
                {language === 'al' && 'Këto Kushte të Shërbimit do të nënshtrohen dhe do të interpretohen në përputhje me ligjet e Kosovës. Çdo mosmarrëveshje në lidhje me këto kushte do t\'i nënshtrohet jurisdiksionit ekskluziv të gjyqësorëve të Prishtinës, Kosovë.'}
                {language === 'de' && 'Diese Nutzungsbedingungen unterliegen den Gesetzen des Kosovo und werden nach diesen ausgelegt. Alle Streitigkeiten im Zusammenhang mit diesen Bedingungen unterliegen der ausschließlichen Zuständigkeit der Gerichte von Prishtina, Kosovo.'}
                {language === 'tr' && 'Bu Hizmet Şartları, Kosova yasalarına tabi olacak ve bu yasalara göre yorumlanacaktır. Bu şartlarla ilgili herhangi bir uyuşmazlık, Kosova, Priştine mahkemelerinin münhasır yargı yetkisine tabidir.'}
              </p>
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

export default TermsOfService;