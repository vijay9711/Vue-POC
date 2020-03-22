<template>
  <div class="home d-flex-column justify-content-center">
    <div class="p-3 pt-4">
        <div class="row p-0 m-0">
          <div class="col-s-12 col-xs-12 col-md-5 my-image">
            <!-- <img class="my-image" src="../assets/home/intro.jpeg">  -->
          </div>
          <div class="my-content col-s-12 col-xs-12 col-md-6 p-3 m-0">
            <p class="my-name mb-0">Hello, {{username}}</p>
            <p class="my-name ">I'm vijay</p>
            <p>I'm a Full-stack web developer</p>
            <vue-typed-js :strings="['self-taught','passionate','']" :loop="true" :backSpeed="50">
            <span>I'm  <span class="typing"></span></span>
            </vue-typed-js>
            <p>
              
            </p>
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
  padding-top: 5%;
  color: #fff;
  .row {
    background: #263238;
    border-radius: 5px;
    margin-top: 2px;
    .my-image {
      width: 100%;
      height: 80vh;
      margin: 10px 10px;
      border-radius: 5%;
      flex: auto;
      justify-content: center;
      background-image: url("../assets/home/intro.jpeg");
      background-size: cover;
      background-repeat: no-repeat;
    }
    .my-content {
    }
  }
}
@media screen and (max-width: 768px) {
  .home {
    .row {
      .my-image {
        margin: 35px 20px;
      }
    }
  }
}
@media screen and (max-width: 470px) {
  .home {
    font-family: "Courier New", Courier, monospace;
    min-height: 100vh;
    .row {
      // padding: 2rem !important;
      .my-image {
        width: 100%;
        height: 55vh;
        margin: 15px 13px;
        border-radius: 5%;
        flex: auto;
        justify-content: center;
        background-image: url("../assets/home/intro.jpeg");
        background-size: cover;
      }
      .my-name {
        font-size: 19px;
        font-weight: 500;
      }
    }
  }
}
</style>
