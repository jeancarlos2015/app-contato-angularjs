// Filter pode usar usado para formatar cada elemento de uma lista

angular.module("listaTelefonica").filter("name", function () {
    return function (input) {
        
        var listaDeNomes = input.split(" ");
        return listaDeNomes.map(function (nome) {
            return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        }).join(" ");
    
    }
})