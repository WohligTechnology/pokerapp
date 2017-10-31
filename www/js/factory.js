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
        },
        getAll:function () {
            this.callApiWithData('Player/getAll', {}, function (data) {
              $scope.players = [];
              var playerData = data.playerCards;
              var playersArr = _.chunk(data.data.data.playerCards, 4);
              $scope.players = playersArr;
          
              console.log(".....");
              console.log(data.data.data.communityCards);
              $scope.communityCards = data.data.data.communityCards;
            });
          }
        // This is a demo Service for POST Method.


    };
});
myApp.filter('declareWinner', function() {
    return function(input, data) {
        console.log("inside declareWinner");
        if(data){
        for(var i=0; i<data.length; i++){
               if(data[i].player == input){
                    return true;
               }
        }
    }
        return false;
        console.log(input);
        console.log(data);
    };
});
