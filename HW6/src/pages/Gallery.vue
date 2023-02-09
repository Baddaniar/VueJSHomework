<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      images: [
        {
          id: 1,
          imageUrl: "https://picsum.photos/500",
        },
        {
          id: 2,
          imageUrl: "https://picsum.photos/501",
        },
        {
          id: 3,
          imageUrl: "https://picsum.photos/502",
        },
        {
          id: 5,
          imageUrl: "https://picsum.photos/503",
        },
        {
          id: 6,
          imageUrl: "https://picsum.photos/504",
        },
      ],
    };
  },
};
</script>

<template>
  <p>Галеремя епта</p>
  <vueper-slides>
  <vueper-slide
    v-for="(image) in images"
    :key="image.id"
    :content="image.imageUrl">
  </vueper-slide>
</vueper-slides>
</template>

<style>
</style>