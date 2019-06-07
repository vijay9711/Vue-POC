<template>
  <div class="about">
    <Nav></Nav>
    <h1>Dashboard</h1>
    <p>{{ username }}</p>
    <p>{{ info }}</p>
  </div>
</template>
<script>
import Nav from "../components/navbar/navbar.vue";
import axios from "axios";
import URL from "../service/service"

export default {
  components: {
    Nav
  },
  data: function() {
    return {
      username: localStorage.getItem("username"),
      info:null,
    };
  },
  mounted(){
    axios
      .get('http://localhost:4000/data')
      .then(response => {this.info= response.data})
  }
};
</script>