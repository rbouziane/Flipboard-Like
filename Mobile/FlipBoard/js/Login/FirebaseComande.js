import React from 'react';
import Firebase from './FirebaseConect'

export class Login extends React.Component {

  constructor(props) {
    super (props)
  }

  Register = (email, password) => {
    try {
      Firebase.auth().createUserWithEmailandPassword(email, password)
    }
    catch (error) {
      console.error(error.toString(error))
    }
  }

  Conect = (email, password) => {
    try {
      Firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
      console.log(user)
    })
    }
    catch (error) {
      console.error(error.toString(error))
    }
  }
}

const Send = new Login();
export default Send;
