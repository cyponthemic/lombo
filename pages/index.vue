<template>
  <div class="page">
    <header>
      <h1>Happy Birthday</h1>
    </header>

    <div class="grid">
        <CardItem v-for="(card, i) in stories" :index="i" :item="card"/>
    </div>

  </div>
</template>

<script>
  import Sketch from "../assets/js/app";
  import {Message} from "../data/CardData";

  export default {
    data() {
      return {
        stories: {}
      }
    },
    mounted() {
      this.$storyapi.get('cdn/stories', {
        version: 'draft'
      }).then((res) => {
        this.stories =  res.data.stories.map(Message)
        setTimeout(()=>{
          new Sketch({
            dom: document.getElementById('container'),
            callback: () =>  this.$store.dispatch('loading/toggle')
          });
        }, 1000)
      }).catch((res) => {
        if (!res.response) {
          console.error(res)
          context.error({ statusCode: 404, message: 'Failed to receive content form api' })
        } else {
          console.error(res.response.data)
          context.error({ statusCode: res.response.status, message: res.response.data })
        }
      })
    }
  }
</script>
