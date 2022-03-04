<template>
    <div class="thread-content">
        <img class="thread-img" :src="animeFBData[threadIndex].animeListObj.images.jpg.image_url" alt="thread image">
        <div class="thread-text">
            <h3>{{animeFBData[threadIndex].animeListObj.title}} Thread</h3>
            <p>Discuss the newest episode of {{animeFBData[threadIndex].animeListObj.title_english || animeFBData[threadIndex].title}} down below.</p>
        </div>
        
    </div>

    <div class="comments">
        <h1 style="color:white">Comments</h1>
        <div class="comment-d">
            <ul>
                <li class="comment-list" >
                    <div class="close-thread-btn">
                        <button class="x-btn-com" @click="showReplyBox = !showReplyBox">Reply>></button>
                    </div>
                    <div class="comment-container" v-if="showReplyBox">
                        <form class="comment-form" action="#">
                            <button class="x-btn" @click="xOut">X</button>
                            <label for="name">Name:</label><br>
                            <input v-model="name" type="name" id="name" name="name" placeholder="Anon"><br>
                            <label for="text">Comment:</label><br>
                            <textarea v-model="text" type="text" rows="10" cols="50" name="commentText" form="usrform" placeholder="Enter Comment Here..."></textarea> <br>
                            <button class="send-btn" @click="sendComment">Send</button>
                        </form>
                    </div>
                    <Comment v-for="c in animeFBData[threadIndex].comments" :key='c.commentID' :cArr='c' :actualArr='animeFBData[threadIndex].comments' :docNum='databaseDoc' :listType='"anime-list"'/>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import Comment from '@/components/Comment.vue';
import { computed } from 'vue'
import { userLoadAnimelist, incrementPostNo, getPostNum } from '@/firebase'
import { useRoute } from 'vue-router'
import { getDB } from '@/firebase'
import { arrayUnion } from 'firebase/firestore'


// const route = useRoute()

export default {
    setup(){
        // const route = useRoute()
        // const threadIndex = computed(()=> route.params.id)
    },
    data(){
        return{
            route: useRoute(),
            animeFBData: userLoadAnimelist(),
            // threadIndex: computed(()=> this.route.params.id[0])//this causes a problem with double digits make it go until '-'
            threadIndex: computed(()=> this.route.params.id.substring(0, this.route.params.id.indexOf('-'))),
            databaseDoc: computed(()=> this.route.params.id.substring(this.route.params.id.indexOf('-') + 1)),
            showReplyBox: false,
            name: '',
            text: '',
            commentArr:[
                {
                    commentName: 'SpeakAni Bot',
                    commentText: 'Keep discussion civil please.',
                    commentID: 0,
                    commentMonth: 0,
                    commentDay: 0,
                    commentYear: 0,
                    commentMinutes: 0,
                    commentHours: 0
                }
            ]
            
        }
    },
    methods:{
        async sendComment(e){
            // e.preventDefault();
            var d = new Date();
            var id = this.threadIndex;
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

                getDB().collection('anime-list').doc(this.databaseDoc).update({
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
    },
    components: {
        Comment
    }
}
</script>

<style scoped>
    .thread-img{
        border-radius: 7%;
        width:33%;
        padding:.5em;
    }
    .header-text:strong{
        font-weight: bold;
    }
    .thread-content{
        display:flex;
        margin:0em;
    }
    .thread-text{
        padding: 1em 0em;
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
        white-space: pre-wrap;
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
    .comment-d{
        display: inline-block;
        /* max-width: 70%; */
    }
    .comment-list{
        list-style: none;
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
        .thread-img{
            margin-left: 3em;
            max-width: 250px;
        }
        .comments{
            margin:0em 3em;
        }
    }

    @media only screen and (min-width: 1400px) {
        .thread-container{
            margin-left:1em;
            margin-right:1em;
        }
        .close-thread-btn{
            display: flex;
            justify-content: left;
            /* margin-top:-1em; */
            margin-bottom:1em;
            margin-left:12em;
        }
        .thread-content{
            background:#314b6d57;
            border-bottom: 5px solid #293241;
        }
    }
</style>
