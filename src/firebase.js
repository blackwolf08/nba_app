import * as firebase from 'firebase';


var config = {
    apiKey: "AIzaSyB09mG3lnvCcd9NeObsyZ-K78TxWq2kUX4",
    authDomain: "nba-fulls.firebaseapp.com",
    databaseURL: "https://nba-fulls.firebaseio.com",
    projectId: "nba-fulls",
    storageBucket: "",
    messagingSenderId: "549615348624",
    appId: "1:549615348624:web:b477daecf05c299b"
  };



firebase.initializeApp(config);

const firebaseDB = firebase.database();

const firebaseArticles= firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper=(snapshot)=>{
    const data=[];
    snapshot.forEach((childSnapshot)=>{
        data.push({
                    ...childSnapshot.val(),
                    id:childSnapshot.key
                })
    });
    return data;
}


export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseVideos,
    firebaseTeams,
    firebaseLooper

} 