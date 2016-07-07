'use strict';

angular.module('randomUserTest')
    .controller('OrdemBlocoCtrl', function ($scope) {

    $scope.trocarOrdem = function(){
    	$('#blocos').append($('.bloco').get().reverse());
    }

});