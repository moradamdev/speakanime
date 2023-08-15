<template>
    <div class="thread-content">
        <img class="thread-img" :src="recFBData[0].recListObj.images.jpg.image_url" alt="thread image">
        <div class="thread-text">
            <div id="thread-sidebyside">
            <h3>{{recFBData[0].recListObj.title}} Thread</h3>
            <a class="mal-text" :href=recFBData[0].recListObj.url target="_blank">[MAL]</a>
            </div>
            <p>Discuss our recommended anime: <span class="bold-text">{{recFBData[0].recListObj.title_english || recFBData[0].recListObj.title}}, </span> down below.</p>
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
                        <Comment v-for="c in recFBData[0].comments" :key='c.commentID' :cArr='c' :actualArr='recFBData[0].comments' :docNum='recFBData[0].id' :listType='"rec-list"'/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bottom-of-page" style="visibility: hidden; padding-bottom: 15em;">Bottom</div>
    <div id="to-top">
        <a href="#">Go to top.</a>
    </div>
</template>

<script>
// @ is an alias to /src
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import Comment from '@/components/Comment.vue';
import { getDB } from '@/firebase'
import { reactive } from 'vue'
import { userLoadRecList, incrementPostNo, getPostNum, } from '@/firebase'
import { serverTimestamp } from 'firebase/firestore'
import { arrayUnion } from 'firebase/firestore'
let date = new Date();

export default {
  components: {
    Comment
  },
  data(){
    return {
      recData: [],
      recFBData: userLoadRecList(),
      month: date.getMonth(),
        day: date.getDate(),
        year: date.getFullYear(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
        showReplyBox: false,
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
    }
  },
  methods: {
    async sendComment(e){
    // e.preventDefault();
    var d = new Date();
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

        getDB().collection('rec-list').doc(this.recFBData[0].id).update({
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
    }
}
</script>

<style scoped src="../assets/styles/thread.css">

</style>