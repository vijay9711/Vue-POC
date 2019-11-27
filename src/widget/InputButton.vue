<template>
  <button
    class="button"
    @click="buttonClick()"
    :style="getStyle()"
    :class="buttonClass"
  >
    <img v-if="img === 'require'" :src="ImgSrc" />
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["label", "img", "buttonStyle", "ImgSrc", "buttonClass"],
  methods: {
    buttonClick() {
      console.log("clicked");
      this.$emit("buttonClicked");
    },
    getStyle() {
      console.log("style ", this.buttonStyle);
      switch (this.buttonStyle) {
        case "Add_Selected":
          return "background-color:#eeaa37; border:1px solid #eeaa37; border-radius: 4px; color:#ffff;width:120px;";
        case "login":
          return "background: #17a2b8; text-transform: capitalize; border:transparent;height:2.5rem; min-width: 8rem; border-radius: 5px;  color:#fff;box-shadow: 6px 7px 16px 0px rgba(0,0,0,0.75);";
        default:
          return "background: #ffff;border-color: #eeaa37;border: 1px solid;border-radius: 0px;color: #eeaa37;";
      }
    }
  }
};
</script>

<style scoped>
.button {
  border-radius: 0px;
  /* background: #ffff;
  border-color: #eeaa37;
  color: #eeaa37; */
  width: 100%;
  font-weight: 500;

  /* border: 1px solid; */
}
.button:hover {
  background-position: right left;
}
.button:focus {
  outline: none;
}
.button:active {
  background: rgb(247, 245, 245);
}
</style>
