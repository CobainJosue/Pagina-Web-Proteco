document.getElementById('btn-github').addEventListener('click',githubSignin);


function githubSignin() {
   
   if(!firebase.auth().currentUser){
   var providerGithub = new firebase.auth.GithubAuthProvider();
   providerGithub.addScope('repo');
   firebase.auth().signInWithPopup(providerGithub)
   .then(function(result) {      
     $('#modalInicio').openModal();
      document.getElementById("MensajeBienvenida").innerHTML = "Te logeaste como: <b><u>" + result.user.displayName + "</u><b>";
   }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(error.code)
      console.log(error.message)
   });
}else{
   firebase.auth().signOut();
}
}