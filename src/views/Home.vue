<template>
  <div class="home">
    <Slider/>
    <New/>
    <Gallery/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import New from '@/components/New.vue'
import Gallery from '@/components/Gallery.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Slider,
    New,
    Gallery,
    Footer
  },
}
</script>
<style>
html{
  background: #111111;
}
</style>
