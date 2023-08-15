<template>
    <h1>Contact</h1>
    <div class="form">
        <form class="comment-form" action="#">
            <label for="name">Name:</label><br>
            <input v-model="name" type="name" name="name" id="name" required><br>
            <label for="Message">Message:</label><br>
            <textarea v-model="text" type="text" name="Message" id="messageid" cols="70" rows="10"></textarea>
            <br>
            <button type="submit" @click="sendMessage">SUBMIT</button>
        </form>
        <h3>Or you could send me a message on twitter <a href="https://twitter.com/abajabajuba">here</a></h3>
    </div>

</template>

<script>
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { arrayUnion } from 'firebase/firestore'
import { getDB } from '@/firebase'
import { serverTimestamp } from 'firebase/firestore'
let date = new Date();

export default {
    data(){
        return {
            name: '',
            text: '',
        }
    },
    methods:{
        sendMessage(e){
            e.preventDefault();
            if(this.text == '' || this.name == ''){
                alert("Please enter something.");
                return;
            }else{
                var tempContactObj = {
                    contactName: this.name,
                    contactText: this.text,
                    contactTime: date
                }
                getDB().collection('contact').doc('6vERNobFnDR4snRHg82O').update({
                    contact: arrayUnion(tempContactObj)
                })
                this.text = ''
                this.name = ''
                //6vERNobFnDR4snRHg82O
            }

        }
    }
}

</script>

<style scoped>
    h1{
        display: block;
        /* position: relative; */
        width: 50%;
        margin: auto;
        margin-top: 3em;
        text-align: center;
    }
    h3{
        margin-top: 2em;
    }
    .form {
        display: block;
        text-align: center;

    }
    input{
        border: 2px solid var(--text-col);
    }
    textarea{
        border: 2px solid var(--text-col);
        width:90%;
    }
    button{
        border: 2px solid var(--text-col);
    }

@media only screen and (min-width: 800px){/* 1400 for everything instead of 1500*/

    .form {
        height: calc(100vh - 50px);
        position: static;
        width: 100%;
        display: block;
        border-style: solid;
        border-width: thick;
        border-top: 0;
        border-left: 0;
        border-right: 0;
        border-bottom: 50px solid;
        border-color: var(--text-col);
    }

    form {
        display: inline-block;
        text-align: left;
    }
    input {
        outline: none;
        border: solid;
        border-width: thick;
        border-top: none;
        border-left: none;
        border-color: var(--text-col);
    }

    textarea {
        font-size: 14pt;
        outline: none;
        height: calc(40vh - 60px);
        width: 35em;
        border: solid;
        border-top: none;
        border-left: none;
        border-width: thick;
        border-color: var(--text-col);
        resize: none;
    }

    button {
        font-size: 1em;
        letter-spacing: 2px;
        display: flex;
        text-align: center;
        background: white;
        color: var(--text-col);
        border-style: solid;
        border-width: thick;
        border-top: none;
        border-left: none;
        border-color: var(--text-col);
        padding: 0.5em 1.5em;
    }
    button:hover {
        background: #acacac;
        border-color: #acacac;
        color: white;
    }
}
</style>