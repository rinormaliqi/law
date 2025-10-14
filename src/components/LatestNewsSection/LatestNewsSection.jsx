"use client";
import { useState } from "react";
import { translations, useLanguage } from "../../contexts/language";
import image1 from "../../assets/flag.jpg"
import image2 from "../../assets/family.jpg"
import image3 from "../../assets/stop.jpg"
import image4 from "../../assets/police.jpeg"
import image5 from "../../assets/haga.jpg"
import { CaseDetailModal } from "./CaseDetailModal"; // We'll create this

export default function NotableCasesSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCase, setSelectedCase] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Combined notable cases and media commentary from both attorneys
  const notableCases = [
    // Asdren Bytyqi Cases
    {
      id: 1,
      title: language === 'en' ? "Secular State & Religious Freedoms Debate" :
            language === 'al' ? "Debati për Shtetin Laik & Liritë Fetare" :
            language === 'de' ? "Debatte über Laizismus & Religionsfreiheit" :
            "Laik Devlet ve Din Özgürlükleri Tartışması",
      author: "Asdren Bytyqi",
      image: image1,
      type: "media",
      year: "2021",
      source: "Klan Kosova TV",
      content: language === 'en' ? 
        "Asdren Bytyqi argued that the term 'secular state' in Kosovo has been greatly misused and misunderstood politically. He emphasized that true laicism means complete state neutrality toward all faiths and maximum freedom of religion, calling for following Western models of secularism that ensure full neutrality and protection of all religious communities.\n\nDuring his appearance on Klan Kosova TV, Bytyqi provided detailed constitutional analysis of what constitutes a true secular state, distinguishing between political manipulation of the concept and its proper legal implementation. His commentary sparked significant public discourse about religious freedoms in Kosovo's legal framework." :
        language === 'al' ? 
        "Asdren Bytyqi argumentoi se termi 'shtet laik' në Kosovë është keqpërdorur dhe i keqkuptuar politikisht. Ai theksoi se laicizmi i vërtetë nënkupton neutralitet të plotë shtetëror ndaj të gjitha feve dhe liri maksimale të fesë, duke thirrur për ndjekjen e modeleve perëndimore të laicizmit që sigurojnë neutralitet të plotë dhe mbrojtje për të gjitha komunitetet fetare.\n\nGjatë paraqitjes së tij në Klan Kosova TV, Bytyqi dha një analizë të hollësishme kushtetuese të asaj që përbën një shtet të vërtetë laik, duke bërë dallimin midis manipulimit politik të konceptit dhe zbatimit të duhur ligjor të tij. Komenti i tij shkaktoi diskutim të rëndësishëm publik për liritë fetare në kornizën ligjore të Kosovës." :
        language === 'de' ? 
        "Asdren Bytyqi argumentierte, dass der Begriff 'Laizismus' im Kosovo politisch missbraucht und missverstanden wurde. Er betonte, dass wahrer Laizismus vollständige staatliche Neutralität gegenüber allen Religionen und maximale Religionsfreiheit bedeutet, und forderte die Befolgung westlicher Laizismusmodelle, die vollständige Neutralität und Schutz aller Religionsgemeinschaften gewährleisten.\n\nWährend seines Auftritts bei Klan Kosova TV lieferte Bytyqi eine detaillierte verfassungsrechtliche Analyse dessen, was einen wahren Laizismusstaat ausmacht, und unterschied zwischen politischer Manipulation des Konzepts und seiner ordnungsgemäßen rechtlichen Umsetzung. Sein Kommentar löste bedeutende öffentliche Diskurse über Religionsfreiheiten im rechtlichen Rahmen des Kosovo aus." :
        "Asdren Bytyqi, Kosova'da 'laik devlet' teriminin politik olarak büyük ölçüde yanlış kullanıldığını ve yanlış anlaşıldığını savundu. Gerçek laikliğin tüm inançlara karşı tam devlet tarafsızlığı ve maksimum din özgürlüğü anlamına geldiğini vurgulayarak, tam tarafsızlık ve tüm dini toplulukların korunmasını sağlayan Batı laiklik modellerinin takip edilmesi çağrısında bulundu.\n\nKlan Kosova TV'deki görünümü sırasında Bytyqi, gerçek bir laik devletin ne olduğuna dair ayrıntılı bir anayasal analiz sağladı ve kavramın politik manipülasyonu ile uygun yasal uygulaması arasında ayrım yaptı. Yorumu, Kosova'nın yasal çerçevesinde dini özgürlükler hakkında önemli bir kamuoyu tartışması başlattı.",
      link: "https://klankosova.tv/kosova-eshte-shtet-laik-bytyqi-term-i-keqperdorur-shume-dhe-keqkuptuar-politikisht-video1/#:~:text=shoq%C3%ABrive%20dhe%20komuniteteve%20ju%20jep,t%C3%AB%20drejt%C3%ABn%20t%C3%AB%20zhvillohet%E2%80%9D",
      tags: ["Constitutional Law", "Religious Freedom", "Secularism"]
    },
    {
      id: 2,
      title: language === 'en' ? "Family Values & Free Speech in Elections" :
            language === 'al' ? "Vlerat Familjare & Liria e Shprehjes në Zgjedhje" :
            language === 'de' ? "Familienwerte & Meinungsfreiheit in Wahlen" :
            "Seçimlerde Aile Değerleri ve İfade Özgürlüğü",
      author: "Asdren Bytyqi",
      image: image2,
      type: "legal",
      year: "2025",
      source: "Telegrafi.com",
      content: language === 'en' ? 
        "During the 2025 parliamentary campaign, Asdren Bytyqi opposed the legalization of same-sex marriages, stating 'we will not allow marriage between a man and a man, a woman and a woman.' This stance led to an €18,000 fine from Kosovo's Election Complaints and Appeals Panel, which Bytyqi condemned as an unprecedented restriction of free political speech.\n\nBytyqi filed appeals to the Supreme Court, defending such statements as constitutionally protected opinions. He argued that political discourse during elections must allow for diverse viewpoints on social issues, and that the fine represented a dangerous precedent for limiting political expression. The case highlighted tensions between election regulations and fundamental free speech rights." :
        language === 'al' ? 
        "Gjatë fushatës parlamentare të vitit 2025, Asdren Bytyqi kundërshtoi legalizimin e martesave me të njëjtin gjini, duke thënë 'ne nuk do të lejojmë martesë midis një burri dhe një burri, një gruaje dhe një gruaje.' Kjo qëndrim çoi në një gjobë prej 18,000 € nga Paneli i Ankesave dhe Ankimave të Zgjedhjeve të Kosovës, të cilën Bytyqi e dënoi si një kufizim të paparë të lirisë së shprehjes politike.\n\nBytyqi paraqiti ankesa në Gjykatën Supreme, duke mbrojtur deklarata të tilla si opinione të mbrojtura kushtetuesisht. Ai argumentoi se diskursi politik gjatë zgjedhjeve duhet të lejojë këndvështrime të ndryshme mbi çështjet sociale dhe se gjoba përfaqësonte një precedent të rrezikshëm për kufizimin e shprehjes politike. Rasti theksoi tensionet midis rregulloreve të zgjedhjeve dhe të drejtave themelore të lirisë së shprehjes." :
        language === 'de' ? 
        "Während des Parlamentswahlkampfs 2025 lehnte Asdren Bytyqi die Legalisierung gleichgeschlechtlicher Ehen ab und erklärte: 'Wir werden keine Ehe zwischen einem Mann und einem Mann, einer Frau und einer Frau zulassen.' Diese Haltung führte zu einer Geldstrafe von 18.000 € durch das kosovarische Wahlbeschwerde- und Berufungsgremium, die Bytyqi als beispiellose Einschränkung der freien politischen Meinungsäußerung verurteilte.\n\nBytyqi legte Beschwerde beim Obersten Gerichtshof ein und verteidigte solche Aussagen als verfassungsrechtlich geschützte Meinungen. Er argumentierte, dass der politische Diskurs während Wahlen unterschiedliche Standpunkte zu sozialen Fragen zulassen müsse und dass die Geldstrafe einen gefährlichen Präzedenzfall für die Einschränkung des politischen Ausdrucks darstelle. Der Fall beleuchtete Spannungen zwischen Wahlvorschriften und grundlegenden Meinungsfreiheitsrechten." :
        "2025 parlamento seçim kampanyası sırasında Asdren Bytyqi, eşcinsel evliliklerin yasallaştırılmasına karşı çıkarak 'bir erkekle erkek, bir kadınla kadın arasında evliliğe izin vermeyeceğiz' dedi. Bu durum, Kosova Seçim Şikayet ve İtiraz Kurulu tarafından 18.000 € para cezasına yol açtı ve Bytyqi bunu benzeri görülmemiş bir siyasi ifade özgürlüğü kısıtlaması olarak kınadı.\n\nBytyqi Anayasa Mahkemesi'ne itiraz etti ve bu tür açıklamaları anayasal olarak korunan görüşler olarak savundu. Seçimler sırasında siyasi söylemin sosyal konularda çeşitli bakış açılarına izin vermesi gerektiğini ve para cezasının siyasi ifadeyi sınırlandırmak için tehlikeli bir emsal teşkil ettiğini savundu. Dava, seçim düzenlemeleri ile temel ifade özgürlüğü hakları arasındaki gerilimleri vurguladı.",
      link: "https://telegrafi.com/en/It%27s-a-shame-to-marry-a-man-from-the-family-list%2C-he-tells-why-they-are-being-punished-by-the-police./#:~:text=On%20Debat%20Plus%2C%20Asdren%20Bytyqi%2C,marriage%2C%20expressed%20during%20the%20campaign",
      tags: ["Election Law", "Free Speech", "Constitutional Rights"]
    },
    {
      id: 3,
      title: language === 'en' ? "Landmark Femicide Case - Life Imprisonment" :
            language === 'al' ? "Rasti i Rëndësishëm i Femisidit - Burgim i Përjetshëm" :
            language === 'de' ? "Bahnbrechender Femizid-Fall - Lebenslange Haft" :
            "Önemli Kadın Cinayeti Davası - Müebbet Hapis",
      author: "Fehmije Gashi-Bytyqi",
      image: image3,
      type: "case",
      year: "2024",
      source: "Koha.net",
      content: language === 'en' ? 
        "Fehmije Gashi-Bytyqi represented the family of murder victim Gjyljeta Ukella and welcomed the Peja Court's decision to sentence the perpetrator, Edmond Lajçi, to life imprisonment. She praised the unprecedented life sentence as a 'lesson in how to treat the murders of women,' hoping it would set a strong example for deterring gender-based violence. While noting the convicted husband had pleaded guilty, she vowed to oppose any attempt to use that as a mitigating factor on appeal." :
        language === 'al' ? 
        "Fehmije Gashi-Bytyqi përfaqësoi familjen e viktimës së vrasjes Gjyljeta Ukella dhe e përshëndeti vendimin e Gjykatës së Pejës për dënimin e fajtorit, Edmond Lajçi, me burgim të përjetshëm. Ajo e lavdëroi dënimin e paparë me burgim të përjetshëm si një 'mësim se si të trajtohen vrasjet e grave,' duke shpresuar se do të vendosë një shembull të fortë për të penguar dhunën bazuar në gjini. Duke theksuar se bashkshorti i dënuar kishte pranuar fajin, ajo u betua se do të kundërshtonte çdo përpjekje për ta përdorur atë si faktor mitigues në ankim." :
        language === 'de' ? 
        "Fehmije Gashi-Bytyqi vertrat die Familie der Mordopfer Gjyljeta Ukella und begrüßte die Entscheidung des Gerichts in Peja, den Täter Edmond Lajçi zu lebenslanger Haft zu verurteilen. Sie lobte die beispiellose lebenslange Haftstrafe als 'Lektion im Umgang mit Frauenmorden' und hoffte, dass sie ein starkes Beispiel zur Abschreckung geschlechtsspezifischer Gewalt setzen würde. Während sie feststellte, dass der verurteilte Ehemann geständig war, schwor sie, jeden Versuch zu bekämpfen, dies bei der Berufung als mildernden Umstand zu verwenden." :
        "Fehmije Gashi-Bytyqi, cinayet kurbanı Gjyljeta Ukella'nın ailesini temsil etti ve Peja Mahkemesi'nin fail Edmond Lajçi'yi müebbet hapse mahkum etme kararını memnuniyetle karşıladı. Benzeri görülmemiş müebbet hapis cezasını 'kadın cinayetlerinin nasıl ele alınacağına dair bir ders' olarak övdü ve toplumsal cinsiyete dayalı şiddeti caydırmak için güçlü bir örnek oluşturmasını umdu. Mahkum edilen kocanın suçunu kabul ettiğini belirtirken, bunun temyizde hafifletici bir faktör olarak kullanılmasına karşı çıkacağına söz verdi.",
      link: "https://www.koha.net/arberi/avokatja-e-familjes-ukella-denimi-i-edmond-lajcit-mesim-si-te-trajtohen-vrasjet-e-grave#:~:text=%E2%80%9CGjithashtu%20kontribut%20meritor%20ka%20edhe,trupin%20gjykues%E2%80%9D%2C%20ka%20th%C3%ABn%C3%AB%20ajo"
    },
    {
      id: 4,
      title: language === 'en' ? "Police Conduct & Human Rights Advocacy" :
            language === 'al' ? "Sjellja e Policisë & Avokimi i të Drejtave të Njeriut" :
            language === 'de' ? "Polizeiliches Verhalten & Menschenrechtsadvocacy" :
            "Polis Davranışı ve İnsan Hakları Savunuculuğu",
      author: "Fehmije Gashi-Bytyqi",
      image: image4,
      type: "media",
      year: "2025",
      source: "Koha.net",
      content: language === 'en' ? 
        "Following a disturbing incident where a 27-year-old suspect died after police arrest in Lipjan, Fehmije Gashi-Bytyqi criticized the Kosovo Police for excessive use of force, stating the reaction of 'all those officers was not proportional' since the suspect 'did not appear to pose a serious threat.' She expressed dismay that emergency doctors reported the victim was kept handcuffed while needing urgent care and called the widely circulated video of officers beating a handcuffed man 'horrible to see.' Gashi-Bytyqi urged the Police Inspectorate to respond decisively and recommended heavier measures against the involved officers." :
        language === 'al' ? 
        "Pas një incidenti shqetësues ku një i dyshuar 27-vjeçar vdiq pas arrestimit nga policia në Lipjan, Fehmije Gashi-Bytyqi kritikoi Policinë e Kosovës për përdorimin e tepërt të forcës, duke thënë se reagimi i 'të gjithë atyre oficerëve nuk ishte proporcional' pasi i dyshuari 'nuk dukej paraqitur kërcënim serioz.' Ajo shprehu hidhërimin që mjekët e urgjencës raportuan se viktima u mbajt në pranga ndërsa kishte nevojë për kujdes urgjent dhe e quajti videon e përhapur gjerësisht të oficerëve që rrahin një burrë të lidhur në pranga 'tmerrë për t'u parë.' Gashi-Bytyqi iu drejtua Inspektoratit të Policisë të përgjigjet me vendosmëri dhe rekomandoi masa më të rënda kundër oficerëve të përfshirë." :
        language === 'de' ? 
        "Nach einem beunruhigenden Vorfall, bei dem ein 27-jähriger Verdächtiger nach einer Polizeifestnahme in Lipjan starb, kritisierte Fehmije Gashi-Bytyqi die Kosovo-Polizei wegen übermäßiger Gewaltanwendung und erklärte, die Reaktion 'all dieser Beamten war nicht verhältnismäßig', da der Verdächtige 'keine ernsthafte Bedrohung darzustellen schien'. Sie zeigte sich bestürzt darüber, dass Notärzte berichteten, das Opfer sei in Handschellen gehalten worden, obwohl dringende medizinische Versorgung erforderlich war, und nannte das weit verbreitete Video von Polizisten, die einen gefesselten Mann schlugen, 'schrecklich anzusehen'. Gashi-Bytyqi forderte die Polizeiinspektion auf, entschlossen zu reagieren und empfahl strengere Maßnahmen gegen die beteiligten Beamten." :
        "Lipjan'da polis gözaltısı sonrası 27 yaşındaki bir şüphelinin öldüğü rahatsız edici bir olayın ardından Fehmije Gashi-Bytyqi, Kosova Polisi'ni aşırı güç kullanmakla eleştirdi ve şüphelinin 'ciddi bir tehdit oluşturmuyor gibi göründüğü' için 'tüm bu memurların tepkisinin orantılı olmadığını' söyledi. Acil doktorlarının kurbanın acil bakıma ihtiyacı varken kelepçeli tutulduğunu bildirmesinden dehşete düştüğünü ifade etti ve memurların kelepçeli bir adamı dövdüğü yaygın olarak dolaşan videoyu 'izlemesi korkunç' olarak nitelendirdi. Gashi-Bytyqi, Polis Müfettişliği'ni kararlı bir şekilde yanıt vermeye çağırdı ve ilgili memurlara karşı daha ağır önlemler önerdi.",
      link: "https://www.koha.net/arberi/gashi-bytyqi-rastet-e-fundit-ia-kane-humbur-imazhin-e-mire-policise#:~:text=Avokatja%20Fehmije%20Gashi,s%C3%AB%20njeriut%20n%C3%AB%20%C3%A7far%C3%ABdo%20rrethane"
    },
    {
      id: 5,
      title: language === 'en' ? "War Crimes Justice at Specialist Chambers" :
            language === 'al' ? "Drejtësia për Krime Lufte në Dhomën e Specializuar" :
            language === 'de' ? "Kriegsverbrechenjustiz an Fachkammern" :
            "Uzman Dairelerde Savaş Suçları Adaleti",
      author: "Fehmije Gashi-Bytyqi",
      image: image5,
      type: "legal",
      year: "2023",
      source: "Frontonline.net",
      content: language === 'en' ? 
        "As an accredited defense counsel with the Kosovo Specialist Chambers in The Hague, Fehmije Gashi-Bytyqi provided expert commentary on the trial of Kosovo's former KLA leaders. She noted that the defendants themselves had cooperated with the court's establishment and believed in proving their innocence, predicting the trial 'will last very long' given the large number of witnesses and complexity of indictments. Importantly, she cautioned against politicizing the process, asserting it was too early to label the trial as politically motivated and that one must 'leave it to the court to decide in the end' based on evidence and law." :
        language === 'al' ? 
        "Si avokate e akredituar e mbrojtjes në Dhomën e Specializuar të Kosovës në Hagë, Fehmije Gashi-Bytyqi dha komente eksperte mbi gjyqin e ish-udhëheqësve të UÇK-së së Kosovës. Ajo vuri në dukje se të pandehurit vetë kishin bashkëpunuar me themelimin e gjykatës dhe besonin në vërtetimin e pafajësisë së tyre, duke parashikuar se gjyqi 'do të zgjasë shumë' duke pasur parasysh numrin e madh të dëshmitarëve dhe kompleksitetin e aktakuzave. E rëndësishme, ajo paralajmëroi kundër politizimit të procesit, duke pohuar se ishte shumë herët për ta etiketuar gjyqin si të motivuar politikisht dhe se duhet 't'i lihet gjykatës të vendosë në fund' bazuar në dëshmi dhe ligj." :
        language === 'de' ? 
        "Als akkreditierte Verteidigerin bei den Kosovo-Fachkammern in Den Haag lieferte Fehmije Gashi-Bytyqi Expertenkommentare zum Prozess gegen die ehemaligen UÇK-Führer des Kosovo. Sie stellte fest, dass die Angeklagten selbst mit der Einrichtung des Gerichts zusammengearbeitet hatten und daran glaubten, ihre Unschuld zu beweisen, und sagte voraus, dass der Prozess 'sehr lange dauern wird' angesichts der großen Anzahl von Zeugen und der Komplexität der Anklagen. Wichtig ist, dass sie davor warnte, den Prozess zu politisieren, und behauptete, es sei zu früh, den Prozess als politisch motiviert zu bezeichnen, und man müsse 'das Gericht am Ende entscheiden lassen' auf der Grundlage von Beweisen und Gesetzen." :
        "Lahey'deki Kosova Uzman Daireleri'nde akredite savunma avukatı olarak Fehmije Gashi-Bytyqi, Kosova'nın eski UÇK liderlerinin davası hakkında uzman yorumu sağladı. Sanıkların kendilerinin mahkemenin kurulmasıyla işbirliği yaptığını ve masumiyetlerini kanıtlamaya inandıklarını belirterek, çok sayıda tanık ve iddianamelerin karmaşıklığı göz önüne alındığında duruşmanın 'çok uzun süreceğini' tahmin etti. Önemli olarak, süreci politize etmeye karşı uyardı ve davayı siyasi motivasyonlu olarak nitelendirmenin çok erken olduğunu ve kanıt ve kanuna dayalı olarak 'sonunda karar vermeyi mahkemeye bırakmak gerektiğini' iddia etti.",
      link: "https://frontonline.net/avokatja-gashi-bytyqi-besoj-se-procesi-gjyqesor-ndaj-krereve-te-uck-se-do-te-zgjase-shume/#:~:text=Lidhur%20me%20k%C3%ABt%C3%AB%20ka%20folur,Bytyqi"
    },
    {
      id: 6,
      title: language === 'en' ? "Extradition & Legal Procedures Commentary" :
            language === 'al' ? "Koment për Ekstradimin & Procedurat Ligjore" :
            language === 'de' ? "Auslieferung & Rechtsverfahren Kommentar" :
            "İade ve Hukuki Prosedürler Yorumu",
      author: "Asdren Bytyqi",
      image: image1,
      type: "media",
      year: "2024",
      source: "Various Media",
      content: language === 'en' ? 
        "Asdren Bytyqi is frequently consulted by media to explain complex legal procedures. He has commented on international extradition cases, noting that Kosovo maintains extradition treaties with a limited number of countries and that authorities must follow careful legal steps before requesting or executing an extradition. His media appearances also include analysis of justice sector reforms - he has critiqued aspects of Kosovo's draft Law on Salaries for public sector employees, pointing out categorization mistakes affecting the judiciary. Additionally, Bytyqi has joined other jurists in scrutinizing officials' statements, such as rebuking unfounded claims that Serbia orchestrated prison escapes." :
        language === 'al' ? 
        "Asdren Bytyqi shpesh konsultohet nga mediat për të shpjeguar procedura komplekse ligjore. Ai ka komentuar mbi rastet ndërkombëtare të ekstradimit, duke theksuar se Kosova mban marrëveshje ekstradimi me një numër të kufizuar vendesh dhe se autoritetet duhet të ndjekin hapa të kujdesshëm ligjorë përpara se të kërkojnë ose ekzekutojnë një ekstradim. Paraqitjet e tij mediatike përfshijnë gjithashtu analizën e reformave në sektorin e drejtësisë - ai ka kritikuar aspekte të draft-ligjit të Kosovës për Pagat për punonjësit e sektorit publik, duke theksuar gabime kategorizimi që prekin gjyqësorinë. Për më tepër, Bytyqi i është bashkuar juristëve të tjerë në shqyrtimin e deklaratave të zyrtarëve, siç është qortimi i pretendimeve të pabazuara se Serbia organizoi arratiset nga burgu." :
        language === 'de' ? 
        "Asdren Bytyqi wird häufig von den Medien konsultiert, um komplexe Rechtsverfahren zu erläutern. Er hat zu internationalen Auslieferungsfällen Stellung genommen und darauf hingewiesen, dass der Kosovo Auslieferungsabkommen mit einer begrenzten Anzahl von Ländern unterhält und dass die Behörden vor der Beantragung oder Durchführung einer Auslieferung sorgfältige rechtliche Schritte befolgen müssen. Seine Medienauftritte umfassen auch Analysen von Reformen im Justizsektor - er hat Aspekte des kosovarischen Entwurfs des Gesetzes über die Gehälter für Beschäftigte des öffentlichen Sektors kritisiert und darauf hingewiesen, dass Kategorisierungsfehler die Justiz betreffen. Darüber hinaus hat sich Bytyqi anderen Juristen angeschlossen, um Äußerungen von Beamten zu überprüfen, wie z. B. die Zurückweisung unbegründeter Behauptungen, dass Serbien Gefängnisausbrüche orchestriert habe." :
        "Asdren Bytyqi, karmaşık hukuki prosedürleri açıklamak için sıklıkla medya tarafından danışılıyor. Uluslararası iade davaları hakkında yorum yapmış, Kosova'nın sınırlı sayıda ülkeyle iade anlaşmaları bulunduğunu ve yetkililerin bir iade talep etmeden veya yerine getirmeden önce dikkatli yasal adımları izlemesi gerektiğini belirtmiştir. Medya görünümleri ayrıca adalet sektörü reformlarının analizini içeriyor - Kosova'nın kamu sektörü çalışanları için Maaşlar Taslak Kanunu'nun yargıyı etkileyen kategorizasyon hatalarına işaret ederek yönlerini eleştirdi. Ayrıca Bytyqi, Sırbistan'ın hapishane kaçışlarını düzenlediğine dair asılsız iddiaları yerdiği gibi, yetkililerin açıklamalarını incelemek için diğer hukukçulara katıldı.",
      link: "https://telegrafi.com/en/the-content-of-the-wage-bill-is-criticized%2C-it-may-end-up-in-the-constitutional-court/#:~:text=Telegrafi%20telegrafi,the%20mistakes%20he%20says"
    }
    // ... include other cases with similar enhanced content structure
  ];

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const handleCaseClick = (caseItem) => {
    setSelectedCase(caseItem);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCase(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  const getTypeBadgeColor = (type) => {
    switch(type) {
      case 'case': return 'bg-red-100 text-red-800';
      case 'media': return 'bg-blue-100 text-blue-800';
      case 'legal': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeText = (type) => {
    switch(type) {
      case 'case': 
        return language === 'en' ? 'Legal Case' :
               language === 'al' ? 'Rast Ligjor' :
               language === 'de' ? 'Rechtsfall' :
               'Hukuki Dava';
      case 'media': 
        return language === 'en' ? 'Media Commentary' :
               language === 'al' ? 'Koment Mediatik' :
               language === 'de' ? 'Medienkommentar' :
               'Medya Yorumu';
      case 'legal': 
        return language === 'en' ? 'Legal Analysis' :
               language === 'al' ? 'Analizë Ligjore' :
               language === 'de' ? 'Rechtsanalyse' :
               'Hukuki Analiz';
      default: return type;
    }
  };

  return (
    <>
      <section id="notable-cases" className="px-4 sm:px-6 md:px-8 py-10 md:py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.notableCases?.title || 
               (language === 'en' ? "Notable Cases & Media Commentary" :
                language === 'al' ? "Raste të Shquara & Komente Mediatike" :
                language === 'de' ? "Bemerkenswerte Fälle & Medienkommentare" :
                "Önemli Davalar ve Medya Yorumları")}
            </h2>
            <div className="w-24 h-1 bg-[#FFD700] mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {language === 'en' ? "High-profile legal cases and media appearances showcasing our attorneys' expertise and commitment to justice" :
               language === 'al' ? "Raste të njohura ligjore dhe paraqitje mediatike që tregojnë ekspertizën dhe përkushtimin e avokatëve tanë për drejtësi" :
               language === 'de' ? "Hochkarätige Rechtsfälle und Medienauftritte, die die Expertise und das Engagement unserer Anwälte für Gerechtigkeit zeigen" :
               "Avukatlarımızın uzmanlığını ve adalete bağlılığını sergileyen üst düzey hukuki davalar ve medya görünümleri"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {notableCases.slice(0, visibleCount).map((item) => (
              <div
                key={item.id}
                onClick={() => handleCaseClick(item)}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 overflow-hidden group"
              >
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeBadgeColor(item.type)}`}>
                      {getTypeText(item.type)}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-800 text-white">
                      {item.year}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-500 text-sm font-medium">{item.source}</span>
                    <span className="text-[#FFD700] font-semibold text-sm">{item.author}</span>
                  </div>
                  
                  <h3 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-[#FFD700] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {item.content.split('\n')[0]} {/* Show only first paragraph */}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="text-[#FFD700] font-semibold hover:text-yellow-600 transition-colors flex items-center space-x-1 text-sm">
                      <span>
                        {language === 'en' ? "Read more" :
                         language === 'al' ? "Lexo më shumë" :
                         language === 'de' ? "Mehr lesen" :
                         "Devamını oku"}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                    
                    {item.link && item.link !== '#' && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 text-xs flex items-center space-x-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Source</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                
                {/* Hover effect border */}
                <div className="h-1 bg-gradient-to-r from-[#FFD700] to-yellow-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </div>
            ))}
          </div>

          {visibleCount < notableCases.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={handleSeeMore}
                className="px-8 py-3 bg-[#FFD700] hover:bg-yellow-600 text-gray-900 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>
                  {language === 'en' ? "Load More Cases" :
                   language === 'al' ? "Ngarko Më Shumë Raste" :
                   language === 'de' ? "Weitere Fälle Laden" :
                   "Daha Fazla Dava Yükle"}
                </span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Case Detail Modal */}
      {isModalOpen && selectedCase && (
        <CaseDetailModal 
          caseItem={selectedCase} 
          onClose={handleCloseModal}
          language={language}
        />
      )}
    </>
  );
}