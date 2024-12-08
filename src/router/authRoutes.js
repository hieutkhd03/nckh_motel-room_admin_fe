// Import các component cần thiết
import Login from "@/components/auth/Login.vue";
import Logout from "@/components/auth/Logout.vue";

export default [
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false, // Không yêu cầu đăng nhập
    },
  },

  {
    path: "/logout",
    name: "Logout",
    component: Logout,
    meta: {
      requiresAuth: true, // Chỉ dành cho người dùng đã đăng nhập
    },
  },
];
