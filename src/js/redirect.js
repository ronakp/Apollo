var config = {
        apiKey: "AIzaSyAcA-bjaq78b3sjMBRXnN50--FNBoXjHQw",
        authDomain: "apollo-f12e0.firebaseapp.com",
        databaseURL: "https://apollo-f12e0.firebaseio.com",
        projectId: "apollo-f12e0",
        storageBucket: "apollo-f12e0.appspot.com",
        messagingSenderId: "429615290580"
      };

firebase.initializeApp(config);
var database = firebase.database();

var starCountRef = firebase.database().ref('login');
starCountRef.on('value', function(snapshot) {
  console.log(snapshot.val() + "check");
  if(snapshot.val() == 1)
  {
  window.location = "nextfile.html";
}
else {
  {
    console.log("emptiness");
  }
}
});
