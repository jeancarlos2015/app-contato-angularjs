angular.module('alert',[]);
angular.module('alert').directive('uiAlert', function () {
    return {
        templateUrl:"views/alert.html",
        replace:true,
        restrict: 'AE',
        scope: {
            // Quando as duas variáveis (escopo e diretiva) forem iguais, é possível abreviar utilizando somente o @.
            title: '@',
            // faz o two-way data binding
            error: '=message'
        },
        transclude: true
    }
})