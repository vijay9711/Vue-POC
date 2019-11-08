<template>
  <div class="collapse login" style="width: 23rem;" id="Login">
    <div class="p-4" style="width: 22rem; background-color:transparent">
      <h1 class="row p-0 m-0 login-title">Login</h1>
      <div class="login-card-body">
        <p class="login-input-label p-0 mb-0 mt-1 float-left">Email</p>
        <input
          type="text"
          v-model="email"
          v-validate="'required|email'"
          name="email"
          class="login-user-input"
        />
        <p class="required-alert my-1">{{ errors.first('email') }}</p>
        <p class="login-input-label p-0 mb-0 mt-1 float-left">Password</p>
        <input
          type="password"
          v-model="password"
          v-validate="'required'"
          name="password"
          class="login-user-input"
        />
        <p class="required-alert my-1">{{ errors.first('password') }}</p>
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
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
import { UserDetails } from "../../service/API/userdetail.js";
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
      if (this.email.length > 0 && this.password.length > 0) {
        userDetail.login(data).then(res => {
          if (res.data[0].access === "granted") {
            localStorage.setItem("user_id", res.data[0].id + "a02");
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
.login-title {
  font-weight: 700;
  margin: auto !important;
}
.login-card-body {
  padding: 0;
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
.login-user-input {
  width: 100%;
  border: 0px !important;
  border-bottom: 1px solid black !important;
  padding-left: 0.5rem;
}
.login-user-input:focus {
  border: 0px !important;
}
.login-user-input:active {
  border: 0px !important;
}
.login {
  /* position: absolute; */
  margin: auto;
}

.required-alert {
  font-size: 15px;
  color: red;
}
@media only screen and (max-width: 400px) {
  .login {
    margin-left: 30rem;
    margin-top: 20rem;
  }
}
</style>