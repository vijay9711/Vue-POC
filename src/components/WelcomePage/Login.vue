<template>
  <div class="collapse" style="width: 23rem;" id="Login">
    <div class="login p-4" style>
      <h1 class="login-title">Login</h1>
      <div class="login-card-body p-0" style>
        <p class="login-input-label p-0 mb-0 mt-1 float-left">Email</p>
        <b-form-input
          id="name-formatter"
          type="text"
          v-model="email"
          autocomplete="none"
          class="login-user-input"
        ></b-form-input>
        <p class="required-alert my-1">{{ errors.first("email") }}</p>
        <p class="login-input-label p-0 mb-0 mt-1 float-left">Password</p>
        <b-form-input
          id="password-formatter"
          type="password"
          v-model="password"
          autocomplete="new-password"
          class="login-user-input"
        ></b-form-input>
        <p class="required-alert my-1">{{ errors.first("password") }}</p>
        <div class="row mt-4 w-100">
          <mdb-btn
            type="submit"
            size="sm"
            class="m-auto"
            @keypress="checkUser"
            @click="checkUser"
            >Login</mdb-btn
          >
          <mdb-btn type="button" size="sm" @click="clearData">cancel</mdb-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
import { UserDetails } from "../../service/userdetail.js";
import Alert from "../../widget/Alert.vue";

const userDetail = new UserDetails();
export default {
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn,
    "w-alert": Alert
  },
  data() {
    return {
      email: "",
      password: "",
      alertMessage: "",
      alertType: "",
      switch: true,
      alert: false
    };
  },
  methods: {
    checkUser() {
      let data = {
        email: this.email,
        password: this.password
      };
      console.log(data);
      if (this.email.length > 0 && this.password.length > 0) {
        userDetail.login(data).then(res => {
          if (res.data[0].access === "granted") {
            localStorage.setItem("user_id", res.data[0].id);
            this.$router.push({ name: "dashboard" });
          } else if (res.data[0].access === "denied") {
            this.password = "";
            this.alertMessage = {
              alertMsg: "Email or password incorrect",
              alertType: "warning"
            };
            this.$emit("alertMsg", this.alertMessage);
          }
        });
      } else {
        this.alertMessage = {
          alertMsg: "Please enter your email and password",
          alertType: "alert"
        };
        this.$emit("alertMsg", this.alertMessage);
      }
    },
    clearData() {
      (this.first_name = ""),
        (this.last_name = ""),
        (this.password = ""),
        (this.email = ""),
        (this.phone = "");
    }
  }
};
</script>

<style scoped>
.login {
  border: 1px solid black;
  /* border-right: 1px solid black; */
  border-top-left-radius: 5%;
  border-bottom-right-radius: 5%;
  box-shadow: 11px 10px 11px 1px rgba(0, 0, 0, 0.19);
  width: 22rem;
  background-color: transparent;
}
.login-title {
  font-weight: 700;
  margin: auto !important;
  margin-bottom: 1rem !important;
}
.login-card-body {
  padding: 0;
  width: 18rem;
}
.login-input-label {
  font-weight: 400;
  font-size: 20px;
}
input[type="text"] {
  background: transparent !important;
}
input[type="password"] {
  background: transparent !important;
}
.login-user-input::placeholder {
  background-color: transparent;
}
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus {
  -webkit-background-clip: yellow !important;
  background-color: transparent !important;
}
.login-user-input {
  width: 100%;
  border: 0px !important;
  border-bottom: 1px solid black !important;
  padding-left: 0.5rem;
  border-radius: 0px;
}
.login-user-input:focus {
  box-shadow: none !important;
  outline: none !important;
}
.login {
  border: 1px solid black;
  /* border-right: 1px solid black; */
  border-top-left-radius: 5%;
  border-bottom-right-radius: 5%;
  box-shadow: 11px 10px 11px 1px rgba(0, 0, 0, 0.19);
}

.required-alert {
  font-size: 15px;
  color: red;
}
@media screen and (max-width: 1200px) {
  .login-card-body {
    padding: 0;
    width: 14rem;
  }
  .login {
    width: 18rem;
  }
}
</style>
