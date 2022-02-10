import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { ref, onUnmounted } from 'vue'

const config = {
  apiKey: "AIzaSyB-qvS96fHqVoBnxYSB9WlQt_Ran5zPdYs",
  authDomain: "speakanime.firebaseapp.com",
  projectId: "speakanime",
  storageBucket: "speakanime.appspot.com",
  messagingSenderId: "254335725853",
  appId: "1:254335725853:web:c4806e2c9f7418938b71f4",
  measurementId: "G-NRKMZVJMB2"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const commentCollection = db.collection('comments')
const animelistCollection = db.collection('anime-list')

export const createComment = comment => {
    return commentCollection.add(comment)
}

export const getComment = async id => {
    const comment = await commentCollection.doc(id).get()
    return comment.exists ? comment.data() : null
}

export const createAnimeList = animelist => {
    return animelistCollection.add(animelist)
}

export const getAnimeList = async id => {
    const animelist = await animelistCollection.doc(id).get()
    return animelist.exists ? animelist.data() : null
}

export const userLoadComments = () => {
    const comments = ref([])
    const close = commentCollection.onSnapshot(snapshot => {
        comments.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return comments
}
export const userLoadAnimelist = () => {
    const animelist = ref([])
    const close = animelistCollection.onSnapshot(snapshot => {
        animelist.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return animelist
}