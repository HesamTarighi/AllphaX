<template>
  <section class="flex flex-col items-center">
    <div class="xl:w-4/5 lg:w-full sm:w-4/5 space-y-10">
      <strong class="xl:text-3xl sm:text-2xl xs:text-xl">
        <span class="text-gray-900">What Our Clients Say</span>
        <span class="text-imp">About Us</span>
      </strong>
      <div class="grid lg:grid-cols-2 xs:grid-cols-1 items-center gap-8">
        <div class="2xl:w-4/5 lg:w-full lg:block xs:hidden flex items-center"> <img src="/image/illestrator/aboutus.png" alt=""> </div>
        <div class="w-full">
          <VueSlickCarousel :arrows="false" :dots="true" class="rounded-xl shadow-lg 2xl:p-12 xl:p-9 lg:p-6 sm:p-12 xs:p-3">
            <div class="space-y-8" v-for="(developer, index) in developers" :key="index">
              <p class="text-gray-700 opacity-70">
                {{ developer.developerDescription }}
              </p>
              <div class="flex items-center space-x-5">
                <div class="sm:w-24 xs:w-20 rounded-full overflow-hidden"> <img :src="developer.developerPicture" alt=""> </div>
                <div>
                  <div class="text-gray-900">{{ developer.developerName }}</div>
                  <div class="text-gray-700 opacity-70"> {{ developer.developerProficiency }} </div>
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
    components: {
      VueSlickCarousel
    },

    data() {
      return {
        developers: [
          {
            developerName: 'Hesam Tarighi',
            developerDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, deserunt ducimus voluptate itaque provident minima ad voluptatum sequi aspernatur?',
            developerProficiency: 'Web',
            developerPicture: '/image/illestrator/404.jpg'
          },
          {
            developerName: 'Hesam Tarighi',
            developerDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit, deserunt ducimus voluptate itaque provident minima ad voluptatum sequi aspernatur?',
            developerProficiency: 'Web',
            developerPicture: '/image/illestrator/404.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .slider-dot-box span {
    width: 20px;
    height: 20px;
  }
</style>
