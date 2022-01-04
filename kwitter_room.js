// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCwIKh6NoPQc7ssecT5u-1HTaxaL8Z2gCU",
      authDomain: "kwitter-whjr-eb865.firebaseapp.com",
      projectId: "kwitter-whjr-eb865",
      storageBucket: "kwitter-whjr-eb865.appspot.com",
      messagingSenderId: "906224588292",
      appId: "1:906224588292:web:96028a534630cf01f18751"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
