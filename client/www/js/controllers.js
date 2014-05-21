angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})


.controller('MemberCtrl', function($scope, $stateParams, $http) {
    
    $http.get('groups.json').success(function(data) {
        members = data["members"];
        $scope.member = members[$stateParams.memberUsername];
    });
})

.controller('GroupCtrl', function($scope, $http, $stateParams) {
    $http.get('groups.json').success(function(data) {
       if ($stateParams.groupId == "") {
       
       }else{
            $scope.groups = data["groups"];
            $scope.group = $scope.groups[$stateParams.groupId]; 
            $scope.members = $scope.group["members"];
       }
    });
})

.controller('MenuCtrl', function($scope, $http, $stateParams) {
    $http.get('groups.json').success(function(data) {
        $scope.groups = data["groups"];
    });
})

.controller('SignupCtrl', function($scope, $http, $state) {
    
    $scope.formInfo = {};
    $scope.saveData = function() {
        $scope.emailRequired = '';
        $scope.passwordRequired = '';

        if (!$scope.formInfo.Email) {
            $scope.emailRequired = 'Email Required';
          }

          if (!$scope.formInfo.Password) {
            $scope.passwordRequired = 'Password Required';
         }
        console.log($scope.formInfo);
        $state.transitionTo('app.userInfo');
    };
})

.controller('UserInfoCtrl', function($scope, $http, $state) {
    
    $scope.formInfo = {};
    $scope.startGroup = function() {
        $scope.nameRequired = '';

        if (!$scope.formInfo.Name) {
            $scope.emailName = 'Name Required';
          }

        console.log($scope.formInfo);
        $state.transitionTo('app.startGroup');
    };
    $scope.joinGroup = function() {
        $scope.nameRequired = '';

        if (!$scope.formInfo.Name) {
            $scope.emailName = 'Name Required';
          }

        console.log($scope.formInfo);
        $state.transitionTo('app.joinGroup');
    };
})
.controller('StartGroupCtrl', function($scope, $http, $state) {
    
    $scope.formInfo = {};
    $scope.sendInvites = function() {
        $scope.nameRequired = '';

        if (!$scope.formInfo.Name) {
            $scope.nameRequired = 'Name Required';
          }

        console.log($scope.formInfo);
        $state.transitionTo('app.group');
    };
})
.controller('JoinGroupCtrl', function($scope, $http, $state) {
    
    $scope.formInfo = {};
    $scope.addToGroup = function() {
        $scope.pinRequired = '';

        if (!$scope.formInfo.Pin) {
            $scope.pinRequired = 'Pin Required';
          }

        console.log($scope.formInfo);
        $state.transitionTo('app.group');
    };
})

.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {


   fbEnsureInit(function() {

      var title;
      FB.api(
          "/v1.0/Google",
          function (response) {
            if (response && !response.error) {
             title = response['name'];
            console.log(response['name']);
            }
          }
      );
  });
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe();
  };
});