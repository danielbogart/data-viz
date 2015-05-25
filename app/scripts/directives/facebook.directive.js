angular.module('dataVizApp').directive('fbLike', ['$window', function ($window) {
    return {
        restrict: 'A',
        template: '<span class="fb-share-button" data-href="http://data.dbogs.com" data-layout="button"></span>',
        link: function (scope, element, attrs) {
            scope.$watch(function () { return !!$window.FB; },
                function (fbIsReady) {
                    if (fbIsReady) {
                        $window.FB.XFBML.parse(element.parent()[0]);
                    }
                });
        }
    };
}]);