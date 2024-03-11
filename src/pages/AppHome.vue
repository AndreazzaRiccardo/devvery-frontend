<template>
  <div>
    <AppHeader />
    <div class="ms-container">
      <ProductList />
      <AppSearch />
      <AppCarousel />
      <AppResults />
      <AppOrderAndLogin />
      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppResults from "../components/AppResults.vue";
import AppSearch from "../components/AppSearch.vue";
import AppFooter from "../components/AppFooter.vue";
import AppCarousel from "../components/AppCarousel.vue";
import ProductList from "../components/ProductList.vue";
import { store } from "../store";
import AppOrderAndLogin from "../components/AppOrderAndLogin.vue";

export default {
  components: {
    AppHeader,
    ProductList,
    AppSearch,
    AppFooter,
    AppCarousel,
    AppOrderAndLogin,
    AppResults
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    addToCart(product) {
      this.cartData.push(product);
    },
  },
  created() {
    this.store.restaurants = [];
    this.store.search = '';
    this.store.loadingResults = true;
    this.store.checkedTypes = [];
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 50%;
  position: relative;
  left: 55%;
  transform: translateX(-55%);
  margin-top: 3rem;
}

@media (min-width: 768px) {
  .logo {
    display: none;
  }
}
</style>
