(function(){
    'use strict';

    angular.module("ShoppingListApp",[])
    .controller("ShoppingListAddController", ShoppingListAddController)
    .controller("ShoppingListShowController", ShoppingListShowController)
    .service("ShoppingListService",ShoppingListService);

    function ShoppingListService(){
        var service = this;     //to make more readable else we can use this at everywhere
        var items = [];         //we are not exposing items through the service, it will remain inner part of shopping list service

        //to add newly entered item into the items array
        service.addItem = function(itemName, itemQuantity)
        {
            var item = {
                name : itemName,
                quantity : itemQuantity
            };
            
            items.push(item);
        };

        //to get the whole array containing items list
        service.getItems = function(){
            return items;
        }

        service.removeItem = function(index)
        {
            items.splice(index, 1);
        }
    };

    ShoppingListAddController.$inject = ['ShoppingListService'];
    function ShoppingListAddController(ShoppingListService){
        var itemAdder = this;
        
        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        itemAdder.addItem = function(){
            ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
        };
    };

    ShoppingListShowController.$inject = ['ShoppingListService'];
    function ShoppingListShowController(ShoppingListService){
        var showList = this;
        showList.items = ShoppingListService.getItems();

        showList.removeItem = function(index){
            ShoppingListService.removeItem(index);
        }
    };

})();