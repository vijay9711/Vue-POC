<template>
  <div class="home">
    <div class="row  m-0 professional-img">
      <!-- <div class="horz-card"> -->
      <div class="col-md-12 my-auto">
        <div class="vert-card row m-auto">
          <div class="col-9">
            <h1>
              Hi, I'm
            </h1>
            <label class="my-name">Vijay</label>
            <p class="abstract">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              alias atque totam est ipsam ut veniam suscipit, natus veritatis
              in! Ab praesentium rerum, sequi vitae illo asperiores nobis quod.
              Officiis.
            </p>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.home {
  min-height: 100vh;
  .professional-img {
    height: 100vh;
    padding: 4rem;
    // width: 50vh;
    // background-image: url("../assets/home/professional.jpg");
    // background-attachment: fixed;
    // // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
    // position: relative;
    // opacity: 0.8;
  }
  .col-12 {
    width: auto;
    height: auto;
    // max-height: 20rem;
    text-align: left;
    animation: about-me-box-anime 1.3s linear 1;
  }
}
.my-image {
  max-width: 15rem;
  border-radius: 20%;
  transform: rotate(270deg);
  // border: 1px solid #333;
  animation: image-anime 2s linear;
  // animation-delay: s;
  transition: 1s;
}
.my-image:hover {
  width: 23rem;
  border-radius: 10%;
}
.vert-card {
  background-color: #fff;
  border-color: #fff;
  z-index: 1;
  border-radius: 5px;
  left: auto;
  width: auto;
  min-height: auto;
  max-height: auto;
  max-width: 80rem;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  animation: about-me-box-anime 1s ease-in 1;
  -webkit-box-shadow: 14px 20px 32px -6px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: 14px 20px 32px -6px rgba(0, 0, 0, 0.21);
  box-shadow: 14px 20px 32px -6px rgba(0, 0, 0, 0.21);

  .my-name {
    font-size: 42px;
    font-weight: bold;
  }
  .col-9 {
    // position: absolute;
    h1 {
      font-family: "Montserrat";
      font-style: "Extra-Light";
      animation: abstract-anime 1s ease-in 1;
    }
    label {
      animation: abstract-anime 2s ease-in 1;
    }
    .abstract {
      // position: absolute;
      font-size: 20px;
      font-family: monospace;
      animation: abstract-anime 2.5s ease-in 1;
    }
  }
}
.bg-video {
  width: 100%;
}
@keyframes about-me-box-anime {
  0% {
    top: -100px;
    opacity: 0.2;
    height: 15rem;
  }
  50% {
    top: -50px;
    opacity: 0.5;
    height: 15rem;
  }
  100% {
    top: 0;
    opacity: 1;
    height: 15rem;
  }
}
@keyframes image-anime {
  0% {
    margin-left: -40%;
    opacity: 0;
  }
  50% {
    margin-left: -20%;
    opacity: 0.5;
  }
  100% {
    margin-left: 0;
    opacity: 1;
  }
}
@keyframes abstract-anime {
  0% {
    margin-left: 20%;
    opacity: 0;
  }
  50% {
    margin-left: 10%;
    opacity: 0.5;
  }
  100% {
    margin-left: 0;
    opacity: 1;
  }
}
</style>
