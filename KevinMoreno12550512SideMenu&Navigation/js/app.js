angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
    
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

    .state('eventmenu', {
        url: "/event",
        abstract: true,
        templateUrl: "templates/event-menu.html"
    })

    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })

    .state('eventmenu.checkin', {
      url: "/check-in",
      views: {
        'menuContent' :{
          templateUrl: "templates/check-in.html"
        }
      }
    })

    .state('eventmenu.attendees', {
      url: "/attendees",
      views: {
        'menuContent' :{
          templateUrl: "templates/attendees.html"
        }
      }
    })

    $urlRouterProvider.otherwise("/event/home");

})

.controller('mainController', function($scope, $ionicSideMenuDelegate){
  $scope.toggleLeft = function(){
    $ionicSideMenuDelegate.toggleLeft();
  };
})