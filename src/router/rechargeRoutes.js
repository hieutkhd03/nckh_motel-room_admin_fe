import RechargeCreate from "@/components/recharge/RechargeCreate.vue";
import RechargeDetail from "@/components/recharge/RechargeDetail.vue";
import RechargeEdit from "@/components/recharge/RechargeEdit.vue";
import RechargeList from "@/components/recharge/RechargeList.vue";

// Định nghĩa các routes cho bài viết
export default [
  {
    path: "/recharge",
    name: "RechargeList",
    component: RechargeList,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/recharge/:id",
    name: "RechargeDetail",
    component: RechargeDetail,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/recharge/create",
    name: "RechargeCreate",
    component: RechargeCreate,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/recharge/edit",
    name: "RechargeEdit",
    component: RechargeEdit,
    meta: {
      requiresAuth: false,
    },
  },
];
