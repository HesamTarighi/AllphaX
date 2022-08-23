<template>
  <section class="flex flex-col items-center">
    <div class="w-4/5 space-y-10">
      <strong class="text-3xl">
        <span class="text-gray-900">What Our Clients Say</span>
        <span class="text-imp">About Us</span>
      </strong>
      <div class="flex space-x-40">
        <div class="w-1/3"> <img src="/image/illestrator/aboutus.png" alt=""> </div>
        <div class="w-1/2 h-1/2">
          <VueSlickCarousel :arrows="false" :dots="true" class="rounded-xl shadow-lg p-12">
            <div class="space-y-8">
              <p class="text-gray-700 opacity-70">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum mollitia id voluptates dolor, deserunt ducimus voluptate itaque provident minima ad voluptatum sequi aspernatur? Itaque molestiae nesciunt dicta laborum eveniet delectus.
              </p>
              <div class="flex items-center space-x-5">
                <div class="w-24 rounded-full overflow-hidden"> <img src="/image/illestrator/404.jpg" alt=""> </div>
                <div>
                  <div class="text-gray-900">Hesam Tarighi</div>
                  <div class="text-gray-700 opacity-70"> Web </div>
                </div>
              </div>
            </div>
          </VueSlickCarousel >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
  export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
  }
</script>

<style scoped>
  .slider-dot-box span {
    width: 20px;
    height: 20px;
  }
</style>
