(function(angular) {
    'use strict';

    var app = angular.module('puzzleApp', ['slidingPuzzle', 'wordSearchPuzzle']);

    // puzzle types
    var types = [
        { id: 'sliding-puzzle', title: 'Puzzles' },
        { id: 'word-search-puzzle', title: 'Pupiletras' },
        { id: 'form', title: 'Formulario'}
    ];

    /**
     * Config
     */
    app.config(function($routeProvider) {
        $routeProvider.when('/:type');
    });

    /**
     * Startup
     */
    app.run(function($rootScope, $route, $filter) {
        $rootScope.types = types;
        $rootScope.type = types[0].id;

        // set type on route change
        $rootScope.$on('$routeChangeSuccess', function(event, route) {
            $rootScope.type = ($filter('filter')(types, { id: route.params.type }).length ? route.params.type : types[0].id);
        });
    });

    /**
     * Advanced sliding puzzle controller
     */
    app.controller('slidingAdvancedCtrl', function($scope) {
        $scope.puzzles = [
            { src: './img/uuuuu.png', title: 'UNMSM', rows: 4, cols: 4 },
        ];
    });

    /**
     * Word search puzzle controller
     */
    app.controller('wordSearchCtrl', function($scope) {
        $scope.matrix = [
            ['N', 'I', 'G', 'O', 'O', 'G', 'E', 'U', 'J', 'T', 'A', 'N'],
            ['O', 'G', 'G', 'U', 'L', 'C', 'O', 'E', 'P', 'E', 'A', 'S'],
            ['I', 'N', 'N', 'A', 'M', 'N', 'O', 'R', 'I', 'M', 'E', 'C'],
            ['T', 'I', 'A', 'N', 'P', 'E', 'G', 'V', 'R', 'P', 'V', 'E'],
            ['C', 'T', 'T', 'G', 'D', 'R', 'L', 'I', 'C', 'L', 'I', 'O'],
            ['E', 'S', 'J', 'U', 'U', 'N', 'E', 'C', 'S', 'A', 'T', 'T'],
            ['J', 'E', 'O', 'L', 'L', 'E', 'I', 'N', 'A', 'T', 'C', 'L'],
            ['N', 'T', 'V', 'A', 'E', 'P', 'J', 'B', 'D', 'E', 'E', 'U'],
            ['I', 'S', 'I', 'R', 'S', 'E', 'S', 'A', 'A', 'E', 'R', 'D'],
            ['O', 'K', 'S', 'I', 'M', 'A', 'Y', 'O', 'R', 'O', 'R', 'A'],
            ['T', 'A', 'B', 'L', 'E', 'T', 'T', 'N', 'O', 'C', 'D', 'E']
        ];
        $scope.words = [
            'ANGULAR', 'JUEGO', 'ADULTO', 'MAYOR','TABLET', 'APRENDER'
        ];
    });

})(window.angular);