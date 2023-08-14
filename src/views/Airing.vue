<template>
  <h1 id="simulcast">Simulcast Threads</h1>
  <!-- <button @click="deleteThreads">delete all threads</button> -->
  <div id="container">
    <div class="days">
      <button  @click="setDay">Sunday</button>
      <button  @click="setDay">Monday</button>
      <button  @click="setDay">Tuesday</button>
      <button  @click="setDay">Wednesday</button>
      <button  @click="setDay">Thursday</button>
      <button  @click="setDay">Friday</button>
      <button  @click="setDay">Saturday</button>
      <!-- <button @click="sendAnime">send anime</button>
      <button @click="delDay">Delete Specific Day</button> -->

    </div>


    <Seasonal v-for="(anime, index) in animeFBData" :key="anime.mal_id" :index='index' :anime='anime' :database="animeFBData" :selectedDay="selectedDay"/>
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
import { createAnimeList, userLoadAnimelist, createRandomList, deleteRandomList, userLoadRandomList, db, deleteAnimeListByDay } from '@/firebase'
import { reactive } from 'vue'
import { deleteDoc, serverTimestamp, doc } from 'firebase/firestore'
let date = new Date();
console.log(date.getDay());



export default {
  components: {
    Seasonal
  },
  data(){
    return {
      airingData: [],
      animeFBData: userLoadAnimelist(),
      randomData: [],
      randomFBData: userLoadRandomList(),
      year: '2022',
      animeSeason: 'winter',
      scheduleDays: ['Sundays', 'Mondays', 'Tuesdays', 'Wednesdays', 'Thursdays', 'Fridays', 'Saturdays'],
      currentDay: date.getDay(),
      selectedDay: date.getDay(),
      max: 0,
      temp: []
    }
  },
  created(){
    this.selectedDay = this.scheduleDays[this.currentDay];
  },
  beforeUpdate(){
    if(this.animeFBData.length == 0){
      this.sendAnime()
    }

    let collection = document.getElementsByTagName('button');
    // console.log(document.getElementsByTagName('button'));
    for(var i = 0; i < collection.length; i ++){
      if(collection[i].innerHTML == this.selectedDay.substring(0, this.selectedDay.length-1)){
          collection[i].focus();
      }
    }
    // console.log(this.animeFBData.length)
  },
  methods:{
    setDay(e){
      console.log(this.scheduleDays[this.currentDay]);
      this.selectedDay = e.target.innerHTML + "s";
      console.log(this.selectedDay);
      // this.selectedDay = document.getElement(but).innerHTML;
      // let a = but.getAttribute("a-day");
    },
    async createRandom(){
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
    async delDay(){
      deleteAnimeListByDay("Fridays");
      // await deleteDoc(doc(db, "random-list", "JjJL2QOqJBAclcqXFCml"));
      // deleteRandomList(this.randomFBData[0].id);
      // deleteRandomList();
      // console.log(this.randomFBData);
    }
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
  margin-top:1.5em;
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
  /* display: flex; */
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
    display: flex;
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
    .footer{
      padding-left:24em;
    }

}

  @media only screen and (min-width: 1400px) {
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
