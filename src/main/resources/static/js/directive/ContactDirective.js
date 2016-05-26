(function() {
    angular.module("contactModule", [])
        .directive("contactDirective", function(){
            return {
                restrict: "E",
                template: "<Strong>{{something}}</Strong>",
                controller : function($scope){
                   // var self = this;
                    $scope.something = "foobar";
                }
            };
        });
})();