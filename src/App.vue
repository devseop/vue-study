<script lang="ts" setup>
import NavBarView from './components/NavBar.vue';
</script>

<template>
  <div id='app'>
    <NavBarView />  
    <router-view/>
  </div>
</template>

<style lang="scss">
  body {
    background-color: #23232C;
  }
</style>
