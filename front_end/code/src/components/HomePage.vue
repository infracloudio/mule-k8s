<template lang="html">
<div>
  <section class="hero is-small is-success is-bold">
  <div class="hero-body">
    <div class="container has-text-centered">
      <h1 class="title">
        Mule Demo - istio ui change
      </h1>
      <h2 class="subtitle">
        Infracloud Technologies
      </h2>
    </div>
  </div>
</section>
<section class="section">

 </section>

  <div class="container is-responsive">

    <div class="field is-grouped">
      <p class="control is-expanded">
        <input class="input" type="text" placeholder="Search for Etsy listings" v-model="searchText">
      </p>
      <p class="control">
        <a class="button is-success" v-on:click="search" v-on:keydown.enter="search">
          Search
        </a>
      </p>
    </div>

    <div class="columns">
      <div class="column">
        <card v-for="n in count" :item="listings.results[n]" v-if= "n % 2 == 0"></card>
        <section>
          
        </section>
      </div>
      <p v-if="noResults == 'true'"> No listings found </p>
      <div class="column">
        <card v-for="n in count" :item="listings.results[n]" v-if= "n % 2 != 0"></card>
      </div>
    </div>
  </div>
</div>
</template>
<script>

import axios from 'axios';
import CardComponent from './CardComponent.vue';

export default {
  components : {
    card : CardComponent
  },
  data() {
    return {
      listings :{},
      count : 0,
      searchText : "",
      noResults : ""
    }
  },

  methods : {

    search() {

      this.noResults = "";
      this.count = 0;
      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Content-Type' : 'application/json'
        }
      };

      axios.get('/search?q='+this.searchText)
      .then(response => {
        this.listings = response.data

        this.count = this.listings.count

        if (this.count > 25) {
            this.count = 10
        }
        if(this.count == 0 ) {
          this.noResults = "true"
        }
      })
      /*
      axios.get('http://localhost:8081/search?q='+this.searchText , config)
      .then(response => {
        this.listings = response.data

        this.count = this.listings.count

        if (this.count > 25) {
            this.count = 10
        }
        if(this.count == 0 ) {
          this.noResults = "true"
        }
      })
      */
    }
  }
}
</script>

<style lang="css">
</style>
