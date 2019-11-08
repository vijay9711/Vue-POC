<template>
  <!-- <Nav></Nav> -->
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import Nav from "./components/navbar/navbar.vue";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  },
  components: {
    Nav
  }
};
</script>
<style scoped>
</style>