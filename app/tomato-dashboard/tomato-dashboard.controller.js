(function() {
    'use strict';

    angular
        .module('app')
        .controller('TomatoDashboardController', TomatoDashboardController);
    
    TomatoDashboardController.$inject = [
        '$scope', 'restService', '$q'
    ];

    function TomatoDashboardController($scope, restService, $q) {
        var vm = this;
        vm.loading = false;
        vm.tomatoes = [];
        vm.farms = [];
        vm.filter = '';
        vm.activeTabIndex = 0;
        vm.setActiveTabIndex = setActiveTabIndex;
        
        activate();

        function activate() {
            vm.loading = true;
            $q.all([
                getTomatoes(),
                getFarms()
            ]).then(activateComplete);

            function activateComplete(results) {
                var myData = [];
                vm.tomatoes = results[0];
                vm.farms = results[1];
                vm.loading = false;                
            }
        }

        function setActiveTabIndex(index) {
            vm.activeTabIndex = index;
        }

        function getTomatoes() {
            return restService.getTomatoes().then(function(tomatoes) {
                return tomatoes;                
            });

        }

        function getGridData() {
            return restService.getTomatoes().then(function(gridData) {
                return gridData;                
            });

        }

        function getFarms() {
            return restService.getFarms().then(function(farms) {
                return farms;
            });
        }
    }
})();
