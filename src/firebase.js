import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { ref, onUnmounted } from 'vue'
import { onSnapshot, collection, query, orderBy, doc, deleteDoc, where, getDocs } from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyB-qvS96fHqVoBnxYSB9WlQt_Ran5zPdYs",
  authDomain: "speakanime.firebaseapp.com",
  projectId: "speakanime",
  storageBucket: "speakanime.appspot.com",
  messagingSenderId: "254335725853",
  appId: "1:254335725853:web:c4806e2c9f7418938b71f4",
  measurementId: "G-NRKMZVJMB2"
}

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const animelistCollection = db.collection('anime-list');
const randomlistCollection = db.collection('random-list');
const toplistCollection = db.collection('top-list');
const reclistCollection = db.collection('rec-list');

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
export const getTopColl = () => {
    return toplistCollection;
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
export const createTopList = toplist => {
    return toplistCollection.add(toplist)
}

export const getAnimeList = async id => {
    const animelist = await animelistCollection.doc(id).get()
    return animelist.exists ? animelist.data() : null
}

export const deleteAnimeList = id => {
    return animelistCollection.doc(id).delete()
}
export const deleteRandomList = async id => {
    const q = query(collection(db, 'anime-list'), where('animeListObj.broadcast.day', '==' ,'Fridays'))
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docs) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(docs.id, " => ", docs.data());
        deleteDoc(doc(db, "anime-list", docs.id));
        });
    // for(var i = 0; i < db.collection('random').length; i ++){
    //     console.log(i)
    // }
    // deleteDoc(doc(db, "random-list", id));
    // await console.log(db.collection('random-list').get())

}

export const deleteAnimeListByDay = async id => {
    const q = query(collection(db, 'anime-list'), where('animeListObj.broadcast.day', '==' ,id))
    const querySnapshot = await getDocs(q);
        querySnapshot.forEach((docs) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(docs.id, " => ", docs.data());
        deleteDoc(doc(db, "anime-list", docs.id));
        });
    // for(var i = 0; i < db.collection('random').length; i ++){
    //     console.log(i)
    // }
    // deleteDoc(doc(db, "random-list", id));
    // await console.log(db.collection('random-list').get())

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
export const userLoadRandomList = () => {
    // const collectionRandomRef = collection(db, "random-list")

    const randomlist = ref([])
    const close = randomlistCollection.onSnapshot((snapshot) => {
        randomlist.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    })
    onUnmounted(close)
    return randomlist

}

export const userLoadRecList = () => {

    const reclist = ref([])
    const close = reclistCollection.onSnapshot((snapshot) => {
        reclist.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    })
    onUnmounted(close)
    return reclist

}

export const userLoadAnimelist = () => {
    const collectionRef = collection(db, "anime-list")
    const q = query(collectionRef, orderBy("timeStamp", "desc"))

    const animelist = ref([])
    const close = onSnapshot(q, (snapshot) => {
        animelist.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    })
    onUnmounted(close)
    // console.log(animelist)
    return animelist

}

export const userLoadAnimelistValue = () => {
    const collectionRef = collection(db, "anime-list")
    const q = query(collectionRef, orderBy("timestamp", "desc"))

    const animelist = ref([])
    const close = onSnapshot(q, (snapshot) => {
        animelist.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        // console.log(animelist.value)
        // return animelist.value
    })

    onUnmounted(close)
    return animelist

}

export const userLoadToplist = () => {
    const collectionRef = collection(db, "top-list")
    const q = query(collectionRef, orderBy("score", "desc"))

    const toplist = ref([])
    const close = toplistCollection.onSnapshot(q, (snapshot) => {
        toplist.value = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    })
    onUnmounted(close)
    // console.log(toplist)
    return toplist

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