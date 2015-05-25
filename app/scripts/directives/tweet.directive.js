angular.module('dataVizApp').directive('tweet', ['$window', function ($window) {
    return {
        restrict: 'A',
        template: '<a href="https://twitter.com/share" class="twitter-share-button" data-text="NFL all time heads up records for every team" data-via="daniel_bogart" data-count="none">Tweet</a>',
        link: function (scope, element, attrs) {
            scope.$watch(function () { return !!$window.twttr; },
                function (twttrIsReady) {
                    if (twttrIsReady) {
                        $window.twttr.widgets.load(element.parent()[0]);
                    }
                });
        }
    };
}]);