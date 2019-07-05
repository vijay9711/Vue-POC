<template>
  <div>
    <div class="align-items-center mt-5" id="box">
      <div class="card m-auto p-3" style="width: 18rem;">
        <h1 class="card-title">Login</h1>
        <p>
          username
          <input type="text" v-model="username" class="rounded border border-primary">
        </p>
        <p>
          password
          <input type="password" v-model="password" class="rounded border border-primary">
        </p>
        <label>
          <mdb-btn type="submit" size="sm" color="primary" @click="checkUser">Login</mdb-btn>
          <mdb-btn type="button" size="sm" color="primary" @click="clearData">cancel</mdb-btn>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router.js";
import axios from "axios";
import { URL } from "../service/service";
import { mdbInput, mdbBtn } from "mdbvue";
import { constants } from "crypto";
// import { UserDetail } from "../service/API/userdetail"

// const userDetail = new UserDetail()
// const Axios = new axios();
export default {
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn
  },
  props: {
    msg: String
  },
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    checkUser() {
      let user ={"username": "sraa"}

      axios.get("http://localhost:3001/index")
      axios.post("http://localhost:3001/username", this.username)
      //  {
      //   headers: new Headers({
      //     "Content-Type": "application/json"
      //   }),
      // }
      );
      // if (this.username === "vijay" && this.password === "vijay") {
      //   localStorage.setItem("username", this.username);
      //   this.$router.push({ name: "dashboard" });
      // } else {
      //   alert("username or password incorrect");
      // }
    },
    clearData() {
      (this.username = ""), (this.password = "");
      console.log("username ", this.username);
    }
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
