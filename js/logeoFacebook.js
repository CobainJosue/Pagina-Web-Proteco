document.getElementById('btn-facebook').addEventListener('click',ingresoFacebook);

function ingresoFacebook(){
   if(!firebase.auth().currentUser){
      var provider = new firebase.auth.FacebookAuthProvider();
      provider.addScope('public_profile');
      firebase.auth().signInWithPopup(provider).then(function(result){
       $('#modalInicio').openModal();
      document.getElementById("MensajeBienvenida").innerHTML = "Te logeaste como: <b><u>" + result.user.displayName + "</u><b>";
         //alert(result.user.displayName);
      }).catch(function (error){
         var errorCode=error.code;
         var errorMessage = error.message;
         var erroremail= error.email;
         var credential = error.credential;
         if(errorCode === 'auth/account-exists-with-different-credential'){
            alert('Es el mismo usuario');
         }

      });



   }else{
      firebase.auth().signOut();
   }
}


