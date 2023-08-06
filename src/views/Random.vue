<template>
  <h1 id="aoh">Anime of the Day</h1>
  <AnimeHour v-if='randomFBData[0]' :anime='randomFBData[0]' :doc='randomFBData[0].id'/>
  <div id="to-top">

  </div>
  <div class="footer">

    <div class="foot-con">
      <a href="#" id="go-top">Go to top.</a>
      <p>Follow me on Twitter for updates: <a href="https://www.twitter.com/mora_senpai" target="_blank">Twitter</a></p>
      <p>Follow me on Twitch, I stream a lot: <a href="https://www.twitch.tv/mora_senpai" target="_blank">Twitch</a></p>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import AnimeHour from '@/components/AnimeHour.vue';
import { createRandomList } from '@/firebase'
import { getDB } from '@/firebase'
import { reactive } from 'vue'
import { userLoadRandomList } from '@/firebase'
import { serverTimestamp } from 'firebase/firestore'


export default {
  components: {
    AnimeHour
  },
  data(){
    return {
      randomData: [],
      randomFBData: userLoadRandomList(),//randomList
      tempRandomList: [],
      randomAnime: {},
      max: 0,
      temp: []
      // maxScoreinList: this.getMaxScore()
    }
  },
  updated(){
    if(this.randomFBData.length === 0){
      this.sendRandom()
    }
  },
  methods:{
    async sendRandom(){
      for(var i = 0; i < 4; i ++){
        const response = await fetch(`https://api.jikan.moe/v4/random/anime`)
        const data = await response.json()

        this.randomData.push(data.data)
        this.temp.push(data.data.score)
      }
      // console.log(this.max = Math.max(...this.temp))
      console.log('end')

      this.max = Math.max(...this.temp)
      for(var i = 0; i < 4; i ++){
        if(this.randomData[i].score == this.max){
          console.log(this.randomData[i])
          console.log(this.max)
          const randList = reactive({randomListObj: this.randomData[i], timeStamp: serverTimestamp(), comments: []})
          createRandomList({...randList})
          randList.randomListObj = this.randomData
          randList.timeStamp = serverTimestamp()
          randList.comments = []
        }
      }
      // console.log(this.randomFBData.length)

    },
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
#aoh{
  margin-top:2.1em;
  margin-bottom:.5em;
  text-align: center; /* text align left for web*/
  color:var(--text-col);
}
#to-top{
  text-align: center;

}
.foot-con{
  /* position:relative; */
  margin-top:20em;
  min-height: 100%;
  color:rgb(173, 173, 173);
  border-top: 5px solid #293241;
  padding: 1em 4em;
  background: #2932418a;
}
#go-top{
  color:blue;
  margin-left:50%;
}
#aoh{
  text-align: center;
}


@media only screen and (min-width: 800px) {
  img{
    width: 23em;
    margin-bottom:-.25em;
    position:relative;
  }
  #banner-text {
    font-size: 2em;
  }

}

@media only screen and (min-width: 1500px) {
  #fade-img{
      display: block;
      width:100%;
      max-height: 200px;
      position:absolute;
      z-index: -1;
      opacity: 85%;
    }
    #aoh{
      text-align: left;
      /* margin-top:.5em; */
      padding-top:.5em;
      margin-left:1em;
      margin-bottom:1em;
      color: var(--text-col);
      /* z-index: -100; */
    }
}

@media only screen and (min-width: 1800px) {
  #aoh{
    text-align: left;
    margin-top: 1.98em;
  }
}
</style>
