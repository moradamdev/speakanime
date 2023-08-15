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
                    <a href="#" @click="goToComm" style="color:#ce5f44" >{{cArr.commentReply}}</a>
                    <p>{{cArr.commentText}}</p>
                </div>
                <button class="reply-comment-btn" @click="replyComment">Reply>></button>
            </div>
        </div>
        <div class="reply-container" v-if="showCommentReply">

            <div class="reply-copy">
                <h2 class="replying-to">-Replying to:</h2>
                <p class="header-copy">
                    <strong>Name:</strong> {{cArr.commentName}}
                    <strong class="p-num">Post No. </strong> {{cArr.commentID}}
                    <strong>Date:</strong> {{cArr.commentMonth + 1}}/{{cArr.commentDay}}/{{cArr.commentYear}}
                    <strong>Time:</strong> {{cArr.commentHours}}:{{cArr.commentMinutes}}
                </p>
                <p>{{cArr.commentText.substring(0,225)}}</p>
            </div>

            <div class="comment-reply" v-if="showCommentReply" v-scroll-lock="true">

                <form class="comment-form" action="#">
                    <label for="name"><strong>Name:</strong></label><br>
                    <input v-model="name" type="name" id="name" name="name" placeholder="Anon"><br>
                    <label for="text"><strong>Comment:</strong></label><br>
                    <textarea id="text-box" @reset="focusText" v-model="text" type="text" rows="10" cols="47" name="commentText" form="usrform" placeholder="Enter Comment Here..." autofocus></textarea> <br>
                    <button class="x-btn" @click="xOut">Close</button>
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
                if(this.text == ''){
                    alert("Please enter your comment.");
                    return;
                }
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
                    if(comm[i].style.backgroundColor == 'rgb(237, 228, 153)'){
                        comm[i].style.backgroundColor = 'var(--background-col)'
                    }
                    if(tempPostNo == this.cArr.commentReplyNum){
                        comm[i].scrollIntoView({
                            block: 'center',
                            behavior: 'smooth',
                            inline: 'start'
                        });
                        comm[i].style.backgroundColor = '#ede499';
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
        background:var(--background-col);
        border-style:solid;
        border-color: #255957;
        border-radius: 1em; /* again, 0em for desktop */
    }
    .reply-comment-btn{
        color: var(--background-col);
        border-radius: .5em;
        padding:.3em 1em;
        border: none;
        margin-top:1em;
        background-color: var(--lightBlue-col);


    }
    .reply-comment-btn:hover{
        cursor: pointer;
        background: #1a2636;
        color:white;
    }

    .x-btn{
        /* position: fixed; */
        /* right:20%; */
        /* font-size: 1em; */
        color: white;
        margin-right:15em;
        /* margin-top:1.1em; */
        /* margin-right: 6em; */
        padding:.2em .3em;
        border-style:solid;
        border-width: 3px;
        border-color: var(--text-col);
        background-color: var(--highlight-col);
    }
    .x-btn:hover{
        cursor:pointer;
        background:var(--darkhover-col);
        color:white;
    }
    .comment-form{
        position:relative;
        top:40%;
        /* margin:1.5em; */
        margin-top:1em;
        text-align: center;
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
        margin: auto;
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
    a{
        color:rgb(23, 23, 167);
    }
    .reply-container{
        background: rgba(0, 0, 0, 0.801);
        position: fixed;
        left:0%;
        top:0%;
        height:100%;
        width: 100%;
        padding-top:12vw;
        overflow: hidden;
        z-index: 9999;
    }
    .replying-to{
        color:#255957;
        /* background: #EEEBD3; */
        /* padding:.1em; */
        /* margin-right:1em; */
        /* margin-left:1em; */
        /* border-style:solid; */
        /* border-width: .24em; */
        /* border-bottom:0em; */
        /* border-color:#255957; */
    }
    .reply-copy{
        background: #EEEBD3;
        padding:1em;
        padding-bottom:2em;
        border-style:solid;
        border-width: .35em;
        border-color:#255957;
        /* border-top:0em; */
        margin-right:1.5em;
        margin-left:1.5em;
    }

    @media only screen and (min-width: 800px) {
        /* .replying-to{
            background: #485b74;
            padding:.2em;
            width:7em;
            margin:0em 5em;
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
        } */
        .reply-copy{
            margin:auto;
            width:60%;
        }
        .comment{
            margin-left: 3em;
            border-top-left-radius: 20px;
            border-bottom-right-radius: 20px;
            transition: background .5s ease-in-out;
        }
        @media only screen and (min-width: 1400px) {
            .container{
                display: flex;
            }
            .comment{
                border-radius: 0em;
                /* margin:auto; */
                max-width:78%;
            }
            .reply-copy{
                /* margin-left:31em;
                margin-right:31em; */
                margin:auto;
                width:40%;
            }
            .reply-container{
                padding-top:7em;
            }
        }
    }

</style>
