<template>
  <div class="home">
    <div class="p-3 pt-4">
        <div class="row p-0 m-0">
        <div class="col-6 p-2 m-0">
          <p class="my-name mb-0">Hello, </p>
          <p class="my-name"> I'm vijay</p>
        </div>
        <div class="col-6 p-0 m-0">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
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
