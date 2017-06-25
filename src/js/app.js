//var vinElem = document.getElementById('vin');
//gm.info.getVehicleConfiguration(function(data) {
//  vinElem.innerHTML = gm.info.getVIN();
//});

// var vinElem = document.getElementById('vin');
// gm.info.getVehicleConfiguration(function(data) {
//   vinElem.innerHTML = gm.info.getVIN();
// });

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