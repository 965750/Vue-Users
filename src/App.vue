<template>
<div>
  <app-header></app-header>
  <app-users v-bind:users="users"></app-users>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Users from './components/Users.vue';

export default {
  components: {
    'app-header': Header,
    'app-users': Users
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: [],
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://jsonplaceholder.typicode.com/users').then(function(data){
      console.log(data.body);
      this.users = data.body;
    })
  }
}
</script>

<style lang="scss">
body{
  margin: 0px;
  padding: 0px;
  font-family: Geneva, Tahoma, sans-serif;
}
</style>
