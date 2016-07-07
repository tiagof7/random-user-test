'use strict';

angular.module('randomUserTest')
    .controller('UsuariosCtrl', function ($scope) {

    $scope.usuarios = [];

    $scope.homem = true;
    $scope.mulher = true;

    $scope.addUsuario = function(){
        //Descomentar caso queira exibir um loader enquanto a requisição não retorna
        //$('body').addClass("loading");

        //Requisição da API Ramdomuser
    	$.ajax({
		  url: 'https://randomuser.me/api/',
		  dataType: 'json',
		  nat: 'br',
		  success: function(data){
            //Caso a API retorne um error, o mesmo será exibido em um alerta
            if (data.error) {
                alert(data.error);
            }
            //Retorna um JSON que é inserido na lista de usuários
		  	if (!angular.isUndefined(data.results[0])) {
		  		$scope.usuarios.push(data.results[0]);
		  		$scope.$apply();

                //$('body').removeClass("loading");
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
    }
});