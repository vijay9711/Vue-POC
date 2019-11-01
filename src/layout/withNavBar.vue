<template>
  <div v-if="isAuthorized()">
    <nav-bar :links="links">
      <slot />
    </nav-bar>
  </div>
</template>

<script>
import Nav from "../components/navbar/navbar.vue";
export default {
  components: {
    "nav-bar": Nav
  },
  methods: {
    isAuthorized() {
      //if invalid, server will retur 401 and it will be automatically redirect to login page, so returning true here
      return true;
    }
  },
  data() {
    return {
      links: [
        {
          label: "Device",
          to: "/",
          iconName: "screen"
        },
        {
          label: "Groups",
          to: "/groups",
          iconName: "group"
        },
        {
          label: "Ads List",
          to: "/adsList",
          iconName: "playlist"
        },
        {
          label: "Media",
          to: "/media",
          iconName: "assets"
        },
        {
          label: "Import File",
          to: "/importFile",
          iconName: "screen"
        }
      ]
    };
  }
};
</script>

<style>
</style>