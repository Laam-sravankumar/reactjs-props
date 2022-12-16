import firebase from "firebase"

const config={
	apiKey: "AIzaSyC_KKpkSTUbvOymLbDH-S0tE0bfxVXENgg",
  	authDomain: "auth-a0871.firebaseapp.com",
  	projectId: "auth-a0871",
  	storageBucket: "auth-a0871.appspot.com",
 	messagingSenderId: "59069588094",
  	appId: "1:59069588094:web:f472b61c811804a8dbee2f"
}

firebase.initializeApp(config);
export default firebase;