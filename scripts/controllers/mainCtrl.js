'use strict';

angular.module('randomUserTest')
    .controller('MainCtrl', function ($scope) {

    $scope.abas = [{
    	nome:'Aba 1', id:'tab1'
    },{
    	nome:'Aba 2', id:'tab2'
    },{
    	nome:'Aba 3', id:'tab3'}];

    $scope.mudaAba = function(id){
    	//Esconde o conteúdo das abas
    	$('section .container').children().hide();
    	
    	//Exibe somente a aba que foi clicada
    	$('#'+id+' .container').children().show();
    }

});