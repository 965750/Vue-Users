<template>
<div>
  <app-header class="head"></app-header>
  <app-theme @click="dark = !dark"></app-theme>
  <router-view v-bind:class="{dark: dark}" class="content" v-bind:dark="dark" v-bind:users="users"></router-view>
  <app-footer class="foot"></app-footer>
</div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Theme from "./components/ThemeSwitch.vue";
import { bus } from './main';
import axios from 'axios';

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-theme": Theme
  },
  name: "app",
  data() {
    return {
      users: [],
      dark: false
    }
  },
  created() {
    axios.get("https://api.github.com/search/users?q=tom+repos:%3E22+followers:%3E100")
      .then(resp => {
        this.users = resp.data.items
      }).catch(err => {
        console.log(err)
      })
    bus.$on('themeChange', (data) => {
        this.dark = data
      })
  }
};
</script>

<style lang="scss">
body {
  margin: 0px;
  padding: 0px;
  font-family: Geneva, Tahoma, sans-serif;
}
.content {
  min-height: calc(100vh - 200px);
  padding: 50px 0px;
  background: #f5f5f5;
  color: #34495e;
}
.dark {
  background: #293847;
  color: #f5f5f5;
}
</style>
