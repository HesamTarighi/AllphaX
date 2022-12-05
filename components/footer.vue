<template>
  <footer>
    <div class="2xl:px-24 xl:px-12 sm:px-8 py-8 grid grid-cols-2 sm:gap-8">
      <div class="xl:w-5/6 2xl:w-6/7 sm:w-full">
        <div class="text-2xl">
          <span class="text-gray-900"> About Allpha </span>
          <span class="text-imp"> X </span>
        </div>
        <div class="text-gray-700 opacity-70">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi consequuntur, iusto dolor omnis atque nam inventore, assumenda laboriosam autem tempora minus aperiam consectetur laborum id illum a error! Optio, adipisci!
        </div>
      </div>
      <div class="flex justify-around sm:space-x-8 xl:space-x-0">
        <div>
          <b class="text-2xl text-gray-900 relative title-footer-links"> Links </b>
          <ul class="pt-2 space-y-3">
            <li class="text-gray-900"><a href="/"> Services </a> </li>
            <li class="text-gray-900"><a href="/"> About </a> </li>
            <li class="text-gray-900"><a href="/"> Portfolio </a> </li>
            <li class="text-gray-900"><a href="/"> ContactUs </a> </li>
          </ul>
        </div>
        <div>
          <b class="text-2xl text-gray-900 relative title-footer-links"> ContactUs </b>
          <ul class="pt-2 space-y-3">
            <li class="text-gray-900">
              Office Address
              16122 Collins Street West,
              Melbourne, VIC
            </li>
            <li> <b class="text-gray-900"> Phone: </b> <span class="text-gray-900"> 09910138705 </span> </li>
            <li> <b class="text-gray-900"> Email: </b> <span class="text-gray-900"> info@allphaX.com </span> </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
  .title-footer-links::before {
    content: '';
    width: 100%;
    height: 4px;
    background-color: #F35444;
    position: absolute;
    bottom: -5px;
    left: 0;
  }
</style>
