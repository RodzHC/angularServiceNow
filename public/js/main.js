angular
  .module("angularServiceNow", ["minhasDiretivas", "ngAnimate", "ngRoute"])
  .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.when("/fotos", {
      templateUrl: "partials/principal.html",
      controller: "FotosController"
    });
    $routeProvider.when("/fotos/new", {
      templateUrl: "partials/fotoCadastro.html",
      controller: "FotoCadastroController"
    });
    $routeProvider.when("/fotos/edit/:fotoId", {
      templateUrl: "partials/fotoCadastro.html",
      controller: "FotoCadastroController"
    });
    $routeProvider.otherwise({ redirectTo: "/fotos" });
  });
