<script setup>

</script>


<template>

   <component :is="this.$route.meta.layout || 'div'">
      <router-view />
   </component>

</template>

<!-- global styles -->
<style lang="scss">

@import 'normalize.css/normalize.css';
@import '@design';

</style>