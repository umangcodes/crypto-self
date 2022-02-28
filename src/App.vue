<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/navigation/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style></style>
