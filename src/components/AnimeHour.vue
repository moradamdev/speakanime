<template>
    <div class="thread-content">
        <img class="thread-img" :src="anime.randomListObj.images.jpg.image_url" alt="thread image">
        <div class="thread-text">
            <div id="thread-sidebyside">
            <h3>{{anime.randomListObj.title}} Thread</h3>
            <a class="mal-text" :href=anime.randomListObj.url target="_blank">[MAL]</a>
            </div>
            <p>Discuss the random anime: <span class="bold-text">{{anime.randomListObj.title_english || anime.randomListObj.title}} </span> down below.</p>
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
                        <Comment v-for="c in randomFBData[0].comments" :key='c.commentID' :cArr='c' :actualArr='randomFBData[0].comments' :docNum='randomFBData[0].id' :listType='"random-list"'/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="bottom-of-page" style="visibility: hidden; padding-bottom: 15em;">Bottom</div>
</template>


<script>
    import 'firebase/compat/auth'
    import 'firebase/compat/firestore'
    import { userLoadRandomList, incrementPostNo, getPostNum, deleteRandomList} from '@/firebase'
    import { getDB } from '@/firebase'
    import { arrayUnion } from 'firebase/firestore'
    import Comment from '@/components/Comment.vue';
    let date = new Date();

    export default {
        data(){
            return {
                month: date.getMonth(),
                day: date.getDate(),
                year: date.getFullYear(),
                hour: date.getHours(),
                minutes: date.getMinutes(),
                showReplyBox: false,
                randomFBData: userLoadRandomList(),
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
            doc: String,
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

                getDB().collection('random-list').doc(this.doc).update({
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
        // deleteRandom(){
        //     deleteRandomList(this.doc);
        // }
        },
        components: {
            Comment
        }

    }
</script>

<style scoped src="../assets/styles/thread.css">

</style>