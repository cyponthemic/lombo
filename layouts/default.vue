<template>
  <div>
    <main :class="{'opacity-0': loading}">
      <div data-scroll>
          <Nuxt />
      </div>
    </main>
    <div v-show="loading" class="absolute inset-0 flex justify-center items-center">
      <div>
        <div class="loading-logo w-64 px-24 h-40"></div>
        <h2>Loading baby...</h2>
      </div>
    </div>
    <div id="container" ref="container"></div>
  </div>
</template>
<style>
  .loading-logo {
    width: 300px;
    background-image: url("/pat.gif");
  }
</style>
<script>
  import Sketch from "../assets/js/app";

  export default {
    computed: {
      loading() {
        return this.$store.state.loading.enabled;
      }
    }
  }
</script>
