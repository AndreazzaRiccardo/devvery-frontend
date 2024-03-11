<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
    components: {
        AppHeader,
        AppFooter,
    },
    created() {
        window.scrollTo({ top: 0});
    }
};
</script>


<template>
    <div class="wrapper pt-5">
        <AppHeader />
        <div class="position-relative">

            <div class="ms-container container mt-5 mb-5">
            <div class="ms_wave"></div>
            <h2>Termini e Condizioni</h2>
            <p>Benvenuto su Devvery, un'applicazione sviluppata da Devvery Inc. Leggi attentamente questi Termini e
                Condizioni d'Uso ("Termini") prima di utilizzare l'applicazione.</p>
            <ol>
                <li>Accettazione dei Termini: Utilizzando l'app Devvery, accetti di essere vincolato dai presenti
                    Termini e
                    Condizioni.</li>
                <li>Licenza d'Uso: Devvery concede all'utente una licenza limitata, non esclusiva, non trasferibile e
                    revocabile per utilizzare l'applicazione solo per scopi personali e non commerciali.</li>
                <li>Registrazione e Account: Per accedere a determinate funzionalità di Devvery, potrebbe essere
                    necessario
                    creare un account. L'utente è responsabile di mantenere la sicurezza del proprio account e delle
                    credenziali
                    di accesso.</li>
                <li>Privacy: Devvery rispetta la privacy dei suoi utenti. I dettagli sulla raccolta, l'uso e la
                    protezione
                    dei dati personali dell'utente sono descritti nella nostra Politica sulla Privacy.</li>
                <li>Contenuti dell'Utente: L'utente è responsabile dei contenuti che pubblica su Devvery. L'azienda si
                    riserva il diritto di rimuovere o modificare qualsiasi contenuto che violi i presenti Termini.</li>
                <li>Proprietà Intellettuale: Tutti i diritti di proprietà intellettuale relativi a Devvery e ai suoi
                    contenuti sono di proprietà di Devvery Inc. L'utente accetta di non utilizzare, copiare o
                    distribuire
                    tali
                    contenuti senza autorizzazione.</li>
                <li>Limitazioni di Responsabilità: Devvery non sarà responsabile per danni diretti, indiretti,
                    incidentali,
                    speciali o consequenziali derivanti dall'uso o dall'incapacità di utilizzare l'applicazione.</li>
                <li>Modifiche ai Termini e alle Condizioni: Devvery si riserva il diritto di modificare i presenti
                    Termini
                    in
                    qualsiasi momento. Le modifiche entreranno in vigore dopo la pubblicazione degli aggiornamenti
                    all'interno
                    dell'applicazione.</li>
                <li>Risoluzione del Contratto: L'utente può interrompere l'utilizzo di Devvery in qualsiasi momento.
                    Devvery
                    Inc. si riserva il diritto di sospendere o terminare l'account di un utente in caso di violazione
                    dei
                    presenti Termini.</li>
                <li>Legge Applicabile e Giurisdizione: I presenti Termini sono regolati dalle leggi dello Stato di
                    California, senza dare effetto ai principi di conflitto di leggi. Le eventuali dispute relative ai
                    presenti
                    Termini saranno risolte in conformità con le leggi dello Stato di California.</li>
                <li>Disposizioni Varie: Il mancato esercizio o l'applicazione di qualsiasi diritto o disposizione dei
                    presenti Termini da parte di Devvery non costituirà una rinuncia a tale diritto o disposizione.</li>
                <li>Disposizioni di Sicurezza: Devvery si impegna a mantenere un ambiente sicuro per i suoi utenti.
                    L'utente
                    accetta di non utilizzare l'applicazione per scopi illegali o fraudolenti e di non compromettere la
                    sicurezza dei sistemi di Devvery.</li>
                <li>Comunicazioni: L'utente accetta di ricevere comunicazioni da parte di Devvery tramite email,
                    notifiche push o altri mezzi di comunicazione disponibili nell'applicazione.</li>
                <li>Termini di Pagamento: Qualora Devvery offra servizi a pagamento, l'utente accetta di pagare le
                    relative tariffe secondo i termini e le condizioni specifici comunicati al momento dell'acquisto.
                </li>
                <li>Sospensione del Servizio: Devvery si riserva il diritto di sospendere o interrompere temporaneamente
                    l'erogazione dei servizi dell'applicazione per manutenzione, aggiornamenti o altri motivi senza
                    preavviso.</li>
                <li>Legame con Terze Parti: Devvery può includere collegamenti o integrazioni con servizi di terze
                    parti. L'utente comprende e accetta che l'utilizzo di tali servizi è soggetto ai termini e alle
                    politiche di
                    privacy delle rispettive terze parti.</li>
                <li>Diverse Lingue: In caso di conflitto tra la versione inglese e altre versioni linguistiche di questi
                    Termini e Condizioni, la versione inglese prevarrà.</li>
                <li>Consenso all'Utilizzo dei Dati: L'utente accetta che Devvery possa raccogliere, utilizzare e
                    trasferire le informazioni dell'utente in conformità con la Politica sulla Privacy e i termini qui
                    esposti.</li>
                <li>Esonero di Responsabilità: Devvery non garantisce che l'applicazione sarà priva di errori o
                    funzionerà senza interruzioni. L'utente accetta di utilizzare Devvery a proprio rischio e di
                    liberare
                    Devvery Inc. da qualsiasi responsabilità per danni derivanti dall'utilizzo dell'applicazione.</li>
                <li>Intero Accordo: Questi Termini e Condizioni costituiscono l'intero accordo tra l'utente e Devvery
                    Inc. riguardo all'oggetto qui trattato e sostituiscono qualsiasi accordo precedente o contemporaneo.
                </li>
            </ol>
            <p>L'utilizzo dell'applicazione Devvery implica l'accettazione senza riserve di tutti i termini e le
                condizioni
                sopra descritti. Se l'utente non accetta uno qualsiasi di questi termini, è pregato di non utilizzare
                l'applicazione.</p>
            </div>
        </div>
        <AppFooter />

    </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.wrapper {
    height: 100vh;
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
    bottom: -120px;
    left: 0%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}
</style>