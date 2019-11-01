<template>
  <div class="collapse signup" style="width: 23rem;" id="Signup">
    <div class="card m-auto p-3" style="width: 22rem;">
      <h1 class="card-title">SignUp</h1>
      <div class="card-body m-auto" style="width: 18rem;">
        <p class="p-0 mb-0 float-left">Frist name</p>
        <input type="text" v-model="first_name" class="rounded border border-primary user-input" />

        <p class="p-0 mb-0 float-left">Last name</p>
        <input type="text" v-model="last_name" class="rounded border border-primary user-input" />

        <p class="p-0 mb-0 float-left">Password</p>
        <input type="password" v-model="password" class="rounded border border-primary user-input" />

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
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
import { UserDetails } from "../../service/API/userdetail.js";

const userDetail = new UserDetails();
export default {
  components: {
    "mdb-input": mdbInput,
    "mdb-btn": mdbBtn
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
  methods: {
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
            this.$emit("switchLogin");
            this.alertMessage = {
              alertMsg: "Sing-up success!",
              alertType: "success"
            };
            this.$emit("alertMsg", this.alertMessage);
            this.clearData();
          } else {
            this.alertMessage = {
              alertMsg: "There is a error occur try to sign-up again",
              alertType: "alert"
            };
            this.$emit("alertMsg", this.alertMessage);
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

.signup {
  position: absolute;
  margin-left: 60rem;
  margin-top: 25rem;
}

.required-alert {
  font-size: 12px;
  /* margin-left: -10px; */
  color: red;
}
</style>