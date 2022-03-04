<template>
  <div id="banner">
    <img src="../assets/banner.png" alt="banner image">
    <p id="banner-text">
      Discuss all your favorite anime,<br />
      every <span class="highlight">week</span>, every
      <span class="highlight">day</span>. <br />
      <span id="disclaimer">(Don't come here if you worry about spoilers)</span>
    </p>
  </div>
  <img id="fade-img" src="../assets/fade.png" alt="fade image">
  <h1 id="simulcast">Simulcast Threads</h1>
  <!-- <button @click="deleteThreads">delete all threads</button> -->
  <div id="container">
    <Seasonal v-for="(anime, index) in animeFBData" :key="anime.mal_id" :index='index' :anime='anime' :database="animeFBData"/>
  </div>
  <div id="to-top">
    <a href="#">Go to top.</a>
  </div>
  <div class="footer">
    <p>Follow me on Twitter for updates: <a href="https://www.twitter.com/mora_senpai" target="_blank">Twitter</a></p>
    <p>Follow me on Twitch, I stream a lot: <a href="https://www.twitch.tv/mora_senpai" target="_blank">Twitch</a></p>
  </div>
</template>


<script>
// @ is an alias to /src
import Seasonal from '@/components/Seasonal.vue';
import { createAnimeList, userLoadAnimelist } from '@/firebase'
import { reactive } from 'vue'
import { serverTimestamp } from 'firebase/firestore'

export default {
  components: {
    Seasonal
  },
  data(){
    return {
      airingData: [],
      animeFBData: userLoadAnimelist(),
      year: '2022',
      animeSeason: 'winter'
    }
  },
  beforeUpdate(){
    if(this.animeFBData.length == 0){
      this.sendAnime()
    }
    console.log(this.animeFBData.length)
  },
  methods:{
    async sendAnime(){
      fetch(`https://api.jikan.moe/v4/seasons/now`)
      .then(res => res.json())
      .then(data => {
      this.airingData = data.data

      for(var i = 0; i < this.airingData.length; i++){
        const aniList = reactive({animeListObj: this.airingData[i], timeStamp: serverTimestamp(), comments: []})
        //send data to firebase
        createAnimeList({...aniList})
        aniList.animeListObj = this.airingData
        aniList.timeStamp = serverTimestamp()
        aniList.comments = []
        console.log(aniList)
      }
      })
    .catch(err => console.log(err))
    },
    // deleteThreads(){
    //   for(var i = 0; i < this.animeFBData.length; i ++){
    //     deleteAnimeList(this.animeFBData[i].id);
    //   }
        
    // }
  }
}
</script>

<style scoped>
* {
  --text-col: #e0fbfc;
  --highlight-col: #ee6c4d;
}
html {
  scroll-behavior: smooth;
}
img{
  width: 50%;
  margin-bottom:-.25em;
  position:relative;
}
#banner {
  background: #3d5a80;
  border-bottom: 5px solid #293241;
}
#banner-text {
  position: absolute;
  top:85px;
  width:100%;
  color: var(--text-col);
  font-size: 4vw;
  display: block;
  text-align: center;
}
#disclaimer {
  font-size: 0.65em;
}
.highlight {
  color: var(--highlight-col);
}
#simulcast {
  text-align: center; /* text align left for web*/
}
#fade-img{
  display:none;
}
#to-top{
  text-align: center;
}

.footer{
  color:rgb(173, 173, 173);
  border-top: 5px solid #293241;
  padding: 1em 4em;
  background: #2932418a;
}

@media only screen and (min-width: 800px) {
  #banner-text {
    font-size: 2em;
  }
  img{
    width: 23em;
    margin-bottom:-.25em;
    position:relative;
  }
  #container{
    margin:2em;
  }
  
}

@media only screen and (min-width: 1400px) {
    #simulcast{
      text-align: left;
      margin-top:.5em;
      margin-left:1em;
      color: var(--text-col);
      /* z-index: -100; */
    }    

    #fade-img{
      display: block;
      width:100%;
      max-height: 200px;
      position:absolute;
      z-index: -1;
      opacity: 85%;
    }
}

</style>
