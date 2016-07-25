import angular from 'angular';
import RootController from './controller/RootController';
import AppStateInstance from "./service/AppStateInstance";
import Users from "./service/Users";
import Loading from "./directive/Loading";

angular.module("mobx-example", [])
    .controller('RootController',RootController)
    .service('AppState',AppStateInstance)
    .factory('Users',Users)
    .directive('loading',Loading);