<template>
  <div class="welcome-page">
    <w-alert :alertText="alertMessage" :getType="alertType" v-if="alert" />
    <div>
      <lottie-player class="web-animation row p-0 m-auto mx-auto" src="https://assets7.lottiefiles.com/packages/lf20_znCQsa.json"  background="transparent"  speed="1"  style="width: 600px; height: 600px;"  loop  autoplay >
      </lottie-player>
    </div>
    <div class="row w-50 p-5 m-auto auth-form">
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
            <a id="googleSignIn" class="p-0" :href="googleURL">Google</a>
          </div>
        </div>
      </div>
      <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0 m-0 m-auto pt-3 card-cont">
        <c-login
          :class="modalToggle?'modal-slide login-block':'modal-close hide-modal'"
          @alertMsg="showAlert($event)"
        />
        <c-signUp
          :class="!modalToggle?'modal-slide login-block':'modal-close hide-modal'"
          @switchLogin="switchLogin()"
          @alertMsg="showAlert($event)"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { UserDetails } from "../service/userdetail.js";
import { setInterval, setImmediate, setTimeout } from "timers";
import Alert from "../widget/Alert.vue";
import Login from "../components/WelcomePage/Login.vue";
import SignUp from "../components/WelcomePage/SignUp.vue";
import InputButton from "../widget/InputButton.vue";
// import router from "../router.js";
import $ from "jquery";

const userDetail = new UserDetails();
export default {
  components: {
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
      modalToggle: true,
      switchButtonText: "signup",
      googleURL: process.env.VUE_APP_SERVER_URL + "/auth/google"
    };
  },
  created() {
    localStorage.clear();
    console.log(this.modalToggle);
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
      if (!this.modalToggle) {
        this.switchButtonText = "signup";
        this.modalToggle = true;
        console.log(this.modalToggle);
      } else if (this.modalToggle) {
        this.switchButtonText = "login";
        this.modalToggle = false;
        console.log(this.modalToggle);
      }
    }
  }
};
</script>

<style scoped>
.web-animation {
  position: absolute;
}
.login-block {
  margin: auto;
}
.welcome-page {
  background-image: url("../assets/Welcome/adobethree.jpg");
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  min-height: 100vh;
  overflow: hidden;
}
.google-sign-up {
  height: 2.5rem;
  background: #fff;
  border: transparent;
  border-radius: 5px;
  cursor: pointer;
  min-width: 8rem;
  font-weight: 500;
  box-shadow: 6px 7px 16px 0px rgba(0, 0, 0, 0.75);
}
.google-sign-up a {
  color: #17a2b8;
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
.modal-close {
  animation: slideToleft 0.5s linear;
  display: none;
}
.modal-slide {
  animation: slideFromRight 0.3s ease-in;
}
@keyframes slideToleft {
  0% {
    transform: translateY(-0px);
    opacity: 1;
  }
  50% {
    transform: translateY(-15px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(-30px);
    opacity: 0;
  }
}
@keyframes slideFromRight {
  0% {
    transform: translateY(30px);
    opacity: 0;
  }
  50% {
    transform: translateY(15px);
    opacity: 0.5;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@media only screen and (max-width: 995px) {
  .auth-form {
    width: 100% !important;
    text-align: -webkit-center;
  }
  .web-animation {
    display: none;
  }
  @keyframes slideFromRight {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    50% {
      transform: translateY(15px);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
}
@media only screen and (max-width: 375px) {
  .card-cont {
    margin-left: -2rem !important;
  }
  @keyframes slideFromRight {
    0% {
      transform: translateY(30px);
      opacity: 0;
    }
    50% {
      transform: translateY(15px);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
}
@media only screen and (max-width: 320px) {
  .card-cont {
    margin-left: -3.4rem !important;
  }
  @keyframes slideFromRight {
    0% {
      margin-left: 10%;
      opacity: 0;
    }
    50% {
      margin-left: 5%;
      opacity: 0.5;
    }
    100% {
      margin-left: 0%;
      opacity: 1;
    }
  }
}
</style>
