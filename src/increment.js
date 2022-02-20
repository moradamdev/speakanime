import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const db = firebase.firestore();

const increment = firebase.firestore.FieldValue.increment(1);

const storyRef = db.collection('post-num').doc('WatsK5jPuUlx2MZTTuat');

storyRef.update({count: increment})