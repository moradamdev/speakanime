import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { ref, onUnmounted } from 'vue'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'

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
const animelistCollection = db.collection('anime-list')
const randomlistCollection = db.collection('random-list')

const numCollection = db.collection('post-count')
const postRef = collection(db, "post-count")
let truePostNum = 0

export const getDB = () =>{
    return db
}
export const getAniColl = () => {
    return animelistCollection;
}
export const getRandColl = () => {
    return randomlistCollection;
}



export const getComment = async id => {
    const comment = await animelistCollection.doc(id).get()
    return comment.exists ? comment.data() : null
}

export const createAnimeList = animelist => {
    return animelistCollection.add(animelist)
}
export const createRandomList = randomlist => {
    return randomlistCollection.add(randomlist)
}

export const getAnimeList = async id => {
    const animelist = await animelistCollection.doc(id).get()
    return animelist.exists ? animelist.data() : null
}

export const deleteAnimeList = id => {
    return animelistCollection.doc(id).delete()
}
export const deleteRandomList = id => {
    return randomlistCollection.doc(id).delete()
}


export const userLoadComments = () => {
    const collectionRef = collection(db, "anime-list")
    const q = query(collectionRef, orderBy("comments.commentID", "asc"))

    const comments = ref([])
    const close = animelistCollection.onSnapshot(q, (snapshot) => {
        comments.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
    onUnmounted(close)
    return comments
}

export const userLoadAnimelist = () => {
    const collectionRef = collection(db, "anime-list")
    const q = query(collectionRef, orderBy("timeStamp", "asc"))

    const animelist = ref([])
    const close = onSnapshot(q, (snapshot) => {
        animelist.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    })
    onUnmounted(close)
    return animelist
    
}
export const userLoadRandomList = () => {
    // const collectionRandomRef = collection(db, "random-list")

    const randomlist = ref([])
    const close = randomlistCollection.onSnapshot((snapshot) => {
        randomlist.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    })
    onUnmounted(close)
    return randomlist
    
}

export const incrementPostNo = async () =>{
    const increment = firebase.firestore.FieldValue.increment(1);

    // Document reference
    const countRef = numCollection.doc('WatsK5jPuUlx2MZTTuat');

    // Update read count
    countRef.update({ count: increment });
}
onSnapshot(postRef, (snapshot)=>{
    // postNumber.value = snapshot.docs[0].data()
    const postNumber = ref([])
    postNumber.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    truePostNum = postNumber.value[0].count
})

export const getPostNum = () => {
    console.log(truePostNum)
    return truePostNum
}