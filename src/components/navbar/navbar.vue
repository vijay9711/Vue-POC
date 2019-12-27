<template>
  <div class="position-fixed nav-cont py-3 noselect" style="z-index:100;width:100%;">
    <div :class="extend?'mob-nav':null">
      <div class="row close-icon m-0">
        <div v-if="extend" class="col-12 p-0 py-2 pl-2">
          <img
            id="close-nav"
            @click="toggle"
            class="close-nav"
            src="../../assets/sidebar/cancel.svg"
          />
        </div>
      </div>
      <div class="row m-0 nav-container">
        <nav id="navigation-bar" v-if="extend" class="col-12 col-xs-12 col-sm-12 col-md-12 p-0">
          <ul class="nav-ul my-auto">
            <li @click="scroll('home')" class="nav-item"><a >Home</a></li>
            <li @click="scroll('about')" class="nav-item"><a>About</a></li>
            <li @click="scroll('projects')" class="nav-item"><a>Projects</a></li>
            <li @click="scroll('blog')" class="nav-item"><a>Profile</a></li>
            <li @click="scroll('contact')" class="nav-item"><a>Contact</a></li>
          </ul>
        </nav>
        <!-- <div class="col-6 col-md-6 p-0 text-right web-user-profile" v-if="!extend">
            <img class="user-profile" src="../../assets/profile/user.svg" />
        </div> -->
      </div>
    </div>
    <div class="row m-0 open-menu-and-profile p-2">
      <div class="col-6 open-menu p-0" >
        <div @click="toggle">
          <span class="open-nav"></span>
          <span class="open-nav"></span>
          <span class="open-nav"></span>
        </div>
      </div>
      <div id="set-toggle-true" @click="setToggle"></div>
      <!-- <div class="col-6 p-0 text-right">
        <img class="user-profile" src="../../assets/profile/user.svg" />
      </!--> 
    </div>
    <div class="nav-skew"></div>
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
      console.log(item);
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
.nav-cont {
  background: #fff;
  height: 5rem;
}

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
  transition: 0.3s;
}
.nav-item:focus,
.nav-item:active {
  outline: none;
  border: none;
  background: none;
}
.nav-item a:hover {
  font-size: 24px;
  font-weight: 500;
}
.nav-item:focus {
  text-decoration: underline;
}
.nav-ul {
  display: flex;
  padding: 0rem;
  justify-content: space-evenly;
}
.nav-item:nth-child(1) {
  animation-timing-function: linear;
}
.nav-item:nth-child(2) {
  animation-timing-function: linear;
  animation-duration: 1.4s;
}
.nav-item:nth-child(3) {
  animation-timing-function: linear;
  animation-duration: 1.8s;
}
.nav-item:nth-child(4) {
  animation-timing-function: linear;
  animation-duration: 2.2s;
}
.nav-item:nth-child(5) {
  animation-timing-function: linear;
  animation-duration: 2.4s;
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
  background: #262626;
}
/* The navigation menu links */
.nav-ul li {
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
  .nav-cont {
    padding: 0rem !important;
  }
  .nav-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    .web-user-profile {
      display: none;
    }
  }
  .nav-ul {
    display: block !important;
    padding-left: 1.9rem;
  }
  .open-menu {
    // background: #1aa6b7;
    height: 2rem !important;
    display: flex;
    div {
      display: grid;
      cursor: pointer;
      padding-left: 0.5rem;
    }
    span:nth-child(2) {
      width: 1.3rem;
    }
    .open-nav {
      content: "";
      width: 2rem;
      visibility: visible !important;
      height: 4px !important;
      background: black;
      margin-top: 0.2rem;
      border-top-right-radius: 25% !important;
      border-bottom-right-radius: 25% !important;
      border-radius: 25%;
      // margin-bottom: 0.1rem;
      cursor: pointer;
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
    // top: 20rem;
    width: 13rem;
    height: 26rem;
    overflow: hidden;
    z-index: 100;
    // padding: 1rem;
    border-bottom-right-radius: 50%;
    animation: openNav 0.2s linear 1;
  }
  .open-menu-and-profile {
    position: fixed;
    display: flex;
    width: 100%;
    background: #fff;
  }
  .close-icon {
    display: block !important;
  }
  .close-nav {
    width: 2rem;
    visibility: visible !important;
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
      width: 3rem;
      height: 0.2rem;
      // border-top-right-radius: 100%;
      border-bottom-right-radius: 0%;
      // border-bottom-left-radius: 100%;
    }
    50% {
      width: 10rem;
      height: 4rem;
      // border-top-right-radius: 50%;
      border-bottom-right-radius: 0%;
      // border-bottom-left-radius: 50%;
    }
    75% {
      width: 13rem;
      height: 20rem;
      // border-top-right-radius: 50%;
      border-bottom-right-radius: 25%;
      // border-bottom-left-radius: 50%;
    }
    100% {
      width: 13rem;
      height: 26rem;
      // border-top-right-radius: 20%;
      border-bottom-right-radius: 50%;
      // border-bottom-left-radius: 20%;
    }
  }
}
</style>
