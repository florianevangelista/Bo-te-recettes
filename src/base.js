import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCR8TsGS_oe7baJQO_pIN5KEqGIDGVAUKc",
  authDomain: "boite-recette-f41d7.firebaseapp.com",
  databaseURL: "https://boite-recette-f41d7.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
