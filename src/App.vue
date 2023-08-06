<template>
  <div class="main-container">
    <nav>
      <router-link to="/"><h1 id="title">SpeakAni<span id="title-dot">.</span>me</h1> </router-link>

      <div id="router-links">
        <router-link to="/">Airing </router-link>
        <router-link to="/recommend">Rec </router-link>
        <router-link to="/about">About</router-link>
      </div>
    </nav>
    <!-- {{ randomFBData[0].randomListObj.images.jpg.image_url }} -->

    <div class="sidebar">
      <div class="sidebar-scroll">
        <img class="folder" style="top:-.4em;" src="./assets/folder.png" alt="folder sidebar image">
        <h1  class="side-text" style="font-size:1.7em; left:7em; top:20px;" id="anime-text">Anime</h1>

        <img class="folder" style="top:5em;" src="./assets/folder.png" alt="folder sidebar image">
        <h1  class="side-text" style="font-size:1.7em; left:6.8em; top:100px;" id="manga-text">Manga</h1>

        <img class="folder" style="top:10.5em;" src="./assets/folder.png" alt="folder sidebar image">
        <h1  class="side-text" style="font-size:1.7em; left:8.5em; top:185px;" id="top-text">Top</h1>

        <img class="folder" style="top:29em;" src="./assets/folder.png" id="folder-bottom" alt="folder sidebar image">
        <h1  class="side-text" style="font-size:1.7em; left:6em; top:480px;" id="random-text">Random</h1>

        <div class="top-anime" v-if='animeFBData[0]'>
          <div class="single-anime" v-for="i in 4">
            <p>{{ animeFBData[i].animeListObj.title }}</p>
            <img :src="animeFBData[i].animeListObj.images.jpg.image_url" alt="top anime image">

          </div>
        </div>

        <router-link to="/random">
          <div v-if='randomFBData[0]' class="random-anime-box">
            <h3>Looking for a wild card?</h3>
            <img :src="randomFBData[0].randomListObj.images.jpg.image_url" id="random-anime-img" alt="random anime image">

            <!-- <AnimeHour v-if='randomFBData[0]' :anime='randomFBData[0]' :doc='randomFBData[0].id'/> -->
          </div>
        </router-link>
      </div>
    </div>
    <div class="sidebar-hidden">
      <button @click="collapseSideBar()">&lt;</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import 'firebase/compat/auth'
  import 'firebase/compat/firestore'
  import { userLoadRandomList, userLoadAnimelist } from '@/firebase'

export default {
  data(){
    return {
        randomFBData: userLoadRandomList(),
        animeFBData: userLoadAnimelist()
        };
  },
  props: {
    anime: Object,
    doc: String,
  },
  methods: {
    collapseSideBar(){
      const side = document.querySelector(".sidebar");
      const sideButton = document.querySelector(".sidebar-hidden");
      if(side.style.visibility == 'hidden'){
        side.style.visibility = 'visible';
        sideButton.style.left = '19.8em';
        sideButton.style.transform= 'scaleX(1)';
      }else{
        side.style.visibility = 'hidden';
        sideButton.style.left = '.5em';
        sideButton.style.transform= 'scaleX(-1)';
      }

    }
  }

}

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Changa+One&family=Montserrat:wght@400;700&family=Open+Sans:wght@400;700&family=Poppins:wght@400;700&display=swap');

*{
  margin:0em;
  padding:0em;
  --text-col: #255957;
  --highlight-col: #C492B1;
  --background-col: #EEEBD3;
  --lightBlue-col: #437C90;
  --brown-col: #7A5C58;
  --darkhover-col: #1a2636;
  font-family: 'Changa One', cursive;
  font-family: 'Montserrat', sans-serif;
  font-family: 'Open Sans', sans-serif;
  font-family: 'Poppins', sans-serif;
}
body{
  background: var(--background-col);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

nav {
  position: fixed;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 10px solid #7a5c58;
  width: 100%;
  background: var(--background-col);
  z-index: 999;
  top:0px;
}

nav a {
  font-weight: bold;
  color: var(--text-col);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: var(--highlight-col);
  text-decoration: none;
}
.sidebar{
  display: none;
}
.sidebar-hidden{
  display: none;
}
.folder{
  display: none;
}

#title{
  margin: 0em;
  padding: 0em;
  color:var(--text-col)
}
#title-dot{
  color: var(--highlight-col);
}
#router-links{
  padding-top: .7em;
  padding-right:1.5em;
}

@media only screen and (min-width: 800px) {
  #router-links{
    position: absolute;
    /* position:relative; */

    width:50%;
    left:0;
    right:0;
    margin:auto;
    /* height: 5em; */
    text-align: center;
    font-size: 1.5em;
    top:.2em;

  }
  #title{
    font-size:2em;
    margin:0em;
    padding:0em;
  }
  nav a {
    margin-right:1em;
  }
}

@media only screen and (min-width: 1500px) and (min-height: 784px) {
  .sidebar{
    display: inline-block;
    position: fixed;
    background-color: var(--brown-col);
    height: 100vh;
    top:3em;
    width:19.5em;
    text-align: right;
    color: var(--background-col);
    /* margin-top: 0em; */
    /* padding-bottom: 6em; */
    overflow: hidden;
    overflow-y:scroll;
    /* visibility: hidden; */
  }

  .sidebar-hidden{
    display: block;
    position: fixed;
    top: 6.5em;
    height: 80%;
    left:19.8em;
  }
  .sidebar-hidden button{
    color: white;
    height:100%;
    width:100%;
    border: none;
    background-color: var(--brown-col);
  }
  .sidebar-hidden button:hover{
    background-color: #a37e79;
  }

  .folder{
    display:block;
    position: absolute;
    width:90%;
    left:1em;
    top:0em;
  }
  #folder-bottom{
    padding-bottom:4em;
  }
  .side-text{
    z-index: 9999;
    color: var(--brown-col);
    position: absolute;
    /* font-size: 1.5vw; */
    /* padding-top: 1rem; */
    /* right:-.3em; */

  }

  .top-anime{
    /* position: absolute; */
    margin-top: 14.6em;
    margin-left:1em;
    width:90%;
    text-align: right;

    /* height: 1em; */
  }

  .single-anime{
    display: flex;
    justify-content:right;
    position: relative;
    background-color: #e6e3d0;
    border-bottom: 2px solid #adaca0;
  }
  .single-anime:hover{
    background-color: #bebcad;
  }
  .single-anime p{
    color:var(--brown-col);
    padding-right: 1em;
    font-size: .8em;
    /* padding-bottom:3em; */
  }
  .single-anime img{
    /* padding-bottom:1em; */
    width:2.4em;
    /* height:3em; */
  }

  .random-anime-box{
    color: var(--text-col);
    position:absolute;
    left:2.3em;
    top:550px;
    text-align: center;

  }
  #random-anime-img{
    border-style:solid;
    border-width: 5px;
    border-color: var(--text-col);
  }
  nav{
    /* font-size: 1.8vh; */
    padding:0em 1em;
    align-content:space-between;
  }
  #router-links{
    padding:0em;
    /* margin: 0em; */
    /* top:0em; */
  }

::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #c9c9c94d;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #bdbdbd;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(85, 85, 85);
}
::-webkit-scrollbar-track:hover {
  background: #c9c9c94d;
}
}

@media only screen and (min-width: 2100px) {
  .main-container{
    margin:auto;
    width:75%;
  }
  nav{
    margin: auto;
    width:75%;
  }

}
</style>
