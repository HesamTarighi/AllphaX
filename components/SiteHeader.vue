<template>
  <div>
    <header class="w-full h-screen bg-yellow-500 pt-3 px-6">
      <NavHeader :lists="lists"/>
      <MainHeader/>
      <fa icon="angle-down"/>
    </header>
  </div>
</template>

<script>
  import lists from '@/db/header/header.json'

  export default {
    data() {
      return {
        lists
      }
    },
  }
</script>

<style>
  @import url('@/static/css/header.css');
</style>
