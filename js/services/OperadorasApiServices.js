angular.module("listaTelefonica").factory("OperadorasAPI", function ($http, config) {
    var _getOperadoras =   function () {
      return $http.get(config.baseUrl + "/operadoras");
    }
  
    var _saveOperadora =   function (contato) {
      return $http.post(config.baseUrl + "/operadora", contato);
    }
    return {
      saveOperadora: _saveOperadora,
      getOperadoras: _getOperadoras
    }
  })