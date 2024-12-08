<template>
  <v-app>
    <!-- Header
    <HeaderComponent />

    Sidebar -->
    <!-- <SidebarComponent /> -->

    <!-- Nội dung chính -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Footer
    <FooterComponent /> -->
  </v-app>
</template>

<script>
// import HeaderComponent from "@/components/common/Header.vue";
// import SidebarComponent from "@/components/common/Sidebar.vue";
// import FooterComponent from "@/components/common/Footer.vue";

export default {
  name: "App",
  components: {
    // HeaderComponent,
    // SidebarComponent,
    // FooterComponent,
  },
};
</script>

<style>
/* Định dạng tổng quan cho toàn bộ ứng dụng */
body {
  margin: 0;
  font-family: "Inter", sans-serif;
}
</style>
