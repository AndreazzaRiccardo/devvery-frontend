<script>
import axios from "axios";
import { store } from "../store";
export default {
  data() {
    return {
      store,
      myTypes: [],
    };
  },
  created() {
    axios.get(`${this.store.baseUrl}/api/types`)
      .then((resp) => {
        this.myTypes = resp.data.result;
      });
    axios.get(`${this.store.baseUrl}/api/types`).then((resp) => {
      this.store.myTypes = resp.data.result;
    });
  },
  methods: {
    resetFilter() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      this.store.search = "";
      this.store.checkedTypes = [];
      this.store.restaurants = [];

    },
    getImagepath(img) {
      return new URL(`../assets/images/type_in_search/${img}.jpg`, import.meta.url).href;
    },
    filteredRestaurants() {
      if (this.store.search.length >= 2) {
        this.store.loadingResults = true;
        this.store.checkedTypes = [];
        if (this.store.search.length === 0) {
          this.store.restaurants = [];
        } else {
          axios
            .get(`${this.store.baseUrl}/api/restaurants/searchText/${this.store.search}`)
            .then((resp) => {
              this.store.restaurants = resp.data.result;
            })
            .finally(() => {
              this.store.loadingResults = false
            });
        }
      } else {
        this.store.restaurants = [];
        this.store.loadingResults = true
      }
    },
    checkTypes() {
      this.store.loadingResults = true;
      this.store.restaurants = [];

      if (this.store.checkedTypes.length > 0) {

        let dates = [];
        this.store.checkedTypes.forEach((element) => {
          dates.push(element.name);
        });
        const params = { types: dates };
        axios
          .get(`${this.store.baseUrl}/api/restaurants/types`, { params })
          .then((resp) => {
            if (!(typeof resp.data.result === 'string')) {
              this.store.restaurants = resp.data.result;
              // console.log(this.store.restaurants);
            }
          })
          .finally(() => {
            this.store.loadingResults = false

          })
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <div id="title" class="text-center">
      <p class="fw-semibold mb-0">Il cibo che vuoi, quando vuoi...</p>
    </div>
    <div class="d-flex justify-content-center mt-5" v-if="store.checkedTypes.length === 0">
      <div class="input-group w-75 ms_width">
        <label class="input-group-text text-warning rounded-3 rounded-end-0" id="basic-addon1" for="search"><i
            class="fa-solid fa-magnifying-glass"></i></label>
        <input type="text" class="form-control bg-white rounded-3 rounded-start-0" placeholder="Cerca un Ristorante"
          aria-label="search" aria-describedby="basic-addon1" id="search" v-model="store.search"
          @input="filteredRestaurants">

      </div>
    </div>

    <div class="row row-cols-2 row-cols-md-4 justify-content-between mt-3"
      :class="{ 'ms_margin_top': store.checkedTypes.length != 0 }" v-if="store.search.length === 0">
      <div v-for="myType in myTypes" class="checkbox-wrapper-10 position-relative ms_margin">
        <input v-bind:disabled="store.search.length > 0" v-model="store.checkedTypes" @change="checkTypes"
          :value="myType" class="tgl tgl-flip z-2" :id="`cb5-${myType.name}`" type="checkbox" />
        <label class="tgl-btn fs-5 z-2" :data-tg-off="myType.name" :data-tg-on="myType.name"
          :for="`cb5-${myType.name}`"></label>
        <img @click="$event.target.previousElementSibling.click()"
          class="border border-2 border-warning position-absolute start-50 translate-middle rounded-circle z-1 object-fit-cover"
          :src="getImagepath(myType.name)" :alt="myType.name" />
      </div>
    </div>
    <div class="text-center" v-if="store.search != '' || store.checkedTypes.length > 0">
      <button type="button" class="btn fs-5 mt-5 fw-bold ms_reset_filter" @click="resetFilter()">Azzera ricerca</button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use "../styles/variables/variables.scss" as *;

.checkbox-wrapper-10 img {
  cursor: pointer;
}

.ms_margin_top {
  margin-top: 0;
}

.ms_padding_top {
  padding-top: 0;
}

.container {
  padding-top: 5rem;
  padding-bottom: 6rem;

  .ms_reset_filter {
    background-color: $ms_yellow;
    color: $ms_dark;
    border-radius: 10px;
  }

  #title {
    font-size: 3rem;
    color: $ms_yellow;
  }

  .ms_margin {
    margin-top: 10rem;
  }

  img {
    top: -65%;
    width: 130px;
    aspect-ratio: 1;
  }

  .ms_brand {
    white-space: nowrap;


  }

  // SEARCHBAR SHADOW
  .form-control:focus {
    box-shadow: none;
    border: 1px solid white;
    outline: none;
  }

  // CHECKBOX
  .checkbox-wrapper-10 .tgl {
    display: none;
  }

  .checkbox-wrapper-10 .tgl+.tgl-btn {
    box-sizing: border-box;
  }

  .checkbox-wrapper-10 .tgl+.tgl-btn::selection {
    background: none;
  }

  .checkbox-wrapper-10 .tgl+.tgl-btn {
    outline: 0;
    display: block;
    width: 150px;
    height: 2em;
    position: relative;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    //aggiunto per non modificare classi interne alle checkbox
    margin: 0 auto;

    @media screen and (max-width: 600px) {
      width: 135px;
    }
  }

  .checkbox-wrapper-10 .tgl+.tgl-btn:after,
  .checkbox-wrapper-10 .tgl+.tgl-btn:before {
    position: relative;
    display: block;
    content: "";
    width: 100%;
    height: 100%;
  }

  .checkbox-wrapper-10 .tgl+.tgl-btn:after {
    left: 0;
  }

  .checkbox-wrapper-10 .tgl+.tgl-btn:before {
    display: none;
  }

  .checkbox-wrapper-10 .tgl:checked+.tgl-btn:after {
    left: 50%;
  }

  .checkbox-wrapper-10 .tgl-flip+.tgl-btn {
    padding: 2px;
    transition: all 0.2s ease;
    font-family: sans-serif;
    perspective: 200px;
    font-size: 2rem;

    @media screen and (max-width: 600px) {
      font-size: 1rem;
    }
  }

  .checkbox-wrapper-10 .tgl-flip+.tgl-btn:after,
  .checkbox-wrapper-10 .tgl-flip+.tgl-btn:before {
    display: inline-block;
    padding: 0 .5rem 0 .5rem;
    transition: all 0.4s ease;
    width: 100%;
    text-align: center;
    position: absolute;
    line-height: 2em;
    font-weight: bold;
    color: #fff;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
  }

  .checkbox-wrapper-10 .tgl-flip+.tgl-btn:after {
    content: attr(data-tg-on);
    background: $ms_yellow;
    transform: rotateY(-180deg);
  }

  .checkbox-wrapper-10 .tgl-flip+.tgl-btn:before {
    background: $ms_dark;
    content: attr(data-tg-off);
  }

  .checkbox-wrapper-10 .tgl-flip+.tgl-btn:active:before {
    transform: rotateY(-20deg);
  }

  .checkbox-wrapper-10 .tgl-flip:checked+.tgl-btn:before {
    transform: rotateY(180deg);
  }

  .checkbox-wrapper-10 .tgl-flip:checked+.tgl-btn:after {
    transform: rotateY(0);
    left: 0;
    background: $ms_yellow;
    color: $ms_dark;
  }

  .checkbox-wrapper-10 .tgl-flip:checked+.tgl-btn:active:after {
    transform: rotateY(20deg);
  }

  // MEDIA QUERY SEARCHBAR
  @media screen and (min-width: 768px) {
    .ms_width {
      width: 50% !important;
    }
  }

  @media screen and (min-width: 1200px) {
    .ms_width {
      width: 30% !important;
    }
  }
}
</style>
