<template>
  <section class="flex justify-center">
    <div class="xl:w-4/5 lg:w-full sm:w-4/5 flex justify-evenly lg:space-x-16">
      <div class="2xl:w-1/2 xl:w-2/3 lg:w-2/3 lg:block sm:hidden self-center"> <img src="/image/illestrator/portfolio.png"> </div>
      <div class="sm:w-full lg:w-full space-y-10 py-16">
        <strong class="flex flex-col xl:text-3xl sm:text-2xl">
          <span class="text-gray-800">Web Design Company You Can</span>
          <span class="text-imp">Trust</span>
        </strong>
        <p class="w-full md:text-lg sm:text-base leading-6 opacity-70 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quos consequatur fugit, laboriosam ut mollitia architecto iusto ad quod tenetur, reiciendis consectetur vitae illo sint dolorem atque accusantium dolor quas.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
  @media screen and (max-width: 1024px) {
    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
</style>
