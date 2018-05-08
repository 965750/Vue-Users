<template>
    
        <div class="switchCont" v-bind:class="{darkTheme: !switchBtn}">
            <div class="switch" @click="switchTheme">
                <i class="material-icons">lightbulb_outline</i>
            </div>
        </div>
    
</template>

<script>
import { bus } from "../main";

export default {
  props: {
    dark: {
      type: Boolean
    }
  },
  data() {
    return {
      switchBtn: false
    };
  },
  methods: {
    switchTheme() {
      this.switchBtn = !this.switchBtn;
      bus.$emit("themeChange", this.switchBtn);
    }
  }
};
</script>

<style scoped>
.switchCont {
  position: absolute;
  top: 20px;
  left: 170px;
  width: 30px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  box-sizing: border-box;
  background: #8e9097;
  box-shadow: inset 2px -2px 5px #666666;
}
.switch {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #415970;
  position: absolute;
  left: 0;
  top: 0;
  transform: translate(-50%, -20%);
  text-align: center;
  transition: 0.5s all;
  cursor: pointer;
}
.switch i {
  color: #fff;
  font-size: 23px;
  padding: 3px 1px 0px 0px;
}
.darkTheme .switch {
  left: 100%;
  background: #39e698;
}
@media(max-width: 600px){
    .switchCont{
        left: 20px;
        top: 60px;
    }
}
@media(max-width: 500px){
    .switchCont{
        left: 20px;
        top: 50px;
    }
}
</style>

