angular
  .module("listaTelefonica")
  .factory("ContatosAPI", function ($http, config) {
    var _getContatos = function () {
      return $http.get(config.baseUrl + "/contatos");
    };

    var _saveContatos = function (contato) {
      return $http.post(config.baseUrl + "/contato", contato);
    };
    return {
      saveContatos: _saveContatos,
      getContatos: _getContatos,
    };
  });
