<script>
import axios from "axios";
import { create } from 'braintree-web-drop-in';
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import { store } from "../store";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      braintreeInstance: null,
      showPayment: false,
      store,
      first_name: '',
      last_name: '',
      address: '',
      phone: '',
      foods: [],
      quantity: [],
      restaurant_id: store.cartData[0].restaurant_id,
      data: {},
      error: false,
      paid: false,
      validationErrors: {},
      loading: false
    };
  },
  created() {
    const customerData = JSON.parse(localStorage.getItem('customer'));
    if (customerData) {
      this.first_name = customerData.first_name;
      this.last_name = customerData.last_name;
      this.address = customerData.address;
      this.phone = customerData.phone;
    }
  },
  methods: {
    // VALIDAZIONI
    isValidName() {
      return /^[A-Za-zÀ-ÿ\s']{3,}$/.test(this.first_name);
    },
    isValidSurname() {
      return /^[A-Za-zÀ-ÿ\s'-]+$/.test(this.last_name);
    },
    isValidAddress() {
      return /^[A-Za-zÀ-ÿ0-9\s',.-]+[0-9]+[A-Za-z]?$/.test(this.address);
    },
    isValidPhone() {
      return /^(?:\+?39?[ -]?)?(3[1-9]\d{1,2}|0\d{2,3})[ -]?\d{6,7}$/.test(this.phone);
    },
    insertOrder() {
      this.store.cartData.forEach(element => {
        this.foods.push(element.id)
        this.quantity.push(element.quantity)
      });

      const customerData = {
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        phone: this.phone
      }

      this.data = {
        foods: this.foods,
        quantity: this.quantity,
        first_name: this.first_name,
        last_name: this.last_name,
        address: this.address,
        phone: this.phone,
        total_amount: JSON.parse(localStorage.getItem('total')),
        restaurant_id: this.restaurant_id
      }

      this.validationErrors = {};

      if (!this.isValidName()) {
        this.validationErrors.name = 'Nome non valido';
      }

      if (!this.isValidSurname()) {
        this.validationErrors.lastName = 'Cognome non valido';
      }

      if (!this.isValidAddress()) {
        this.validationErrors.address = 'Indirizzo non valido';
      }

      if (!this.isValidPhone()) {
        this.validationErrors.phone = 'Telefono non valido';
      }

      if (Object.keys(this.validationErrors).length === 0) {
        axios.post('http://127.0.0.1:8000/api/orders/validation', this.data).then((resp) => {
          if (resp.data.success) {
            this.showPayment = true;
            this.loading = true;
            localStorage.setItem('customer', JSON.stringify(customerData));

            axios.get('http://127.0.0.1:8000/api/orders/generate').then((resp) => {
              create({
                authorization: resp.data.token,
                container: '#dropin-container',
                locale: "it_IT"
              }, (error, instance) => {
                if (error) {
                  document.getElementById('dropin-container').innerHTML = '<div class="text-center fs-2 text-danger mt-5">La creazione del form di pagamento è fallita, ritenta</div>'
                  return;
                }

                this.braintreeInstance = instance;
                this.paid = true;
                this.loading = false;
              });
            });
          } else {
            this.validationErrors.name = resp.data.error.first_name;
            this.validationErrors.lastName = resp.data.error.last_name;
            this.validationErrors.address = resp.data.error.address;
            this.validationErrors.phone = resp.data.error.phone;
            this.validationErrors.foods = resp.data.error.foods;
          }
        })
      }
    },
    handlePayment() {
      if (!this.braintreeInstance) {
        console.error('L\'istanza di Braintree non è stata inizializzata correttamente');
        return;
      }
      this.braintreeInstance.requestPaymentMethod((error, payload) => {
        if (error) {
          console.error('Errore durante la richiesta del metodo di pagamento:', error);
          return;
        }

        this.sendPaymentPayload(payload);
      });
    },
    sendPaymentPayload(payload) {
      this.loading = true;
      this.paid = false;

      fetch('http://127.0.0.1:8000/api/orders/make/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          token: payload.nonce,
          amount: this.store.total,

          payload: payload
        })
      })
        .then(resp => {
          if (!resp.ok) {
            throw new Error('Errore nella richiesta al server');
          } else {
            axios.post('http://127.0.0.1:8000/api/orders', this.data).finally(() => {
              this.store.total = 0;
              this.store.cartData = [];
              localStorage.removeItem('cartData');
              this.$router.push('/success');
            });
            return resp.json();
          }
        })
        .catch(error => {
          this.error = true;
          this.paid = true;
          console.log(error);
        });
    }
  }
};
</script>

<template>
  <div class="overflow-y-auto">
    <AppHeader />
    <div class="wrapper position-relative">
      <div class="ms-container container my-5">
        <h3 class="mb-4">Dettagli di consegna</h3>
        <div class="row mb-5 ms_wave">
          <!-- RIEPILOGO -->
          <div class="col-lg-4 col-md-12 mb-4">
            <div class="card">
              <div class="card-header">
                <h5>Il tuo ordine</h5>
              </div>
              <div class="card-body">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Prodotto</th>
                      <th scope="col">Quantità</th>
                      <th scope="col">Prezzo</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="items in store.cartData">
                      <th scope="row">{{ items.name }}</th>
                      <td class="text-center">{{ items.quantity }}</td>
                      <td>{{ items.price }}€</td>
                    </tr>
                  </tbody>
                </table>
                <h5 class="ps-2">Totale: {{ store.total }}€</h5>
              </div>
            </div>
          </div>
          <!-- FORM CLIENTE -->
          <div v-if="!showPayment" class="col-lg-8 col-md-12 ">
            <div class="card">
              <div class="card-header">
                <h5>Dettagli cliente</h5>
              </div>
              <div class="card-body">
                <!-- FORM -->
                <form @submit.prevent="insertOrder">
                  <div class="form-group row row-cols-lg-3 row-cols-md-2 row-cols-sm-1">
                    <div>
                      <label class="my-2" for="first_name">Nome</label>
                      <input autocomplete="name" type="text" class="form-control" id="first_name"
                        placeholder="Inserisci il tuo nome" required v-model="first_name">
                      <span v-if="validationErrors.name" class="text-danger">{{ validationErrors.name }}</span>
                    </div>
                    <div>
                      <label class="my-2" for="last_name">Cognome</label>
                      <input autocomplete="name" type="text" class="form-control" id="last_name"
                        placeholder="Inserisci il tuo cognome " required v-model="last_name">
                      <span v-if="validationErrors.lastName" class="text-danger">{{ validationErrors.lastName
                        }}</span>
                    </div>
                    <div>
                      <label class="my-2" for="phone">Numero di telefono</label>
                      <input autocomplete="tel" type="tel" class="form-control" id="phone"
                        placeholder="Inserisci il cellulare" required v-model="phone">
                      <span v-if="validationErrors.phone" class="text-danger">{{ validationErrors.phone }}</span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="my-2" for="address">Indirizzo </label>
                    <input autocomplete="street-address" type="text" class="form-control" id="address"
                      placeholder="Inserisci l'indirizzo" required v-model="address">
                    <span v-if="validationErrors.address" class="text-danger">{{ validationErrors.address }}</span>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">

                    <button type="submit" class="btn btn-outline-success mt-4 border-2 fw-bold">Procedi al
                      pagamento</button>
                    <span v-if="validationErrors.foods" class="text-danger align-self-end">{{ validationErrors.foods
                      }}</span>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div v-else class="col-lg-8 col-md-12">
            <div v-if="!loading" class="card fs-5">
              <div class="card-header">
                Dettagli Cliente
              </div>
              <div class="card-body d-flex justify-content-around flex-column flex-md-row">
                <div>
                  <p><span class="fw-bold">Nome:</span> {{ first_name }}</p>
                  <p><span class="fw-bold">Cognome:</span> {{ last_name }}</p>
                </div>
                <div>
                  <p><span class="fw-bold">Telefono:</span> {{ phone }}</p>
                  <p><span class="fw-bold">Indirizzo:</span> {{ address }}</p>
                </div>
              </div>
            </div>
            <div class="dropin">
              <div id="dropin-container"></div>
              <button v-if="paid" @click="handlePayment" class="btn btn-outline-success border-2 fw-bold">Effettua il
                pagamento</button>
              <div v-if="loading" class="text-center">
                <i class="ex-10-icon fas fa-circle-notch"></i>
              </div>

              <span v-if="error" class="text-danger ms-3 text-center">Il pagamento non è andato a buon fine,
                ritenta</span>
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

.ms_wave {
  &::after {
    width: 100%;
    background-image: url(../assets/images/main/onda_white.png);
    content: '';
    height: 90px;
    position: absolute;
    display: block;
    transform: rotate(180deg);
    z-index: 9;
    bottom: -90px;
    left: 0%;
    background-size: cover;
    background-repeat: no-repeat;
  }
}

.wrapper {
  min-height: 70vh;
}

.ex-10-icon {
  color: rgb(71, 71, 71);
  font-size: 3rem;
  margin-top: 3rem;
  animation: rotation .9s linear infinite reverse;

  @keyframes rotation {
    25% {
      transform: rotate(90deg)
    }

    50% {
      transform: rotate(180deg);
    }

    75% {
      transform: rotate(270deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>