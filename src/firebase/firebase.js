import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDjuX5yYcOwRbdnDrHYG-roIJml0ZVsqk8",
    authDomain: "shark-store-99f81.firebaseapp.com",
    projectId: "shark-store-99f81",
    storageBucket: "shark-store-99f81.appspot.com",
    messagingSenderId: "258958000895",
    appId: "1:258958000895:web:2c9c0d168451dcbe6c82ca"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(e){
            console.log(e)
        }
    }

    return userRef;
}

export default firestore;
