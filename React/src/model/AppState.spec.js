import {assert} from 'chai';
import state from "./AppState";

describe('AppState', function () {
    it('should sync users and numberOfUsers', function () {
        state.users = [1,2,3];
        assert.equal(state.users.length,state.numberOfUsers);
    });
});