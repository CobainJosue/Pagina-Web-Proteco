(function(){
	'use strict';
	angular
	.module("myApp",[])		//El segundo parametro son las dependencias a usar (firebase, para api's, etc)
	.controller("cursosCtrl",cursosCtrl);
	function cursosCtrl(){
		var cursos = this;

		cursos.info = [
						{ 'id':'C Basico', 'imagen':'img/c.png' },
						{'id':'C Intermedio','imagen':'img/c.png'},
						{'id':'C Avanzado','imagen':'img/c.png'},
						{'id':'Java Basico','imagen':'img/java.png'},
						{'id':'Java Intermedio','imagen':'img/java.png'},
						{'id':'Java Avanzado','imagen':'img/java.png'},
						{'id':'C ++ Basico','imagen':'img/cmasmas.png'},
						{'id':'C ++ Intermedio', 'imagen':'img/cmasmas.png'},
						{'id':'C ++ Avanzado', 'imagen':'img/cmasmas.png'},
						{'id':'Matlab Basico','imagen':'img/matlab.png'},
						{'id':'Matlab Intermedio','imagen':'img/matlab.png'},
						{'id':'Matlab Avanzado','imagen':'img/matlab.png'},
						{'id':'Python Basico','imagen':'img/python.png'},
						{'id':'Python Intermedio','imagen':'img/python.png'},
						{'id':'Python Avanzado','imagen':'img/python.png'},
						{'id':'Inteligencia Artificial Basico','imagen':'img/inteligencia.png'},
						{'id':'Inteligencia Artificial Intermedio','imagen':'img/inteligencia.png'},
						{'id':'Inteligencia Artificial Avanzado','imagen':'img/inteligencia.png'},
						{'id':'Raspberry Pi','imagen':'img/raspberry.png'},
						{'id':'Raspberry Pi','imagen':'img/raspberry.png'},
						{'id':'Raspberry Pi','imagen':'img/raspberry.png'},
					];
	}
})();

$(document).ready(function(){
	$(".dropdown-button").dropdown();
	$('.button-collapse').sideNav();
});

$(document).ready(function(){
      $('.parallax').parallax();
    });

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });


$('.modal-trigger').modal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      inDuration: 300, // Transition in duration
      outDuration: 200, // Transition out duration
      startingTop: '4%', // Starting top style attribute
      endingTop: '10%', // Ending top style attribute
      ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
        alert("Ready");
        console.log(modal, trigger);
      },
      complete: function() { alert('Closed'); } // Callback for Modal close
    }
  );
