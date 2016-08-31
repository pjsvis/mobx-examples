import { autorun } from 'mobx';
import _ from 'lodash';

export default function(AppState,Users) {

    const selector = () => {
        const scopeData = _.pick(AppState,'users','numberOfUsers');
        _.extend(this,scopeData);
    };

    autorun(selector);

    /*
     Look mama: no $watch
     */
    autorun(() => {
        console.log("Total number of users: " + AppState.numberOfUsers);
    });

    this.getUsers = Users;

    //Init
    selector();
};