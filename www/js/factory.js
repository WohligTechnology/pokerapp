
myApp = angular.module('starter');

myApp.factory('apiService', function ($http, $q, $timeout) {
    var adminurl = 'http://localhost:8081/api/'
    return {

        // This is a demo Service for POST Method.
        callApiWithData: function (url, data, callback) {
            console.log("inside apiService");
            $http.post(adminurl + url, data).then(function (data) {
                callback(data);
            });
        }
        // This is a demo Service for POST Method.


    };
});