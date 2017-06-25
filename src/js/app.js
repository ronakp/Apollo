//var vinElem = document.getElementById('vin');
//gm.info.getVehicleConfiguration(function(data) {
//  vinElem.innerHTML = gm.info.getVIN();
//});

// var vinElem = document.getElementById('vin');
// gm.info.getVehicleConfiguration(function(data) {
//   vinElem.innerHTML = gm.info.getVIN();
// });

//firebase

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

function onSuccess(data){
    database.ref('user1/').set({
      d1: data
    });
    console.log(data);
}

function onFailure(){
    console.log("All signals in array are invalid");
}

//firebase ends


(function () {
    setTimeout(
      function()
      {
      document.getElementById("wrapper").style.display="none";
      document.getElementById("wrapper").style.backgroundRepeat="none";
    }, 5000);
}) ();


(function () {
    setTimeout(
      function()
      {
      document.body.style.backgroundImage = "url('../images/screen.jpg')";
      document.getElementById("demo").className = "show";
    }, 5001);
}) ();

var message = "Welcome to Apollo!"
var id;
function nortification()
{
  document.body.style.backgroundImage = "url('../images/screen-blur.jpg')";
  document.getElementById("nortification").className = "show";
  document.getElementById("speak-nortification").innerHTML = message;
id = gm.voice.startTTS(success, message);
function success()
{
  console.log(id);
}
}
