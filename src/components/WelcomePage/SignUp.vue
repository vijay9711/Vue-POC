<template>
  <div class="collapse" style="width: 23rem;" id="Signup">
    <div class="col-xs-2 signup p-4" style>
      <div style="overflow:hidden;display: flex;">
        <h1 class="signup-title">SignUp</h1>
        <div class="title-skew"></div>
      </div>
      <div class="signup-body p-0" style>
        <p class="signup-input-label p-0 mb-0 mt-1 float-left">First name</p>
        <!-- <input type="text" v-model="first_name" class="signup-user-input" /> -->
        <b-form-input
          id="first-name"
          v-model="first_name"
          type="text"
          autocomplete="none"
          class="signup-user-input"
          placeholder
        ></b-form-input>

        <p class="signup-input-label p-0 mb-0 mt-1 float-left">Last name</p>
        <b-form-input
          id="last-name"
          type="text"
          v-model="last_name"
          autocomplete="none"
          class="signup-user-input"
          placeholder
        ></b-form-input>
        <p class="signup-input-label p-0 mb-0 mt-1 float-left">Password</p>
        <b-form-input
          id="password"
          v-model="password"
          type="password"
          autocomplete="none"
          class="signup-user-input"
          placeholder
        ></b-form-input>
        <p class="signup-input-label p-0 mb-0 mt-1 float-left">Email</p>
        <b-form-input
          id="email"
          v-model="email"
          type="text"
          autocomplete="none"
          class="signup-user-input"
          placeholder
        ></b-form-input>
        <p class="signup-input-label p-0 mb-0 mt-1 float-left">Phone</p>
        <b-form-input
          id="phone"
          v-model="phone"
          type="text"
          autocomplete="none"
          class="signup-user-input"
          placeholder
        ></b-form-input>
        <div class="row mt-4">
          <mdb-btn
            type="submit"
            class="m-auto signin-button"
            color="info"
            size="sm"
            @click="signUp"
            >SignUp</mdb-btn
          >
          <mdb-btn
            type="button"
            class="m-auto signin-button"
            size="sm"
            color="info"
            @click="clearData"
            >cancel</mdb-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdbInput, mdbBtn } from "mdbvue";
import { UserDetails } from "../../service/userdetail.js";

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
.signup {
  border: none;
  /* border-right: 1px solid black; */
  border-top-left-radius: 5%;
  border-bottom-right-radius: 5%;
  box-shadow: 11px 10px 11px 1px rgba(0, 0, 0, 0.19);
  width: 22rem;
  background-color: #fff;
}
.signup-title {
  font-weight: 700;
  margin-bottom: 1rem !important;
  color: teal;
}
.title-skew {
  background-color: #17a2b8;

  transform: skew(30deg, 0deg);
  margin-left: 5%;
  height: 40px;
  width: 100%;
  padding-left: 15rem;
  /* margin-bottom: 1rem; */
  /* border-radius: 25%; */
  /* border-bottom-right-radius: 100%; */
}
.signup-input-label {
  font-weight: 500;
  font-size: 18px;
}
.signup-body {
  padding: 0;
  width: 18rem;
  color: teal;
}
input[type="text"] {
  background-color: transparent !important;
}
input[type="password"] {
  background-color: transparent !important;
}
.signin-button {
  width: 8rem;
}
.signup-user-input {
  width: 100%;
  border: 0px !important;
  border-bottom: 1px solid #17a2b8 !important;
  padding-left: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0;
}
.signup-user-input:focus {
  box-shadow: none !important;
  outline: none !important;
}
.signup-user-input::placeholder {
  color: #101820ff;
  font-size: 16px;
}

.required-alert {
  font-size: 12px;
  /* margin-left: -10px; */
  color: red;
}
@media screen and (max-width: 1200px) {
  .signup-body {
    padding: 0;
    width: 14rem;
  }
  .signup {
    width: 18rem;
  }
  .signin-button {
    width: 5rem;
  }
}
</style>
