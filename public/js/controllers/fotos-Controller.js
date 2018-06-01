angular
  .module("angularServiceNow")
  .controller("FotosController", function($scope, $http) {
    $scope.fotos = [];
    $scope.filtro = "";
    $scope.mensagem = "";

    $http
      .get("v1/fotos")
      .success(function(retorno) {
        $scope.fotos = retorno;
      })
      .error(function(error) {
        console.log(error);
      });

    $scope.remover = function(foto) {
      console.log("remover foto:");
      console.log(foto);
      $http
        .delete("v1/fotos/" + foto._id)
        .success(function() {
          var indiceFoto = $scope.fotos.indexOf(foto); // obtem o índice da foto que está sendo removida.
          $scope.fotos.splice(indiceFoto, 1); // remove um elemento da lista de fotos de acordo com o índice da foto removida.
          $scope.mensagem =
            "Foto " + foto.titulo + " foi removida com sucesso.";
        })
        .error(function(erro) {
          console.log(erro);
          $scope.mensagem = "Não foi possível remover a foto " + foto.titulo;
        });
    };
  });
