import Firebase from './FirebaseConfig'
import { AsyncStorage } from 'react-native'

export async function SignInFirebase(email, password) {
    try {
        return Firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (error) {
        console.error(error.toString(error))
    }
}

export async function SignOutFirebase() {
    try {
        return Firebase.auth().signOut();
    } catch (error) {
        console.error(error.toString(error))
    }
}

export async function SendNewName(name) {

  Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log(user.uid);
        Firebase.database().ref(`users/${user.uid}`).set({
          name: name
        }
      ).then(() => {
        console.log('INSERTED! ');
      }).catch((error) => {
        console.error(error.toString(error))
      });
        }
  });
}
