<template>
  <div class="welcome-page">
    <w-alert :alertText="alertMessage" :getType="alertType" v-if="alert" />
    <!-- <vue-particles
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
    ></vue-particles>-->
    <mdb-btn
      type="submit"
      size="sm"
      color="primary"
      id="switchLogin"
      aria-controls="Login"
      @click="switchLogin"
    >{{switchButtonText}}</mdb-btn>
    <div class="row p-0 m-0 auth-form">
      <div class="col-12 p-0 m-0 form-switch">
        <c-login class="col-6 p-0 m-0 ml-auto mr-5" @alertMsg="showAlert($event)" />
        <c-signUp
          class="col-6 p-0 m-0 ml-auto mr-5"
          @switchLogin="switchLogin()"
          @alertMsg="showAlert($event)"
        />
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
  props: {},
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
      alert: false,
      switchButtonText: "login"
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
      if (this.switchButtonText === "login") {
        this.switchButtonText = "signup";
        $("#Signup").collapse("hide");
        $("#Login").collapse("show");
      } else if (this.switchButtonText === "signup") {
        this.switchButtonText = "login";
        $("#Login").collapse("hide");
        $("#Signup").collapse("show");
      }
    }
  }
};
</script>

<style scoped>
.welcome-page {
  background-image: url("../assets/yellow-chart-with-pencil.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-color: #464646;
  background-repeat: no-repeat;
  height: 100vh;
}
.register {
  margin-left: 500px;
}
.form-switch {
  height: auto !important;
  margin-top: 5rem !important;
}
</style>