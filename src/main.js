import { createApp, VueElement } from 'vue'
import App from './App.vue'
import router from './router'
import BodyScrollLock from '@/plugins/BodyScrollLock.js'
import { userLoadRandomList, deleteRandomList, userLoadAnimelist, getDB} from './firebase.js'


const week = ["Sundays", "Mondays", "Tuesdays", "Wednesdays", "Thursdays", "Fridays", "Saturdays"]
//refresh the random list
var a = userLoadRandomList();
setInterval(() => {
var dd = new Date();
deleteRandomList(a.value[0].id)
}, 86400000)


//check for new anime episode
var b = userLoadAnimelist();
setInterval(() => {
    var ad = new Date();
    if(ad.getHours() === 5){
        for(var i = 0; i < b.value.length; i ++){
            if(week[ad.getDay()] === b.value[i].animeListObj.broadcast.day){
                console.log(b.value[i].comments)
                getDB().collection('anime-list').doc(b.value[i].id).update({
                    comments: []
                })
            }
        }
    }
},3600000)

const app = createApp(App)
app.use(router)
app.use(BodyScrollLock)
app.mount('#app')
// createApp(App).use(router).use(BodyScrollLock).mount('#app')