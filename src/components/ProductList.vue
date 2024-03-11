<template>
  <!-- Confirmation Modal -->
  <transition name="fade">
    <div v-if="store.showModal" class="modal d-flex align-items-center justify-content-center">
      <div class="modal-content text-white p-4">
        <p>Prodotto aggiunto al carrello!</p>
      </div>
    </div>
  </transition>
</template>

<script>
import { store } from "../store";
export default {
  data() {
    return {
      store,
    };
  },
  methods: {
    addToCart(product) {
      const existingProduct = this.store.cartData.find(
        (item) => item.id == product.id
      );
      console.log(existingProduct);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        const myProduct = {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        };
        this.store.cartData.push(myProduct);
        this.store.showModal = true;
        setTimeout(() => {
          this.store.showModal = false;
        }, 2000); // Hide modal after 2 seconds
      }
      localStorage.setItem("cartData", JSON.stringify(this.store.cartData));
    },
    pushProduct(product) {
      let myProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      this.store.cartData.push(myProduct);
    },
  },
};
</script>

<style scoped>
/* Styling for the modal */
.modal {
  position: fixed;
  margin-top: 40vh;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.9);
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
