<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    closeCanvas() {
      const canvas = document.querySelector('.offcanvas-backdrop');
      canvas.style.display = 'none';
    },
    remove(id) {
      this.store.cartData = this.store.cartData.filter(item => item.id !== id);
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    add(id) {
      const product = this.store.cartData.find(item => item.id == id);
      product.quantity = product.quantity + 1;
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    decrease(id) {
      const product = this.store.cartData.find(item => item.id == id);
      if (product.quantity > 1) {
        product.quantity = product.quantity - 1;
      } else {
        this.store.cartData = this.store.cartData.filter(item => item.id !== id);
      }
      localStorage.setItem('cartData', JSON.stringify(this.store.cartData));
    },
    calculateTotal() {
      let total = 0;
      this.store.cartData.forEach(element => {
        const productPrice = element.price * element.quantity;
        total += productPrice;
      });
      this.store.total = total;
      localStorage.setItem('total', JSON.stringify(this.store.total));
      return total;
    },
    emptyCart() {
      this.store.cartData = [];
      localStorage.clear();
    }
  },
};
</script>

<template>
  <div class="wrapper">
    <div v-if="store.cartData.length > 0">
      <div class="text-center mt-3">
        <p class="d-inline-block text-center rounded-2 fw-bold p-2 ms_restaurant_name">Stai ordinando da {{
      store.cartData[0].restaurant_name }}</p>
      </div>

      <ul class="list-group mt-3">
        <li v-for="(item, index) in store.cartData" :key="index" class="list-group-item fw-bold">
          <div class="d-flex justify-content-between align-items-center">
            <div class="info">
              <span class="d-inline-block mb-1 text-capitalize">{{ item.name }}</span> - <span>{{ item.price
                }}€</span><br>

              <button class="btn ms_btn-yellow fw-bold" @click="decrease(item.id)"><i
                  class="fa-solid fa-minus"></i></button>
              <span class="d-inline-block mx-2">{{ item.quantity }}</span>
              <button class="btn ms_btn-yellow fw-bold" @click="add(item.id)"><i class="fa-solid fa-plus"></i></button>
            </div>

            <button class="btn btn-outline-danger btn-sm border-2 fw-bold" @click="remove(item.id)">
              <i class="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>

      <div class="mt-3 d-flex justify-content-between align-items-baseline">
        <h5 class="fw-bold">Totale: {{ calculateTotal() }}€</h5>
        <button class="btn btn-outline-warning btn-sm fw-bold border-2 ms_color_dark" @click="emptyCart()">Svuota il
          carrello</button>
      </div>

      <div class="d-flex justify-content-end mt-5">
        <router-link v-if="store.cartData.length > 0" to="/shipment" class="text-end">
          <button class="btn ms_btn-outline-dark fs-5 p-2" data-bs-dismiss="offcanvas" aria-label="Close">
            Conferma ordine<i class="fa-solid fa-circle-chevron-right fs-3 ms-2 align-middle"></i>
          </button>
        </router-link>
      </div>
    </div>

    <div v-else>
      <img class="p-4 mb-4" src="../assets/images/main/fork.png" alt="no foods here" />
      <span class="d-block text-center text-body-tertiary fw-bold">Inizia ora ad ordinare!</span>
    </div>

  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables/variables.scss" as *;

.ms_restaurant_name {
  color: $ms_dark;
  border: 2px solid $ms_yellow;
}

.ms_btn-outline-dark {
  border: none;
}

.ms_ship {
  background-color: white;

}

.ms_color_dark {
  color: $ms_dark;
}

.info {
  button {
    padding: 0 .3rem !important;
    font-size: .8rem;
  }
}
</style>
