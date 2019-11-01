import Vue from "vue";
import Router from "vue-router";
import Support from "../src/views/support.vue";
import ShoppingList from "../src/views/shoppinglist.vue";
import About from "../src/views/About.vue";
import DashBoard from "../src/views/dashboard.vue";
import Authentication from "../src/views/WelcomePage.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Authentication",
      component: Authentication,
      meta: {
        layout: "no-navbar"
      }
    },
    {
      path: "/about",
      name: "about",
      component: About,
      meta: {
        layout: "navbar",
        guest: true,
        requiresAuth: true
      }
    },
    {
      path: "/shoppingList",
      name: "shoppingList",
      component: ShoppingList,
      meta: {
        layout: "navbar",
        guest: true,
        requiresAuth: true
      }
    },
    {
      path: "/support",
      name: "support",
      component: Support,
      guest: true,
      requiresAuth: true
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: DashBoard,
      meta: {
        layout: "navbar",
        guest: true,
        requiresAuth: true
      }
    }
  ]
});
// router.beforeEach((to, from, next) => {
//   // if (to.fullPath === '/about') {
//   //   if (localStorage.getItem("username")==="vijay") {
//   //    this.$router.push("/about")
//   //   }
//   // }
//   // if (to.fullPath === '/login') {
//   //   if (localStorage.getItem("username")!=="vijay") {
//   //     next('/');
//   //   }
//   // }
//   next();
// });
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log("require");
    if (localStorage.getItem("user_id") == null) {
      next({
        path: "/",
        params: { nextUrl: to.fullPath }
      });
    } else {
      console.log("admin");
      let user = localStorage.getItem("user_id");
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next();
        } else {
          next({ name: "userboard" });
        }
      } else {
        next();
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    console.log("guest");
    if (localStorage.getItem("user_id") !== null) {
      next();
    } else {
      next({ name: "userboard" });
    }
  } else {
    next();
  }
});
export default router;
