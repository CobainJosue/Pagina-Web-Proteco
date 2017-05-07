document.getElementById('btn-twitter').addEventListener('click',twitterSignin);

var provider = new firebase.auth.TwitterAuthProvider();

function twitterSignin() {
   firebase.auth().signInWithPopup(provider)
  .then(function(result) {
      var token = result.credential.accessToken;
     $('#modalInicio').openModal();
      document.getElementById("MensajeBienvenida").innerHTML = "Te logeaste como: <b><u>" + result.user.displayName + "</u><b>";
  
   }).catch(function(error) {
      console.log(error.code);
      console.log(error.message);
   });
}
