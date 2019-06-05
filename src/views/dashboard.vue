<template>
  <div class="about">
    <Nav></Nav>
    <h1>Dashboard</h1>
    <p>{{ username }}</p>
  </div>
</template>
<script>
import Nav from "../components/navbar/navbar.vue";
export default {
  components: {
    Nav
  },
  data: function() {
    return {
      username: localStorage.getItem("username")
    };
  }
};
</script>