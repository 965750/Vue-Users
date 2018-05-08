<template>
  <div v-bind:class="{darkTheme: dark}">
      <span class="nickname">{{ name }}</span><span class="feedback">{{ feedback }}</span>
      <form>
          <textarea ref="commentInp" @keyup.enter="addMessage" class="addInp" v-model="newMessage" />
          <div class="optCont">
              <button @click.prevent="addMessage" class="addBtn">Add</button>
              <span @click.prevent="maximize" class="maximize">maximize</span>  
          </div>
      </form>
  </div>
</template>

<script>
import db from "../firebase/init";

export default {
  name: "NewMessage",
  props: ["name", "dark"],
  data() {
    return {
      newMessage: null,
      feedback: null
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db
          .collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now()
          })
          .catch(err => {
            console.log(err);
          });
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback = "Invalid Message";
      }
    },
    maximize() {
        this.$router.push({ name: 'Livechat', params: { minName: this.name }})
    }
  }
};
</script>

<style scoped>
.nickname{
    margin: 0px 0px 5px;
    font-size: 12px;
    color: #aaa;
}
.feedback{
    color: crimson;
    font-size: 12px;
    padding-left: 95px;
}
.addInp {
  width: 100%;
  height: 55px;
  border: 1px solid #34495e;
  margin: 0px 4px 5px;
  border-radius: 7px;
  padding: 5px;
  display: block;
  box-sizing: border-box;
  font-family: Geneva, Tahoma, sans-serif;
  resize: none;
  font-size: 12px;
}
.addInp:focus {
  border: 1px solid #39da91;
  outline: none;
}
.optCont .addBtn {
  width: 60%;
  border-radius: 7px;
  height: 30px;
  border: 1px solid #39da91;
  background: #39da91;
  color: #fff;
  font-size: 20px;
  transition: all 0.1s;
  outline: none;
}
.optCont .addBtn:hover {
  cursor: pointer;
  background: #35cc88;
  border: 1px solid #2ea871;
  color: #f5f5f5;
}
.optCont span{
    font-size: 14px;
    color: #aaa;
    padding-left: 5px;
    font-weight: 700;
    line-height: 30px;
    transition: all .1s;
}
.optCont span:hover{
    cursor: pointer;
    color: #333;
}
.messages::-webkit-scrollbar{
    width: 3px;
}
.messages::-webkit-scrollbar-track{
    background: #ddd;
}
.messages::-webkit-scrollbar-thumb{
    background: #aaa;
}
/* Wide */
.wide form{
    display: flex;
}
.wide .addInp{
    width: 80%;
    height: 30px;
}
.wide .optCont{
    width: 18%;
}
.wide .addBtn{
    width: 100%;
}
.wide .nickname{
    padding-left: 5px;
}
.wide .maximize{
    display: none;
}
.darkTheme .addInp{
    background: #293847;
    color: #f5f5f5;
}
.darkTheme{
    background:#465d74;
}
</style>