<template>
  <div class="welcome-page">
    <w-alert :alertText="alertMessage" :getType="alertType" v-if="alert" />
    <vue-particles
      color="#007bff"
      linesColor="#000000"
      :particlesNumber="100"
      :linesWidth="1"
      :lineOpacity="0.4"
      :moveSpeed="5"
      hoverMode="grab"
      clickMode="repulse"
      style="background-color:#fff; zIndex:-1; position:fixed;"
      class="h-100 w-100"
    ></vue-particles>
    <mdb-btn
      type="submit"
      size="sm"
      color="primary"
      class="float-center mb-1 switch-button"
      id="switchLogin"
      aria-controls="Login"
      @click="switchLogin"
    >Login</mdb-btn>
    <!-- <mdb-btn type="submit" size="sm" color="primary" class="collapsed" data-target="#Signup" aria-expanded="false"
      aria-controls="Signup" data-toggle="collapse" @click="checkUser">
    SignUp</mdb-btn>-->
    <div class="row">
      <div class="col-12 mb-0">
        <div class="row align-items-center">
          <!------------------------------------------------------------------ login ------------------------------------------------------>
          <div class="align-items-center collapse login" style="width: 23rem;" id="Login">
            <div class="card m-auto p-3" style="width: 22rem;">
              <h1 class="card-title">Login</h1>
              <div class="card-body">
                <p class="p-0 mb-0 float-left">Email</p>
                <span class="required-alert">{{ errors.first('email') }}</span>
                <input
                  type="text"
                  v-model="email"
                  v-validate="'required|email'"
                  name="email"
                  class="rounded border border-primary user-input"
                />
                <p class="p-0 mb-0 float-left">Password</p>
                <span class="required-alert">{{ errors.first('password') }}</span>
                <input
                  type="password"
                  v-model="password"
                  v-validate="'required'"
                  name="password"
                  class="rounded border border-primary user-input"
                />
                <label>
                  <mdb-btn type="submit" size="sm" color="primary" @click="checkUser">Login</mdb-btn>
                  <mdb-btn type="button" size="sm" color="primary" @click="clearData">cancel</mdb-btn>
                </label>
              </div>
            </div>
          </div>
          <!------------------------------------------------------------------ singUp ------------------------------------------------------>
          <div class="align-items-center collapse signup" style="width: 23rem;" id="Signup">
            <div class="card m-auto p-3" style="width: 22rem;">
              <h1 class="card-title">SignUp</h1>
              <div class="card-body m-auto" style="width: 18rem;">
                <p class="p-0 mb-0 float-left">Frist name</p>
                <input
                  type="text"
                  v-model="first_name"
                  class="rounded border border-primary user-input"
                />

                <p class="p-0 mb-0 float-left">Last name</p>
                <input
                  type="text"
                  v-model="last_name"
                  class="rounded border border-primary user-input"
                />

                <p class="p-0 mb-0 float-left">Password</p>
                <input
                  type="password"
                  v-model="password"
                  class="rounded border border-primary user-input"
                />

                <p class="p-0 mb-0 float-left">Email</p>
                <input type="text" v-model="email" class="rounded border border-primary user-input" />

                <p class="p-0 mb-0 float-left">Phone</p>
                <input type="text" v-model="phone" class="rounded border border-primary user-input" />

                <label class="w-100">
                  <mdb-btn type="submit" size="sm" color="primary" @click="signUp">SignUp</mdb-btn>
                  <mdb-btn type="button" size="sm" color="primary" @click="clearData">cancel</mdb-btn>
                </label>
              </div>
            </div>
          </div>
          <!-- <iframe src="https://media.kasperskydaily.com/wp-content/uploads/sites/92/2013/06/06050433/04.gif" class="password-gif"></iframe> -->
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
import { setInterval, setImmediate, setTimeout } from "timers";
import Particles from "vue-particles";
import Alert from "../widget/Alert.vue";

const userDetail = new UserDetails();
export default {
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn,
    "w-particles": Particles,
    "w-alert": Alert
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
      password: "",
      alertMessage: "",
      alertType: "",
      switch: true,
      alert: false
    };
  },
  created() {
    userDetail.login().then(res => {
      console.log(res);
    });
  },
  methods: {
    checkUser() {
      let data = {
        email: this.email,
        password: this.password
      };
      if (this.email.length > 0 && this.password.length > 0) {
        userDetail.login(data).then(res => {
          if (res.data[0].access === "granted") {
            localStorage.setItem("user_id", res.data[0].id + "a02");
            this.$router.push({ name: "dashboard" });
          } else if (res.data[0].access === "denied") {
            this.password = "";
            this.alertType = "warning";
            this.alertMessage = "Email or password incorrect";
            this.alert = true;
            setTimeout(() => {
              this.alert = false;
            }, 3000);
          }
        });
      } else {
        this.alertType = "alert";
        this.alertMessage = "Please enter your email and password";
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      }
    },
    signUp() {
      let user = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        phone: this.phone,
        password: this.password
      };
      if (
        this.first_name.length > 0 &&
        this.last_name.length > 0 &&
        this.email.length > 0 &&
        this.password.length > 0 &&
        this.phone
      ) {
        userDetail.signUp(user).then(res => {
          if (res.status == "200") {
            this.switchLogin();
            this.alertMessage = "Sing-up success!";
            this.alert = true;
            setTimeout(() => {
              this.alert = false;
            }, 3000);
            this.clearData();
          } else {
            this.alertType = "alert";
            this.alertMessage = "There is a error occur try to sign-up again";
            this.alert = true;
            setTimeout(() => {
              his.alert = false;
            }, 3000);
            this.clearData();
          }
        });
      } else {
        this.alertType = "alert";
        this.alertMessage = "Please fill the form to sign-up";
        this.alert = true;
        setTimeout(() => {
          this.alert = false;
        }, 3000);
      }
    },
    clearData() {
      (this.first_name = ""),
        (this.last_name = ""),
        (this.password = ""),
        (this.email = ""),
        (this.phone = "");
    },
    switchLogin() {
      console.log(document.getElementById("switchLogin").innerText);
      if (document.getElementById("switchLogin").innerText === "LOGIN") {
        document.getElementById("switchLogin").innerHTML = "SIGNUP";
        $("#Signup").collapse("hide");
        $("#Login").collapse("show");
      } else if (
        document.getElementById("switchLogin").innerText === "SIGNUP"
      ) {
        document.getElementById("switchLogin").innerHTML = "LOGIN";
        $("#Login").collapse("hide");
        $("#Signup").collapse("show");
      }
    }
  }

  // created: {
  //   $('#Login').collapse('show')
  // }
};
</script>

<style scoped>
.welcome-page {
  overflow: none !important;
  overflow-x: none !important;
  overflow-y: none !important;
}
.user-input {
  padding-left: 0.5rem !important;
  margin-bottom: 1rem;
  width: 100%;
}

.register {
  margin-left: 500px;
}

.login {
  position: fixed;
  margin-top: 275px !important;
  margin-left: 200px !important;
}

.signup {
  position: fixed;
  margin-top: 300px !important;
  margin-left: 200px !important;
}

.switch-button {
  width: 100px !important;
}
.password-gif {
  position: absolute;
  right: 2rem;
  top: 4rem;
  width: 500px;
  height: 400px;
  border: none;
  /* border-radius: 30%; */
  overflow: hidden !important;
  scroll-behavior: none;
}
.required-alert {
  font-size: 12px;
  /* margin-left: -10px; */
  color: red;
}
</style>