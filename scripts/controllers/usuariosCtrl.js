'use strict';

angular.module('randomUserTest')
    .controller('UsuariosCtrl', function ($scope) {

    $scope.usuarios = [];

    $scope.homem = true;
    $scope.mulher = true;

    $scope.addUsuario = function(){
    	$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  nat: 'br',
		  success: function(data){
		  	if (!angular.isUndefined(data.results[0])) {
		  		$scope.usuarios.push(data.results[0]);
		  		$scope.$apply();
		  	}
		  }
		});
    }

    $scope.getFiltro = function(){
    	if ($scope.homem && $scope.mulher) {
            return '';
        }
        else if ($scope.homem) {
            return 'male';
        }
        else if ($scope.mulher){
            return 'female';
        }
        else{
            return 'x'
        }
    }

    $scope.filtroUsuarios = function (usuario) { 
        if ($scope.getFiltro() != '') {
            return usuario.gender === $scope.getFiltro(); 
        }
        return true;
    };
});