'use strict';

angular.module('randomUserTest')
    .controller('OrdemBlocoCtrl', function ($scope) {

    $scope.trocarOrdem = function(){
    	//A função get().reverse() do JQuery inverte uma lista e a função append adiciona a lista novamente ao elemento de id "blocos"
    	$('#blocos').append($('.bloco').get().reverse());
    }

});