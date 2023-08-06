<template>
    <div class="thread-content">
        <img class="thread-img" :src="animeFBData[threadIndex].animeListObj.images.jpg.image_url" alt="thread image">
        <div class="thread-text">
            <h3>{{animeFBData[threadIndex].animeListObj.title}} Thread</h3>
            <p>Discuss the newest episode of {{animeFBData[threadIndex].animeListObj.title_english || animeFBData[threadIndex].title}} down below.</p>
        </div>

    </div>
    <div class="container">
        <div class="comments">
            <h1 style="color:var(--text-col); margin-left:.5em;">Comments</h1>
            <div class="close-thread-btn">
                <button class="reply-btn" @click="showReplyBox = !showReplyBox">Reply>></button>
            </div>
            <div class="comment-d">
                <div class="comment-container" v-if="showReplyBox">
                    <form class="comment-form" action="#">
                        <button class="x-btn" @click="xOut">X</button> <br>
                        <label for="name"><strong>Name:</strong></label><br>
                        <input v-model="name" type="name" id="name" name="name" placeholder="Anon"><br>
                        <label for="text"><strong>Comment:</strong></label><br>
                        <textarea v-model="text" type="text" rows="10" cols="50" name="commentText" form="usrform" placeholder="Enter Comment Here..."></textarea> <br>
                        <button class="send-btn" @click="sendComment">Send</button>
                    </form>
                </div>
                <ul>
                    <li class="comment-list" >
                        <Comment v-for="c in animeFBData[threadIndex].comments" :key='c.commentID' :cArr='c' :actualArr='animeFBData[threadIndex].comments' :docNum='databaseDoc' :listType='"anime-list"'/>
                    </li>
                </ul>
            </div>
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
            if(this.text == ''){
                alert("Please enter your comment.");
                return;
            }
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
        margin-top:6em;
    }
    .thread-text{
        padding: 1em 0em;
    }
    .reply-btn{
        color: white;
        padding:.25em 1em;
        border: none;
        margin-left:2em;
        margin-top:-.25em;
        border-radius:5px;
        background-color: var(--lightBlue-col);
    }
    .reply-btn:hover{
        cursor: pointer;
        background: var(--darkhover-col);
    }
    .x-btn{
        font-size: 1em;
        color: white;
        margin-top:1.1em;
        margin-left: 75%;
        padding:.2em .3em;
        border-style:solid;
        border-width: 3px;
        border-color: var(--text-col);
        background-color: var(--highlight-col);
    }
    .x-btn:hover{
        cursor:pointer;
        background:rgb(255, 48, 48);
        color:white;
    }
    .comment-container{
        margin:auto;
        text-align: center;
        width:100%;

    }
    .comment-form{
        margin:auto;
        background-color: rgba(0, 0, 0, 0.356);
        text-align: center;
        padding-bottom:1em;
        padding-top: 1em;
    }

    label{
        text-align: left;
        color:var(--background-col);

    }
    input{
        border-style: solid;
        border-color: var(--text-col);
        border-width:3px;
        padding:.3em;
        background-color: var(--background-col);

    }
    textarea{
        border-style: solid;
        border-color: #255957;
        border-width:3px;
        padding:.5em;
        background-color: var(--background-col);
        /* white-space: pre-wrap; */
    }
    .send-btn{
        background: var(--lightBlue-col);
        color: var(--background-col);
        border-style: solid;
        border-color: var(--text-col);
        border-width: 3px;
        padding:.5em 2em;

    }
    .send-btn:hover{
        cursor:pointer;
        background: var(--darkhover-col);
        color:white;
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

    @media only screen and (min-width: 1500px) {
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
            margin-top:3.6em;
            padding-left: 19.5em;
        }

        .container{
            padding-left: 19.5em;
            /* margin-top:0em; */
        }
        .comment-list{
            margin-left:-22em;
        }


    }

    @media only screen and (min-width: 1500px) {

    }
</style>
