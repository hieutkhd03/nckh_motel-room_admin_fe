// Import các controller cần thiết
import PostDetail from "@/components/post/PostDetail.vue";
import PostList from "@/components/post/PostList.vue";
import PostManagement from "@/components/post/PostManagement.vue";

// Định nghĩa các routes cho bài viết
export default [
  {
    path: "/post/:id",
    name: "PostDetail",
    component: PostDetail,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/post",
    name: "PostManagement",
    component: PostManagement,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/post/active",
    name: "PostActive",
    component: PostManagement,
    meta: {
      status: "active", // Hoạt động
    },
  },
  {
    path: "/post/pending",
    name: "PostPending",
    component: PostList,
    meta: {
      status: "pending", // Chờ duyệt
    },
  },
  {
    path: "/post/approved",
    name: "PostApproved",
    component: PostList,
    meta: {
      status: "approved", // Đã duyệt
    },
  },
  {
    path: "/post/locked",
    name: "PostLocked",
    component: PostList,
    meta: {
      status: "locked", // Đã khóa
    },
  },
];
