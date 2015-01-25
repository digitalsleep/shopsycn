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
})

/**
 * A service to find a product using a keyword
 */
.factory('search', function($http, $q) {

  var search = {};

      search.list = [];
      search.searchProductByKeyword = function(keyword, callback) {
        console.log("Here is the submitted keyword "+keyword);
        var templ = keyword
        // var urlMain = "http://ajkher-test.apigee.net/sears/products/keyword/" + templ+ "?limit=10";
        //  var urlMain = "http://ajkher-test.apigee.net/sears/products/keyword/washer?limit=10";
        // var urlMain ="http://ajkher-test.apigee.net/sears/products/keyword/"+keyword+"/?limit=20";
        var urlMain ="http://ajkher-test.apigee.net/sears/products/keyword/tv/?limit=20";
        $http({
          url: urlMain,
          method: "GET",
           // headers: {'X-Appery-Database-Id': '54967192e4b04851aa819f2b'}
         })
        .then(function(response) {
          // console.log(response.data[0].band_name);
          search.list.push(response.data);
          callback(response.data);

       });
  };
  search.ready = $q.all([


  ]);
return search;
})
/**
 * A service to find a product using a keyword
 */
.factory('votedproducts', function($http, $q) {

  var votedproducts = {};

      votedproducts.list = [];
      votedproducts.getVotedProducts = function() {
        
        var urlMain ="https://api.usergrid.com/pankajmisr/shopsync/products";
        $http({
          url: urlMain,
          method: "GET",
           // headers: {'X-Appery-Database-Id': '54967192e4b04851aa819f2b'}
         })
        .then(function(response) {
          // console.log(response.data[0].band_name);
          votedproducts.list.push(response.data.entities);


       });
  };
  votedproducts.ready = $q.all([


  ]);
return votedproducts;
})
.factory('productdetail', function($http, $q) {

  var search = {};

      search.list = [];
      search.ProductByProductId = function(productid) {

        var templ = productid
        // var urlMain = "http://ajkher-test.apigee.net/sears/products/keyword/" + templ+ "?limit=10";
        //  var urlMain = "http://ajkher-test.apigee.net/sears/products/keyword/washer?limit=10";
        // var urlMain ="http://ajkher-test.apigee.net/sears/products/keyword/"+keyword+"/?limit=20";

        var urlMain="http://ajkher-test.apigee.net/sears/products/partnumber/"+productid
        $http({
          url: urlMain,
          method: "GET",
           // headers: {'X-Appery-Database-Id': '54967192e4b04851aa819f2b'}
         })
        .then(function(response) {
          // console.log(response.data[0].band_name);
          selectedproduct =response.data;


       });
  };
  search.ready = $q.all([


  ]);
return search;
});


