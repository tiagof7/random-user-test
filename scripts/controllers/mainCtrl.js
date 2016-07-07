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
    	$('section .container').children().hide();
    	$('#'+id+' .container').children().show();
    }

});