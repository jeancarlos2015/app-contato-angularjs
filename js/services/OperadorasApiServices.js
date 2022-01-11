angular.module("listaTelefonica").factory("OperadorasAPI", function ($http) {
    var _getOperadoras =   function () {
      return $http.get('http://localhost:4545/api/v1/operadoras');
    }
  
    var _saveOperadora =   function (contato) {
      return $http.post('http://localhost:4545/api/v1/operadora',contato);
    }
    return {
      saveOperadora: _saveOperadora,
      getOperadoras: _getOperadoras
    }
  })