<template>
<div>
  <app-header class="head"></app-header>
  <router-view class="content" v-bind:users="users"></router-view>
  <app-footer class="foot"></app-footer>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Users from "./components/Users.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-users": Users
  },
  name: "app",
  data() {
    return {
      users: []
    };
  },
  methods: {},
  created() {
    this.$http
      .get(
        "https://api.github.com/search/users?q=tom+repos:%3E22+followers:%3E100"
      )
      .then(function(data) {
        this.users = data.body.items;
      });
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  font-family: Geneva, Tahoma, sans-serif;
  background: #f5f5f5;
  color: #34495e;
}
.head {
}
.content {
  min-height: calc(100vh - 200px);
}
.foot {
}
</style>
