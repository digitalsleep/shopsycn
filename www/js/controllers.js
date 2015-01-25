angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('Products', function($scope, people, $ionicLoading)
{
  $scope.people = people;
console.log($scope.people);

           $scope.addPerson = function() {
          // people.add().then(function() {
          //    $scope.$broadcast('scroll.refreshComplete');
          //    });
           };

  $ionicLoading.show({
    template: '<i class="ion-loading-c"></i><br />Loading...'
  });
  people.ready.then(function(){
    $ionicLoading.hide();
  });

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('searchCtrl', function($rootScope, $scope, $state, $location, search, votedproducts) {
    $scope.searchProduct = function() {
        // console.log(keyword);


        $state.go('app.searchresults');
    };

    votedproducts.getVotedProducts();

    $scope.votedproducts = votedproducts;

})

.controller('ProductCtrl', function( $stateParams, $scope, $state, $location, $http) {
        console.log($stateParams.id);
      var urlMain="http://ajkher-test.apigee.net/sears/products/partnumber/"+$stateParams.id
        $http({
          url: urlMain,
          method: "GET",
           // headers: {'X-Appery-Database-Id': '54967192e4b04851aa819f2b'}
         })
        .then(function(response) {
          // console.log(response.data[0].band_name);

          $scope.selectedproduct =response.data;
          var summary = $scope.selectedproduct.ProductDetail.SoftHardProductDetails.Description.shortdescription;
          var StrippedString = summary.replace(/(<([^>]+)>)/ig,"");
          $scope.summary= StrippedString;
          console.log($scope.summary);


       });

})
.controller('searchresultsCtrl', function($scope, $stateParams, $state, $location, search) {
  $scope.searchList = [];
  var tempkeyword = $stateParams.keyword;
  console.log("shawn here is the answer"+$stateParams.keyword)
  search.searchProductByKeyword(tempkeyword, function(results) {
    $scope.searchList = results;
  });

});
