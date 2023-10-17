<template>
  <div class="privacy wrapper margined">
    <h1
      class="page-title"
      v-html="translates[ln].title"
    />
    <section
      v-for="section in sections"
      :key="section.id"
      class="privacy-section"
    >
      <h2
        v-if="section.title"
        class="privacy-section-title"
        v-html="`${section.id}. ${section.title[ln]}`"
      />
      <p
        class="privacy-section-content"
        v-html="section.content[ln]"
      />
    </section>
  </div>
</template>

<script setup>
const store = useMainStore()
const ln = computed(() => store.language)

const sections = [
  {
    id: 1,
    title: {
      en: 'Data protection at a glance',
      de: 'Datenschutz auf einen Blick',
      hr: 'Kratki pregled privatnosti'
    },
    content: {
      en: `
        <h4>General information</h4>
        The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is all data with which you can be personally identified. For detailed information on the subject of data protection, please refer to our privacy policy listed under this text.
        <h4>Data collection on our website</h4>
        <b>Who is responsible for the data collection on this website?</b>
        The data processing on this website is carried out by the website operator. You can find his contact details in the imprint of this website.
        <b>How do we collect your data?</b>
        On the one hand, your data is collected by the fact that you provide it to us. This may be, for example, data that you enter in a contact form.<br><br>
        Other data is automatically collected by our IT systems when you visit the website. These are mainly technical data (e.g. Internet browser, operating system or time of the page call). This data is collected automatically as soon as you enter our website.
        <b>What do we use your data for?</b>
        Some of the data is collected to ensure the error-free provision of the website. Other data can be used to analyze your user behavior.
        <b>What rights do you have regarding your data?</b>
        You have the right to receive information about the origin, recipient and purpose of your stored personal data free of charge at any time. You also have the right to request the correction, blocking or deletion of this data. For this as well as for further questions on the subject of data protection, you can contact us at any time at the address given in the imprint. Furthermore, you have a right of appeal to the competent supervisory authority.<br><br>
        In addition, you have the right to request the restriction of the processing of your personal data under certain circumstances. For details, see the privacy policy under "Right to restriction of processing".
        <h4>Analysis tools and third-party tools</h4>
        When you visit our website, your surfing behavior can be statistically evaluated. This happens mainly with cookies and with so-called analysis programs. The analysis of your surfing behavior is usually anonymous; the surfing behavior cannot be traced back to you. You can object to this analysis or prevent it by not using certain tools. Detailed information can be found in the following privacy policy.<br><br>
        You can object to this analysis. We will inform you about the possibilities of objection in this data protection declaration.
      `,
      de: `
        <h4>Allgemeine Hinweise</h4>
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        <h4>Datenerfassung auf unserer Website</h4>
        <b>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</b>
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
        <b>Wie erfassen wir Ihre Daten?</b>
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.<br><br>
        Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
        <b>Wofür nutzen wir Ihre Daten?</b>
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        <b>Welche Rechte haben Sie bezüglich Ihrer Daten?</b>
        Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.<br><br>
        Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf Einschränkung der Verarbeitung“.
        <h4>Analyse-Tools und Tools von Drittanbietern</h4>
        Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit Cookies und mit sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen zurückverfolgt werden. Sie können dieser Analyse widersprechen oder sie durch die Nichtbenutzung bestimmter Tools verhindern. Detaillierte Informationen dazu finden Sie in der folgenden Datenschutzerklärung.<br><br>
        Sie können dieser Analyse widersprechen. Über die Widerspruchsmöglichkeiten werden wir Sie in dieser Datenschutzerklärung informieren.
      `,
      hr: `
        <h4>Opće napomene</h4>
        Napomene u nastavku pružaju jednostavan pregled onoga što se događa s vašim osobnim podacima kada posjetite našu internetsku stranicu. Osobni podaci su sve informacije koje se mogu koristiti za identifikaciju vašeg identiteta. Pojedinosti o zaštiti podataka potražite u našim Pravilima o privatnosti navedenim u nastavku u ovom tekstu.
        <h4>Prikupljanje podataka na našoj internetskoj stranici</h4>
        <b>Tko je odgovoran za prikupljanje podataka na ovoj internetskoj stranici?</b>
        Obradu podataka na ovoj internetskoj stranici obavlja operater internetske stranice. Njegove podatke za kontakt možete pogledati u izlazima ove internetske stranice.
        <b>Kako prikupljamo vaše podatke?</b>
        Prvo, vaši se podaci prikupljaju kao rezultat dijeljenja s nama. To mogu biti, na primjer, podaci koje unesete u obrazac za kontakt.<br><br>
        Ostale podatke automatski prikupljaju naši IT sustavi prilikom posjeta internetskoj stranici. To su prije svega tehnički podaci (poput internetskog preglednika, operativnog sustava ili vremena pregledavanja stranice). Prikupljanje tih podataka vrši se automatski čim posjetite našu internetsku stranicu.
        <b>Za što Koristimo vaše podatke?</b>
        Dio podataka prikuplja se kako bi se osigurala besprijekorna usluga internetske stranice. Ostali podaci mogu se koristiti za analizu vašeg korisničkog ponašanja.
        <b>Koja prava imate u vezi sa svojim podacima?</b>
        Imate pravo u bilo kojem trenutku besplatno dobiti informacije o podrijetlu, primatelju i svrsi vaših pohranjenih osobnih podataka. Također imate pravo zatražiti ispravak, blokiranje ili brisanje tih podataka. U tu svrhu, kao i za druga pitanja vezana uz privatnost, možete nas kontaktirati u bilo kojem trenutku na adresu navedenu u izlazu. Osim toga, imate pravo podnijeti žalbu nadležnom nadzornom tijelu.<br><br>
        Osim toga, imate pravo zahtijevati ograničenje obrade vaših osobnih podataka pod određenim okolnostima. Pojedinosti potražite u Pravilima o privatnosti u odjeljku "pravo na ograničenje obrade".
        <h4>Alati za analitiku i alati trećih strana</h4>
        Kada posjetite našu internetsku stranicu, vaše ponašanje pregledavanja može se statistički procijeniti. To se događa uglavnom putem datoteka s AD-om i takozvanih analitičkih programa. Analiza vašeg internetskog ponašanja obično se provodi anonimno; nije moguće pratiti vaše internetsko ponašanje. Možete se usprotiviti ovoj analizi ili je spriječiti ne korištenjem određenih alata. Pojedinosti o tome možete pronaći u Pravilima o privatnosti u nastavku.<br><br>
        Možda se ne slažete s ovom analizom. Obavijestit ćemo vas o mogućnostima prigovora u ovim Pravilima o privatnosti.
      `
    }
  },
  {
    id: 2,
    title: {
      en: 'General information and mandatory information',
      de: 'Allgemeine Hinweise und Pflichtinformationen',
      hr: 'Opće upute i obvezne informacije'
    },
    content: {
      en: `
        <h4>Privacy</h4>
        The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this data protection declaration.<br><br>
        If you use this website, various personal data will be collected. Personal data is data with which you can be personally identified. This privacy policy explains which data we collect and what we use it for. She also explains how and for what purpose this is done.<br><br>
        We would like to point out that data transmission over the Internet (e.g. when communicating by e-mail) may have security gaps. A complete protection of the data against access by third parties is not possible.
        <h4>Note on the responsible body</h4>
        The responsible body for data processing on this website is:<br><br>
        Alexei Erlich, Dieter Esau<br>
        Paul-Forbach-Str. 2<br>
        97616 Bad Neustadt a. d. Saale<br><br>
        Phone: +49 (0) 9771 6372633<br>
        E-Mail: info@adites.de<br><br>
        The responsible body is the natural or legal person who, alone or together with others, determines the purposes and means of the processing of personal data (e.g. names, e-mail addresses, etc.) decide.
        <h4>Revocation of your consent to data processing</h4>
        Many data processing operations are only possible with your express consent. You can revoke an already given consent at any time. An informal message by e-mail to us is sufficient for this. The legality of the data processing carried out until the revocation remains unaffected by the revocation.
        <h4>Right to object to the collection of data in special cases as well as to direct advertising (Art. 21 GDPR)</h4>
        <b>If the data processing is based on Art. 6 para. 1 lit. e or f DSGVO, you have the right at any time to object to the processing of your personal data for reasons arising from your particular situation; this also applies to profiling based on these provisions. The respective legal basis on which processing is based can be found in this data protection declaration. If you object, we will no longer process your personal data concerned, unless we can prove compelling reasons worthy of protection for the processing that outweigh your interests, rights and freedoms or the processing serves to assert, exercise or defend legal claims (objection pursuant to Art. 21 para. 1 GDPR).</b>
        <b>If your personal data is processed for direct marketing purposes, you have the right to object at any time to the processing of personal data concerning you for the purpose of such advertising; this also applies to profiling, insofar as it is related to such direct marketing. If you object, your personal data will then no longer be used for the purpose of direct advertising (objection pursuant to Art. 21 para. 2 GDPR).</b>
        <h4>Right of appeal to the competent supervisory authority</h4>
        In the event of violations of the GDPR, the data subjects have a right of appeal to a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged violation. The right of appeal exists without prejudice to other administrative or judicial remedies.
        <h4>Right to data portability</h4>
        You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of the data to another person responsible, this will only take place if it is technically feasible.
        <h4>SSL or TLS encryption</h4>
        For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from “http://” to “https://” and by the lock symbol in your browser line.<br><br>
        If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
        <h4>Information, blocking, deletion and correction</h4>
        Within the framework of the applicable legal provisions, you have the right to free information about your stored personal data, their origin and recipient and the purpose of data processing at any time and, if necessary, a right to correction, blocking or deletion of this data. For this as well as for further questions on the subject of personal data, you can contact us at any time at the address given in the imprint.
        <h4>Right to restriction of processing</h4>
        You have the right to request the restriction of the processing of your personal data. For this purpose, you can contact us at any time at the address given in the imprint. The right to restriction of processing exists in the following cases:
        <ul>
          <li>If you dispute the accuracy of your personal data stored by us, we usually need time to verify this. For the duration of the examination, you have the right to request the restriction of the processing of your personal data.</li>
          <li>If the processing of your personal data was / is carried out unlawfully, you can request the restriction of data processing instead of deletion.</li>
          <li>If we no longer need your personal data, but you need it to exercise, defend or assert legal claims, you have the right to request the restriction of the processing of your personal data instead of deletion.</li>
          <li>If you have filed an objection pursuant to Art. 21 para. 1 DSGVO, a balance must be made between your and our interests. As long as it has not yet been determined whose interests prevail, you have the right to request the restriction of the processing of your personal data.</li>
        </ul>
        If you have restricted the processing of your personal data, this data may only be processed – apart from its storage – with your consent or for the assertion, exercise or defense of legal claims or for the protection of the rights of another natural or legal person or for reasons of an important public interest of the European Union or a Member State.
      `,
      de: `
        <h4>Datenschutz</h4>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.<br><br>
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.<br><br>
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
        <h4>Hinweis zur verantwortlichen Stelle</h4>
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br><br>
        Alexei Erlich, Dieter Esau<br>
        Paul-Forbach-Str. 2<br>
        97616 Bad Neustadt a. d. Saale<br><br>
        Telefon: +49 (0) 9771 6372633<br>
        E-Mail: info@adites.de<br><br>
        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
        <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        <h4>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung (Art. 21 DSGVO)</h4>
        <b>Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs. 1 DSGVO).</b>
        <b>Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).</b>
        <h4>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        <h4>Recht auf Datenübertragbarkeit</h4>
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        <h4>SSL- bzw. TLS-Verschlüsselung</h4>
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von “http://” auf “https://” wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.<br><br>
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
        <h4>Auskunft, Sperrung, Löschung und Berichtigung</h4>
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
        <h4>Recht auf Einschränkung der Verarbeitung</h4>
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
        <ul>
          <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
          <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah / geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
          <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
          <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        </ul>
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
      `,
      hr: `
        <h4>Zaštita podataka</h4>
        Operateri ovih stranica vrlo ozbiljno shvaćaju zaštitu vaših osobnih podataka. Vaše osobne podatke obrađujemo povjerljivo i u skladu sa zakonskim odredbama o zaštiti podataka i ovim Pravilima o privatnosti.<br><br>
        Kada koristite ovu internetsku stranicu, prikupljaju se razni osobni podaci. Osobni podaci su podaci koji se mogu koristiti za identifikaciju vašeg identiteta. Ova Politika privatnosti objašnjava koje podatke prikupljamo i za što ih koristimo. Ona također objašnjava kako i u koju svrhu se to radi.<br><br>
        Napominjemo da prijenos podataka putem Interneta (na primjer, u komunikaciji putem e-pošte) može imati nedostatke u sigurnosnom sustavu. Potpuna zaštita podataka od pristupa trećih strana nije moguća.
        <h4>Obavijest nadležnog tijela</h4>
        Odgovorna osoba za obradu podataka na ovoj internetskoj stranici je:<br><br>
        Aleksej Erlich, Dieter Ezav<br>
        Paul Forbach-ulica 2<br>
        97616 Bad Neustadt A. D. Saale<br><br>
        Telefon: + 49 (0) 9771 6372633<br>
        E-mail: info@adites.de<br><br>
        Odgovorna osoba je fizička ili pravna osoba koja samostalno ili zajedno s drugima odlučuje o svrsi i sredstvima obrade osobnih podataka (npr.imena, adrese e-pošte itd.).
        <h4>Povlačenje vašeg pristanka na obradu podataka</h4>
        Mnoge operacije obrade podataka moguće su samo uz vaš izričiti pristanak. Pristanak koji ste već dali možete povući u bilo kojem trenutku. Da biste to učinili, samo nam pošaljite neformalnu obavijest e-poštom. Opoziv ne utječe na zakonitost obrade podataka izvršene prije opoziva.
        <h4>Pravo na prigovor na prikupljanje podataka u posebnim slučajevima, kao i na izravnu poštu (članak 21. Opće uredbe o zaštiti podataka)</h4>
        <b>Ako se obrada podataka provodi na temelju članka 6. stavka. 1 lit. ako se izvrši ADN ili ADN, imate pravo u bilo kojem trenutku prigovoriti obradi vaših osobnih podataka iz razloga koji se odnose na vašu specifičnu situaciju; to se također odnosi na profiliranje na temelju ovih odredbi. Odgovarajuća pravna osnova na kojoj se temelji obrada navedena je u ovim Pravilima o privatnosti. Ako podnesete prigovor, prestat ćemo obrađivati vaše osobne podatke, osim ako ne možemo dokazati valjane pravne razloge za obradu koji premašuju vaše interese, prava i slobode ili ako obrada nije namijenjena predstavljanju, ostvarivanju ili obrani pravnih zahtjeva (prigovor u skladu s člankom 21.stavkom. 1 GDPR).</b>
        <b>Ako se vaši osobni podaci obrađuju u svrhu izravnog oglašavanja, imate pravo u bilo kojem trenutku prigovoriti obradi vaših osobnih podataka u svrhu takvog oglašavanja; to se također odnosi na profiliranje ako je povezano s takvim izravnim oglašavanjem. Ako se protivite, vaši se osobni podaci više neće koristiti u svrhu izravne pošte (prigovor u skladu s člankom 21.stavkom. 2 GDPR).</b>
        <h4>Pravo na podnošenje žalbe nadležnom nadzornom tijelu</h4>
        U slučaju kršenja AD-a, subjekti podataka imaju pravo podnijeti žalbu nadzornom tijelu, posebno u državi članici u kojoj obično borave, na mjestu zaposlenja ili na mjestu navodnog kršenja. Pravo na žalbu postoji ne dovodeći u pitanje druge upravne ili sudske lijekove.
        <h4>Pravo na prenosivost podataka</h4>
        Imate pravo na prijenos podataka koje obrađujemo automatski na temelju vašeg pristanka ili u skladu s ugovorom vama ili trećoj strani u uobičajenom strojno čitljivom formatu. Ako tražite izravan prijenos podataka drugoj odgovornoj osobi, to se radi samo u onoj mjeri u kojoj je to tehnički moguće.
        <h4>Enkripcija prema protokolu NP ili NP</h4>
        Radi sigurnosti i zaštite prijenosa osjetljivih sadržaja, kao što su narudžbe ili zahtjevi koje nam šaljete kao operateru stranice, ova stranica koristi protokol ili enkripciju. Šifriranje prema protokolu. Šifriranu vezu prepoznajete promjenom adresne trake preglednika iz" ' S:// "U' S://" i ikonom lokota u traci preglednika.<br><br>
        Ako je omogućena enkripcija aliasa ili aliasa, treće strane ne mogu pročitati podatke koje nam prenesete.
        <h4>Pristup, zaključavanje, brisanje i ispravljanje</h4>
        Imate pravo u bilo kojem trenutku, u skladu s važećim zakonom, dobiti besplatne informacije o svojim pohranjenim osobnim podacima, njihovom podrijetlu i primateljima, kao i svrsi obrade podataka i, ako je potrebno, pravo na ispravak, blokiranje ili brisanje tih podataka. U tu svrhu, kao i za druga pitanja u vezi s osobnim podacima, možete nas kontaktirati u bilo kojem trenutku na adresu navedenu u izlazu.
        <h4>Pravo na ograničenje obrade</h4>
        Imate pravo zahtijevati ograničenje obrade vaših osobnih podataka. Da biste to učinili, možete nas kontaktirati u bilo kojem trenutku na adresu navedenu u izlazu. Pravo na ograničenje obrade dodjeljuje se u sljedećim slučajevima:
        <ul>
          <li>Ako osporavate točnost svojih osobnih podataka koje čuvamo, obično nam treba vremena da to provjerimo. Za vrijeme revizije imate pravo zahtijevati ograničenje obrade vaših osobnih podataka.</li>
          <li>Ako se obrada vaših osobnih podataka dogodila / dogodi nezakonito, možete zatražiti ograničenje obrade podataka umjesto brisanja.</li>
          <li>Ako nam više nisu potrebni vaši osobni podaci, ali su vam potrebni za provedbu, zaštitu ili podnošenje pravnih zahtjeva, imate pravo zahtijevati ograničenje obrade vaših osobnih podataka umjesto da ih brišete.</li>
          <li>Ako podnesete prigovor u skladu s člankom 21.stavkom. Ako ste podnijeli zahtjev u skladu s člankom 1.Opće uredbe o zaštiti podataka, potrebno je osigurati ravnotežu između vaših i naših interesa. Dok se ne utvrdi čiji interesi prevladavaju, imate pravo zahtijevati ograničenje obrade vaših osobnih podataka.</li>
        </ul>
        Ako ste ograničili obradu svojih osobnih podataka, ti se podaci mogu obrađivati – osim pohranjivanja – samo uz vaš pristanak ili radi podnošenja, ostvarivanja ili zaštite pravnih zahtjeva ili radi zaštite prava druge fizičke ili pravne osobe ili iz razloga važnog javnog interesa Europske Unije ili države članice.
      `
    }
  },
  {
    id: 3,
    title: {
      en: 'Data collection on our website',
      de: 'Datenerfassung auf unserer Website',
      hr: 'Prikupljanje podataka na našoj internetskoj stranici'
    },
    content: {
      en: `
        <h4>Cookies</h4>
        The Internet pages partly use so-called cookies. Cookies do not cause any damage to your computer and do not contain viruses. Cookies are used to make our offer more user-friendly, effective and secure. Cookies are small text files that are stored on your computer and stored by your browser.<br><br>
        Most of the cookies we use are so-called ”session cookies". They will be automatically deleted after the end of your visit. Other cookies remain stored on your device until you delete them. These cookies allow us to recognize your browser the next time you visit.<br><br>
        You can set your browser so that you are informed about the setting of cookies and allow cookies only in individual cases, exclude the acceptance of cookies for certain cases or in general, and activate the automatic deletion of cookies when closing the browser. If cookies are deactivated, the functionality of this website may be restricted.<br><br>
        Cookies that are required to carry out the electronic communication process or to provide certain functions you have requested (e.g. shopping cart function) are stored on the basis of Art. 6 para. 1 lit. f DSGVO is stored. The website operator has a legitimate interest in the storage of cookies for the technically error-free and optimized provision of its services. If other cookies (e.g. cookies for analyzing your surfing behavior) are stored, they will be treated separately in this privacy policy.
        <h4>Server log files</h4>
        The provider of the pages automatically collects and stores information in so-called server log files, which your browser automatically transmits to us. These are:
        <ul>
          <li>Browser type and browser version</li>
          <li>operating system used</li>
          <li>Referrer URL</li>
          <li>Hostname of the accessing computer</li>
          <li>Time of the server request</li>
          <li>IP address</li>
        </ul>
        This data will not be merged with other data sources.<br><br>
        This data is collected on the basis of Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in the technically error–free presentation and optimization of his website - for this purpose, the server log files must be recorded.
        <h4>Contact form</h4>
        If you send us inquiries via the contact form, your details from the inquiry form, including the contact details you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We will not pass on this data without your consent.<br><br>
        The processing of the data entered in the contact form is therefore carried out exclusively on the basis of your consent (Art. 6 para. 1 lit. a DSGVO). You can revoke this consent at any time. An informal message by e-mail to us is sufficient for this. The legality of the data processing operations carried out until the revocation remains unaffected by the revocation.<br><br>
        The data entered by you in the contact form will remain with us until you request us to delete it, revoke your consent to storage or the purpose for data storage no longer applies (e.g. after your request has been processed). Mandatory legal provisions – in particular retention periods - remain unaffected.
      `,
      de: `
        <h4>Cookies</h4>
        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.<br><br>
        Die meisten der von uns verwendeten Cookies sind so genannte “Session-Cookies”. Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.<br><br>
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.<br><br>
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs oder zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z.B. Warenkorbfunktion) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Soweit andere Cookies (z.B. Cookies zur Analyse Ihres Surfverhaltens) gespeichert werden, werden diese in dieser Datenschutzerklärung gesondert behandelt.
        <h4>Server-Log-Dateien</h4>
        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        <ul>
          <li>Browsertyp und Browserversion</li>
          <li>verwendetes Betriebssystem</li>
          <li>Referrer URL</li>
          <li>Hostname des zugreifenden Rechners</li>
          <li>Uhrzeit der Serveranfrage</li>
          <li>IP-Adresse</li>
        </ul>
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.<br><br>
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
        <h4>Kontaktformular</h4>
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.<br><br>
        Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt somit ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können diese Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.<br><br>
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
      `,
      hr: `
        <h4>Kolačići</h4>
        Neke internetske stranice koriste takozvane datoteke. Datoteke br. ne štete vašem računalu i ne sadrže viruse. Datoteke se koriste kako bi naša ponuda bila praktičnija, učinkovitija i sigurnija. Datoteke Air su male tekstualne datoteke koje su pohranjene na vašem računalu i koje vaš preglednik sprema.<br><br>
        Većina datoteka koje koristimo su takozvane "datoteke sesije". Oni će se automatski izbrisati nakon završetka vašeg posjeta. Ostale datoteke A-liste spremaju se na vaš uređaj dok ih ne izbrišete. Ove datoteke A-liste omogućuju nam da prepoznamo vaš preglednik sljedeći put kada ga posjetimo.<br><br>
        Svoj preglednik možete konfigurirati tako da prima obavijesti o instaliranju datoteka A-liste i dopušta upotrebu A-liste samo u odabranim slučajevima, isključuje prihvaćanje A-liste u određenim slučajevima ili uopće i uključuje automatsko brisanje A-liste kada zatvorite preglednik. Ako onemogućite datoteke A. M.-a, funkcionalnost ove internetske stranice može biti ograničena.<br><br>
        Datoteke koje su potrebne za provođenje procesa elektroničke komunikacije ili za pružanje određenih funkcija koje tražite (npr.funkcija košarice) obrađuju se na temelju članka 6. stavka. spremljeno u 1 litru. Opća uredba o zaštiti podataka. Operator internetske stranice ima legitiman interes za pohranu datoteka A. M. za tehnički besprijekorno i optimizirano pružanje svojih usluga. Što se tiče ostalih datoteka A-liste (poput Datoteka a-liste koje se koriste za analizu vašeg internetskog ponašanja), one se zasebno razmatraju u ovim Pravilima o privatnosti.
        <h4>Datoteke dnevnika poslužitelja</h4>
        Davatelj internetskih stranica automatski prikuplja i pohranjuje podatke u takozvane datoteke dnevnika poslužitelja koje nam vaš preglednik automatski prenosi. To su:
        <ul>
          <li>Vrsta preglednika i verzija preglednika</li>
          <li>korištena operacijska dvorana</li>
          <li>sustav Broj-Adresa preporuke</li>
          <li>Naziv hosta računala kojem se pristupa</li>
          <li>Vrijeme zahtjeva poslužitelja</li>
          <li>Adresa</li>
        </ul>
        Spajanje ovih podataka s drugim izvorima podataka ne uspijeva.<br><br>
        Prikupljanje tih podataka provodi se na temelju stavka 6.članka. 1 lit. f GDPR. Operator internetske stranice ima legitiman interes za osiguravanje tehnički besprijekornog prikaza i optimizacije svoje internetske stranice - za to je potrebno prikupiti datoteke dnevnika poslužitelja.
        <h4>Kontakt obrazac</h4>
        Ako nam pošaljete upite putem obrasca za kontakt, vaši podaci iz obrasca za upit, uključujući podatke za kontakt koje ste tamo naveli, spremaju se kod nas za obradu zahtjeva i u slučaju dodatnih pitanja. Te podatke ne dijelimo bez vašeg pristanka.<br><br>
        Stoga se obrada podataka unesenih u obrazac za kontakt provodi isključivo na temelju vašeg pristanka (članak 6.stavak. 1. dio Opće uredbe o zaštiti podataka). Ovaj pristanak možete povući u bilo kojem trenutku. Da biste to učinili, samo nam pošaljite neformalnu obavijest e-poštom. Opoziv ne utječe na zakonitost operacija obrade podataka izvršenih prije opoziva.<br><br>
        Podaci koje unesete u obrazac za kontakt ostaju s nama dok ne zatražite da ih izbrišemo, opozovemo vaš pristanak na pohranu ili ne postignemo svrhu pohrane podataka (na primjer, nakon završetka obrade vašeg zahtjeva). Obvezne zakonske odredbe, posebno razdoblja zadržavanja, ostaju nepromijenjene.
      `
    }
  },
  {
    id: 4,
    title: {
      en: 'Plugins and Tools',
      de: 'Plugins und Tools',
      hr: 'Dodaci i Alati'
    },
    content: {
      en: `
        <h4>YouTube with extended data protection</h4>
        Our website uses plugins from the YouTube website. The operator of the pages is YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, United States.<br><br>
        We use YouTube in the extended data protection mode. According to YouTube, this mode means that YouTube does not store any information about visitors to this website before they watch the video. However, the transfer of data to YouTube partners is not necessarily excluded by the extended data protection mode. This is how YouTube establishes a connection to the Google DoubleClick network – regardless of whether you are watching a video.<br><br>
        As soon as you start a YouTube video on our website, a connection to the YouTube servers is established. The YouTube server will be informed which of our pages you have visited. If you are logged into your YouTube account, you enable YouTube to assign your surfing behavior directly to your personal profile. You can prevent this by logging out of your YouTube account.<br><br>
        Furthermore, YouTube can store various cookies on your device after starting a video. With the help of these cookies, YouTube can receive information about visitors to our website. This information is used, among other things, to collect video statistics, to improve user-friendliness and to prevent fraud attempts. The cookies remain on your device until you delete them.<br><br>
        If necessary, further data processing operations can be triggered after the start of a YouTube video, over which we have no influence.<br><br>
        The use of YouTube is in the interest of an appealing presentation of our online offers. This constitutes a legitimate interest within the meaning of Art. 6 para. 1 lit. f DSGVO.<br><br>
        Further information about data protection at YouTube can be found in their privacy policy at: <a href="https://www.youtube.com/t/privacy_at_youtube">https://www.youtube.com/t/privacy_at_youtube</a>.
        <h4>Google Web Fonts</h4>
        This site uses so-called web fonts provided by Google for the uniform display of fonts. When you call up a page, your browser loads the required web fonts into your browser cache in order to display texts and fonts correctly.<br><br>
        For this purpose, the browser you are using must connect to Google's servers. As a result, Google becomes aware that our website has been accessed via your IP address. The use of Google Web Fonts is in the interest of a uniform and appealing presentation of our online offers. This constitutes a legitimate interest within the meaning of Art. 6 para. 1 lit. f DSGVO.<br><br>
        If your browser does not support web fonts, a standard font will be used by your computer.<br><br>
        For more information about Google Web Fonts, see <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> and in Google's privacy policy: <a href="https://www.google.com/policies/privacy">https://www.google.com/policies/privacy</a>.
        <h4>Google Maps</h4>
        This site uses the map service Google Maps via an API. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland.<br><br>
        To use the functions of Google Maps, it is necessary to save your IP address. This information is usually transferred to a Google server in the USA and stored there. The provider of this site has no influence on this data transmission.<br><br>
        The use of Google Maps is in the interest of an appealing presentation of our online offers and an easy findability of the places indicated by us on the website. This constitutes a legitimate interest within the meaning of Art. 6 para. 1 lit. f DSGVO.<br><br>
        More information on the handling of user data can be found in Google's privacy policy: <a href="https://www.google.de/intl/de/policies/privacy">https://www.google.de/intl/de/policies/privacy</a>.
        <h4>Google reCAPTCHA</h4>
        We use “Google reCAPTCHA“ (hereinafter ”reCAPTCHA") on our websites. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland (“Google”).<br><br>
        The purpose of reCAPTCHA is to check whether the data entry on our websites (e.g. in a contact form) is done by a human or by an automated program. For this purpose, reCAPTCHA analyzes the behavior of the website visitor based on various characteristics. This analysis starts automatically as soon as the website visitor enters the website. For analysis, reCAPTCHA evaluates various information (e.g. IP address, length of stay of the website visitor on the website or mouse movements made by the user). The data collected during the analysis will be forwarded to Google.<br><br>
        The reCAPTCHA analyses run completely in the background. Website visitors are not informed that an analysis is taking place.<br><br>
        The data processing takes place on the basis of Art. 6 para. 1 lit. f GDPR. The website operator has a legitimate interest in protecting its web offers from abusive automated spying and from SPAM.<br><br>
        For more information about Google reCAPTCHA and Google's privacy policy, please refer to the following links: <a href="https://www.google.com/intl/de/policies/privacy">https://www.google.com/intl/de/policies/privacy</a> and <a href="https://www.google.com/recaptcha/intro/android.html">https://www.google.com/recaptcha/intro/android.html</a>.
      `,
      de: `
        <h4>YouTube mit erweitertem Datenschutz</h4>
        Unsere Website nutzt Plugins der Website YouTube. Betreiber der Seiten ist die YouTube, LLC, 901 Cherry Ave., San Bruno, CA 94066, USA.<br><br>
        Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video ansehen – eine Verbindung zum Google DoubleClick-Netzwerk her.<br><br>
        Sobald Sie ein YouTube-Video auf unserer Website starten, wird eine Verbindung zu den Servern von YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben. Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.<br><br>
        Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem Endgerät speichern. Mit Hilfe dieser Cookies kann YouTube Informationen über Besucher unserer Website erhalten. Diese Informationen werden u. a. verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und Betrugsversuchen vorzubeugen. Die Cookies verbleiben auf Ihrem Endgerät, bis Sie sie löschen.<br><br>
        Gegebenenfalls können nach dem Start eines YouTube-Videos weitere Datenverarbeitungsvorgänge ausgelöst werden, auf die wir keinen Einfluss haben.<br><br>
        Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.<br><br>
        Weitere Informationen über Datenschutz bei YouTube finden Sie in deren Datenschutzerklärung unter: <a href="https://www.youtube.com/t/privacy_at_youtube">https://www.youtube.com/t/privacy_at_youtube</a>.
        <h4>Google Web Fonts</h4>
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.<br><br>
        Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis darüber, dass über Ihre IP-Adresse unsere Website aufgerufen wurde. Die Nutzung von Google Web Fonts erfolgt im Interesse einer einheitlichen und ansprechenden Darstellung unserer Online-Angebote. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.<br><br>
        Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine Standardschrift von Ihrem Computer genutzt.<br><br>
        Weitere Informationen zu Google Web Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> und in der Datenschutzerklärung von Google: <a href="https://www.google.com/policies/privacy">https://www.google.com/policies/privacy</a>.
        <h4>Google Maps</h4>
        Diese Seite nutzt über eine API den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.<br><br>
        Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP Adresse zu speichern. Diese Informationen werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss auf diese Datenübertragung.<br><br>
        Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an einer leichten Auffindbarkeit der von uns auf der Website angegebenen Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar.<br><br>
        Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der Datenschutzerklärung von Google: <a href="https://www.google.de/intl/de/policies/privacy">https://www.google.de/intl/de/policies/privacy</a>.
        <h4>Google reCAPTCHA</h4>
        Wir nutzen “Google reCAPTCHA” (im Folgenden “reCAPTCHA”) auf unseren Websites. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland (“Google”).<br><br>
        Mit reCAPTCHA soll überprüft werden, ob die Dateneingabe auf unseren Websites (z.B. in einem Kontaktformular) durch einen Menschen oder durch ein automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA das Verhalten des Websitebesuchers anhand verschiedener Merkmale. Diese Analyse beginnt automatisch, sobald der Websitebesucher die Website betritt. Zur Analyse wertet reCAPTCHA verschiedene Informationen aus (z.B. IP-Adresse, Verweildauer des Websitebesuchers auf der Website oder vom Nutzer getätigte Mausbewegungen). Die bei der Analyse erfassten Daten werden an Google weitergeleitet.<br><br>
        Die reCAPTCHA-Analysen laufen vollständig im Hintergrund. Websitebesucher werden nicht darauf hingewiesen, dass eine Analyse stattfindet.<br><br>
        Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse daran, seine Webangebote vor missbräuchlicher automatisierter Ausspähung und vor SPAM zu schützen.<br><br>
        Weitere Informationen zu Google reCAPTCHA sowie die Datenschutzerklärung von Google entnehmen Sie folgenden Links: <a href="https://www.google.com/intl/de/policies/privacy">https://www.google.com/intl/de/policies/privacy</a> und <a href="https://www.google.com/recaptcha/intro/android.html">https://www.google.com/recaptcha/intro/android.html</a>.
      `,
      hr: `
        <h4>YouTube s povećanom privatnošću</h4>
        Naša internetska stranica koristi dodatke s internetske stranice ad. Operator stranice je MP, MP, MP, 901 MP., San Bruno, Kalifornija, 94066, SAD.<br><br>
        Mi koristimo AB u naprednom načinu privatnosti. Ovaj način rada uzrokuje da korisnici ne pohranjuju podatke o posjetiteljima ove stranice prije nego što pogledaju videozapis. S druge strane, napredni način privatnosti ne mora nužno isključiti prijenos podataka na partnere u Bac-u. Na taj se način Ad – a – bez obzira gledate li videozapis-povezuje s mrežom AD-a.<br><br>
        Čim pokrenete videozapis na našoj internetskoj stranici, on se povezuje s poslužiteljima. Na taj način, poslužitelj A. C. dobiva informacije o tome koju ste od naših stranica posjetili. Ako ste prijavljeni na svoj korisnički račun, dajete im mogućnost da izravno povežu vaše ponašanje na mreži s vašim osobnim profilom. To možete spriječiti odjavom sa svog korisničkog računa.<br><br>
        Osim toga, Airbender može spremiti različite Airbender datoteke na vaš uređaj nakon pokretanja videozapisa. Pomoću tih datoteka, br. može dobiti informacije o posjetiteljima naše internetske stranice. Te se informacije koriste, između ostalog, za prikupljanje video statistike, poboljšanje upotrebljivosti i sprječavanje pokušaja prijevare. Datoteke A-liste ostaju na vašem uređaju dok ih ne izbrišete.<br><br>
        Ako je potrebno, dodatne operacije obrade podataka koje ne kontroliramo mogu se pokrenuti nakon pokretanja videozapisa na AD-u.<br><br>
        Korištenje BIP-a vrši se u interesu atraktivnog predstavljanja naših mrežnih ponuda. To je od legitimnog interesa u smislu stavka 6. članka. 1 točka>>.<br><br>
        Za više informacija o privatnosti, pogledajte njihova pravila o privatnosti na: <a href="https://www.youtube.com/t/privacy_at_youtube">https://www.youtube.com/t/privacy_at_youtube</a>.
        <h4>Google Web Fonts</h4>
        Ova stranica koristi takozvane internetske fontove koje pruža paušal za ujednačen prikaz fontova. Kada se prijavite na stranicu, Vaš preglednik učitava potrebne internetske fontove u predmemoriju preglednika kako bi ispravno prikazao tekstove i fontove.<br><br>
        Da biste to učinili, preglednik koji koristite mora se povezati s poslužiteljima br. To omogućuje BiP-u da zna da je vaša Bip adresa korištena za pristup našoj internetskoj stranici. Korištenje fontova na mreži u interesu je jedinstvene i atraktivne prezentacije naših internetskih ponuda. To je od legitimnog interesa u smislu stavka 6. članka. 1 lit. A. M. je naveden u A. M.-U.<br><br>
        Ako vaš preglednik ne podržava internetske fontove, računalo će koristiti zadani font.<br><br>
        Za više informacija o mrežnim fontovima, pogledajte <a href="https://developers.google.com/fonts/faq">https://developers.google.com/fonts/faq</a> i u Pravilima o privatnosti u NBC-u: <a href="https://www.google.com/policies/privacy">https://www.google.com/policies/privacy</a>.
        <h4>Google Maps</h4>
        Ova stranica koristi uslugu mapiranja Ad-a putem Ad-a. Pružatelj usluga je M. A., Gordon House, Barrou Street, Dublin, 4, Irska.<br><br>
        Da biste koristili značajke brojača, morate spremiti svoju adresu brojača. Te se informacije obično prenose na američki poslužitelj u SAD-u i tamo pohranjuju. Davatelj ove stranice nema utjecaja na ovaj prijenos podataka.<br><br>
        Korištenje BIP-a je u interesu atraktivnog Prikaza naših online ponuda i praktičnosti pretraživanja lokacija koje navodimo na internetskoj stranici. To je od legitimnog interesa u smislu stavka 6. članka. 1 lit. A. M. je naveden u A. M.-U.<br><br>
        Više informacija o načinu postupanja s korisničkim podacima možete pronaći u Pravilima o privatnosti: <a href="https://www.google.de/intl/de/policies/privacy">https://www.google.de/intl/de/policies/privacy</a>.
        <h4>Google reCAPTCHA</h4>
        Na našim internetskim stranicama koristimo "MP" (u daljnjem tekstu "MP"). Pružatelj usluga je tvrtka Amand, Gordon House, Barrou Street, Dublin, 4, Irska ("Amand").<br><br>
        Cilj je da se provjeri jesu li podaci na našim internetskim stranicama (npr.u kontakt obrascu) uneseni od strane osobe ili automatiziranog programa. Da biste to učinili, number analizira ponašanje posjetitelja na temelju različitih karakteristika. Ova analiza započinje automatski čim posjetitelj stranice posjeti stranicu. Za analizu, Airbender procjenjuje različite informacije (na primjer, Airbender adresa, vrijeme boravka posjetitelja na mjestu ili pokreti miša koje izvodi korisnik). Podaci prikupljeni tijekom analize prenose se u inčima.<br><br>
        Analiza bumbara u potpunosti se izvodi u pozadini. Posjetitelji internetske stranice neće biti obaviješteni da se provodi bilo kakva analiza.<br><br>
        Obrada podataka provodi se na temelju stavka 6.članka. 1 lit. f GDPR. Operater internetske stranice ima legitiman interes za zaštitu svojih internetskih stranica od neovlaštenog automatskog praćenja i neželjene pošte.<br><br>
        Za više informacija o pravilima o privatnosti i Pravilima o privatnosti, slijedite ove poveznice: <a href="https://www.google.com/intl/de/policies/privacy">https://www.google.com/intl/de/policies/privacy</a> i <a href="https://www.google.com/recaptcha/intro/android.html">https://www.google.com/recaptcha/intro/android.html</a>.
      `
    }
  },
]

const translates = {
  en: { title: 'Privacy' },
  de: { title: 'Datenschutzerklärung' },
  hr: { title: 'Zaštita podataka' }
}

const { projectTitle } = useRuntimeConfig().public
useHead({ title: () => `${projectTitle} | ${translates[ln.value].title}` })
</script>

<style lang="scss">
.privacy {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 2rem 1rem;
  width: 100%;

  &-section {
    &-title {
      margin-bottom: 2rem;
      text-align: left;
    }

    &-content {
      max-width: 50rem;

      b {
        display: block;
        margin: 1rem 0;
      }
    }
  }
}
</style>
