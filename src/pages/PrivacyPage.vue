<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      activeSection: 'mainSection'
    };
  },
  created() {
        window.scrollTo({ top: 0});
    },
  methods: {
    showSection(section) {
      this.activeSection = section;
    }
  }
};
</script>


<template>
  <div class="wrapper">
    <AppHeader />
    <div class="position-relative">

    <div class="ms-container container mt-5 mb-5">
      <div class="ms_wave"></div>
      <h2>Informativa Sulla Privacy</h2>
      <div class="row">
        <div class="col-md-4 mb-3">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">Indice</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><a href="#" class="card-link"
                    @click="showSection('mainSection')">Introduzione</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('contactSection')">1.
                    Contatti</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('getInfoSection')">2.
                    Raccolta informazioni</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('informationSection')">3.
                    Informazioni Che Raccogliamo Da Te</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('useInfoSection')">4.
                    Utilizzo delle informazioni</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('cookiesSection')">5.
                    Cookies</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('securitySection')">6.
                    Sicurezza</a></li>
                <li class="list-group-item"><a href="#" class="card-link" @click="showSection('rightSection')">7. I Tuoi
                    Diritti</a></li>

              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div class="card">
            <div class="card-header">
              <h5 class="mb-0">Contenuto</h5>
            </div>
            <div class="card-body">
              <div id="mainSection" class="section-content" :class="{ 'd-none': activeSection !== 'mainSection' }">

                <p>Si prega di leggere la presente Privacy Policy che spiega in che modo utilizziamo e proteggiamo le
                  tue
                  informazioni personali. Ove non diversamente specificato, siamo i "titolari del trattamento" delle
                  informazioni che trattiamo.</p>

              </div>
              <div id="contactSection" class="section-content"
                :class="{ 'd-none': activeSection !== 'contactSection' }">
                <h6>1. Contatti</h6>
                <p>Qualora tu abbia domande o richieste sulla presente Privacy Policy o, più in generale, su come
                  gestiamo
                  le tue informazioni, puoi contattarci all'indirizzo support@devvery.it.</p>
              </div>

              <div id="getInfoSection" class="section-content"
                :class="{ 'd-none': activeSection !== 'getInfoSection' }">
                <h6>2. Come Raccogliamo Le Tue Informazioni</h6>
                <p>Raccogliamo le tue informazioni quando interagisci con noi o utilizzi i nostri servizi, ad esempio
                  quando utilizzi i nostri Siti per effettuare un ordine. Analizziamo, inoltre, le modalità con cui i
                  visitatori utilizzano i nostri Siti, per poter migliorare i nostri servizi e ottimizzare l'esperienza
                  del cliente.

                <h6>Raccogliamo informazioni:</h6>
                <ol>
                  <li>Quando crei un account con noi o modifichi le impostazioni del tuo account;</li>
                  <li>Quando effettui un ordine con noi e durante la procedura di ordinazione (ivi inclusi il pagamento
                    e
                    la
                    consegna dell'ordine);</li>
                  <li>Attraverso le tue interazioni con noi o con i nostri servizi, ad esempio quando richiedi
                    informazioni o
                    di ricevere materiale promozionale, informazioni sulle iniziative Devvery</li>
                  <li>quando navighi o utilizzi i nostri Siti .</li>
                </ol>
                </p>
              </div>

              <div id="informationSection" class="section-content"
                :class="{ 'd-none': activeSection !== 'informationSection' }">
                <h6>3. Informazioni Che Raccogliamo Da Te</h6>
                <p>Quale parte del nostro impegno per la privacy dei nostri clienti e, più in generale, dei visitatori
                  dei
                  nostri Siti, vogliamo essere chiari in merito alle tipologie di informazioni che raccoglieremo da te.

                  Quando visiti i Siti o effettui un ordine su Deliveroo mediante i Siti, compreso il sito web di
                  qualsiasi partner con cui collaboriamo per fornire i servizi di consegna, ti vengono chieste
                  informazioni personali tra cui nome, dati di contatto, indirizzo di consegna, dettagli dell'ordine,
                  dettagli del programma fedeltà, ove applicabile, e informazioni relative al pagamento quali i dati
                  della
                  carta di credito o di debito. Raccoglieremo informazioni da te anche quando contatti i nostri rider
                  attraverso la chat presente sui nostri Siti. Raccoglieremo, inoltre, la tua data di nascita per
                  verificare la tua età quando acquisti articoli soggetti a restrizioni.

                  Raccogliamo informazioni sul tuo utilizzo dei Siti e informazioni su di te da qualsiasi messaggio che
                  pubblichi sui Siti o quando ci contatti o ci fornisci un feedback, anche via e-mail, posta, telefono o
                  chat. Se ci contatti telefonicamente, registriamo e prendiamo nota della chiamata, anche per scopi di
                  formazione e di miglioramento del servizio. Se presenti un reclamo, potremmo richiederti una
                  fotografia
                  del tuo ordine che mostri il problema, purché si tratti di qualcosa che può essere verificato tramite
                  un
                  controllo visivo dei prodotti.</p>
              </div>

              <div id="useInfoSection" class="section-content"
                :class="{ 'd-none': activeSection !== 'useInfoSection' }">
                <h6>4. Utilizzo Delle Tue Informazioni</h6>
                <p>Tratteremo le tue informazioni solo in presenza di una motivazione per farlo, e qualora tale
                  motivazione sia consentita dalla legge.

                  Qualora avessimo necessità di fornirti il servizio da te richiesto o di stipulare un contratto con te,
                  utilizzeremo le tue informazioni per:</p>
                <ul>
                  <li>Consentirci di fornirti l'accesso alle rispettive sezioni dei Siti, raccogliendo i cookie
                    necessari
                    dal tuo dispositivo;</li>
                  <li>Fornire i servizi che hai richiesto, raccogliendo il tuo nome, i dati di contatto, l'indirizzo di
                    consegna e i dettagli dell'ordine;</li>
                  <li>Consentirci di incassare il tuo pagamento, raccogliendo le informazioni della tua carta di credito
                    o
                    di debito;</li>
                  <li>Contattarti qualora sia necessario relativamente ai nostri servizi, ad esempio per la risoluzione
                    di
                    eventuali problemi con il tuo ordine, raccogliamo le informazioni sopra elencate nonché ogni altra
                    informazione aggiuntiva di cui abbiamo bisogno al fine di risolvere il tuo problema.</li>
                </ul>

              </div>

              <div id="cookiesSection" class="section-content"
                :class="{ 'd-none': activeSection !== 'cookiesSection' }">
                <h6>5. Cookies</h6>
                <p>Puoi impostare il tuo browser in modo tale da rifiutare tutti o alcuni cookie del browser, o
                  avvisarti
                  quando i siti web impostano o accedono ai cookie. Se disabiliti o rifiuti i cookie, alcune sezioni dei
                  Siti potrebbero diventare inaccessibili o non funzionare correttamente. Per ulteriori informazioni sui
                  cookie che utilizziamo e su come impostare o modificare le preferenze relative ai cookie</p>
              </div>

              <div id="securitySection" class="section-content"
                :class="{ 'd-none': activeSection !== 'securitySection' }">
                <h6>6. Sicurezza</h6>
                <p>Adottiamo tecnologie e policy solide per proteggere le tue informazioni dalla perdita accidentale,
                  dall'uso o dall'accesso non autorizzato, dall'alterazione o dalla divulgazione.

                  Abbiamo attuato delle procedure per affrontare qualsiasi violazione dei dati e comunicheremo eventuali
                  violazioni a te nonché a qualsiasi autorità competente laddove sia obbligatorio per legge.

                  Purtroppo, la trasmissione di informazioni via internet non è completamente sicura. Anche se
                  adotteremo
                  delle misure per proteggere le tue informazioni, non possiamo garantire la sicurezza delle tue
                  informazioni trasmesse ai Siti; qualsiasi trasmissione è a tuo rischio. Una volta ricevute le tue
                  informazioni, useremo procedure rigorose e funzioni di sicurezza per cercare di impedire accessi non
                  autorizzati.

                  Quando crei un account puoi creare una password o un altro metodo di accesso sicuro e fornire anche i
                  dati della carta di pagamento. È necessario utilizzare una password unica e mantenere segreta
                  qualsiasi
                  password creata, o altro metodo di accesso sicuro, al fine di evitare che altri possano accedere al
                  tuo
                  account.</p>
              </div>

              <div id="rightSection" class="section-content" :class="{ 'd-none': activeSection !== 'rightSection' }">
                <h6>7. I Tuoi Diritti</h6>
                <p>In determinate circostanze, ai sensi della legge in materia di protezione dei dati personali, sei
                  titolare di diritti in relazione alle informazioni che possediamo su di te. </p>
                <ul>
                  <li>Il <strong>diritto di accesso.</strong> Questo è anche noto come una "richiesta di accesso ai
                    dati". Hai il diritto di ricevere una copia delle informazioni che possediamo su di te e verificare
                    la liceità del nostro trattamento.</li>
                  <li>Il <strong>diritto di rettifica.</strong> Hai il diritto di far correggere qualsiasi informazione
                    incompleta o imprecisa in nostro possesso che ti riguardi, anche se in alcuni casi abbiamo bisogno
                    di verificare la correttezza delle nuove informazioni che ci fornisci. </li>
                  <li>Il <strong>diritto alla cancellazione.</strong> Questo è anche noto come "il diritto all'oblio"
                    che ti permette di richiedere la cancellazione o la rimozione di alcune delle informazioni che
                    possediamo su di te laddove non sussista un valido motivo per la prosecuzione del trattamento da
                    parte nostra. Questo diritto non è assoluto e si applica solo in determinate circostanze.</li>
                  <li>Il <strong>diritto di limitazione del trattamento.</strong> Hai il diritto di bloccare o
                    sopprimere l'uso ulteriore delle tue informazioni in determinate circostanze. Quando il trattamento
                    è limitato, potremmo ancora avere un motivo legittimo per conservare le tue informazioni, ma non le
                    utilizzeremo ulteriormente.</li>
                  <li>Il <strong>diritto alla portabilità dei dati.</strong> Hai il diritto di ricevere le tue
                    informazioni in un formato strutturato, di uso comune e leggibile da un dispositivo automatico, che
                    puoi trasferire a un altro fornitore di servizi o a terzi. Questo diritto non è assoluto e si
                    applica solo in determinate circostanze.</li>
                  <li>Il <strong>diritto di revoca del consenso.</strong> Quando ci basiamo sul consenso per utilizzare
                    le tue informazioni, hai il diritto di revocare tale consenso in qualsiasi momento. La revoca del
                    consenso non renderà comunque illecito l'uso delle tue informazioni che abbiamo effettuato prima
                    della revoca. Se revochi il tuo consenso, potremmo non essere in grado di fornirti determinati
                    servizi.</li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    <AppFooter />
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.ms_wave {
  &::after {
    width: 100%;
    background-image: url(../assets/images/main/onda_white.png);
    content: '';
    height: 80px;
    position: absolute;
    display: block;
    transform: rotate(180deg);
    z-index: 9;
    bottom: -80px;
    left: 0%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>