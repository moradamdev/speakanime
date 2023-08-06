<template>
  <div class="container">
    <div class="about">
      <h1>About</h1>
      <p>
        This is a website for people who wanna talk about anime with others. <br>
        It was originally made for discussing currently airing anime, but I've also added a random anime page. <br>
        Maybe one day there will be good RNG and you'll see one of your favorite shows. I'll probably also add my own favorite shows. <br>
      </p>
      <p>Every day at 5PM EST, Speakani.me checks to see if a new episode has aired and will make a new thread if one has aired.</p>
    </div>

    <div class="socials">
      <p id="social-p">If anything is broken, then let me know on my <a href="https://www.twitter.com/abajabajuba">Twitter</a>. </p>
    </div>

  </div>
</template>

<style scoped>
  template{
    display: flex;
    flex-direction: row;
  }
  h1{
    /* margin-top:6em; */
    font-size: 1em;
  }
  p{
    font-size: .6em;
    margin-top:1em;
  }
  .about{
    color:var(--text-col);
    text-align: center;
    /* margin:auto; */
    margin-top:6em;
  }
  .socials{
    color:rgb(214, 214, 214);
    font-size: 1em;
    color:var(--text-col);
    text-align: center;
    margin:auto;
    width:75%;
  }
  a{
    /* color:rgb(214, 214, 214); */
    text-decoration: none;
  }
  #social-p{
    font-size:1em;
  }

  @media only screen and (min-width: 800px) {
    h1{
      font-size:1.5em;
    }
    p{
    font-size: 1em;
    }
    #social-p{
      font-size:1.25em;
    }
  }

  @media only screen and (min-width: 1500px) {
    .container{
      /* margin-left: 8em; */
      margin:auto;
      width:50%;
    }
    h1{
      text-align: left;
    }
    p{
      text-align: left;
      font-size:1.4em;
    }
    .socials{
      text-align: left;
      width:100%;
    }
    #social-p{
      text-align: left;
      font-size:1.7em;
    }

  }
</style>
