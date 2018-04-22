<template>
  
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      users: []
    }
  },
  methods: {

  },
  created() {
    this.$http.get('https://api.github.com/users').then(function(data){
      console.log(data.body);
    })
  }
}
</script>

<style lang="scss">

</style>
