angular
  .module("listaTelefonica")
  .controller(
    "DetalheContatoCrtl",
    function ($scope, contato, $routeParams) {
       $scope.app = "Lista Telefônica";
       $scope.contato = contato.data;
    }
  );
