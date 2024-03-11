<script>
import { defineComponent } from 'vue'
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default {
  name: "Autoplay",

  data() {
    return {
      images: ['alta-cucina', 'cinese', 'fast-food', 'giapponese', 'hamburgeria', 'pasticceria', 'pizzeria', 'trattoria'],
      settings: {
        itemsToShow: 0.7,
        snapAlign: 'center',
        autoplay: 3000,
        mouseDrag: false,
      },
    };
  },

  components: {
    Carousel,
    Slide,
    Navigation
  },
  methods: {
    getImagepath(img) {
      return new URL(`../assets/images/imgTypes/${img}.png`, import.meta.url).href;
    },
  }
};
</script>

<template>
  <Carousel class="w-100" v-bind="settings" :wrap-around="true">
    <Slide v-for="slide in images" :key="slide">
      <img class="carousel__item" :src="getImagepath(slide)" alt="">
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.carousel {
  position: absolute;
  top: 0;
  z-index: -999999;
  filter: brightness(40%);
}

.carousel__item {
  height: 1400px;
  width: 100%;
  object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

@media screen and (min-width: 768px) {
  .carousel__item {
    height: 1000px;
  }
}
</style>
