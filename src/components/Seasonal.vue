<template>
    <div class="thread-container">
        <div class="thread-header">
            <p class="header-text">
                <strong>Name:</strong> SpeakAni Bot
                <!-- <strong>ID:</strong> tempID -->
                <strong>Date:</strong> {{month + 1}}/{{day}}/{{year}}
                <strong>Time:</strong> {{hour}}:{{minutes}}
                <!-- <a href="#">Reply>></a> -->
                <!-- <router-link to="/{{anime.mal_id}}">Reply>></router-link>
                 -->
            </p>
        </div>
        
        <div class="thread-content">
            <img class="thread-img" :src="anime.animeListObj.images.jpg.image_url" alt="thread image">
            <div class="thread-text">
                <h3>{{anime.animeListObj.title}} Thread</h3>
                <p>Discuss the newest episode of {{anime.animeListObj.title_english || anime.title}} down below.</p>
            </div>
            
        </div>
        
        <button class="reply-btn" @click="showCommentThread = !showCommentThread">Show Comments</button>
    </div>
    <div class="comments" v-if="showCommentThread" >
        <div class="comment-div" v-scroll-lock="showCommentThread">
            <ul>
                <li class="comment-list" >
                    <div class="thread-content">
                        <img class="thread-img" :src="anime.animeListObj.images.jpg.image_url" alt="thread image">
                        <div class="thread-text-incomment">
                            <h3>{{anime.title}} Thread</h3>
                            <p>Discuss the newest episode of {{anime.animeListObj.title_english || anime.title}} down below.</p>
                        </div>
                    </div>
                    <div class="close-thread-btn">
                        <button class="x-btn-com" @click="showReplyBox = !showReplyBox">Reply>></button>
                        <button class="x-btn-com" @click="xOutComments" @submit.prevent="sendComment">Close Thread</button>
                    </div>
                    <div class="comment-container" v-if="showReplyBox">
                        <form class="comment-form" action="#">
                            <button class="x-btn" @click="xOut" @submit.prevent="sendComment">X</button>
                            <label for="name">Name:</label><br>
                            <input v-model="name" type="name" id="name" name="name" placeholder="Anon"><br>
                            <label for="text">Comment:</label><br>
                            <textarea v-model="text" type="text" rows="10" cols="50" name="commentText" form="usrform" placeholder="Enter Comment Here..."></textarea> <br>
                            <button class="send-btn" @click="sendComment">Send</button>
                        </form>
                    </div>
                    <Comment v-for="c in animeFBData[index].comments" :key='c.commentID' :cArr='c' :actualArr='commentArr' :anime='anime'/>
                </li>
            </ul>
        </div>
    </div>
    
    
</template>

<script>
    import 'firebase/compat/auth'
    import 'firebase/compat/firestore'
    import Comment from '@/components/Comment.vue';
    import { arrayUnion } from 'firebase/firestore'
    import { userLoadAnimelist, incrementPostNo, getPostNum } from '@/firebase'
    import { getDB } from '@/firebase'
    let date = new Date();
    let postCount = 0;

    export default {
        data(){
            return {
                month: date.getMonth(),
                day: date.getDate(),
                year: date.getFullYear(),
                hour: date.getHours(),
                minutes: date.getMinutes(),
                showReplyBox: false,
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
            index: Number
        },
        methods: {
            async sendComment(e){
                e.preventDefault();
                var d = new Date();
                var postNo = 0
                if(this.name == ''){
                    this.name = 'Anon';
                }
                incrementPostNo()
                .then(() => {
                    
                    var tempCommentObj = {
                        commentName: this.name,
                        commentText: this.text,
                        commentID: getPostNum(),
                        commentMonth: d.getMonth(),
                        commentDay: d.getDate(),
                        commentYear: d.getFullYear(),
                        commentMinutes: ('0'+d.getMinutes()).slice(-2),
                        commentHours: ('0'+d.getHours()).slice(-2),
                    }
                    this.commentArr.push(tempCommentObj);
                    // this.database.comments.push(tempCommentObj)
                    // const list = await getAnimeList(this.anime.id)
                    // console.log(this.anime.id)
                    // const firebaseApp = firebase.initializeApp(config)
                    // const db = firebaseApp.firestore()

                    getDB().collection('anime-list').doc(this.anime.id).update({
                        // comments: {tempCommentObj}
                        comments: arrayUnion(tempCommentObj)
                    })
                    
                    this.text = ''
                    this.showReplyBox = false;
                })

                
                
            },
            xOut(){
                this.text = ''
                this.showReplyBox = false;
            },
            xOutComments(){
                this.showCommentThread = false;
            },
            addCounter(){
                postCount += 1;
                return postCount;
            }
        },
        components: {
            Comment
        }
    }
</script>

<style scoped>
    .thread-container{
        margin:0em;
        margin-bottom: 1em;
        padding:0em;
        background: #536985;
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
        border-radius: 7%;
        width:33%;
        max-width: 250px;
        padding:.5em;
        /* look at that vue jikan tutorial and see how he scaled images */
    }
    .reply-btn{
        color: white;
        padding:.5em 1em;
        border: none;
        margin-left:1em;
        border-radius:5px;
        background-color: #3d5a80;
    }
    .reply-btn:hover{
        cursor: pointer;
        background: #1a2636;
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
            border-radius: 20px;
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
            margin-left:12em;
            margin-right:12em;
        }
    }


</style>