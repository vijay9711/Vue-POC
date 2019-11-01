<template>
  <div class="collapse login" style="width: 23rem;" id="Login">
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
.user-input {
  padding-left: 0.5rem !important;
  margin-bottom: 1rem;
  width: 100%;
}

.login {
  position: absolute;
  margin-left: 60rem;
  margin-top: 20rem;
}

.required-alert {
  font-size: 12px;
  color: red;
}
</style>