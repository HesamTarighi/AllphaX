<template>
  <section class="bg-gray-50 flex flex-col items-center">
    <div class="xl:w-4/5 lg:w-full sm:w-4/5 xs:w-full space-y-10">
      <strong class="self-start xl:text-3xl sm:text-2xl xs:text-xl">
        <span class="text-gray-900">Our Featured</span>
        <span class="text-imp">Services</span>
      </strong>
      <div class="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 xs:grid-cols-1 gap-6">
        <div
        class="bg-white flex flex-col items-center rounded-xl shadow-2xl xl:px-8 sm:px-4 xs:px-3 py-8 space-y-5"
        v-for="(service, i) in services"
        :key="i"
        >
          <div class="sm:w-32 xs:w-28"> <img :src="service.servicePicture" alt=""> </div>
          <div class="text-gray-900 2xl:text-2xl xs:text-xl"> {{ service.serviceName }} </div>
          <div class="text-gray-700 text-center xl:text-lg xs:text-md opacity-70 thin"> {{ service.serviceDescription }} </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        services: [
          {serviceName: 'Seo', serviceDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit laborum totam corporis, dolor ratione', servicePicture: '/image/illestrator/seo.png'},
          {serviceName: 'UI & UX Designer', serviceDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit laborum totam corporis, dolor ratione', servicePicture: '/image/illestrator/uiux.png'},
          {serviceName: 'Web Design', serviceDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat odit laborum totam corporis, dolor ratione', servicePicture: '/image/illestrator/webdesign.png'},
        ],
      }
    }
  }
</script>
