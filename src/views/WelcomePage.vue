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
      class="switch-button"
      id="switchLogin"
      aria-controls="Login"
      @click="switchLogin"
    >Login</mdb-btn>
    <!-- <mdb-btn type="submit" size="sm" color="primary" class="collapsed" data-target="#Signup" aria-expanded="false"
      aria-controls="Signup" data-toggle="collapse" @click="checkUser">
    SignUp</mdb-btn>-->
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 mb-0">
        <div class="row align-items-center p-0 m-0">
          <c-login @alertMsg="showAlert($event)" />
          <c-signUp @switchLogin="switchLogin()" @alertMsg="showAlert($event)" />
          <!------------------------------------------------------------------ login ------------------------------------------------------>
          <!-- <div class="align-items-center collapse login" style="width: 23rem;" id="Login">
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
                  <mdb-btn
                    type="submit"
                    size="sm"
                    color="primary"
                    @keypress="checkUser"
                    @click="checkUser"
                  >Login</mdb-btn>
                  <mdb-btn type="button" size="sm" color="primary" @click="clearData">cancel</mdb-btn>
                </label>
              </div>
            </div>
          </div>-->
          <!------------------------------------------------------------------ singUp ------------------------------------------------------>
          <!-- <div class="align-items-center collapse signup" style="width: 23rem;" id="Signup">
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
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
import { constants } from "crypto";
import { UserDetails } from "../service/API/userdetail";
import { setInterval, setImmediate, setTimeout } from "timers";
import Particles from "vue-particles";
import Alert from "../widget/Alert.vue";
import Login from "../components/WelcomePage/Login.vue";
import SignUp from "../components/WelcomePage/SignUp.vue";
// import router from "../router.js";

const userDetail = new UserDetails();
export default {
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn,
    "w-particles": Particles,
    "w-alert": Alert,
    "c-login": Login,
    "c-signUp": SignUp
  },
  props: {
    msg: String
  },
  data() {
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
    // userDetail.login().then(res => {
    //   console.log(res);
    // });
    localStorage.clear();
  },
  methods: {
    showAlert(event) {
      this.alertType = event.alertType;
      this.alertMessage = event.alertMsg;
      this.alert = true;
      setTimeout(() => {
        this.alert = false;
      }, 3000);
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