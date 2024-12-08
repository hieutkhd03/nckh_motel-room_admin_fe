// Import tất cả các component từ thư mục home/components
import HomePage from "@/components/home/HomePage.vue";

export default [
  {
    path: "/home",
    name: "HomePage",
    component: HomePage,
    meta: {
      requiresAuth: false,
    },
  },
];
