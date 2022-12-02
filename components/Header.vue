<template>
  <header class="w-full relative header">
    <nav class="w-full px-16 py-4">
      <div class="flex justify-around items-center gap-2">
        <h1>
          <a href="/" class="lg:text-4xl md:text-2xl">
            <span>Allpha</span>
            <span class="text-imp">X</span>
          </a>
        </h1>
        <ul class="flex relative lg:text-lg lg:space-x-12 md:space-x-6 md:text-sm">
          <span class="slider-link" :style="`left:${sliderPos}px; width:${sliderWidth}px;`"></span>

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
        <button class="lg:px-8 py-1 bg-imp rounded-full lg:text-lg md:text-sm md:px-6"> Sign In </button>
      </div>
    </nav>

    <section class="grid grid-cols-2 lg:px-48 py-16 md:px-12">
      <div class="flex flex-col space-y-6 justify-center">
        <a href="/" class="lg:text-7xl md:text-6xl">
          <span>Allpha</span>
          <span class="text-imp">X</span>
        </a>
        <strong class="lg:text-5xl text-imp md:text-4xl">
          Web Design Team
        </strong>
        <p class="lg:text-lg leading-6 opacity-70 md:text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi fuga voluptas amet harum architecto sint vero blanditiis recusandae iste at aut error soluta, modi inventore, maiores, mollitia unde nemo!
        </p>
        <div>
          <button class="px-8 py-2 bg-imp rounded-full text-lg"> Design order </button>
        </div>
      </div>
      <div> <img src="/image/illestrator/team3.png" class="xl:w-full md:w-[90%]"> </div>
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

  .header {
    height: 97vh;
  }

  .header::before {
    content: '';
    width: 105%;
    height: 105%;
    background-color: #121934;
    position: absolute;
    top: -6%;
    left: -2%;
    border-bottom-right-radius: 400px;
    transform: rotate(-3deg);
    z-index: -1;
  }

  @media screen and (min-width: 1400px) {
    .header::before {
      top: -6%;
      width: 105%;
      height: 105%;
    }
  }

  @media screen and (min-width: 768px) {
    .header::before {
      top: -8%;
      width: 120%;
      height: 110%;
    }
  }
</style>
