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

    <div class="row w-50 p-5 m-auto auth-form">
      <!-- <div class="col-12 form-switch"> -->
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0 m-0 login-block">
        <div class="w-50 m-auto inline-block">
          <w-button
            id="switchLogin"
            :buttonStyle="'login'"
            :label="switchButtonText"
            :buttonClass="'px-2 py-1 my-3'"
            @buttonClicked="switchLogin"
          />
          <div class="p-2 mb-2 text-center google-sign-up" @click="googleSignIn()">
            <img src="@/assets/googleSignIn.png" class="google-img" />
            <a id="googleSignIn" class="p-0" href="http://localhost:3001/auth/google">Google</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0 m-0 m-auto pt-4 card-cont">
        <c-login class @alertMsg="showAlert($event)" />
        <c-signUp @switchLogin="switchLogin()" @alertMsg="showAlert($event)" />
      </div>

      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import { mdbInput, mdbBtn } from "mdbvue";
import { constants } from "crypto";
import { UserDetails } from "../service/userdetail.js";
import { setInterval, setImmediate, setTimeout } from "timers";
import Particles from "vue-particles";
import Alert from "../widget/Alert.vue";
import Login from "../components/WelcomePage/Login.vue";
import SignUp from "../components/WelcomePage/SignUp.vue";
import InputButton from "../widget/InputButton.vue";
// import router from "../router.js";

const userDetail = new UserDetails();
export default {
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn,
    "w-particles": Particles,
    "w-alert": Alert,
    "c-login": Login,
    "c-signUp": SignUp,
    "w-button": InputButton
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
    localStorage.clear();
  },
  methods: {
    googleSignIn() {
      document.getElementById("googleSignIn").click();
    },
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
        setTimeout(() => {
          $("#Login").collapse("show");
        }, 350);
      } else if (this.switchButtonText === "signup") {
        this.switchButtonText = "login";
        $("#Login").collapse("hide");
        setTimeout(() => {
          $("#Signup").collapse("show");
        }, 350);
      }
    }
  }
};
</script>

<style scoped>
.login-block {
  margin: auto;
}
.welcome-page {
  background-image: url("../assets/yellow-chart-with-pencil.jpg");
  /* background: #fff; */
  background-size: cover;
  background-position: center;
  /* background-attachment: fixed; */
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
  /* min-width: 100vh; */
  /* padding: 2rem;  */
}
.google-sign-up {
  height: 2.5rem;
  background: #4285f4;
  border: transparent;
  border-radius: 5px;
  cursor: pointer;
  min-width: 8rem;
  box-shadow: 6px 7px 16px 0px rgba(0, 0, 0, 0.75);
}
.google-sign-up a {
  color: #fff;
  min-width: 8rem;
}
.google-sign-up a:hover {
  text-decoration: none;
}
.google-img {
  width: 1.8rem;
  margin-right: 1rem;
  margin-top: -3px;
}
.auth-form {
  margin-top: 5rem !important;
}
@media only screen and (max-width: 995px) {
  .auth-form {
    width: 100% !important;
    /* padding: 0 !important; */
    border: 1px solid #4285f4 !important;
    text-align: -webkit-center;

    /* margin: 0% !important;
    padding: 0% !important; */
  }
}
@media only screen and (max-width: 370px) {
  .card-cont {
    margin-left: -3rem !important;
  }
}
</style>
