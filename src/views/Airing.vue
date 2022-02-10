<template>
  <div id="banner">
    <p id="banner-text">
      Discuss all your favorite anime,<br />
      every <span class="highlight">week</span>, every
      <span class="highlight">day</span>. <br />
      <span id="disclaimer">(Don't come here if you worry about spoilers)</span>
    </p>
  </div>
  <h1 id="simulcast">Simulcast Threads</h1>
  <!-- <Seasonal v-for="anime in airingData" :key="anime.mal_id" :anime='anime'/> -->
  <Seasonal v-for="anime in airingData" :key="anime.mal_id" :anime='anime'/>
  <!-- {{airingData[0].images.jpg.image_url}} -->
  
</template>


<script>
// @ is an alias to /src
import Seasonal from '@/components/Seasonal.vue';
import { createAnimeList } from '@/firebase'
import { reactive } from 'vue'




export default {
  setup(){
    
  },
  components: {
    Seasonal
  },
  data(){
    return {
      airingData: []
    }
  },
  mounted(){
    const year = '2022'
    const animeSeason = 'winter'
    

    fetch(`https://api.jikan.moe/v4/seasons/${year}/${animeSeason}`)
    .then(res => res.json())
    .then(data => {
      this.airingData = data.data
    })
    .catch(err => console.log(err.message))
  },
  methods:{
    async sendToFireBase(){
      const aniList = reactive({
        animeListArray: this.airingData
      })

      //send data to firebase
      await createAnimeList({...aniList})
      aniList.animeListArray = this.airingData
    }
  }
  
}
</script>

<style scoped>
* {
  --text-col: #e0fbfc;
  --highlight-col: #ee6c4d;
}
#banner {
  /* display:inline; */
  margin: 0em;
  padding: 1em;
  background: #3d5a80;
  border-bottom: 5px solid #293241;
}
#banner-text {
  color: var(--text-col);
  font-size: 1.5em;
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
.thread-container {
  background: #536985;
  /* border-radius: 50px; */
}
</style>
