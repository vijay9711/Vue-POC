import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Authentication",
      component: () => import("./views/WelcomePage.vue"),
      meta: {
        layout: "no-navbar"
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./views/dashboard.vue")
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     console.log("require");
//     if (localStorage.getItem("user_id") == null) {
//       next({
//         path: "/",
//         params: { nextUrl: to.fullPath }
//       });
//     } else {
//       console.log("admin");
//       let user = localStorage.getItem("user_id");
//       if (to.matched.some(record => record.meta.is_admin)) {
//         if (user.is_admin == 1) {
//           next();
//         } else {
//           next({ name: "userboard" });
//         }
//       } else {
//         next();
//       }
//     }
//   } else if (to.matched.some(record => record.meta.guest)) {
//     console.log("guest");
//     if (localStorage.getItem("user_id") !== null) {
//       next();
//     } else {
//       next({ name: "userboard" });
//     }
//   } else {
//     next();
//   }
// });
export default router;
