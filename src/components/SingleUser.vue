<template>
    <div id="singleUser">
        <article class="userCont">
            <div class="backCont" @click="goBack">
              <i class="material-icons arr">chevron_left</i>
              <span class="back">back</span>
            </div>
            <h2>{{ user.login }}</h2>
            <div class="mainInfoCont">
                <div class="avatarCont"><img v-bind:src="user.avatar_url" /></div>
                <div class="mainInfo">
                    <div class="singleInfo"><span class="getInfo">{{ user.followers }}</span><span> Followers</span></div>
                    <div class="singleInfo"><span class="getInfo">{{ user.following }}</span><span> Following</span></div>
                    <div class="singleInfo"><span class="getInfo">{{ user.public_repos }}</span><span> Public Repos</span></div>
                </div>
            </div>
            <div class="linkCont">
                <span>GitHub Profile: </span><a v-bind:href="user.html_url">{{ user.html_url }}</a>
                <span>WebSite: </span><a v-bind:href="user.blog">{{ user.blog }}</a>
            </div>
            <div class="postCont">
                <ul>
                    <li v-for="post in posts" :key="post.title">
                        <div class="postTitle">{{ post.title }}</div>
                        <div class="postBody">{{ post.body | limit }}</div>
                    </li>
                </ul>
            </div>
            <div class="addCont">
                <div class="inpCont">
                    <input v-model="newTitle" class="addInp" type="text" placeholder="Title..." />
                    <textarea v-model="newBody" placeholder="Message..."></textarea>
                    <p class="errorCont">{{ error }}</p>
                </div>
                <input class="submitInp" type="submit" value="add" v-on:click="addPost" />
            </div>
        </article>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "singleuser",
  data() {
    return {
      id: this.$route.params.id,
      user: {},
      posts: [],
      newTitle: "",
      newBody: "",
      error: ""
    };
  },
  methods: {
    addPost() {
      if (this.newTitle.length >= 50) {
        this.error = "Title must be less than 50 characters!";
      } else if (this.newTitle.length <= 2 || this.newBody.length <= 2) {
        this.error = "No less than 3 and characters!";
      } else {
        axios
          .post("https://jsonplaceholder.typicode.com/posts", {
            title: this.newTitle,
            body: this.newBody,
            userId: 1
          })
          .then(data => {
            console.log(data);
            this.posts.push({
              title: this.newTitle,
              body: this.newBody,
              userId: 1
            });
          });
        this.error = "";
      }
    },
    goBack() {
      this.$router.go(-1);
    }
  },
  created() {
    axios.get("https://api.github.com/users/" + this.id).then(data => {
      this.user = data.data;
    });

    axios.get("https://jsonplaceholder.typicode.com/posts").then(data => {
      this.posts = data.data.splice(Math.floor(Math.random() * 91), 3);
    });
  }
};
</script>

<style lang="scss" scoped>
.userCont {
  width: 400px;
  min-height: 700px;
  background: #fff;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0px 0px 5px rgb(121, 121, 121);
  border-radius: 10px;
  position: relative;
  .backCont {
    position: absolute;
    top: 5px;
    left: 5px;
    font-size: 14px;
    color: #aaa;
    cursor: pointer;
    display: block;
    border: 1px solid #aaa;
    width: 60px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    border-radius: 7px;
    display: flex;
    transition: all .1s;
    &:hover{
      background: #34495e;
      color: #39da91;
    }
    .arr {
      font-size: 20px;
      line-height: 20px;
      width: 20%;
    }
    .back{
      line-height: 20px;
      display: block;
      width: 80%;
    }
  }
  .addCont {
    margin-top: 10px;
    height: 120px;
    background: #41b883;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    .inpCont {
      width: 78%;
      .addInp {
        width: 100%;
        height: 30px;
        border: 1px solid #34495e;
        margin: 0px 0px 10px;
        border-radius: 7px;
        padding: 5px;
        display: block;
        box-sizing: border-box;
        &:focus {
          border: 1px solid #39da91;
          outline: none;
        }
      }
      textarea {
        resize: none;
        width: 100%;
        height: 60px;
        display: block;
        border-radius: 7px;
        box-sizing: border-box;
        padding: 5px;
        font-family: Geneva, Tahoma, sans-serif;
        color: #34495e;
        border: 1px solid #34495e;
        &:focus {
          border: 1px solid #39da91;
          outline: none;
        }
      }
      .errorCont {
        color: crimson;
        margin: 5px 0px;
        text-align: center;
        font-size: 13px;
      }
    }
    .submitInp {
      width: 19%;
      border-radius: 7px;
      height: 100px;
      border: 1px solid #39da91;
      background: #39da91;
      color: #fff;
      font-size: 20px;
      transition: all 0.1s;
      outline: none;
      &:hover {
        cursor: pointer;
        background: #35cc88;
        border: 1px solid #2ea871;
        color: #f5f5f5;
      }
    }
  }
  .postCont {
    ul {
      list-style-type: none;
      margin: 0px;
      padding: 0px;
      margin-top: 30px;
      li {
        width: 100%;
        max-height: 120px;
        background: rgb(218, 218, 218);
        margin-top: 10px;
        border-radius: 10px;
        border-bottom-left-radius: 0px;
        .postTitle {
          background: rgb(155, 155, 155);
          max-height: 45px;
          width: 100%;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
          font-size: 15px;
          padding: 5px;
          box-sizing: border-box;
          color: #ffffff;
          font-weight: 700;
          text-align: center;
          overflow: hidden;
        }
        .postBody {
          font-size: 13px;
          padding: 10px;
          box-sizing: border-box;
          overflow: hidden;
        }
      }
    }
  }
  .linkCont {
    display: flex;
    margin-top: 10px;
    height: 60px;
    justify-content: space-around;
    flex-wrap: wrap;
    span {
      color: #34495e;
      width: 35%;
      line-height: 30px;
      height: 30px;
    }
    a {
      margin: 0px;
      color: #34495e;
      width: 65%;
      line-height: 30px;
      height: 30px;
      &:hover {
        cursor: pointer;
        color: #000;
      }
    }
  }
  h2 {
    margin: 0px auto 30px;
    text-align: center;
    font-size: 22px;
    color: #41b883;
  }
  .mainInfoCont {
    display: flex;
  }
  .avatarCont {
    border-radius: 50%;
    width: 150px;
    height: 150px;
    overflow: hidden;
    img {
      height: 150px;
    }
  }
  .mainInfo {
    height: 150px;
    width: 50%;
    margin-left: 10px;
    .singleInfo {
      border-bottom: 2px solid #41b883;
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      color: #34495e;
      line-height: 40px;
      .getInfo {
        font-size: 18px;
        font-weight: 700;
      }
    }
  }
}
@media screen and(max-width: 500px) {
  .userCont {
    width: 310px;
    .addCont {
      .inpCont {
        .errorCont {
          font-size: 12px;
          width: 105%;
        }
      }
    }
    .linkCont {
      margin-top: 0px;
      height: 120px;
      span {
        width: 100%;
        height: 20px;
        font-size: 14px;
      }
      a {
        width: 100%;
        margin-bottom: 15px;
      }
    }
    .mainInfoCont {
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
    }
    .mainInfo {
      width: 70%;
      margin-left: 0px;
      text-align: center;
    }
    .avatarCont {
      height: 200px;
      width: 200px;
      img {
        height: 200px;
      }
    }
  }
}
</style>
