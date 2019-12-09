<template>
  <div id="mySidenav" class="sidenav">
    <b-button v-if="!extend" class="menu-icon" @click="openNav()"
      >&#9776;</b-button
    >
    <div v-if="extend" id="sidebar" class="item-container">
      <a @click="scroll('home')" class="nav-item">Home</a>
      <a @click="scroll('about')" class="nav-item">About</a>
      <a @click="scroll('projects')" class="nav-item">Projects</a>
      <a @click="scroll('blog')" class="nav-item">Blog</a>
      <a @click="scroll('contact')" class="nav-item">Contact</a>
    </div>
    <div v-if="!extend" id="sidebar" class="item-container">
      <img
        @click="scroll('home')"
        src="../../assets/sidebar/homepage.svg"
        class="nav-icon"
      />
      <a @click="scroll('about')" class="nav-item">minin</a>
      <a @click="scroll('projects')" class="nav-item">mini</a>
      <a @click="scroll('blog')" class="nav-item">Blog</a>
      <a @click="scroll('contact')" class="nav-item">Contact</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "nav",
  props: {
    heading: { type: String },
    links: { type: Array },
    "show-header": { type: Boolean, default: true },
    "header-links": { type: Array }
  },
  data() {
    return {
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
    }
    /* Set the width of the side navigation to 250px */
    // openNav() {
    //   if (this.extend) {
    //     document.getElementById("mySidenav").style.width = "50px";
    //     document.getElementById("myOverlay").style.display = "none";
    //     this.extend = false;
    //   } else if (!this.extend) {
    //     this.extend = true;
    //     document.getElementById("mySidenav").style.width = "250px";
    //     document.getElementById("myOverlay").style.display = "block";
    //   }
    // },

    /* Set the width of the side navigation to 0 */
    // closeNav() {
    //   document.getElementById("mySidenav").style.width = "50px";
    //   document.getElementById("myOverlay").style.display = "none";
    //   this.extend = false;
    // }
  }
};
</script>

<style lang="scss">
.nav-item {
  font-family: "Montserrat";
  font-weight: 400;
  // font-size: 18px;
  // color: #17a2b8;
  border: none;
  outline: none;
  padding: 1rem;
  text-decoration: none;
  font-size: 28px;
  color: #1aa6b7 !important;
  display: block;
}
.nav-icon {
  width: 1.5rem;
  margin-left: 0.5rem;
}
.nav-item:focus,
.nav-item:active {
  outline: none;
  border: none;
  background: none;
}

.sidenav {
  .item-container {
    display: inline-flex;
  }
  a:nth-child(1) {
    animation-timing-function: linear;
  }
  a:nth-child(2) {
    animation-timing-function: linear;
    animation-duration: 1.2s;
  }
  a:nth-child(3) {
    animation-timing-function: linear;
    animation-duration: 1.5s;
  }
  a:nth-child(4) {
    animation-timing-function: linear;
    animation-duration: 1.7s;
  }
  a:nth-child(5) {
    animation-timing-function: linear;
    animation-duration: 2s;
  }
  .menu-icon {
    width: 1rem;
  }
}
.sidenav {
  height: 60px; /* 100% Full-height */
  width: 100%; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  // background: #002d40;
  // background: #d6e8ee;
  background: transparent;
  display: inline-flex;
  overflow-x: hidden;
  overflow-y: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
}

/* The navigation menu links */
.sidenav a {
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
/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s;
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {
    padding-top: 15px;
  }
  .sidenav a {
    font-size: 18px;
  }
}
</style>
