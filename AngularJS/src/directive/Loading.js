import { autorun } from 'mobx';

export default (AppState) => {
    return {
        restrict: 'E',
        template: '<span data-ng-if="loading">Loading...</span>',
        link:($scope,element,attrs) => {
            $scope.loading = false;

            autorun(() => {
                $scope.loading = AppState.loading;
            });
        }
    };
};