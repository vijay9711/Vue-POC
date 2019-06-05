<template>
  <div id="nav" class="row border pb-0">
    <div class="col-10 nav">
      <router-link to="/dashboard">DashBoard</router-link>|
      <router-link to="/shoppingList">ShoppingList</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/support">support</router-link>
    </div>

    <div class="col-2">
      <button class="btn btn-primary logout" @click.prevent="clearUserData">Logout</button>
    </div>
  </div>
</template>
<script>

export default {
    name:"nav",
    methods:{
        clearUserData(){
            localStorage.removeItem("username")
            this.$router.push({name:'home'})
        }
    }
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.nav{
    align-content: flex-end;
}
.logout{
    padding:5px !important;
}
</style>
