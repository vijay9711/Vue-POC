<template>
  <div class="position-fixed nav-cont py-3 noselect" style="z-index:100;width:100%;">
    <vue-particles
              color="#fff"
              :particleOpacity="1"
              :particlesNumber="400"
              shapeType="circle"
              :particleSize="2"
              linesColor="#232323"
              :linesWidth="1"
              :lineLinked="true"
              :lineOpacity="0.4"
              :linesDistance="10"
              :moveSpeed="1"
              :hoverEffect="true"
              hoverMode="grab"
              :clickEffect="true"
              clickMode="repulse"
              style="background-color:#34495e;diplay:block;position:absolute; width: 100%;height: 100%;top: 0;"
           >
      </vue-particles>
    <div :class="extend?'mob-nav':null"  @blur="toggle">
      
      <div class="row close-icon m-0">
        <div v-if="extend" class="col-12 p-0 py-2 pl-2">
          <img
            id="close-nav"
            @click="toggle"
            class="close-nav"
            src="../../assets/sidebar/closeBlack.svg"
          />
        </div>
      </div>
      <div class="row m-0 nav-container">
        
        <nav id="navigation-bar" v-if="extend" class="col-12 col-xs-12 col-sm-12 col-md-12 p-0">
          <ul class="nav-ul my-auto">
            <li @click="scroll('home')" class="nav-item"><a>Home</a></li>
            <li @click="scroll('about')" class="nav-item"><a>About</a></li>
            <li @click="scroll('projects')" class="nav-item"><a>Projects</a></li>
            <li @click="scroll('blog')" class="nav-item"><a>Profile</a></li>
            <li @click="scroll('contact')" class="nav-item"><a>Contact</a></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="row m-0 open-menu-and-profile p-2">
      <div class="col-6 open-menu p-0" >
        <div @click="toggle">
          <img class="open-nav" src="../../assets/sidebar/whiteMenu.svg">
        </div>
      </div>
      <div id="set-toggle-true" @click="setToggle"></div>
    </div>
    <div class="nav-skew"></div>
  </div>
</template>
<script>
export default {
  name: "nav",
  data() {
    return {
      links: [{ }],
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
  background: #232323;
  max-height: 5rem;
  box-shadow: inset 0px -6px 3px -1px rgba(0, 0, 0, 0.75);
}

.nav-item {
  font-family: "Montserrat";
  font-weight: 600;
  border: none;
  outline: none;
  text-decoration: none;
  font-size: 21px;
  cursor: pointer;
  color: #fff;
  overflow: hidden !important;
  transition: 0.3s;
  letter-spacing: 4px;
}
.nav-item:focus,
.nav-item:active {
  outline: none;
  border: none;
  background: none;
}
.nav-item a:hover {
  font-size: 24px;
  font-weight: 600;
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
.nav-ul .li {
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
    color: #fff !important;
  }
}
@media only screen and (max-width: 580px) {
  .nav-cont {
    padding: 0rem !important;
  }
  .nav-item {
    color: #232323 !important;
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
    margin: auto;
  }
  .nav-ul li {
    text-align: center;
    width: 70%;
    font-size: 20px;
  }

  .open-menu {
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
      visibility: visible !important;
      cursor: pointer;
    }
  }
  .nav-container nav ul li {
    margin-top: 2%;
    margin-bottom: 2%;
  }
  .mob-nav {
    background: #fff !important;
    position: fixed;
    width: 100%;
    height: 95%;
    overflow: hidden;
    z-index: 100;
    border-bottom-right-radius: 100%;
    animation: openNav 0.1s linear 1;
  }
  .open-menu-and-profile {
    position: fixed;
    display: flex;
    width: 100%;
    max-height: 2.4rem;
    background: #34495e;
  }
  .close-icon {
    display: block !important;
  }
  .close-nav {
    width: 1.6rem;
    visibility: visible !important;
    border-radius: 100%;
  }
  @keyframes openNav {
    0% {
      width: 0%;
      height: 10%;
      border-bottom-right-radius: 100%;
    }
    25% {
      width: 25%;
      height: 25%;
      border-bottom-right-radius: 100%;
    }
    50% {
      width: 50%;
      height: 50%;
      border-bottom-right-radius: 100%;
    }
    100% {
      width: 100%;
      height: 75%;
      border-bottom-right-radius: 100%;
    }
  }
}
</style>
