<template lang="html">
  <div class="container is-fluid">

  <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="http://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-content">
        <p class="title is-4">Description</p>
      </div>
    </div>

    <div class="content">
      {{item.description}}
    </div>
  </div>
</div>
</div>
</template>

<script>

  export default {
    props : ['item'],
    data() {
      return {
        listing : this.item,
      }
    },
    methods : {

    }
  }

</script>

<style lang="css">
</style>
