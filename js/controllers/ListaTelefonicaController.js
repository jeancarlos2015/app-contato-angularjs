angular
  .module("listaTelefonica")
  .controller(
    "listaTelefonicaCtrl",
    function ($scope, ContatosAPI, OperadorasAPI, serialGenerator) {
      $scope.app = "Lista Telefônica";
      $scope.contatos = [];
      $scope.operadoras = [];
      var carregarContatos = function () {
        ContatosAPI.getContatos().then(function (response) {
          $scope.contatos = response.data;
        }),
          (e) => {
            $scope.error = "Não foi possível carregar a lista de contatos";
          };
      };
      var carregarOperadoras = function () {
        OperadorasAPI.getOperadoras().then(function (response) {
          $scope.operadoras = response.data;
        }),
          (e) => {
            $scope.error = "Não foi possível carregar a lista de operadoras";
          };
      };
      $scope.selecionado = "selecionado";
     

      $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
          if (!contato.selecionado) return contato;
        });
      };

      $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato) {
          return contato.selecionado;
        });
      };
      $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
      };
      carregarContatos();
      carregarOperadoras();
    }
  );
