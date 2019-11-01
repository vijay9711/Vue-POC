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
    <div class="row p-0 m-0">
      <div class="col-12 p-0 m-0 mb-0">
        <div class="row align-items-center p-0 m-0 form-space">
          <mdb-btn
            type="submit"
            size="sm"
            color="primary"
            class="switch-button"
            id="switchLogin"
            aria-controls="Login"
            @click="switchLogin"
          >{{switchButtonText}}</mdb-btn>
          <c-login @alertMsg="showAlert($event)" />
          <c-signUp @switchLogin="switchLogin()" @alertMsg="showAlert($event)" />
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
.register {
  margin-left: 500px;
}

.switch-button {
  position: fixed;
  margin-top: 20rem;
  margin-left: 10rem;
  margin-right: 5rem;
  margin-bottom: 5rem;
}
.required-alert {
  font-size: 12px;
  /* margin-left: -10px; */
  color: red;
}

.form-space {
  width: 20rem;
}
</style>