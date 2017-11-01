myApp = angular.module('starter');

myApp.factory('apiService', function ($http, $q, $timeout) {
    var adminurl = 'http://localhost:8081/api/';
    return {
        // This is a demo Service for POST Method.
        callApiWithData: function (url, data, callback) {
            $http.post(adminurl + url, data).then(function (data) {
                callback(data);
            });
        },
        revealCards: function (callback) {
            $http.post(adminurl + 'Player/revealCards').then(function (data) {
                callback(data);
            });
        },
        getAll: function (callback) {
            $http.post(adminurl + 'Player/getAll').then(function (data) {
                callback(data);
            });
        },
        newGame: function (callback) {
            $http.post(adminurl + 'Player/newGame').then(function (data) {
                callback(data);
            });
        },
        move: function (callback) {
            $http.post(adminurl + 'Player/moveturn').then(function (data) {
                callback(data);
            });
        },
        fold: function (callback) {
            $http.post(adminurl + 'Player/fold').then(function (data) {
                callback(data);
            });
        },
        addTab: function (data, callback) {
            $http.post(adminurl + 'Player/addTab', data).then(function (data) {
                callback(data);
            });
        },
        makeDealer: function (data, callback) {
            $http.post(adminurl + 'Player/makeDealer', data).then(function (data) {
                callback(data);
            });
        },
        removeTab: function (data, callback) {
            $http.post(adminurl + 'Player/removeTab', data).then(function (data) {
                callback(data);
            });
        },
        showWinner: function (callback) {
            $http.post(adminurl + 'Player/showWinner').then(function (data) {
                callback(data);
            });
        }
        // This is a demo Service for POST Method.
    };
});
myApp.filter('declareWinner', function () {
    return function (input, data) {
        if (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].player == input) {
                    return true;
                }
            }
        }
        return false;
    };
});