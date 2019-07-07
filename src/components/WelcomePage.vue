<template>
  <div>
    <mdb-btn type="submit" size="sm" color="primary" class="collapsed" id="switchLogin" data-target="#Login"
      aria-expanded="true" aria-controls="Login" data-toggle="collapse" @click="switchLogin">
      Login</mdb-btn>
    <!-- <mdb-btn type="submit" size="sm" color="primary" class="collapsed" data-target="#Signup" aria-expanded="false"
      aria-controls="Signup" data-toggle="collapse" @click="checkUser">
      SignUp</mdb-btn> -->
    <div class="row align-items-center m-auto">
      <div class="col-12 register d-inline-block">
        <div class="row align-items-center m-auto">
          <div class="align-items-center collapse mt-5" style="width: 20rem;" id="Login">
            <div class="card m-auto p-3" style="width: 18rem;">
              <h1 class="card-title">Login</h1>
              <div class="card-body">
                <p class="p-0 mb-0 float-left">Email</p>
                <input type="text" v-model="first_name" class="rounded border border-primary user-input" />

                <p class="p-0 mb-0 float-left">Password</p>
                <input type="text" v-model="first_name" class="rounded border border-primary user-input" />

                <label>
                  <mdb-btn type="submit" size="sm" color="primary" @click="checkUser">Login</mdb-btn>
                  <mdb-btn type="button" size="sm" color="primary" @click="clearData">cancel</mdb-btn>
                </label>
              </div>
            </div>
          </div>
          <!-- <div class="card">
      <div class="float-left">
        <mdb-btn type="submit" size="sm" color="primary" @click="signUp">SignUp</mdb-btn>
      </div>
    </div> -->
          <div class="align-items-center mt-5 collapse" style="width: 20rem;" id="Signup">
            <div class="card m-auto p-3" style="width: 22rem;">
              <h1 class="card-title">SignUp</h1>
              <div class="card-body m-auto" style="width: 18rem;">
                <p class="p-0 mb-0 float-left">
                  Frist_name</p>
                <input type="text" v-model="first_name" class="rounded border border-primary user-input" />

                <p class="p-0 mb-0 float-left">
                  Last_name</p>
                <input type="password" v-model="last_name" class="rounded border border-primary user-input" />

                <p class="p-0 mb-0 float-left">
                  Password</p>
                <input type="text" v-model="password" class="rounded border border-primary user-input" />

                <p class="p-0 mb-0 float-left">
                  Email</p>
                <input type="password" v-model="email" class="rounded border border-primary user-input" />

                <p class="p-0 mb-0 float-left">
                  Phone</p>
                <input type="password" v-model="phone" class="rounded border border-primary user-input" />

                <label class="border w-100">
                  <mdb-btn type="submit" size="sm" color="primary" @click="checkUser">SignUp</mdb-btn>
                  <mdb-btn type="button" size="sm" color="primary" @click="clearData">cancel</mdb-btn>
                </label>
              </div>
            </div>
          </div>
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
    data: function () {
      return {
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        password: "",
        switch: true,
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
        this.first_name = "",
          this.last_name = "",
          this.password = "",
          this.email = "",
          this.phone = ""
      },
      switchLogin() {
        console.log(document.getElementById("switchLogin").innerText)
        if (document.getElementById("switchLogin").innerText === 'LOGIN') {
          document.getElementById("switchLogin").innerHTML = "SIGNUP"
          $('#Signup').collapse('hide')
          $('#Login').collapse('show')
        }
        else if (document.getElementById("switchLogin").innerText === 'SIGNUP') {
          document.getElementById("switchLogin").innerHTML = "LOGIN"
          $('#Login').collapse('hide')
          $('#Signup').collapse('show')
        }

      },
      Switch() {
        if (!this.switch) {
          this.switch = true
        }
        else if (this.switch) {
          this.switch = false
        }
      }
    },
    // created: {
    //   $('#Login').collapse('show')
    // }
  };
</script>

<style scoped>
  .user-input {
    padding-left: .5rem !important;
    margin-bottom: 1rem;
    width: 100%;
  }

  .register {
    margin-left: 500px;
  }
</style>