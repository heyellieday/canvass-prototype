angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})


.controller('UserModel', function($scope, $rootScope, $stateParams, $http) { 
})



.controller('CardsCtrl', function($scope, $ionicSwipeCardDelegate) {

   fbEnsureInit(function() {
      var brands = ["Google", "lyft", "zulily", "airbnb", "elliegoulding", "starbucks", "Lysol", "cocacola"];
      var cardTypes = [];
      brands.forEach(createCards);

      function createCards(element, index, array) {
          FB.api(
          "/v1.0/" + element,
          function (response) {
              if (response && !response.error) {

               var title = response['name'];
               var cover = response.cover.source;
               var profilePic;
               var likes = response.likes +" likes";
               var about = response.about;
                console.log(response);
                console.log(title);

                FB.api(
                 "/"+title+ "/picture",
                  function (response) {
                    if (response && !response.error) {
                      profilePic = response.data.url;
                       console.log(profilePic);
                      cardTypes.push({ title: title, image: cover, likes: likes, profilePic: profilePic, about: about  });

                      FB.api(
                       "/"+title+ "/likes",
                        function (response) {
                          if (response && !response.error) {
                            likes = response;
                             console.log(likes);
                          }
                        }
                      );

                      $scope.cards = Array.prototype.slice.call(cardTypes, 0, 0);

                      $scope.cardSwiped = function(index) {
                        $scope.addCard();
                      };

                      $scope.cardDestroyed = function(index) {
                        $scope.cards.splice(index, 1);
                      };

                      $scope.addCard = function() {
                        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
                        newCard.id = Math.random();
                        $scope.cards.push(angular.extend({}, newCard));
                      }
                    
                    }
                  }
                );
              }
          }
        );
      }
    })
})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate, $rootScope ) {
  $scope.decide = function(decision, title) {
    $rootScope.interests = {};
    $rootScope.interests.likes = {};
     function canvass() {
      $rootScope.interests.likes[title] = {isCanvassing: "true", title: title};
      console.log("User is now canvassing for "+title );
     }
     function like() {
      $rootScope.interests.likes[title] = {isCanvassing: "false", title: title};
      console.log("User now likes "+title );
     }
     function dislike() {
      console.log("User dislikes "+title );
     }


    if (decision == "canvass") {
      canvass();
    } else if (decision == "yes") {
      like();
    } else if (decision == "no") {
        dislike();
    } else {
      console.log("No decision was made!");
    }
     var card = $ionicSwipeCardDelegate.getSwipebleCard($scope);
    card.swipe(true, decision);
  };
});