<template>
  <div class="container">
    <div class="about">
      <h1>About</h1>
      <p>
        This is a website for people who want to talk about current anime with others. <br>
        It was originally made for discussing currently airing anime, but I've also added a random anime page and a recommended anime page. <br>
        Maybe one day there will be good RNG and you'll see one of your favorite shows. <br>
      </p>
      <br>
      <h1>How it works</h1>
      <ul>
        <li><p>Every day at midnight (Eastern Time), Speakani.me refreshes every thread for the current day and a new thread is created for the new episode.</p></li>
        <li><p>Every hour a new random anime thread is created.</p></li>
        <li><p>Once a month, I personally create a new thread for an anime that I recommend.</p></li>
        <li><p>The top anime list gets updated every week.</p></li>
      </ul>




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
    font-size: 1.2em;
  }
  p{
    font-size: 1em;
    margin-top:1em;
  }
  .about{
    color:var(--text-col);
    text-align: center;
    /* margin:auto; */
    margin-top:4em;
    margin-left:.3em;
    margin-right: .3em;
  }
  .socials{
    color:rgb(214, 214, 214);
    font-size: 1em;
    color:var(--text-col);
    text-align: center;
    margin:auto;
    width:75%;
    padding-bottom: 15em;
  }
  #social-p{
    font-size: 1em;
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

  @media only screen and (min-width: 1400px) {
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
