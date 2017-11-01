// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      })
      .state('table', {
        url: '/table',
        templateUrl: 'templates/table.html',
        controller: 'TableCtrl'
      })

      .state('winner', {
        url: '/winner',
        templateUrl: 'templates/winner.html',
        controller: 'WinnerCtrl'
      })

      .state('dealer', {
        url: '/dealer',
        templateUrl: 'templates/dealer.html',
        controller: 'DealerCtrl'
      })

      .state('app.search', {
        url: '/search',
        views: {
          'menuContent': {
            templateUrl: 'templates/search.html'
          }
        }
      })

      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlists.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })

      .state('app.single', {
        url: '/playlists/:playlistId',
        views: {
          'menuContent': {
            templateUrl: 'templates/playlist.html',
            controller: 'PlaylistCtrl'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/dealer');
  })
  .directive('card', function () {
    return {
      restrict: 'E',
      replace: false,
      scope: {
        card: "@",
        width: "@",
        height: "@"
      },
      templateUrl: '/templates/directive/card.html',
      link: function ($scope, element, attr) {
        console.log("the length is: " + $scope.card);
        if ($scope.card.length == 2) {

          $scope.cardColor = $scope.card[1];
          $scope.cardNo = $scope.card[0];
          if ($scope.card[0] == "T") {
            $scope.cardNo = "10";
          } else if ($scope.card[0] == "1") {
            $scope.cardNo = "A";
          }
          $scope.cardImg = Poker.getCardData(1024, $scope.cardColor, $scope.cardNo);
          $scope.style = {
            width: $scope.width + "px",
            height: $scope.height + "px"
          };
        } else {
          $scope.cardImg = Poker.getBackData(1024, '#58AAAF', '#1F7A80');
          $scope.style = {
            width: $scope.width + "px",
            height: $scope.height + "px"
          };
        }
        $scope.$watch(function (scope) {
            return scope.card
          },
          function () {
            if ($scope.card.length == 2) {

              $scope.cardColor = $scope.card[1];
              $scope.cardNo = $scope.card[0];
              if ($scope.card[0] == "T") {
                $scope.cardNo = "10";
              } else if ($scope.card[0] == "1") {
                $scope.cardNo = "A";
              }
              $scope.cardImg = Poker.getCardData(1024, $scope.cardColor, $scope.cardNo);
              $scope.style = {
                width: $scope.width + "px",
                height: $scope.height + "px"
              };
            } else {
              $scope.cardImg = Poker.getBackData(1024, '#58AAAF', '#1F7A80');
              $scope.style = {
                width: $scope.width + "px",
                height: $scope.height + "px"
              };
            }
          }
        );


      }
    };
  });