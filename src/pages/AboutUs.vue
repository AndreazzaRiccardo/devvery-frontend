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

        };
    },
};
</script>


<template>
    <AppHeader />
    <div class="wrapper ms_bg-yellow position-relative pt-5">
        <div class="ms_wave"></div>
        <div class="container">
            <img src="../assets/images/main/tree.png" alt="">
            <div class="ps-3 pe-5">
                <h2 class="fw-bolder mb-5">Rivoluzioniamo il Gusto, Consegna dopo Consegna</h2>

                <p class="fs-5">Benvenuti in Devvery, dove l'innovazione incontra la passione per il cibo.
                    Siamo più di una semplice azienda
                    di delivery; siamo un movimento dedicato a portare la bontà culinaria direttamente alla tua
                    porta.
                    Fondati sulla convinzione che il cibo di qualità debba essere accessibile a tutti, ci impegniamo a
                    rendere
                    la tua esperienza gastronomica più conveniente, veloce e deliziosa che mai.<br>
                    Il nostro approccio alla consegna di cibo è stato progettato per soddisfare le esigenze moderne,
                    unendo
                    tecnologia all'avanguardia e un tocco umano. Con la nostra app intuitiva, puoi sfogliare un'ampia
                    varietà di
                    ristoranti locali, selezionare i tuoi piatti preferiti e ricevere il tutto con pochi click.<br>
                    Ma non ci fermiamo qui. In Devvery, crediamo nell'importanza di sostenere la comunità locale e
                    ridurre
                    l'impatto ambientale. Collaboriamo strettamente con i ristoratori della tua zona, garantendo che
                    ogni
                    ordine
                    vada a sostenere le piccole imprese e a promuovere l'ecosistema culinario locale. Inoltre, adottiamo
                    pratiche sostenibili nella nostra logistica di consegna per ridurre al minimo l'impatto ambientale
                    delle
                    nostre operazioni.<br>
                    Ci impegniamo costantemente a superare le aspettative dei nostri clienti, offrendo un servizio
                    impeccabile e una varietà ineguagliabile di opzioni culinarie. Che tu stia cercando una pizza
                    fragrante,
                    un sushi fresco o un comfort food a tarda notte, puoi contare su Devvery per consegnare il piacere
                    del
                    cibo
                    direttamente alla tua porta, quando ne hai più bisogno.
                </p>

                <h2 class="fw-bolder mt-5">Unisciti a noi in questa avventura culinaria.</h2>
                <h2 class="fw-bolder">Con Devvery, ogni pasto è un'esperienza da gustare.</h2>
            </div>
            <p class="text-end fw-bold mt-5">Il team di Devvery: Carlo Marcon, Davide Santambrogio, Riccardo Andreazza, Salvatore Bevilacqua, Valerio Perria</p>
        </div>
    </div>
    <AppFooter />
</template>


<style lang="scss" scoped>
.ms_wave {
    &::after {
        width: 100%;
        background-image: url(../assets/images/main/onda.png);
        content: '';
        height: 100px;
        position: absolute;
        display: block;
        transform: rotate(180deg);
        z-index: 9;
        bottom: -90px;
        left: 0;
        background-size: cover;
        background-repeat: no-repeat;
    }
}

.container {
    padding-top: 6rem;
    padding-bottom: 6rem;
    min-height: calc(100vh - 430px);
    position: relative;

    img {
        position: absolute;
        opacity: 20%;
        max-width: 350px;
        top: 40%;
        right: 0;
    }
}
</style>
