<template lang="html">
  <div class="container is-fluid">

  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img :src="imageurl" alt="Hello" v-if="imageurl">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Price : {{listing.price}}  {{listing.currency_code}}</p>
      </div>
    </div>

    <div class="content" v-if="listing">
      {{listing.description}}
    </div>
  </div>
</div>
</div>
</template>

<script>

import axios from 'axios';

  export default {
    props : ['item'],
    data() {
      return {
        listing : this.item,
        imageurl : ""
      }
    },

    mounted() {

      var config = {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Content-Type' : 'application/json'
        }
      };

      axios.get('/image?q='+this.listing.listing_id)
      .then(response => {
         if(response.data.count > 0) {
          this.imageurl = response.data.results[1].url_fullxfull
          console.log(this.imageurl);
        }
      })

      /*
      axios.get('http://localhost:8081/images?q='+this.listing.listing_id , config)
      .then(response => {
        if(response.data.count > 0) {
          this.imageurl = response.data.results[1].url_fullxfull
          console.log(this.imageurl);
        }
      })

      */
    },
    methods : {

    }
  }

</script>

<style lang="css">
</style>
