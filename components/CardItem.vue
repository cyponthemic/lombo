<template>
  <div class="item" :class="align">
    <div class="item__image">
      <img
        crossorigin="anonymous"
        :src="item.featured_image"
        alt=""
      >
      <!--      <div class="item__meta">November 26, 2020</div>-->
    </div>

    <template v-if="item.message">
      <h2 class="item__title hover:underline">
        <a :href="item.link">
        "{{ item.excerpt }}..."
        </a>
      </h2>
    </template>
    <template v-else>
      <h2 class="item__title">"{{ item.excerpt }}<span v-show="item.message">...</span>"</h2>
    </template>

    <div class="flex">
      <h3>{{ item.author }} <span  v-show="item.message">&nbsp;|&nbsp;</span><a  v-show="item.message" class="underline" :href="item.link">
        Read more
      </a></h3>

    </div>

  </div>
</template>
<script>
  import CardData, {Message} from "../data/CardData";

  export default {
    props: {
      index: {
        type: Number,
        required: true
      },
      item: {
        type: Object,
        default: () => Message(CardData)
      },
    },
    methods: {
      body(data) {
        return this.$storyapi.richTextResolver.render(data || {})
      }
    },
    computed: {
      align() {
        const array = ['item_v', 'item_h', 'item_h', 'item_v','item_v', 'item_h', 'item_h', 'item_v','item_v', 'item_h', 'item_h', 'item_v']
        return array[this.index]
      }
    }
  }
</script>
