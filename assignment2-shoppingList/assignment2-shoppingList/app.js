(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  var shoppingListInitial = [
  {
    name: "Cookies",
    quantity: "10"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Chocolate Bars",
    quantity: "3"
  },
  {
    name: "Milk Cartons",
    quantity: "2"
  },
  {
    name: "Carrots",
    quantity: "4"
  },
  {
    name: "Tomatoes",
    quantity: "4"
  },
  {
    name: "Apples",
    quantity: "5"
  }
  ];
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;
  
  toBuyCtrl.shoppingList = shoppingListInitial;
  
  toBuyCtrl.moveItem = function (itemIndex) {
      ShoppingListCheckOffService.moveItem(itemIndex);
  }
	
}
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtCtrl = this;
  
  boughtCtrl.boughtList = ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var boughtItems = [];
  var shoppingList = shoppingListInitial;
  
  service.moveItem = function(itemIndex) {
    boughtItems.push(shoppingList[itemIndex]);
	shoppingList.splice(itemIndex, 1);
  };
  
  service.getInitialShoppingList = function() {
    return shoppingList;
  };
  
  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
