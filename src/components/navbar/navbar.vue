<template>
  <div :class="extend?'mob-nav':null">
    <!-- <div class="nav-bar row p-3 m-0">
      <div class="col-12">
        <img v-if="extend" @click="toggle" class="close-nav" src="../../assets/sidebar/close.svg" />
        <img class="user-profile-img float-right" src="../../assets/logo.png" />
      </div>
    </div>

    <div
      v-if="extend"
      id="sidebar"
      class="col-9 col-sm-10 col-md-8 col-lg-7 col-xl-4 p-0 m-0 item-container"
    >
      <a @click="scroll('home')" class="nav-item">Home</a>
      <a @click="scroll('about')" class="nav-item">About</a>
      <a @click="scroll('projects')" class="nav-item">Projects</a>
      <a @click="scroll('blog')" class="nav-item">Blog</a>
      <a @click="scroll('contact')" class="nav-item">Contact</a>
    </div>
    <div v-if="!extend" class="col-7 col-sm-10 p-0 m-0 text-right user-profile" @click="toggle">
      <img class="user-profile-img" src="../../assets/logo.png" />
    </div>-->
    <div class="row close-icon m-0">
      <div v-if="extend" class="col-12 p-0">
        <img id="close-nav" @click="toggle" class="close-nav" src="../../assets/sidebar/cancel.svg" />
      </div>
    </div>
    <div class="row m-0 nav-container">
      <div v-if="!extend" @click="toggle" class="col-6 open-menu p-0">
        <span class="open-nav"></span>
        <span class="open-nav"></span>
        <span class="open-nav"></span>
      </div>
      <nav id="navigation-bar" v-if="extend" class="col-12 col-xs-12 col-sm-12 col-md-12 p-0">
        <ul class="nav-ul my-auto">
          <li @click="scroll('home')" class="nav-item">Home</li>
          <li @click="scroll('about')" class="nav-item">About</li>
          <li @click="scroll('projects')" class="nav-item">Projects</li>
          <li @click="scroll('blog')" class="nav-item">Blog</li>
          <li @click="scroll('contact')" class="nav-item">Contact</li>
        </ul>
      </nav>
      <div id="set-toggle-true" @click="setToggle"></div>
      <div v-if="!extend" class="col-6 p-0 text-right">
        <img class="user-profile" src="../../assets/profile/user.svg" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav",
  data() {
    return {
      links: [{}],
      extend: true
    };
  },
  methods: {
    clearUserData() {
      localStorage.clear();
      this.$router.push({ name: "Authentication" });
    },
    scroll(item) {
      this.$emit("selectedItem", item);
    },
    setToggle() {
      this.extend = true;
    },
    toggle() {
      this.extend = !this.extend;
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-item {
  font-family: "Montserrat";
  font-weight: 400;
  border: none;
  outline: none;
  text-decoration: none;
  font-size: 21px;
  cursor: pointer;
  color: #1aa6b7 !important;
  overflow: hidden !important;
}
.nav-item:focus,
.nav-item:active {
  outline: none;
  border: none;
  background: none;
}

.nav-container {
  display: flex;
  justify-content: space-between;
}
.nav-item:nth-child(1) {
  animation-timing-function: linear;
}
.nav-item:nth-child(2) {
  animation-timing-function: linear;
  animation-duration: 1.2s;
}
.nav-item:nth-child(3) {
  animation-timing-function: linear;
  animation-duration: 1.5s;
}
.nav-item:nth-child(4) {
  animation-timing-function: linear;
  animation-duration: 1.7s;
}
.nav-item:nth-child(5) {
  animation-timing-function: linear;
  animation-duration: 2s;
}
a::before {
  content: "";
  background: teal;
  height: 2px;
  width: 0%;
  transition: 0.5s;
  position: absolute;
  margin: 2rem;
  left: 0;
}

a:nth-child(1):hover::before {
  // transform: translateY(20px);
  width: 11%;
  height: 2px;
  opacity: 1;
  margin: 0;
}
a:nth-child(2):hover::before {
  width: 11%;
  height: 2px;
  margin: 0px;
}
a:nth-child(3):hover::before {
  width: 14%;
  height: 3px;
  margin: 0px;
}
a:nth-child(4):hover::before {
  width: 8%;
  height: 3px;
  margin: 0px;
}
a:nth-child(5):hover::before {
  width: 4.5rem;
  height: 3px;
  margin: 0px;
}
.close-nav,
.open-nav {
  visibility: hidden !important;
}
.close-icon {
  display: none;
}
.user-profile {
  height: 2rem;
}

/* The navigation menu links */
.item-container a {
  animation: sideBarItem 1s 1;
}
@keyframes sideBarItem {
  0% {
    opacity: 0;
    margin-top: -40px;
  }
  50% {
    opacity: 0.5;
    margin-top: -20px;
  }
  100% {
    opacity: 1;
    margin-top: 0;
  }
}

@media only screen and (max-width: 1000px) {
  .nav-item {
    font-size: 16px;
    padding: 1rem;
    cursor: pointer !important;
  }
}
@media only screen and (max-width: 580px) {
  .nav-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .open-menu {
      background: #1aa6b7;
      height: 2rem !important;
    }
  }
  .nav-container nav ul li {
    // padding: 1rem;
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .mob-nav {
    background: #262626 !important;
    position: fixed;
    width: 50%;
    height: 50%;
    overflow: hidden;
    z-index: 100;
    // padding: 1rem;
    border-bottom-right-radius: 50%;
    animation: openNav 0.4s linear 1;
  }
  .close-icon {
    display: block !important;
  }
  .close-nav,
  .open-nav {
    width: 2rem;
    visibility: visible !important;
  }
  .open-nav {
    height: 3px;
    background: black;
    width: 100%;
  }
  .close-nav {
    border-radius: 100%;
    animation: closeSpin 0.4s 1 linear;
  }
  @keyframes closeSpin {
    100% {
      transform: rotateZ(360deg);
    }
  }
  @keyframes openNav {
    0% {
      width: 0%;
      height: 10%;
      border-top-right-radius: 100%;
      border-bottom-right-radius: 100%;
      border-bottom-left-radius: 100%;
    }
    50% {
      width: 0%;
      height: 25%;
      border-top-right-radius: 50%;
      border-bottom-right-radius: 100%;
      border-bottom-left-radius: 50%;
    }
    100% {
      width: 50%;
      height: 50%;
      border-top-right-radius: 20%;
      border-bottom-right-radius: 100%;
      border-bottom-left-radius: 20%;
    }
  }
}
</style>
