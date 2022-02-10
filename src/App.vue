<template>
  <div id="nav">
    <h1 id="title">SpeakAni<span id="title-dot">.</span>me</h1>
    <div id="router-links">
      <router-link to="/">Airing </router-link>
      <router-link to="/random">Random </router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
  <router-view/>
</template>

// <script>
// export default {
//   methods:{
//     updateTime(){

//     }
//   }
// }
// </script>



<style>
*{
  margin:0em;
  padding:0em;
  --text-col: #e0fbfc;
  --highlight-col: #ee6c4d;
}
body{
  background: #576f8e;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 15px;
  display: flex;
  justify-content: space-between;
  border-bottom: 5px solid #293241;
}

#nav a {
  font-weight: bold;
  color: var(--text-col);
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: var(--highlight-col);
  text-decoration: none;
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
}
</style>
