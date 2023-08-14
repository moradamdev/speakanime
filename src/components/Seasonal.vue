<template>
    <div v-if="selectedDay == anime.animeListObj.broadcast.day" class="thread-container">
        <div class="thread-header">
            <p class="header-text">
                <strong>Name:</strong> SpeakAni Bot
                <!-- <strong>ID:</strong> tempID -->
                <strong>Date:</strong> {{('0' + anime.timeStamp.toDate()).slice(+5, -42)}}
                <strong>Time:</strong> {{('0' + anime.timeStamp.toDate()).slice(+17, -36)}}
                <a class="mal-text" :href=anime.animeListObj.url target="_blank">[MAL]</a>
                <!-- <a href="#">Reply>></a> -->
                <!-- <router-link to="/{{anime.animeListObj.url}}">MAL LIINK</router-link> -->

                 <!-- {{anime.animeListObj.url}} -->
            </p>
        </div>

        <div class="thread-content">
            <router-link :to="`/thread/${index + '-' + anime.id}`">
                <img class="thread-img" :src="anime.animeListObj.images.jpg.image_url" alt="thread image">
            </router-link>
            <div class="thread-text">
                <h3>{{anime.animeListObj.title}} Thread</h3>
                <p>Discuss the newest episode of {{anime.animeListObj.title_english || anime.animeListObj.title }} down below.</p>
            </div>

        </div>

        <div class="show-comments-container">
            <router-link :to="`/thread/${index + '-' + anime.id}`">
                <button class="reply-btn">Show Comments</button>
            </router-link>
            <p v-if="anime.comments.length != 1" style="margin-left:.5em;"> >>{{ anime.comments.length }} Replies</p>
            <p v-else style="margin-left:.5em;"> >> 1 Reply</p>
        </div>
    </div>



</template>

<script>
    import 'firebase/compat/auth'
    import 'firebase/compat/firestore'
    import { userLoadAnimelist } from '@/firebase'
    let date = new Date();

    export default {
        data(){
            return {
                hour: date.getHours(),
                minutes: date.getMinutes(),
                showCommentThread: false,
                animeFBData: userLoadAnimelist(),
                name: '',
                text: '',
                commentArr:[
                    {
                        commentName: 'SpeakAni Bot',
                        commentText: 'Keep discussion civil please.',
                        commentID: 0,
                        commentMonth: date.getMonth(),
                        commentDay: date.getDate(),
                        commentYear: date.getFullYear(),
                        commentMinutes: ('0'+date.getMinutes()).slice(-2),
                        commentHours: ('0'+date.getHours()).slice(-2)
                    }
                ]
                };
        },
        props: {
            anime: Object,
            database: Object,
            index: Number,
            selectedDay: String
        },
        methods: {
            test(){
                // console.log(('0' + this.animeFBData[0].timeStamp.toDate()).slice(+1, -42));
                //console.log(('0' + this.animeFBData[0].timeStamp.toDate()).slice(+17, -36));
            }
        },

    }
</script>

<style scoped>
    .thread-container{
        margin:0em;
        margin-bottom: 1em;
        padding:0em;
        background: #EEEBD3;
        border-style: solid;
        border-color: var(--text-col);
        border-width: .35em;
        border-radius: .25em;
    }
    .header-text:strong{
        font-weight: bold;
    }
    .thread-header{
        padding: .1em .5em;
        column-span: all;
        display: flex;
        justify-content: space-between;
    }
    .thread-content{
        display:flex;
        margin:0em;
    }
    .thread-text{
        padding: 0 0 0 1em;
    }
    .thread-img{
        border-radius: 2%;
        width:95%;
        max-width: 250px;
        min-width: 200px;
        margin:.5em;
        /* look at that vue jikan tutorial and see how he scaled images */
    }
    .show-comments-container{
        display: flex;
        margin-left:1em;
        margin-bottom:1em;
    }
    .show-comments-container p{
        align-self: center;
        color: var(--lightBlue-col);
    }
    .mal-text{
        font-weight: bold;
        color: var(--lightBlue-col);
        text-decoration: none;
        /* text-decoration: none; */
        margin-left: 1em;
        font-size: .8em;
        align-self: center;
    }
    .reply-btn{
        color: white;
        padding:.5em 1em;
        border: none;
        border-radius:0px;
        background-color: #255957;

    }
    .reply-btn:hover{
        cursor: pointer;
        background: #15302f;
    }
    .x-btn{
        position:relative;
        left:9em;
        font-weight: bold;
        font-size: 1.5em;
        color:rgb(158, 158, 158);
        border:none;
        background-color: rgba(0, 0, 0, 0);
    }
    .x-btn:hover{
        cursor: pointer;
        color:white;
    }
    .comment-form{
        /* position:relative; */
        /* top:40%; */
        text-align: center;
    }
    label{
        text-align: left;
        /* display:flex; */
        /* right:10%; */
        color:white;
    }
    input{
        border-radius:7px;
        padding:.3em;
    }
    textarea{
        border-radius:10px;
        padding:.5em;
    }
    .send-btn{
        background: white;
        border-radius:3px;
        border:none;
        padding:.5em 1em;
    }
    .send-btn:hover{
        cursor:pointer;
        background:rgb(129, 129, 129);
        color:white;
    }
    .comments{
        position: fixed;
        top:0%;
        width:100%;
        height:100%;
        align-items: center;
        /* position:absolute; */
        background:rgba(0, 0, 0, 0.678);
    }
    .comment-list{
        background-color: rgba(0, 0, 0, 0.808);
        border-radius: 4px;
        bottom: 15px;
        box-shadow: 0 0 15px rgb(30 47 67 / 15%);
        left: 15px;
        padding: 15px;
        position: fixed;
        right: 15px;
        top: 1em;
        overflow:auto;

    }
    .thread-text-incomment{
        color:white;
    }
    .close-thread-btn{
        display: flex;
        justify-content: right;
        margin-top:-2em;
        margin-right:1em;
    }
    .x-btn-com{
        text-align: right;
        color: white;
        padding:.5em 1em;
        border: none;
        margin-left:1em;
        border-radius:5px;
        background-color: #3d5a80;
    }
    .x-btn-com:hover{
        cursor: pointer;
        background: #1a2636;
    }
    @media only screen and (min-width: 800px) {
        .thread-container{
            padding:1em;
            border-radius: 1%;
        }

    }
    @media only screen and (min-width: 1400px) {
        .thread-container{
            margin-left:4em;
            margin-right:4em;
        }
    }
    @media only screen and (min-width: 1400px) {
        .thread-container{
            margin-left:22em;
            margin-right:15em;
            border-radius: 0em;
        }
        .thread-img{
            border-radius: 0%;
            border-style: solid;
            border-color: var(--text-col);
            border-width: .35em;
        }
    }


</style>