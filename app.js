(function () {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyShoppingController', ToBuyShoppingController)
		.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
		.service('ShoppingListService', ShoppingListService);

		ToBuyShoppingController.$inject = ['ShoppingListService'];
		function ToBuyShoppingController(ShoppingListService) {
			var toBuy = this;

			toBuy.items = ShoppingListService.getToBuyList();

			toBuy.addToBought = function(itemIndex) {
				ShoppingListService.addToBought(itemIndex);
			};

		}

		AlreadyBoughtShoppingController.$inject = ['ShoppingListService'];
		function AlreadyBoughtShoppingController(ShoppingListService) {
			var bought = this;

			bought.items = ShoppingListService.getBoughtList();
		}

		// Shopping list service
		function ShoppingListService() {
			var service = this;

			// List of shopping items
			var shoppingListToBuy = [
				{name: "Bread", quantity: "2"},
				{name: "Milk", quantity: "2" },
				{name: "Coffee", quantity: "4" },
				{name: "Tea", quantity: "3" },
				{name: "Biscuits", quantity: "1" }];

			var shoppingListBought = [];

			
			service.getToBuyList = function() {
				return shoppingListToBuy;
			};

			service.getBoughtList = function() {
				return shoppingListBought;
			}

			service.addToBought = function (itemIndex) {
				shoppingListBought.push(shoppingListToBuy[itemIndex]);
			 	shoppingListToBuy.splice(itemIndex, 1);
			}
		}

})();