<template>
  <div>
    <Nav />
    <About />
  </div>
</template>
<script>
import { SocialUserService } from "../service/socialUserService.js";
import { UserDetails } from "../service/userdetail.js";
import Nav from "../components/navbar/navbar.vue";
import About from "./About.vue";
const userDetails = new UserDetails();
const socialUserService = new SocialUserService();
export default {
  components: {
    About,
    Nav
  },
  data() {
    return {
      info: null,
      params: [],
      userData: []
    };
  },
  created() {
    // console.log(this.$route.query.id);
    this.getUserDetails();
    this.socialUser();
    console.log(this.$route.query.id);
  },
  methods: {
    socialUser() {
      this.params = this.$route.query.id;
      socialUserService.getSocialUserDetails(this.params).then(res => {
        console.log(res);
        if (res.status === 200) {
          this.userData = res.data[0];
          localStorage.setItem("user_id", this.params);
        }
      });
    },
    getUserDetails() {
      let userID = localStorage.getItem("user_id");
      userDetails.getUser(userID).then(res => {
        this.userData = res.data[0];
        if (this.userData.status.Status === 200) {
          console.log(res.data[0].data);
          this.userData = res.data[0].data;
        }
      });
    }
  }
};
</script>
<style scoped>
.skew-background {
  background-color: #42b987;
  margin: auto;
}
.loading {
  font-size: 120px;
}
.less-than {
  animation: spinleft 0.5s linear;
  animation-iteration-count: 1;
}
.greater-than {
  animation: spinright 0.5s linear;
  animation-iteration-count: 1;
}
.slash {
  animation: slash 0.5s linear;
  animation-iteration-count: 1;
  color: teal;
}
@keyframes slash {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
@keyframes spinleft {
  0% {
    opacity: 0;
    margin-left: -20px;
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    opacity: 0.5;
    margin-left: 0px;
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinright {
  0% {
    opacity: 0;
    margin-right: -20px;
  }
  50% {
    opacity: 0.5;
    margin-right: 0px;
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
</style>
