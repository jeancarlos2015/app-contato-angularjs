angular
  .module("listaTelefonica")
  .controller(
    "novoContatoCtrl",
    function ($scope, OperadorasAPI, serialGenerator, $location) {
      $scope.app = "Lista Telefônica";
      $scope.operadoras = [];
      var carregarOperadoras = function () {
        OperadorasAPI.getOperadoras().then(function (response) {
          $scope.operadoras = response.data;
        }),
          (e) => {
            $scope.error = "Não foi possível carregar a lista de operadoras";
          };
      };
      $scope.selecionado = "selecionado";
      $scope.adicionarContato = function (contato) {
        contato.serial = serialGenerator.generate();
        contato.data = new Date();
        $scope.contatos.push(angular.copy(contato));
        delete $scope.contato;
        $scope.contatoForm.$setPristine();
        $location.path("/contatos");
        // ContatosAPI.saveContatos(contato).then(
        //     function (response) {
        //         $scope.contatos.push(angular.copy(contato));
        //         delete $scope.contato;
        //         $scope.contatoForm.$setPristine();
        //         // carregarContatos();
        //     }
        // )
      };

 
      carregarOperadoras();
    }
  );
