(function(){
	'use strict';
	angular
	.module("myApp",[])		//El segundo parametro son las dependencias a usar (firebase, para api's, etc)
	.controller("cursosCtrl",cursosCtrl);
	function cursosCtrl(){
		var cursos = this;

		cursos.id = [{'id':'C Basico':}
						{'id': 'C Intermedio'}
										]
	}
})();

$(document).ready(function(){
	$(".dropdown-button").dropdown();
	$('.button-collapse').sideNav();
});

