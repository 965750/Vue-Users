<template>
<div>
    <div class="infoCont" v-bind:class="{darkTheme: dark}">
        <h2>App Description</h2>
        <p>Simple aplication created in Vue.js. List of Github users with Live-Chat, where You can check more details about every single person by simple click. Live-chat connected to datebase.</p>
        <h4>List of technologies Used in this project</h4>
        <ul>
            <li v-for="tech in technologies" :key="tech">{{ tech }}</li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean
    }
  },
  name: "About",
  data() {
    return {
      technologies: ["API", "Sass", "JS", "HTML5", "RWD", "Git", "Vue.js", "FireBase"]
    };
  }
};
</script>

<style lang="scss" scoped>
.infoCont {
  width: 600px;
  height: 300px;
  background: #fff;
  margin: auto;
  box-shadow: 0px 0px 5px rgb(121, 121, 121);
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  h2 {
    margin: 0px;
    text-align: center;
    color: #41b883;
  }
  p {
    font-size: 15px;
  }
  h4 {
    color: #41b883;
    text-align: center;
    margin-top: 60px;
  }
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;
    padding: 0px;
    text-align: center;
    justify-content: center;
    li {
      width: 18%;
      margin-bottom: 15px;
      font-size: 17px;
    }
  }
}
.darkTheme{
  background: #34495e;
}
@media screen and(max-width: 700px) {
  .infoCont {
    width: 450px;
    ul {
      li {
        font-size: 15px;
      }
    }
  }
}
@media screen and(max-width: 500px) {
  .infoCont {
    width: 310px;
    h4{
        margin-top: 25px;
    }
    ul {
      li {
        font-size: 13px;
      }
    }
  }
}
</style>