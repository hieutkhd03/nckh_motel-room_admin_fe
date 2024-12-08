import UserAuth from "@/components/user/UserAuth.vue";
import UserCreate from "@/components/user/UserCreate.vue";
import UserDetail from "@/components/user/UserDetail.vue";
import UserEdit from "@/components/user/UserEdit.vue";
import UserList from "@/components/user/UserList.vue";

// Định nghĩa các routes cho bài viết
export default [
  {
    path: "/user",
    name: "UserList",
    component: UserList,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/user/:id",
    name: "UserDetail",
    component: UserDetail,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/user/create",
    name: "UserCreate",
    component: UserCreate,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/user/edit",
    name: "UserEdit",
    component: UserEdit,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/user/auth",
    name: "UserAuth",
    component: UserAuth,
    meta: {
      requiresAuth: false,
    },
  },
];
