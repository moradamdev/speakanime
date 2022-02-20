<template>
    <div class="container">
        <div class="comment">
            <div class="thread-header">
                <p class="header-text">
                    <strong>Name:</strong> {{cArr.commentName}}
                    <strong class="p-num">Post No. </strong> {{cArr.commentID}}
                    <strong>Date:</strong> {{cArr.commentMonth + 1}}/{{cArr.commentDay}}/{{cArr.commentYear}}
                    <strong>Time:</strong> {{cArr.commentHours}}:{{cArr.commentMinutes}}
                </p>
            </div>
            <div class="thread-content">
                <!-- <img class="thread-img" :src="anime.images.jpg.image_url" alt="thread image"> -->
                <div class="thread-text">
                    <a href="#" @click="goToComm">{{cArr.commentReply}}</a>
                    <!-- <a style="color:blue;">In reply to post no.{{cArr.commentReply}}</a> -->
                    <p>{{cArr.commentText}}</p>
                </div>
                <button class="reply-comment-btn" @click="replyComment" @submit.prevent="replyComment">Reply>></button>
            </div>
        </div>
        <div class="comment-reply" v-if="showCommentReply">
            <form class="comment-form" action="#">
                <button class="x-btn" @click="xOut" @submit.prevent="sendCommentReply">X</button>
                <label for="name">Name:</label><br>
                <input v-model="name" type="name" id="name" name="name" placeholder="Anonymous"><br>
                <label for="text">Comment:</label><br>
                <textarea v-model="text" type="text" rows="10" cols="50" name="commentText" form="usrform" placeholder="Enter Comment Here..."></textarea> <br>
                <button class="send-btn" @click="sendComment">Send</button>
            </form>
        </div>
    </div>
</template>

<script>
    import 'firebase/compat/auth'
    import 'firebase/compat/firestore'
    import { arrayUnion } from 'firebase/firestore'
    import { getDB, incrementPostNo, getPostNum } from '@/firebase'
    let date = new Date();

    export default{
        data(){
            return {
                showCommentReply: false,
                name: '',
                text: '',
                };
        },
        props: {
            cArr: Object, //object because its just one index of the array
            actualArr: Array,
            index: Number,
            anime: Object
        },
        methods:{
            replyComment(e){
                e.preventDefault();
                this.showCommentReply = !this.showCommentReply;
            },
            xOut(){
                this.text = '';
                this.showCommentReply = false;
            },
            async sendComment(e){
                e.preventDefault();

                const parser = new DOMParser();
                var d = new Date();
                if(this.name == ''){
                    this.name = 'Anon';
                }
                
                incrementPostNo()
                .then(() => {
                    var tempCommentObj = {
                        commentName: this.name,
                        commentReply: "-Replying to post no." + this.cArr.commentID,
                        commentText: this.text,
                        commentID: getPostNum(),
                        commentMonth: d.getMonth(),
                        commentDay: d.getDate(),
                        commentYear: d.getFullYear(),
                        commentMinutes: ('0'+d.getMinutes()).slice(-2),
                        commentHours: ('0'+d.getHours()).slice(-2),
                        commentReplyNum: this.cArr.commentID,
                        }
                    this.actualArr.push(tempCommentObj);
                    getDB().collection('anime-list').doc(this.anime.id).update({
                        // comments: {tempCommentObj}
                        comments: arrayUnion(tempCommentObj)
                    })
                    this.text = ''
                    this.showCommentReply = false;
                })
                
            },
            goToComm(e){
                e.preventDefault();

                var comm = document.querySelectorAll(".comment");
                for(var i = 0; i < comm.length; i ++){
                    // console.log(comm[i].childNodes[0].childNodes[0])
                    var tempPostNo = comm[i].lastChild.previousSibling.childNodes[0].childNodes[3].textContent;
                    // console.log(tempPostNo)
                    if(tempPostNo == this.cArr.commentReplyNum){
                        comm[i].scrollIntoView({
                            block: 'start',
                            behavior: 'smooth',
                            inline: 'start'
                        });
                    }
                }
            } 
        }
    }
</script>

<style scoped>
    .comment{
        padding: 1em 1em;
        margin: .5em 1em;
        background:#485b74;
    }
    .reply-comment-btn{
        color: #272f3a;
        padding:.2em .3em;
        border: none;
        margin-top:1em;
        border-radius:5px;
        background-color: #9099a3;
        
        
    }
    .reply-comment-btn:hover{
        cursor: pointer;
        background: #1a2636;
        color:white;
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
        position:relative;
        top:40%;
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
    a{
        color:rgb(23, 23, 167);
    }
    
</style>
