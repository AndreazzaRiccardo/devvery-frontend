<script>
export default {};
</script>

<template>
  <div class="wrapper px-5">

    <div class="container py-5">
      <div class="d-flex flex-column gap-5">
        <div class="row row-cols-1 row-cols-md-2 justify-content-between align-items-center g-5">
          <div class="d-flex flex-column align-items-end">
            <h3 class="text-end">I migliori ristoranti della città nella tua mano!</h3>
            <p class="text-end w-75">Goditila flessibilità e la libertà che solo le consegne Devvery garaniscono!</p>
            <a href="#top" class="btn btn-dark">ORDINA ORA</a>
          </div>
          <img class="object-fit-cover rounded rounded-5 p-0" src="../assets/images/main/ristorante-stellato.jpg"
            alt="Foto Ristorante" />
        </div>

        <div class="row row-cols-1 row-cols-md-2 justify-content-between align-items-center g-5">
          <img class="object-fit-cover rounded rounded-5 p-0" src="../assets/images/main/borghese.jpg"
            alt="Foto Ristorante" />
          <div class="d-flex flex-column align-items-start">
            <h3>Unisciti a noi e preparati a raggiungere il voto 10 in cucina!</h3>
            <p class="text-start w-75">Raggiungi più clienti con Devvery.Gestiamo noi la consegna, così tu puoi
              dedicarti
              a
              offrire i migliori
              piatti e prodotti.</p>
            <a href="http://127.0.0.1:8000/register" class="btn btn-dark">REGISTRATI</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: relative;
  background-color: #f9b91f;
  padding-top: 2rem;


  // &::before {
  //   width: 100%;
  //   background-image: url(../assets/images/main/onda.png);
  //   content: '';
  //   height: 7rem;
  //   position: absolute;
  //   display: block;
  //   z-index: 9;
  //   top: -104px;
  //   left: 0;
  //   background-size: cover;
  //   background-repeat: no-repeat;
  // }

  &::after {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 6rem;
    position: absolute;
    display: block;
    z-index: 99;
    bottom: -62px;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    rotate: 180deg;
  }

  .col {
    img {
      width: 75%;
      border-radius: 15px;
    }
  }
}
</style>
