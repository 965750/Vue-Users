<template>
  <div class="headCont">
      <h2>Vue App</h2>
      <ul>
          <router-link :to="{ name: 'Users'}" exact><li class="active">Home</li></router-link>
          <router-link :to="{ name: 'Livechat'}" exact><li>Livechat</li></router-link>
          <router-link :to="{ name: 'About'}" exact><li>About</li></router-link>
      </ul>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.headCont {
  background: #41b883;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  h2 {
    padding: 0px;
    margin: 0px;
    color: #34495e;
    font-size: 30px;
    padding-left: 20px;
    line-height: 50px;
  }
  ul {
    display: flex;
    padding: 0px;
    margin: 0px;
    width: 300px;
    list-style-type: none;
    padding-right: 20px;
    a {
      width: 50%;
      height: 35px;
      text-transform: uppercase;
      line-height: 40px;
      text-align: center;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      transition: all 0.1s;
      text-decoration: none;
      &:hover {
        cursor: pointer;
      }
      &:hover li {
        color: #000;
      }
      li {
        color: #34495e;
        text-decoration: none;
      }
    }
    .router-link-active {
      background: #39da91;
    }
  }
}
@media screen and(max-width: 500px) {
  .headCont {
    height: 40px;
    ul {
      width: 250px;
      padding-right: 0px;
    }
    h2 {
      font-size: 20px;
      opacity: 0.15;
      line-height: 40px;
    }
  }
}
@media screen and(max-width: 400px) {
  .headCont {
    h2 {
      opacity: 0;
      width: 0%;
      padding-left: 0px;
    }
    ul {
      width: 100%;
    }
  }
}
</style>
