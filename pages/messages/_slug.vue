<template>
  <div class="container mx-auto">
    <img class="max-w-md mt-10 mx-auto opacity-0" crossorigin="anonymous" :src="story.featured_image" alt="">
    <h2 class="max-w-lg mx-auto">{{ story.excerpt }}</h2>

    <div class="max-w-lg mx-auto" v-html="body(story.message)"></div>

    <h2 class="max-w-lg mx-auto">{{ story.author }}</h2>




    <div class="max-w-lg mx-auto text-center">
      <a class="underline" href="/">
        Back to messages
      </a>
    </div>

    <div class="h-36"></div>

  </div>
</template>
<script>
  import {Message} from "../../data/CardData";
  import Sketch from "../../assets/js/app";

  export default {
    data() {
      return {
        story: {}
      }
    },
    methods: {
      body(data) {
        return this.$storyapi.richTextResolver.render(data || {})
      }
    },
    asyncData({params}) {
      return {
        params
      }
    },
    mounted() {
      this.$storyapi.get('cdn/stories/messages/' + this.params.slug, {
        version: 'draft'
      }).then((res) => {
        this.story =  Message(res.data.story)

        setTimeout(()=>{
          new Sketch({
            dom: document.getElementById('container')
          });
          this.$store.dispatch('loading/toggle')
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
