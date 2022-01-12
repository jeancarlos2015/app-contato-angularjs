angular.module("listaTelefonica").config(function ($routeProvider) {
  $routeProvider.when("/contatos", {
    templateUrl: "views/contatos.html",
    controller: "listaTelefonicaCtrl",
    resolve: {
      contatos: function (contatosAPI) {
        return contatosAPI.getContatos();
      },
      operadoras: function (operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }

    }
  });
  $routeProvider.when("/novoContato", {
    templateUrl: "views/novoContato.html",
    controller: "novoContatoCtrl",
    resolve:{
      operadoras: function (operadorasAPI) {
        return operadorasAPI.getOperadoras();
      }
    }
  });
  $routeProvider.when("/detalhesContato/:id", {
    templateUrl: "views/detalhesContato.html",
    controller: "DetalheContatoCrtl",
    resolve: {
      contato: function (contatosAPI, $route) {
        return contatosAPI.getContato($route.current.params.id);
      }
    }
  });
});
