<template>
<ul>
    <li v-for="user in users" v-bind:key="">
        <div class="avatarCont"></div>
        <h3>{{ user.name }}</h3>
    </li>
</ul>
</template>

<script>

export default {
    props: {
        users: {
            type: Array
        }
    },
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
    ul{
        width: 900px;
        background: rosybrown;
        display: flex;
        flex-wrap: wrap;
        list-style-type: none;
        padding: 0px;
        margin: 20px auto;
        li{
            width: 300px;
            height: 400px;
            border: 1px solid #333;
            box-sizing: border-box;
            margin: 0px;
            padding: 0px;
            .avatarCont{
                border-radius: 50%;
                width: 150px;
                height: 150px;
                margin: 25px auto;
                overflow: hidden;
                img{
                    height: 150px;       
                }
            }
            h3{
                margin: 0px;
                text-align: center;
            }
        }
    }
</style>
