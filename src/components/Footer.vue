<template>
  <div class="footCont">
      <h2>Vue App</h2>
      <span>Handmade by Adrian Zajac © 2018</span>
  </div>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>

<style lang="scss" scoped>
.footCont {
  background: #34495e;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  h2 {
    padding: 0px;
    margin: 0px;
    color: #41b883;
    font-size: 30px;
    padding-left: 20px;
    line-height: 50px;
  }
  span {
    color: #41b883;
    line-height: 50px;
    padding-right: 20px;
  }
}
@media screen and(max-width: 500px){
    .footCont{
        h2{
            font-size: 20px;
            opacity: .15;
        }
        span{
            font-size: 11px;
            opacity: .85;
        }
    }
}
</style>
