import Firebase from './FirebaseConfig'

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
