<template>
  <div class="headCont">
      <h2>Vue App</h2>
      <ul>
          <li class="active">List</li>
          <li>Add</li>
          <li>About</li>
      </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods: {

  },
  created() {
    
  }
}
</script>

<style lang="scss" scoped>
    .headCont{
        background: #41b883;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        h2{
            padding: 0px;
            margin: 0px;
            color: #34495e;
            font-size: 30px;
            padding-left: 20px;
            line-height: 50px;
        }
        ul{
            display: flex;
            padding: 0px;
            margin: 0px;
            width: 200px;
            list-style-type: none;
            padding-right: 20px;
            li{
                width: 33.33%;
                height: 35px;
                text-transform: uppercase;
                color: #34495e;
                line-height: 40px;
                text-align: center;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                &:hover{
                    color: #000;
                }
            }
            .active{
                background: #39da91;
            }
        }
    }
</style>
