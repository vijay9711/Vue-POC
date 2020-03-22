<template>
  <div class="alert-box">
    <label class="alert-text px-4 py-2" :style="getStyle(getType)">
      {{ alertText
      }}<img
        v-if="getType === 'alert'"
        src="@/assets/alert/warning.svg"
        class="mt-n2 ml-2"
        style="width:1.5rem"
      />
      <img
        v-if="getType === 'warning'"
        src="@/assets/alert/warn.svg"
        class="mt-n2 ml-2"
        style="width:1.5rem"
      />
      <img
        v-if="getType === 'success'"
        src="@/assets/alert/thumbs.svg"
        class="mt-n2 ml-2"
        style="width:1.5rem"
      />
    </label>
  </div>
</template>
<script>
import { constants } from "crypto";
export default {
  props: ["alertText", "getType"],
  methods: {
    getStyle(getType) {
      console.log(getType);
      switch (getType) {
        case "success":
          return "border:1px solid;border-radius:6px; border-color:#76ff03; outline-color:#76ff03; background-color:#76ff03; color:#fff;";
        case "warning":
          return "border:1px solid;border-radius:6px; border-color:#ffea00; outline-color:#ffea00; background-color:#ffea00; color:#fff;";
        case "alert":
          return "border:1px solid;border-radius:6px; border-color:#f44336; outline-color:#f44336; background-color:#f44336; color:#fff;";
        default:
          return "border-radius:6px";
      }
    }
  }
};
</script>
<style scoped>
.alert-box {
  position: absolute;
  top: 0.7rem;
  left: 1rem;
  animation-name: alert;
  animation-duration: 0.2s;
  outline: 1px;
}
@keyframes alert {
  0% {
    margin-left: -40px;
  }
  25% {
    margin-left: -30px;
  }
  50% {
    margin-left: -20px;
  }
  100% {
    margin-left: 0px;
  }
}
</style>
