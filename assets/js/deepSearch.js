angular.module('searchApp', [
    'controllers', 
    'elasticjs.service'
]).constant('euiHost', 'http://52.58.77.178:9200');



angular.module('controllers', [])
    .controller('SearchCtrl', function($scope, ejsResource) {

       $scope.myText = {
      "results":[{
        "name": "Iphone 6s",
        "description": "iPhone 6S Rose Gold 16GB - Brand New - Sealed - Factory Unlocked",
        "img": "http://ecx.images-amazon.com/images/I/81xirlYZb4L._SL1500_.jpg",
        "overallrating": 4
      },
      {
        "name": "Samsung",
        "description": "Samsung Galaxy S4 mini i9195 Sim Free Smartphone - White",
        "img": "http://ecx.images-amazon.com/images/I/81xirlYZb4L._SL1500_.jpg",
        "overallrating": 4
      },
      {
        "name": "Vodafone",
        "description": "Vodafone Smart First 6 Pay As You Go Handset Smartphone - White",
        "img": "http://ecx.images-amazon.com/images/I/81xirlYZb4L._SL1500_.jpg",
        "overallrating": 4
      },
      {
        "name": "Nokia",
        "description": "Nokia Lumia 625 Vodafone Pay As You Go Mobile Phone- 8GB- Black",
        "img": "http://ecx.images-amazon.com/images/I/81xirlYZb4L._SL1500_.jpg",
        "overallrating": 4
      }
      ]
    }

      var ejs = ejsResource('https://local.longtallsally.com:9002');

        var oQuery = ejs.QueryStringQuery().defaultField('results');

        var client = ejs.Request()
            .indices('_ui/prototype/elasticUI-search/assets/js/form.json')
            .types('');

        $scope.search = function() {
            $scope.results = client
                .query(oQuery.query($scope.queryTerm || '*'))
                .doSearch();
        };
});

/* _ui/prototype/elasticUI-search/assets/js/form.json
['$scope',
  function SearchCtrl($scope) {
    var ejs = ejsResource('http://52.58.77.178:9200/');

    $scope.indexName = "asdsd";  
    $scope.indexVM=$scope.IndexName; 

   
  }
]

*/
