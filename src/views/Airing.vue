<template>
  <h1 id="simulcast">Simulcast Threads</h1>
  <!-- <button @click="deleteThreads">delete all threads</button> -->
  <div id="container">
    <div class="days">
      <button>Sunday</button>
      <button>Monday</button>
      <button>Tuesday</button>
      <button>Wednesday</button>
      <button>Thursday</button>
      <button>Friday</button>
      <button>Saturday</button>
    </div>

    <Seasonal v-for="(anime, index) in animeFBData" :key="anime.mal_id" :index='index' :anime='anime' :database="animeFBData"/>
  </div>
  <div id="to-top">
    <a href="#">Go to top.</a>
  </div>
  <div class="footer">
    <p>Follow me on Twitter for updates: <a href="https://www.twitter.com/abajabajuba" target="_blank">Twitter</a></p>
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
      animeSeason: 'winter',
      currentDay: 'sunday'
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
      // fetch(`https://api.jikan.moe/v4/seasons/${this.year}/${this.animeSeason}`)
      // fetch(`https://api.jikan.moe/v4/schedules?filter=${this.currentDay}&kids=false`)
      .then(res => res.json())
      .then(data => {
      this.airingData = data.data

      for(var i = 0; i < this.airingData.length; i++){
        if(this.airingData[i].score != null){
          const aniList = reactive({animeListObj: this.airingData[i], timeStamp: serverTimestamp(), comments: []})
          //send data to firebase
          createAnimeList({...aniList})
          aniList.animeListObj = this.airingData
          aniList.timeStamp = serverTimestamp()
          aniList.comments = []
          console.log(aniList)
        }
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
  --text-col: #255957;
  --highlight-col: #C492B1;
}
html {
  scroll-behavior: smooth;
}
img{
  width: 50%;
  margin-bottom:-.25em;
  position:relative;
}

#simulcast {
  margin-top:2.5em;
  margin-bottom:.5em;
  text-align: center; /* text align left for web*/
  color:var(--text-col);
}
#fade-img{
  display:none;
}
#to-top{
  text-align: center;
}
a{
  color: var(--text-col);
}

a:visited{
  color:var(--lightBlue-col);
}
.days{
  display: flex;
  justify-content: space-between;
  /* margin: auto; */
  padding-bottom: 1em;
  text-align: center;
  /* width:75%; */
}
.days button{
  /* margin:1em; */
  border-style: none;
  background-color: var(--text-col);
  color: white;
  padding:2px;
}

.days button:focus{
  background-color: var(--highlight-col);
  /* margin-bottom:1em; */
  /* border-width: 6px; */
}

.footer{
  color: var(--background-col);
  border-top: 5px solid var(--text-col);
  padding: 1em 4em;
  background: var(--brown-col);
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
  .days{
    /* margin: auto; */
    /* width:50%; */
    margin-bottom: 1em;
  }
  .days button{

    font-size: 1em;
    padding:.5em;
    border: 2px solid black;
  }

}

@media only screen and (min-width: 1400px) {
    #simulcast{
      padding-top: 1em;
      /* text-align: left; */
      color: var(--text-col);
      /* z-index: -100; */
    }
    .days button{
      width: 7em;
      text-align: center;
    }

}

  @media only screen and (min-width: 1500px) {
      #simulcast{
        text-align: left;
        margin-top: 1.98em;
        margin-left: 12em;
      }

      .days{
        /* margin: auto; */
        width:60%;
        margin-left:22.25em;
      }
      .days button{
        padding:.6em 0em;
      }
  }

</style>
