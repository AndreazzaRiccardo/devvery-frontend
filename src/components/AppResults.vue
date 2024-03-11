<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="ms_container ms_bg-yellow align-items-center d-flex flex-column">
    <div class="container-fluid">
      <div v-if="!store.loadingResults">
        <div class="text-center pt-5"
          v-if="(store.restaurants.length === 0 && store.search != '') || (store.restaurants.length === 0 && store.checkedTypes.length > 0)">
          <h2>Nessun ristorante trovato</h2>
          <div class="d-flex justify-content-center pt-5">
            <hr class="w-75">
          </div>
        </div>
      </div>

      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 p-4 justify-content-center">

        <router-link class="col g-4 d-flex justify-content-center" v-for="restaurant in this.store.restaurants"
          :to="{ name: 'show', params: { slug: restaurant.slug } }">

          <div class="card ms_bg-dark text-light hover-zoom rounded-5 w-100">
            <img v-if="restaurant.cover_image" class="card-img-top mb-2 h-50"
              :src="`${this.store.baseUrl}/storage/${restaurant.cover_image}`" alt="" />
            <img v-else class="card-img-top mb-2 h-50 object-fit-cover" src="../assets/images/noimg.png"
              alt="nessuna_immagine" />
            <div class="card-body">
              <div class="d-flex gap-2 flex-wrap mb-3">
                <div class="ms_badge-yellow" v-for="tipo in restaurant.types">{{ tipo.name }}</div>
              </div>

              <h3 class="card-title">{{ restaurant.name }}</h3>
              <p class="card-text">{{ restaurant.description }}</p>
            </div>
          </div>

        </router-link>

      </div>
      <div v-if="store.restaurants.length > 0" class="d-flex justify-content-center pt-5">
        <hr class="w-75">
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.ms_container {
  position: relative;
  margin-top: 4rem;

  a {
    text-decoration: none;
  }

  &::before {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 4rem;
    position: absolute;
    display: block;
    z-index: 9;
    bottom: -62px;
    transform: rotate(180deg);
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;

  }

  &::after {
    width: 100%;
    background-image: url(../assets/images/main/onda.png);
    content: '';
    height: 4rem;
    position: absolute;
    display: block;
    z-index: 9;
    top: -61px;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.hover-zoom {
  transition: all .3s ease-in-out;
  z-index: 1;
  padding: 1rem 1rem 0 1rem;

  img {
    border-radius: 20px 20px 0 0px;
  }

  &:hover {
    z-index: 2;
    transform: scale(1.05);
    transition: all .3s ease-in-out;
  }
}
</style>