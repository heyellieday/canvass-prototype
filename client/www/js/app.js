// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngTouch', 'ionic.contrib.ui.cards'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.directive('noScroll', function($document) {

  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {

      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
})


.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
    })

    .state('app.search', {
      url: "/search",
      views: {
        'menuContent' :{
          templateUrl: "templates/search.html"
        }
      }
    })

    .state('app.browse', {
      url: "/browse",
      views: {
        'menuContent' :{
          templateUrl: "templates/browse.html"
        }
      }
    })
    .state('app.group', {
        url: "/groups/:groupId",
      views: {
        'menuContent' :{
          templateUrl: "templates/group.html",
          controller: 'GroupCtrl'
        }
      }
    })

    .state('app.roommate', {
        url: "/groups/:groupId/:memberUsername",
      views: {
        'menuContent' :{
          templateUrl: "templates/member.html",
          controller: 'MemberCtrl'
        }
      }
    })
    
     .state('app.signup', {
      url: "/signup",
      views: {
        'menuContent' :{
          templateUrl: "templates/signup.html",
          controller: 'SignupCtrl'
        }
      }
    })
  
  .state('app.userInfo', {
      url: "/userInfo",
      views: {
        'menuContent' :{
          templateUrl: "templates/userInfo.html",
          controller: 'UserInfoCtrl'
        }
      }
    })
  .state('app.startGroup', {
      url: "/startGroup",
      views: {
        'menuContent' :{
          templateUrl: "templates/startGroup.html",
          controller: 'StartGroupCtrl'
        }
      }
    })
  .state('app.joinGroup', {
      url: "/joinGroup",
      views: {
        'menuContent' :{
          templateUrl: "templates/joinGroup.html",
          controller: 'JoinGroupCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/browse');
});


