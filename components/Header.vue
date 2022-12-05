<template>
  <header class="w-full relative header">
    <nav class="w-full px-16 py-4">
      <div class="flex justify-around items-center gap-2">
        <h1>
          <a href="/" class="xl:text-4xl lg:text-3xl md:text-2xl sm:text-lg">
            <span>Allpha</span>
            <span class="text-imp">X</span>
          </a>
        </h1>
        <ul class="flex relative xl:text-lg xl:space-x-12 lg:text-base lg:space-x-8 md:space-x-4 md:text-sm">
          <!-- <span class="slider-link" :style="`left:${sliderPos}px; width:${sliderWidth}px;`"></span> -->

          <li @click.prevent="link('home')" :class="selectLink == 'home' ? 'active' : ''" ref="home">
            <a href="/">
              Home
            </a>
          </li>
          <li @click.prevent="link('project')" :class="selectLink == 'project' ? 'active' : ''" ref="project">
            <a href="/">
              Porject Registration
            </a>
          </li>
          <li @click.prevent="link('port')" :class="selectLink == 'port' ? 'active' : ''" ref="port">
            <a href="/">
              Portfolio
            </a>
          </li>
          <li @click.prevent="link('services')" :class="selectLink == 'services' ? 'active' : ''" ref="services">
            <a href="/">
              Services
            </a>
          </li>
          <li @click.prevent="link('about')" :class="selectLink == 'about' ? 'active' : ''" ref="about">
            <a href="/">
              About
            </a>
          </li>
          <li @click.prevent="link('contact')" :class="selectLink == 'contact' ? 'active' : ''" ref="contact">
            <a href="/">
              ContactUs
            </a>
          </li>
        </ul>
        <button class="bg-imp rounded-full xl:text-lg xl:px-8 lg:text-base sm:text-sm sm:px-6 sm:py-1 signin-btn"> Sign In </button>
        <button class="bg-imp rounded-full px-2 py-1 hidden user-icon-btn"> <fa icon="user" /> </button>
      </div>
    </nav>

    <section class="grid py-16 lg:px-32 2xl:px-48 lg:grid-cols-2 sm:grid-cols-1 sm:px-24">
      <div class="flex flex-col space-y-6 justify-center">
        <a href="/" class="xl:text-6xl md:text-5xl sm:text-4xl">
          <span>Allpha</span>
          <span class="text-imp">X</span>
        </a>
        <strong class="text-imp xl:text-5xl md:text-2xl">
          Web Design Team
        </strong>
        <p class="leading-6 opacity-70 xl:text-lg lg:text-base md:text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi fuga voluptas amet harum architecto sint vero blanditiis recusandae iste at aut error soluta, modi inventore, maiores, mollitia unde nemo!
        </p>
        <div>
          <button class="xl:px-8 sm:px-6 sm:py-2 sm:text-sm xl:text-lg lg:text-base bg-imp rounded-full"> Design order </button>
        </div>
      </div>
      <div class="flex items-center"> <img src="/image/illestrator/team3.png" class="w-full lg:block sm:hidden"> </div>
    </section>
  </header>
</template>

<script>
  export default {
    data() {
      return {
        selectLink: 'home',
        sliderPos: null,
        sliderWidth: null
      }
    },

    methods: {
      sliderLink() {
        let link= this.$refs[this.selectLink];
        var pos= link.offsetLeft;
        var width= link.offsetWidth;
        this.sliderPos= pos;
        this.sliderWidth= width;
      },

      link(link) {
        this.selectLink= link;
        this.sliderLink()
      },
    },

    mounted() {
      this.sliderLink()
    },
  }
</script>

<style scoped>
  .modal {
    width: 100%;
    height: 100%;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0.6;
    z-index: 900;
  }

  .signin-window {
    width: 600px;
    height: 500px;
    background-color: #F35444;
    position: fixed !important;
    border-radius: 25px;
    z-index: 1000;
  }

  .slider-link {
    height: 3px;
    background-color: #F35444;
    position: absolute;
    bottom: 0;
    border-radius: 100px;
    transition: all .4s;
  }

  li.active {
    color: #F35444 !important;
  }

  .header::before {
    content: '';
    width: 110%;
    min-height: 105%;
    background-color: #121934;
    position: absolute;
    top: -6%;
    left: -5%;
    border-bottom-right-radius: 400px;
    transform: rotate(-3deg);
    z-index: -1;
  }

  @media screen and (min-width: 1300px) {
    .header {
      min-height: 90vh !important;
    }
  }

  @media screen and (max-width: 925px) {
    .signin-btn {
      display: none;
    }

    .user-icon-btn {
      display: block;
    }

    nav ul {
      font-size: 13.5px;
    }

    nav h1 a {
      font-size: 22px;
    }
  }

  @media screen and (min-width: 1400px) {
    .header::before {
      top: -6%;
      left: -5%;
      width: 110%;
      min-height: 105%;
    }
  }

  @media screen and (min-width: 768px) {
    .header {
      min-height: 65vh;
    }

    .header::before {
      top: -8%;
      width: 120%;
      min-height: 110%;
    }
  }
</style>
