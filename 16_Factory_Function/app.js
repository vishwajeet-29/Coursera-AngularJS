(function(){
    'use strict';

    angular.module("ShoppingApp", [])
    .controller("ShoppingList1Controller", ShoppingList1Controller)
    .controller("ShoppingList2Controller", ShoppingList2Controller)
    .factory("ShoppingListFactory", ShoppingListFactory);

    function ShoppingListFactory(){
        var factory = function(maxItems){
            return new ShoppingListService(maxItems);
        };
        return factory;
    };

    function ShoppingListService(maxItems){
        var service = this;

        var items = [];

        service.addToCart = function(itemName, itemQuantity){
            if((maxItems === undefined) || (maxItems != undefined) && (items.length < maxItems) ){
                var item = {
                    name : itemName,
                    quantity : itemQuantity
                };
                items.push(item);
            }
            else{
                throw new Error("Max Items Limit (" + maxItems + ") is reached!");
            }
        };

        service.getItemsList = function(){
            return items;
        };

        service.removeItem = function(index){
            items.splice(index, 1);
        }
    };

    ShoppingList1Controller.$inject = ['ShoppingListFactory'];
    function ShoppingList1Controller(ShoppingListFactory){
        var list1 = this;

        list1.itemName = "";
        list1.itemQuantity = "";
    
        var factory = ShoppingListFactory();

        list1.addToCart = function(){
            factory.addToCart(list1.itemName, list1.itemQuantity);
        };

        list1.items = factory.getItemsList();

        list1.removeItem = function(index){
            factory.removeItem(index);
        }
    };

    ShoppingList2Controller.$inject = ['ShoppingListFactory'];
    function ShoppingList2Controller(ShoppingListFactory){
        var list2 = this;

        list2.itemName = "";
        list2.itemQuantity = "";

        var factory = ShoppingListFactory(3);

        list2.addToCart = function(){
            try{
                factory.addToCart(list2.itemName, list2.itemQuantity);
            }
            catch(error){
                alert(error.message);
            }
        };

        list2.items = factory.getItemsList();

        list2.removeItem = function(index){
            factory.removeItem(index);
        }
    
    };
})();