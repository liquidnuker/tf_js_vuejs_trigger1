// import "./js/vendor/vue.min.js";
// import Vue from 'vue';
// var Vue = require("./js/vendor/vue.min.js"); // ok

const trigger = () => {  
  let Vue = require("./js/vendor/vue.min.js");
  let a = new Vue({
    el: '#app',
    data: {
      message: 'onclick trigger',
      message2: 'sfdfdf'
    }
  });
};

document.getElementById("demo").onclick = trigger;