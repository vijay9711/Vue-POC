<template>
  <div class="row">
    <div class="col-12">
      <Nav></Nav>
    </div>
    <router-view></router-view>
    <!-- <div class="col-12">
        <Dashborad></Dashborad>
        <Support></Support>
        <About></About>
        <Shoppinglist></Shoppinglist>
    </div> -->
  </div>
</template>
<script>
import Nav from "../components/navbar/navbar.vue";
import Dashborad from "./dashboard"
import Support from "./support"
import About from "./About"
import shoppinglist from './shoppinglist'

export default {
  name: "head",
  components: {
    Nav,
    Dashborad,
    Support,
    About,
    shoppinglist
  }
};
</script>
