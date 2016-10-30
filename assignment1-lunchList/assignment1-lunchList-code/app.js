(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunch_menu = "";
  $scope.checkResult = "";
  setFontAndBorder("default");

  $scope.checkLunchList = function () {
   if ($scope.lunch_menu == "")
   {
     $scope.checkResult = "Please enter data first";
     setFontAndBorder("red");
     return;
   }
   var lunchList = $scope.lunch_menu.split(",");
   var numberOfLunchItems = calculateRealLunchItems(lunchList);
   if (numberOfLunchItems == 0)
   {
    // needed if someone is messing with us and adding a list of empty items
     $scope.checkResult = "Please enter data first";

   }
   else if (numberOfLunchItems > 3)
   {
     $scope.checkResult = "Too much!";
     setFontAndBorder("green");
   }
   else
   {
     $scope.checkResult = "Enjoy!";
     setFontAndBorder("green");
     }
  };

  function calculateRealLunchItems(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      array[i] = array[i].trim();
      if (array[i] != "") {
        count++;
      }
    }
    return count;
  }

  function setFontAndBorder(string) {
    if (string == "red" || string == "green")
    {
      $scope.fontDisplay = {
        "color" : string,
      }
      $scope.textBoxDisplay = {
        "border" : string,
        "padding" : "10px",
        "width" : "15%",
        "border-style": "solid"
      }
    }
    else {
      $scope.fontDisplay = {
        "color" : "red",
      }
      $scope.textBoxDisplay = {
        "border-style": "hidden"
      }
  }

  }
}

})();
