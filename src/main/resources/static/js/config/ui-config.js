
angular.module("homeModule", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider.when('/about',{
            templateUrl: './html/home.html'
        }).otherwise({
            redirectTo: '/'
        })
    });
