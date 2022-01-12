angular
  .module("listaTelefonica")
  .factory("contatosAPI", function ($http, config) {
    var _getContatos = function () {
      return $http.get(config.baseUrl + "/contatos");
    };

    var _saveContatos = function (contato) {
      return $http.post(config.baseUrl + "/contato", contato);
    };
    var _getContato = function (id) {
      return $http.get(config.baseUrl + "/contato/id/" + id);
    }
    return {
      saveContatos: _saveContatos,
      getContatos: _getContatos,
      getContato: _getContato,
    };
  });
