import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'


const config = {
  apiKey: "AIzaSyAdStdsN13aE_kGMoXSM78LJRQmPo1oynI",
  authDomain: "crown-db-530e1.firebaseapp.com",
  projectId: "crown-db-530e1",
  storageBucket: "crown-db-530e1.appspot.com",
  messagingSenderId: "849370387090",
  appId: "1:849370387090:web:c0dddf8d83782e31110c4b",
  measurementId: "G-JTNJBQB9LB",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return
    const userRef =  firestore.doc(`user/${userAuth.uid}`);
    
    const snapShot = await userRef.get();
   
    if(!snapShot.exists){
        const {displayName , email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
            
        } catch (error) {
            console.log('error creating user', error.message);
            
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;