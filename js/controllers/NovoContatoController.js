angular
  .module("listaTelefonica")
  .controller(
    "novoContatoCtrl",
    function ($scope, operadoras, $location, contatosAPI) {
      $scope.operadoras = operadoras.data;
      $scope.app = "Novo Contato Telefônico";
      $scope.adicionarContato = function (contato) {
        contatosAPI.saveContatos(contato).then(function (response) {
          $scope.contatos.push(angular.copy(contato));
          // delete $scope.contato;
          $scope.contatoForm.$setPristine();
          $location.path("/contatos");
        });
      };
    }
  );
