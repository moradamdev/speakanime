<template>
    <div class="thread-content">
        <img class="thread-img" :src="animeFBData[threadIndex].animeListObj.images.jpg.image_url" alt="thread image">
            <div class="thread-text">
                <div id="thread-sidebyside">
                    <h3 class="title-text">{{animeFBData[threadIndex].animeListObj.title}} Thread</h3>
                    <a class="mal-text" :href=animeFBData[threadIndex].animeListObj.url target="_blank">[MAL]</a>
                </div>
                <p class="discuss">Discuss the newest episode of {{ animeFBData[threadIndex].animeListObj.title_english || animeFBData[threadIndex].animeListObj.title }} down below.</p>
            </div>
    </div>
    <div class="container">
        <div class="comments">
            <h1 style="color:var(--text-col); margin-left:.5em;">Comments</h1>
            <div class="close-thread-btn">
                <button class="reply-btn" @click="showReplyBox = !showReplyBox">Reply>></button>
            </div>
            <div class="comment-d">
                <div class="comment-container" v-if="showReplyBox" v-scroll-lock="true">
                    <form class="comment-form" action="#">
                        <label for="name"><strong>Name:</strong></label><br>
                        <input v-model="name" type="name" id="name" name="name" placeholder="Anon"><br>
                        <label for="text"><strong>Comment:</strong></label><br>
                        <textarea v-model="text" type="text" rows="10" cols="47" name="commentText" form="usrform" placeholder="Enter Comment Here..."></textarea> <br>
                        <div class="send-close">
                            <button class="x-btn" @click="xOut">Close</button> <br>
                            <button class="send-btn" @click="sendComment">Send</button>
                        </div>
                    </form>
                </div>
                <ul>
                    <li class="comment-list" >
                        <Comment v-for="c in animeFBData[threadIndex].comments" :key='c.commentID' :cArr='c' :actualArr='animeFBData[threadIndex].comments' :docNum='databaseDoc' :listType='"anime-list"'/>
                    </li>
                </ul>
            </div>
        </div>
        <div class="bottom-of-page" style="visibility: hidden; padding-bottom: 15em;">Bottom</div>
        <div id="to-top">
            <a href="#">Go to top.</a>
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

<style scoped src="../assets/styles/thread.css">

</style>
