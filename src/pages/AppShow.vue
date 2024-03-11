<script>
import axios from "axios";
import { store } from "../store";
import { RouterLink } from "vue-router";
import AppHeader from "../components/AppHeader.vue";
export default {
  data() {
    return {
      result: [],
      store,
      nameProduct: "",
      menuEmpty: false
    };
  },
  components: {
    AppHeader,
  },
  created() {
    axios
      .get(`${this.store.baseUrl}/api/restaurants/` + this.$route.params.slug)
      .then((resp) => {
        if (resp.data.foods) {
          if (resp.data.foods.length > 0) {
            this.result = resp.data.foods;
          } else {
            this.menuEmpty = true;
          }

        } else {
          this.$router.push('/not-found');
        }
      });
  },
  methods: {
    addtoCart(product) {
      this.nameProduct = "";
      this.nameProduct = product.name;
      const existingProduct = this.store.cartData.find(
        (item) => item.id == product.id
      );
      const myProduct = {
        id: product.id,
        restaurant_id: product.restaurant_id,
        restaurant_name: product.restaurant.name,
        restaurant_slug: product.restaurant.slug,
        name: product.name,
        price: product.price,
        quantity: 1,
      };

      if (this.store.cartData[0] && myProduct.restaurant_id !== this.store.cartData[0].restaurant_id) {

        this.store.showError = true;
        // setTimeout(() => {
        //   this.store.showError = false;
        // }, 1000); // Hide error after 2 seconds


      } else if (existingProduct) {
        existingProduct.quantity++;

        this.store.showModal = true;
        setTimeout(() => {
          this.store.showModal = false;
        }, 3200); // Hide modal after 2 seconds

      } else {
        this.store.cartData.push(myProduct);

        this.store.showModal = true;
        setTimeout(() => {
          this.store.showModal = false;
        }, 3200); // Hide modal after 2 seconds
      }

      localStorage.setItem("cartData", JSON.stringify(this.store.cartData));
    },

    close() {
      this.store.showError = false;
    }
  },
};
</script>

<template>
  <AppHeader />
  <div v-if="!menuEmpty">
    <div class="wrapper">

      <div class="container">
        <div v-if="result.length != 0" class="d-flex flex-column justify-content-between align-items-center">
          <h1 class="text-center ms_color-dark pb-2 pt-5">{{ result[0].restaurant.name }}</h1>
          <div class="d-flex gap-5 mb-5 fs-5">
            <p class="ms_color-dark"><i class="fa-solid fa-location-dot"></i> {{ result[0].restaurant.address }}</p>
            <p class="ms_color-dark"><i class="fa-solid fa-phone-flip"></i> {{ result[0].restaurant.phone }}</p>
          </div>
        </div>

        <div class="mt-5 d-flex flex-wrap">
          <div class="me-4">
            <p class="badge bg-warning rounded-pill px-3 border me-1"><i class="fa-solid fa-bread-slice"></i></p><span class="fw-bold">Piatto per Celiaci</span>
          </div>
          <div>
            <p class="badge bg-success rounded-pill px-3 border me-1"><i class="fa-solid fa-seedling"></i></p><span class="fw-bold">Piatto per Vegani</span>
          </div>
          
        </div>

        <div class="row row-cols-1 row-cols-sm-2 g-4 position-relative">
          <div v-for="item in result" class="col">

            <div class="card hover-zoom border-0 ms_bg-dark h-100 rounded-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img v-if="item.cover_image" :src="`http://127.0.0.1:8000/storage/${item.cover_image}`"
                    class="img-fluid rounded-start-3 w-100 h-100 object-fit-cover" :alt="`Immagine di ${item.name}`">
                  <img v-else src="../assets/images/noimg.png"
                    class="img-fluid rounded-start-3 w-100 h-100 object-fit-cover" alt="Immagine non presente">

                  <div class="card-img-overlay">
                    <p title="Celiaco" v-if="item.celiac === 1" class="badge bg-warning rounded-pill px-3 border me-2"><i
                        class="fa-solid fa-bread-slice"></i></p>
                    <p title="Vegano" v-if="item.vegan === 1" class="badge bg-success rounded-pill px-3 border"><i
                        class="fa-solid fa-seedling"></i></p>
                  </div>
                </div>
                <div class="col-lg-8 ">
                  <div class="card-body">
                    <h5 class="card-title text-light">{{ item.name }}</h5>
                    <p class="card-text ms_description text-light">{{ item.description }}</p>
                    <p class="card-text text-light">{{ item.price }} €</p>
                  </div>
                  <div class="text-end">
                    <button :title="`Aggiungi ${item.name}`" @click="addtoCart(item)" class="btn ms_btn-yellow position-absolute bottom-0 end-0"><i
                        class="fa-solid fa-plus"></i></button>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>

    <transition class="text-center ms_modal-text" name="fade">
      <div v-if="store.showModal || store.showError" :class="store.showModal ? 'modal-correct' : 'modal-error'"
        class="active d-flex modal align-items-center justify-content-center">
        <div v-if="store.showModal" class="modal-content text-white p-5">

          <p class="fs-5"><strong class="ms_color-yellow p-1 fs-4">{{ nameProduct }}</strong> aggiunto al carrello!</p>

        </div>
        <div v-if="store.showError"
          class="err-content text-center p-5 d-flex flex-row justify-content-center position-relative align-items-center">

          <button type="button" class="btn ms_btn-red position-absolute top-0 end-0" @click="close"><i
              class="fa-solid fa-x"></i></button>

          <p class="fs-3">Non puoi ordinare da due ristoranti diversi!</p>
        </div>

      </div>
    </transition>
  </div>
  <div v-else class="m-5 p-5">
    <h2 class="text-center">Il ristorante non dispone ancora di un menù</h2>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.wrapper {
  padding: 4rem 0 4rem 0;
  min-height: 100vh;
  background-color: whitesmoke;
}

.ms_description {
  @media screen and (min-width: 990px) {
    height: 50px;
  }

}

.ms_modal-text {
  @media screen and (min-width: 576px) {
    width: 50% !important;
  }
}

.ms_btn-yellow {
  border-radius: 6px 0 6px 0;
  padding: 0.7rem;
  font-weight: bold;
}

.hover-zoom {
  transition: all 0.3s ease-in-out;
  z-index: 1;

  &:hover {
    z-index: 2;
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
}

/* Styling for the modal */
.modal-correct {
  position: fixed;
  margin-top: 70vh;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content !important;
  display: none;
  justify-content: center;
  align-items: center;
  height: fit-content;
  z-index: 2;
}

.modal-error {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100% !important;
  display: none;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 2;
  backdrop-filter: blur(5px);
  padding: 10%;
}

.active {
  display: flex;
}

.modal-content {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.9);
}

.err-content {
  border-radius: 10px;
  background-color: white;
  color: $ms_dark;
  border: 5px solid $ms_yellow;
  font-weight: bolder;
}

.ms_btn-red {
  background-color: rgba(255, 255, 255, 0);
  color: $ms_dark;
  border: 0;
}

/* Fade animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
