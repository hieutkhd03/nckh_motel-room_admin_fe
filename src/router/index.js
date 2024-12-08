import { createRouter, createWebHistory } from "vue-router";
import authRoutes from "./authRoutes"; // Import authRoutes
import homeRoutes from "./homeRoutes";
import postRoutes from "./postRoutes";
import rechargeRoutes from "./rechargeRoutes";
import reportRoutes from "./reportRoutes";
import userRoutes from "./userRoutes";

// Các route khác của ứng dụng
const routes = [
  ...authRoutes, // Các route cho auth module
  ...homeRoutes,
  ...postRoutes,
  ...rechargeRoutes,
  ...reportRoutes,
  ...userRoutes,

  {
    path: "/",
    redirect: "/login", // Redirect mặc định đến Login
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/NotFound.vue"), // Trang 404
  },
];

// Tạo Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Xử lý Route Guard (nếu cần)
router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem("authToken"); // Kiểm tra token
  if (to.meta.requiresAuth && !isAuthenticated) {
    next("/login"); // Chuyển hướng đến Login nếu chưa đăng nhập
  } else {
    next();
  }
});

export default router;
