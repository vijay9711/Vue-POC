<template>
  <div class="home d-flex-column justify-content-center">
    <div class="p-3 pt-4">
        <div class="row p-0 m-0">
        <div class="col-12 p-3 m-0">
          <p class="my-name mb-0">Hello, {{username}}</p>
          <p class="my-name">I'm vijay</p>
          <p>I'm a Full-stack web developer</p>
          <vue-typed-js :strings="['self-taught','passionate','']" :loop="true" :backSpeed="50">
           <span>I'm  <span class="typing"></span></span>
          </vue-typed-js>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import VueTypedJs from 'vue-typed-js'
export default {
  name: "home",
  component:{
    'vue-typed-js':VueTypedJs
  }
};
</script>
<style lang="scss" scoped>
.home {
  font-family: "Courier New", Courier, monospace;
  font-size: 19px;
  min-height: 100vh;
  margin-top: 10%;
  color: #fff;
  .row {
    background: #263238;
    border-radius: 5px;
    margin-top: 2px;
    .col-6:nth-child(1) {
    }
  }
}
@media screen and (max-width: 470px) {
  .home {
    font-family: "Courier New", Courier, monospace;
    min-height: 100vh;
    margin-top: 10%;
    .row {
      .col-6:nth-child(1) {
        // padding: 2rem !important;
        .my-name {
          font-size: 19px;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
