const { createApp } = Vue;

createApp({
  
  data () {
    return {
        hello: "Hello ! take a break and have some tea !",
        image1: "https://64.media.tumblr.com/ce1768a3c410fb500ba9e9e7f46051eb/tumblr_psbxehg7g91vvfsp9o2_400.gifv",
        image2: "https://64.media.tumblr.com/9499b8f6c9e65b0119d193837a23d07e/tumblr_psbxehg7g91vvfsp9o1_400.gifv"
    };
  }
}).mount("#app")