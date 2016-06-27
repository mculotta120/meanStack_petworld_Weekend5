var myApp=angular.module( 'myApp', [] );

angular.module('MyApp',[]);

// controller
myApp.controller( 'petController', [ '$scope', '$http', function( $scope, $http ){
    $scope.allPets = [];

  $scope.addPet = function(){ // adds record on button click

    var objectToSend ={  // package object to send, with inputs
      pet_name: $scope.petNameBinder,
      type: $scope.typeBinder,
      age: $scope.ageBinder,
      photo: $scope.photoBinder  // reference these in html
      // date: $scope.date
    };

    $http({  // sends object via POST
      method: 'POST',
      url: '/testPost',
      data: objectToSend
    });
    $scope.petNameBinder =''; // clears input boxes
    $scope.typeBinder ='';
    $scope.ageBinder ='';
    $scope.photoBinder = '';
  }; // end addRecord function

  $scope.getPets = function(){  // gets current recordset upon button click
      $http({   // gets recordset via GET
        method: 'GET',
        url: '/getPets',
      }).then( function( response ){  // success call - runs function with response parameter
        console.log(response);
          $scope.allPets = response.data;  // pulls the data from app.js and sets to allTheRecords
        }, function myError( response ){
        console.log( response.statusText );
      });

      // console.log($scope.allPets);
}; //end getPets
  $scope.deletePet = function(index){
    var petObject = {
      id: $scope.allPets[index]._id
    };
    $http({  // sends object via POST
      method: 'POST',
      url: '/deletePost',
      data: petObject
    });
  };
}]); // end myApp.controller
