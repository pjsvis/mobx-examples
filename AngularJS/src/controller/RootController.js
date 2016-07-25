import { autorun } from 'mobx';
import _ from 'lodash';

export default ($scope,AppState,Users) => {

    //Two way binding to the state...bad?
    //$scope.state = AppState

    autorun(() => {
        const scopeData = _.pick(AppState,'users','numberOfUsers');
        _.extend($scope,scopeData);
    });

    /*
     Look mama: no $watch
     */
    autorun(() => {
        console.log("Total number of users: " + AppState.numberOfUsers);
    });

    $scope.getUsers = Users;
};