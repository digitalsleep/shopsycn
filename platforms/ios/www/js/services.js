angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('people', function($http, $q) {

  var people = {};

      people.list = [];
      people.add = function() {
        // return $http.get('http://api.randomuser.me')
        $http({
          url: "http://ajkher-test.apigee.net/sears/products/keyword/shoes/?limit=20",
          method: "GET",
           // headers: {'X-Appery-Database-Id': '54967192e4b04851aa819f2b'}
         })
        .then(function(response) {
          // console.log(response.data[0].band_name);
          people.list.push(response.data);
       });
  };
  people.ready = $q.all([
    people.add()

  ]);
return people;

  // return {
  //   all: function() {
  //     people.add();
  //     return people;
  //   }
  // }
})
.factory('Authenication', function($http, $q) {

  var people = {};

      people.list = [];
      people.add = function() {
        return $http.get('http://api.randomuser.me')
        .then(function(response) {
          console.log(response.data.results[0].user);
          people.list.push(response.data.results[0].user);
       });
  };
  people.ready = $q.all([
   people.add(),
  people.add(),
    people.add()

  ]);
return people;

  // return {
  //   all: function() {
  //     people.add();
  //     return people;
  //   }
  // }
});


