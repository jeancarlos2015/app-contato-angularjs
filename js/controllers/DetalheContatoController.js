angular
  .module("listaTelefonica")
  .controller(
    "DetalheContatoCrtl",
    function ($scope, contato, $routeParams) {
       $scope.app = "Detalhes do Contato";
       $scope.contato = contato.data;
    }
  );
