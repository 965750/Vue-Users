<template>
  <main>
    <div class="innerCont">
      <div class="liveChatCont">
      </div>
      <div class="main" ref="usersList">
        <div class="optCont" v-bind:class="{darkTheme: dark}">
          <input type="text" class="searchInp" v-model="search" placeholder="search name..." />
          <h2>Users List</h2>
          <transition name="bounce">
          <span v-if="added" transition="expand" class="userAdd">+ Request sent</span>
          </transition>
        </div>
        <ul class="listCont" v-bind:class="{darkTheme: dark}">
          <li v-for="(user, index) in filteredUsers" :key="user.login">
            <router-link :to="'/user/' + user.login"><div class="avatarCont"><img v-bind:src="user.avatar_url" /></div></router-link>
            <router-link :to="'/user/' + user.login"><h3>{{ user.login }}</h3></router-link>
            <h5>{{ user.score }}</h5>
            <button v-on:click="addFriend(index)" class="addFriendBtn">Add Friend</button>
          </li>
        </ul>
      </div>
      <div class="liveChatCont">
        <AsideChat v-bind:dark="dark" class="liveChat"/>
      </div>
    </div>
  </main>
</template>

<script>
import AsideChat from "./AsideChat";

export default {
  components: {
    AsideChat
  },
  props: {
    users: {
      type: Array
    },
    dark: {
      type: Boolean
    }
  },
  name: "users",
  data() {
    return {
      search: "",
      added: false,
      searchMax: 12
    };
  },
  methods: {
    addFriend(index) {
      this.added = true;
      this.filteredUsers.splice(index, 1);
      setTimeout(() => (this.added = false), 1200);
    },
    // LIMIT USERS LIST
    moreUsers() {
      if (
        window.scrollY + window.innerHeight - 50 >=
        this.$refs.usersList.scrollHeight + 100
      ) {
        this.searchMax = this.searchMax + 6;
      }
    }
  },
  computed: {
    filteredUsers() {
      return this.users
        .filter(user => {
          return user.login.match(this.search);
        })
        .splice(0, this.searchMax);
    }
  },
  created() {
    window.addEventListener("scroll", this.moreUsers);
  }
};
</script>

<style lang="scss" scoped>
.innerCont {
  display: flex;
  justify-content: center;
  flex-grow: 1;
  .main {
    width: 600px;
  }
  .liveChatCont {
    width: 300px;
  }
}
.optCont {
  max-width: 600px;
  height: 40px;
  background: #fff;
  margin: 0px auto 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgb(121, 121, 121);
  display: flex;
  h2 {
    margin: 0px;
    line-height: 40px;
    width: 40%;
    text-align: center;
    color: #34495e;
  }
  .userAdd {
    color: #41b883;
    line-height: 40px;
    width: 30%;
    text-align: center;
    font-weight: 700;
  }
  .searchInp {
    border: none;
    height: 30px;
    width: 29%;
    margin: 5px 0% 5px 1%;
    box-sizing: border-box;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    padding: 5px;
    border: 1px solid #34495e;
    font-size: 13px;
    background: #fff;
    &:focus {
      outline: none;
      border: 1px solid #41b883;
    }
  }
  .bounce-enter-active,
  .bounce-leave-active {
    transition: all 0.2s;
  }
  .bounce-enter,
  .bounce-leave-to {
    opacity: 0;
  }
}
.listCont {
  max-width: 600px;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0px;
  margin: 20px auto 0px;
  box-shadow: 0px 0px 5px rgb(121, 121, 121);
  border-radius: 10px;
  overflow: hidden;
  justify-content: center;
  li {
    width: 200px;
    height: 280px;
    border: 1px solid rgb(230, 230, 230);
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
    a {
      text-decoration: none;
    }
    .avatarCont {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      margin: 25px auto;
      overflow: hidden;
      cursor: pointer;
      img {
        height: 120px;
      }
    }
    h3 {
      margin: 0px auto;
      text-align: center;
      color: #34495e;
      border-bottom: 1px solid rgba(201, 201, 201, 0.529);
      width: 85%;
      font-size: 17px;
      transition: all 0.1s;
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
    h5 {
      color: #41b883;
      text-align: center;
      margin: 3px 0px;
    }
    .addFriendBtn {
      margin: 30px auto 0px;
      width: 150px;
      height: 25px;
      display: block;
      border: 1px solid #41b883;
      background: transparent;
      color: #41b883;
      border-radius: 15px;
      font-weight: 700;
      transition: all 0.1s;
      &:hover {
        background: #39da91;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
.darkTheme {
  background: #34495e;
  color: #f5f5f5;
  .searchInp {
    background: #293847;
    color: #f5f5f5;
  }
  li {
    border: 1px solid #486079;
    h3 {
      color: #fff;
    }
  }
  h2 {
    color: #fff;
  }
}
@media screen and(max-width: 1200px) {
  .listCont {
    max-width: 400px;
  }
}
@media screen and(max-width: 1000px) {
  .liveChat {
    display: none;
  }
}
@media screen and(max-width: 800px) {
  .listCont {
    max-width: 200px;
  }
  .userAdd {
    font-size: 12px;
  }
}
@media screen and(max-width: 650px) {
  .optCont {
    max-width: 400px;
    h2 {
      width: 30%;
      font-size: 16px;
    }
    .searchInp {
      width: 34%;
    }
    .userAdd {
      width: 35%;
    }
  }
  .listCont {
    max-width: 200px;
  }
}
@media screen and(max-width: 550px) {
  .optCont {
    max-width: 310px;
    h2 {
      width: 0%;
      display: none;
    }
    .searchInp {
      width: 49%;
    }
    .userAdd {
      width: 50%;
    }
  }
  .listCont {
    max-width: 200px;
  }
}
</style>
