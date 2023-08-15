<template>
  <AnimeHour v-if='randomFBData[0]' :anime='randomFBData[0]' :doc='randomFBData[0].id'/>
  <div id="to-top">
    <a href="#">Go to top.</a>
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
    // if(this.randomFBData.length === 0){
    //   this.sendRandom()
    // }
  },
  methods:{

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
  position: fixed;
  /* margin: auto; */
  text-align: right;
  right:1em;
  width: 100%;
  bottom: 0;

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

@media only screen and (min-width: 1400px) {
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
