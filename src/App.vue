<template>
  <!-- <Nav></Nav> -->
  <div>
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const default_layout = "no-navbar";
export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || default_layout) + "-layout";
    }
  }
};
</script>
<style scoped></style>
