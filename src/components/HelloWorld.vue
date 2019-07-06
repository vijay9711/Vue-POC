<template>
  <div>
    <div class="card">
      <div class="float-left">
        <mdb-btn type="submit" size="sm" color="primary" @click="signUp">SignUp</mdb-btn>
      </div>
    </div>
    <div class="align-items-center mt-5" id="box">
      <div class="card m-auto p-3" style="width: 18rem;">
        <h1 class="card-title">SignUp</h1>
        <div class="card-body">
          <p>
            Frist_name
            <input type="text" v-model="first_name" class="rounded border border-primary" />
          </p>
          <p>
            Last_name
            <input
              type="password"
              v-model="last_name"
              class="rounded border border-primary"
            />
          </p>
          <p>
            Password
            <input type="text" v-model="password" class="rounded border border-primary" />
          </p>
          <p>
            Email
            <input type="password" v-model="email" class="rounded border border-primary" />
          </p>
          <p>
            Phone
            <input type="password" v-model="phone" class="rounded border border-primary" />
          </p>
          <label>
            <mdb-btn type="submit" size="sm" color="primary" @click="checkUser">SignUp</mdb-btn>
            <mdb-btn type="button" size="sm" color="primary" @click="clearData">cancel</mdb-btn>
          </label>
        </div>
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
import { UserDetails } from "../service/API/userdetail";

const userDetail = new UserDetails();
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
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      password: ""
    };
  },
  methods: {
    checkUser() {
      let user = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        password: this.password
      };
      userDetail.login();
      userDetail.signUp(user);
      // axios.get("http://localhost:3001/index")
      // axios.post("http://localhost:3001/username", this.username)
      //  {
      //   headers: new Headers({
      //     "Content-Type": "application/json"
      //   }),
      // }
      // );
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