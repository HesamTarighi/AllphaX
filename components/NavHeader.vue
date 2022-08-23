<template>
  <div>
    <nav class="flex justify-center space-x-10 uppercase">
        <ul class="flex justify-center text-lg text-black-100">
          <li class="px-5 cursor-pointer" v-for="(list, index) in lists" :key="index"> {{ list.item }} </li>
        </ul>
        <div class="w-400 header-search-box">
          <input type="text" class="w-full rounded-full shadow-md py-1 px-3" placeholder="Search...">
        </div>
        <div class="justify-self-end">
          <button class="rounded bg-blue-500 shadow-md px-3 py-1 uppercase">Sign in</button>
        </div>
    </nav>
  </div>
</template>

<script>
  export default {
    props: {
      lists: Object,
    }
  }
</script>
