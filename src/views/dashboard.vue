<template>
  <div class="about">
    <div class="skew-background">
      <h1>Dashboard</h1>
    </div>

    <label class="loading less-than">&lt;</label>
    <label class="loading slash">/</label>
    <label class="loading greater-than">&gt;</label>
  </div>
</template>
<script>
import Nav from "../components/navbar/navbar.vue";
import axios from "axios";
import URL from "../service/service";

export default {
  components: {
    Nav
  },
  data: function() {
    return {
      username: localStorage.getItem("username"),
      info: null
    };
  },
  mounted() {
    axios.get("http://localhost:4000/data").then(response => {
      this.info = response.data;
    });
  }
};
</script>
<style scoped>
.skew-background {
  background-color: #42b987;
  margin: auto;
}
.loading {
  font-size: 120px;
}
.less-than {
  animation: spinleft 0.5s linear;
  animation-iteration-count: 1;
}
.greater-than {
  animation: spinright 0.5s linear;
  animation-iteration-count: 1;
}
.slash {
  animation: slash 0.5s linear;
  animation-iteration-count: 1;
  color: teal;
}
@keyframes slash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes spinleft {
  0% {
    opacity: 0;
    margin-left: -20px;
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    opacity: 0.5;
    margin-left: 0px;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinright {
  0% {
    opacity: 0;
    margin-right: -20px;
  }
  50% {
    opacity: 0.5;
    margin-right: 0px;
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>