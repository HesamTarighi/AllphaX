<template>
  <header class="w-full relative header">
    <nav class="w-full lg:px-16 md:px-10 xs:px-6 py-4 xs:fixed md:static xs:bg-[#121934] z-50">
      <div class="flex md:justify-around items-center gap-2 xs:justify-between">
        <button class="md:hidden xs:block">
          <fa icon="bars" />
        </button>
        <h1>
          <a href="/" class="xl:text-3xl lg:text-2xl md:text-xl xs:text-lg">
            <span>Allpha</span>
            <span class="text-imp">X</span>
          </a>
        </h1>
        <ul class="relative xl:text-lg xl:space-x-12 lg:text-base lg:space-x-8 md:space-x-6 md:text-sm xs:hidden md:flex">
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
        <div>
          <button class="bg-imp rounded-full xl:text-lg xl:px-8 lg:text-base xs:text-sm xs:px-6 xs:py-1 lg:block xs:hidden signin-btn"> Sign In </button>
          <button class="bg-imp rounded-full px-2 py-1 xs:block lg:hidden user-icon-btn"> <fa icon="user" /> </button>
        </div>
      </div>
    </nav>

    <section class="grid py-16 lg:px-32 2xl:px-48 lg:grid-cols-2 xs:grid-cols-1 sm:px-24 xs:px-8">
      <div class="flex flex-col space-y-6 justify-center">
        <a href="/" class="2xl:text-6xl xl:text-5xl xs:text-4xl">
          <span>Allpha</span>
          <span class="text-imp">X</span>
        </a>
        <strong class="text-imp 2xl:text-5xl xl:text-4xl xs:text-3xl">
          Web Design Team
        </strong>
        <p class="leading-6 opacity-70 xl:text-lg xs:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur nisi fuga voluptas amet harum architecto sint vero blanditiis recusandae iste at aut error soluta, modi inventore, maiores, mollitia unde nemo!
        </p>
        <div>
          <button class="xl:px-8 xs:px-6 xs:py-2 xs:text-sm xl:text-lg lg:text-md bg-imp rounded-full"> Design order </button>
        </div>
      </div>
      <div class="flex items-center"> <img src="/image/illestrator/team3.png" class="w-full lg:block xs:hidden"> </div>
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
    z-index: -1;
  }

  @media screen and (min-width: 340px) {
    .header::before {
      transform: rotate(0);
      border-radius: 0;
    }
  }

  @media screen and (min-width: 768px) {
    .header::before {
      border-bottom-right-radius: 400px;
      transform: rotate(-3deg);
    }
  }

  @media screen and (min-width: 1300px) {
    .header {
      min-height: 93vh !important;
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
