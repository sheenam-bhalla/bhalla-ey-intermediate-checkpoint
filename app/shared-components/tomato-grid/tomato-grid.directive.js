(function() {
    'use strict';
 
    angular
        .module('app')
        .directive('tomatoGrid', tomatoGrid);
 
    function tomatoGrid() {
        var directive = {
            scope: {
                data: "<",
                listView: "<"
            },
            restrict: 'E',
            controller: TomatoGridController,
            bindToController: true,
            controllerAs: 'vm',
            templateUrl: './app/shared-components/tomato-grid/tomato-grid.directive.html'
        };
 
        return directive;
    }
 
    TomatoGridController.$inject = ['tomatoGridService'];
 
    function TomatoGridController(tomatoGridService) {
        var vm = this;
        vm.loading = true;
        vm.tableHeader = [
            { title: 'Color', val: 'color'},
            { title: 'Cost', val: 'cost' },
            { title: 'Ounces', val: 'ounces' },
            { title: 'Picked?', val: 'picked' },
            { title: 'Season', val: 'season'}
        ];
        vm.gridData = tomatoGridService.filterDataByFarm(vm.data, vm.listView);
        vm.loading = false;
    }
 })();