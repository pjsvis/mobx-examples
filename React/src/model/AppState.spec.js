import {assert} from 'chai';
import AppState from "./AppState";

describe('AppState', function () {
    it('should sync users and numberOfUsers', function () {
        const state = new AppState();
        state.users = [1,2,3];
        assert.equal(state.users.length,state.numberOfUsers);
    });
});