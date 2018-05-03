<template>
  <div>
    <div class="chatCont" :class="{wide: wideLink}">
        <div v-if="logged || minName">
            <ul class="messages" v-chat-scroll>
                <li v-for="message in messages" :key="message.id">
                    <span class="name">{{ message.name }}</span>
                    <span class="message">{{ message.content }}</span>
                    <span class="time">{{ message.timestamp }}</span>
                </li>
            </ul>
            <div class="addCont">
                <NewMessage :name="name"/>
            </div>
        </div>
        <div v-if="!logged">
            <p class="pFirst">Join Our</p>
            <p class="pSecond">LiveChat</p>
            <p class="pThird">What's Your Name?</p>
            <input placeholder="name..." @keyup.enter="logIn" class="nameInp" type="text" v-model="name"/>
            <button class="enterBtn" @click="logIn">Enter</button>
        </div>
    </div>
  </div>
</template>

<script>
import db from "../firebase/init";
import NewMessage from "./NewMessage";
import moment from "moment";

export default {
  name: "users",
  components: {
    NewMessage
  },
  props: ["minName"],
  data() {
    return {
      messages: [],
      name: null,
      logged: false,
      wideLink: null
    };
  },
  methods: {
    logIn() {
      if (this.name) {
        this.logged = true;
        
      } else {
        return;
      }
    }
  },
  created() {
    //subpage check for wide version of livechat
    if (this.$router.history.current.name == "Livechat"){
        this.wideLink = true
    } else {
    }
    //if name provided
    if (this.minName) {
      this.name = this.minName;
    } else {
    }
    let ref = db.collection("messages").orderBy("timestamp");

    //livechat
    ref.onSnapshot(snapshot => {
      snapshot.docChanges.forEach(change => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll")
          });
        }
      });
    });
  }
};
</script>

<style scoped>
p {
  font-size: 28px;
  margin: 0px;
  text-align: center;
  font-weight: 700;
}
.pFirst {
  margin-top: 130px;
}
.pSecond {
  color: #39da91;
}
.pThird {
  color: #d1d1d1;
  font-size: 20px;
  margin-top: 50px;
}
.enterBtn {
  width: 94%;
  height: 40px;
  margin: auto;
  display: block;
  border-radius: 7px;
  border: 1px solid #39da91;
  background: #39da91;
  color: #fff;
  font-size: 20px;
  transition: all 0.1s;
  outline: none;
}
.enterBtn:hover {
  cursor: pointer;
  background: #35cc88;
  border: 1px solid #2ea871;
  color: #f5f5f5;
}
.nameInp {
  width: 94%;
  height: 30px;
  border: 1px solid #34495e;
  margin: 0px auto 10px;
  border-radius: 7px;
  padding: 5px;
  display: block;
  box-sizing: border-box;
}
.nameInp:focus {
  border: 1px solid #39da91;
  outline: none;
}
.chatCont {
  height: 470px;
  box-shadow: 0px 0px 5px #797979;
  border-radius: 10px;
  width: 220px;
  margin: 0px auto;
  background: #fff;
  overflow: hidden;
}
.messages {
  max-height: 350px;
  height: 350px;
  margin: 0px;
  list-style-type: none;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: scroll;
}
.messages li {
  margin: 7px 0px;
}
.messages .name {
  color: #41b883;
  font-size: 14px;
  width: 100%;
  display: block;
}
.messages .message {
  font-size: 12px;
  width: 100%;
  display: block;
}
.messages .time {
  font-size: 11px;
  color: #aaa;
}
.addCont {
  background: rgb(226, 226, 226);
  height: 120px;
  padding: 5px;
  box-sizing: border-box;
}
/* Wide */
.wide {
  width: 600px;
  height: 410px;
}
.wide .nameInp {
  width: 30%;
  margin-top: 20px;
}
.wide .enterBtn {
  width: 40%;
}
.wide .pFirst {
  margin-top: 80px;
}
.wide .addCont {
  height: 60px;
}
</style>
