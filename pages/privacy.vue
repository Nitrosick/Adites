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
      de: 'Datenschutz auf einen Blick'
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
      `
    }
  },
  {
    id: 2,
    title: {
      en: 'General information and mandatory information',
      de: 'Allgemeine Hinweise und Pflichtinformationen'
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
      `
    }
  },
  {
    id: 3,
    title: {
      en: 'Data collection on our website',
      de: 'Datenerfassung auf unserer Website'
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
      `
    }
  },
  {
    id: 4,
    title: {
      en: 'Plugins and Tools',
      de: 'Plugins und Tools'
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
      `
    }
  },
]

const translates = {
  en: { title: 'Privacy' },
  de: { title: 'Datenschutzerklärung' }
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
