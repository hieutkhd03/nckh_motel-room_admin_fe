import ReportView from "@/components/report/ReportView.vue";

export default [
  {
    path: "/report",
    name: "ReportView",
    component: ReportView,
    meta: {
      requiresAuth: false,
    },
  },
];
