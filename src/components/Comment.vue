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
                    <a href="#" @click="goToComm" style=color:#ce5f44>{{cArr.commentReply}}</a>
                    <!-- <a style="color:blue;">In reply to post no.{{cArr.commentReply}}</a> -->
                    <p>{{cArr.commentText}}</p>
                </div>
                <button class="reply-comment-btn" @click="replyComment">Reply>></button>
            </div>
        </div>
        <div class="reply-container" v-if="showCommentReply">
            <h2 class="replying-to" style="color:white">-Replying to:</h2>
            <div class="reply-copy">
                <p class="header-copy">
                    <strong>Name:</strong> {{cArr.commentName}}
                    <strong class="p-num">Post No. </strong> {{cArr.commentID}}
                    <strong>Date:</strong> {{cArr.commentMonth + 1}}/{{cArr.commentDay}}/{{cArr.commentYear}}
                    <strong>Time:</strong> {{cArr.commentHours}}:{{cArr.commentMinutes}}
                </p>
                <p>{{cArr.commentText}}</p>
            </div>
            
            <div class="comment-reply" v-if="showCommentReply" v-scroll-lock="true">
                
                <form class="comment-form" action="#">
                    <button class="x-btn" @click="xOut">Close</button>
                    <label for="name">Name:</label><br>
                    <input v-model="name" type="name" id="name" name="name" placeholder="Anonymous"><br>
                    <label for="text">Comment:</label><br>
                    <textarea id="text-box" @reset="focusText" v-model="text" type="text" rows="10" cols="50" name="commentText" form="usrform" placeholder="Enter Comment Here..." autofocus></textarea> <br>
                    <button class="send-btn" @click="sendComment">Send</button>
                </form>
            </div>
        </div>
    </div>
    
</template>

<script>
    import 'firebase/compat/auth'
    import 'firebase/compat/firestore'
    import { arrayUnion } from 'firebase/firestore'
    import { getDB, incrementPostNo, getPostNum } from '@/firebase'

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
            docNum: String,
            listType: String
        },
        methods:{
            replyComment(e){
                // e.preventDefault();
                this.showCommentReply = !this.showCommentReply;
            },
            xOut(){
                this.text = '';
                this.showCommentReply = false;
            },
            focusText(){
                console.log(document.querySelectorAll('#text-box'))
            },
            async sendComment(e){
                const parser = new DOMParser();
                var d = new Date();
                if(this.name == ''){
                    this.name = 'Anon';
                }
                console.log(this.text)
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
                    getDB().collection(this.listType).doc(this.docNum).update({
                        // comments: {tempCommentObj}
                        comments: arrayUnion(tempCommentObj)
                    })
                    this.text = ''
                    this.showCommentReply = false;
                }).catch(e => {
                    console.log(e)
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
        position: fixed;
        right:5%;
        font-size: 1em;
        color: #272f3a;
        padding:.2em .3em;
        border: none;
        border-radius:5px;
        background-color: #9099a3;
    }
    .x-btn:hover{
        cursor:pointer;
        background:rgb(129, 129, 129);
        color:white;
    }
    .comment-form{
        position:relative;
        top:40%;
        text-align: center;
    }
    label{
        text-align: left;
        color:white;
    }
    input{
        border-radius:7px;
        padding:.3em;
    }
    textarea{
        border-radius:10px;
        padding:.5em;
        /* white-space: pre-wrap; */
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
    .reply-container{
        background: rgba(0, 0, 0, 0.596);
        position: fixed;
        left:0%;
        top:0%;
        height:100%;
        width: 100%;
        padding-top:16em;
    }
    .replying-to{
        background: #485b74;
        padding:.1em;
    }
    .reply-copy{
        background: #485b74;
        padding:1em;
        padding-bottom:2em;
    }

    @media only screen and (min-width: 800px) {
        .replying-to{
            background: #485b74;
            padding:.2em;
            width:7em;
            margin:0em 5em;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        }
        .reply-copy{
            background: #485b74;
            padding:1em;
            padding-bottom:2em;
            margin: 0em 7.5em;
            border-bottom-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-right-radius: 20px;
        }
        .x-btn{
            margin-top:1em;
            margin-right:5em;
        }
        .comment{
            border-top-left-radius: 20px;
            border-bottom-right-radius: 20px;
        }
        @media only screen and (min-width: 1400px) {
            .container{
                display: flex;
            }
            .replying-to{
                margin-left:16.65em;
            }
            .reply-copy{
                margin-left:25em;
                margin-right:25em;
            }
            .x-btn{
                margin-top:1em;
                margin-right:20em;
            }
        }
    }
    
</style>
