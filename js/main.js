const { createApp } = Vue;

createApp({
  
  data () {
    return {
        hello: "hello ! welcome to my fist attempt in Vue.js ",
        image: "https://64.media.tumblr.com/ce1768a3c410fb500ba9e9e7f46051eb/tumblr_psbxehg7g91vvfsp9o2_400.gifv"
    };
  }
}).mount("#app")